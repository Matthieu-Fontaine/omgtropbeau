import { Request, Response, NextFunction } from 'express';

// TODO : Clarify and implement error handling

const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  // Renvoyer une réponse d'erreur générique
  res.status(500).json({ error: 'Internal Server Error' });
};

const handleUnknownRoutes = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  res.status(404).json({ error: 'Not Found', message: error.message });
};

const invalidRequestMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Invalid request error:', error);

  // Renvoyer une réponse d'erreur spécifique
  res.status(400).json({ error: 'Invalid Request' });
};

const databaseErrorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Database connection error:', error);

  // Renvoyer une réponse d'erreur spécifique
  res.status(500).json({ error: 'Database Connection Error' });
};

const noResultErrorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.error('No result error:', error);

  // Renvoyer une réponse d'erreur spécifique
  res.status(404).json({ error: 'No Result Found' });
};

export {
  errorMiddleware,
  handleUnknownRoutes,
  invalidRequestMiddleware,
  databaseErrorMiddleware,
  noResultErrorMiddleware,
};
