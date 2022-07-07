import { RequestHandler, Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@/config';

export const authMiddleware: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
  const token = request.cookies?.Authorization;
  if (!token) {
    return response.sendStatus(403);
  }

  try {
    verify(token, SECRET_KEY);
    next();
  } catch {
    return response.sendStatus(403);
  }
};
