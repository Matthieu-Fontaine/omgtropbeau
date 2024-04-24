import express, { Request, Response } from 'express';
import {
  getUserController
} from '../controllers/user.controllers';

const customerRouter = express.Router();

customerRouter.get('/:id', async (req: Request, res: Response) => {
  return await getUserController(req, res);
});

// customerRouter.get('/:id', async (req: Request, res: Response) => {
//   return await getCustomerController(req, res);
// });

// customerRouter.post('/', async (req: Request, res: Response) => {
//   return await postUserController(req, res);
// });

// customerRouter.patch('/:id', async (req: Request, res: Response) => {
//   return await patchUserController(req, res);
// });

// customerRouter.delete('/:id', async (req: Request, res: Response) => {
//   return await deleteUserController(req, res);
// });

export default customerRouter;