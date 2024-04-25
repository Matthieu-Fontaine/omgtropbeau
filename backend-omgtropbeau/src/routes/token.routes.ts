import express, { Request, Response } from 'express';
import { loginController } from '../controllers/token.controllers';

const authRouter = express.Router();

authRouter.post('/login', async (req: Request, res: Response) => {
  return await loginController(req, res);
});

export default authRouter;