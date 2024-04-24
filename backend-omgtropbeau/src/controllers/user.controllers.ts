import { Request, Response } from 'express';
import User from '../models/user.model';

async function getUserController(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const user = await User.findOne({
    where: {
      id: id
    }
  })
    .catch((err: any) => {
      throw err;
    });
  return res.status(200).json(user);
}

export { getUserController };

