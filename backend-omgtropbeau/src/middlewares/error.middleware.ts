import { Request, Response } from 'express';

// TODO : Clarify ???

const UnknownRoutes = (req: Request, res: Response) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  res.status(404).json({ error: 'Not Found', message: error.message });
};

const NoResultError = (req: Request, res: Response, error: any) => {
  res.status(404).json({ error: 'No Result Found' });
};

const InvalidRequest = (req: Request, res: Response, err: any) => {
  res.status(400).json({ error: 'Invalid Request', message: err.message });
};

const DatabaseError = (req: Request, res: Response, err: any) => {
  res.status(500).json({ error: err.message });
};

const UnauthorizedError = (req: Request, res: Response, err: any) => {
  res.status(401).json({ error: 'Unauthorized', message: err.message });
}


export {
  UnknownRoutes,
  InvalidRequest,
  DatabaseError,
  NoResultError,
  UnauthorizedError
};
