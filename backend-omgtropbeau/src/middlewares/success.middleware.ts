import { Request, Response } from 'express';
// TODO : Rename
const SuccessRequested = (req: Request, res: Response, data: any) => {
  res.status(200).json(data);
};

const SuccessCreated = (req: Request, res: Response, data: any) => {
  res.status(201).json(data);
};

export {
  SuccessRequested,
  SuccessCreated
};