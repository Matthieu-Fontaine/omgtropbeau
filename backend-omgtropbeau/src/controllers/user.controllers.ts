import { Request, Response } from 'express';
import { getUser, getUsers, postUser, patchUser, deleteUser } from '../services/user.services';

async function getUserController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = await getUser(id)
    .catch((err: any) => {
      return res.status(500).json(err);
    });
  return res.status(200).json(user);
}

async function getUsersController(req: Request, res: Response) {
  const users = await getUsers()
    .catch((err: any) => {
      return res.status(500).json(err);
    });
  return res.status(200).json(users);
}

async function postUserController(req: Request, res: Response) {
  const user = req.body;
  const newUser = await postUser(user)
    .catch((err: any) => {
      return res.status(500).json(err);
    });
  return res.status(201).json(newUser);
}

async function patchUserController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = req.body;
  const updateUser = await patchUser(id, user)
    .catch((err: any) => {
      return res.status(500).json(err);
    });
  return res.status(200).json(updateUser);
}

async function deleteUserController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const deletedUser = await deleteUser(id)
    .catch((err: any) => {
      return res.status(500).json(err);
    });
  return res.status(200).json(deletedUser);
}

export {
  getUserController,
  getUsersController,
  postUserController,
  patchUserController,
  deleteUserController
};

