import { RequestHandler, Request, Response, NextFunction } from 'express';

import { isNil } from 'lodash';
import { parse as parseBasicAuth } from 'basic-auth';
import AuthService from '@/services/auth.service';

const authService = new AuthService();

export const authMiddleware: RequestHandler = async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;
  if (isNil(authHeader)) {
    return response.status(400).json({ error: 'Missing authorization header!' });
  }

  const header = parseBasicAuth(authHeader);

  const { cookie, findUser: user } = await authService.login({ email: header.name, password: header.pass });

  if (isNil(user)) {
    return response.status(401).json({ error: 'User not found!' });
  }
  //add authentication via token for regular requests
  //(when the user is already loged on and the auth token is stored)
  response.locals.user = user;
  next();
};
