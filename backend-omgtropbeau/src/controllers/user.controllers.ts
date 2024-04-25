import { Request, Response } from 'express';
import { getUserById, getUserByEmail, getUsers, postUser, patchUser, deleteUser } from '../services/user.services';

// TODO : Updgrade error message

async function getUserByIdController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = await getUserById(id)
    .catch((err: any) => {
      return res.status(500).json(err);
    });
  return res.status(200).json(user);
}

async function getUsersController(req: Request, res: Response) {
  if (req.query.email) {
    const user = await getUserByEmail(req.query.email as string)
      .catch((err: any) => {
        return res.status(500).json(err);
      });
    return res.status(200).json(user);
  } else {
    const users = await getUsers()
      .catch((err: any) => {
        return res.status(500).json(err);
      });
    return res.status(200).json(users);
  }
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
  getUserByIdController,
  getUsersController,
  postUserController,
  patchUserController,
  deleteUserController
};

