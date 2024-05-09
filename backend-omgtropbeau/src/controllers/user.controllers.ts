import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { getUserById, getUserByEmail, getUsers, postUser, patchUser, deleteUser } from '../services/user.services';

import { DatabaseError, ConflictError } from '../middlewares/error.middleware';
import { SuccessRequested, SuccessCreated } from '../middlewares/success.middleware';

async function getUserByIdController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = await getUserById(id)
    .catch((err: any) => {
      return DatabaseError(req, res, err);
    });
  return SuccessRequested(req, res, user)
}

async function getUsersController(req: Request, res: Response) {
  if (req.query.email) {
    const user = await getUserByEmail(req.query.email as string)
      .catch((err: any) => {
        return DatabaseError(req, res, err);
      });
    return SuccessRequested(req, res, user);
  } else {
    const users = await getUsers()
      .catch((err: any) => {
        return DatabaseError(req, res, err);
      });
    return SuccessRequested(req, res, users);
  }
}

async function postUserController(req: Request, res: Response) {
  const user = req.body;

  // Vérifier si l'e-mail existe déjà
  const existingUser = await getUserByEmail(user.email);
  if (existingUser) {
    return ConflictError(req, res, new Error('Email already exists'));
  }

  console.log(user.password);
  user.password = await bcrypt.hash(user.password, 10);

  const newUser = await postUser(user)
    .catch((err: any) => {
      return DatabaseError(req, res, err);
    });
  return SuccessCreated(req, res, newUser);
}

async function patchUserController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = req.body;

  // Encrypter le mot de passe
  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  const updateUser = await patchUser(id, user)
    .catch((err: any) => {
      return DatabaseError(req, res, err);
    });
  return SuccessRequested(req, res, updateUser);
}

async function deleteUserController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const deletedUser = await deleteUser(id)
    .catch((err: any) => {
      return DatabaseError(req, res, err);
    });
  return SuccessRequested(req, res, deletedUser);
}

export {
  getUserByIdController,
  getUsersController,
  postUserController,
  patchUserController,
  deleteUserController
};

