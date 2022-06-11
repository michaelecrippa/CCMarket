import { NextFunction, Request, Response } from 'express';

import { CreateUserDTO } from '@/dtos/create-user.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import { HttpException } from '@exceptions/HttpException';
import { ValidationError } from '@exceptions/ValidationException';
import { RegistrationValidator } from '@/validators/userRegistrationValidator';

class AuthController {
  public authService = new AuthService();

  public signUp = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDTO = request.body;

      try {
        new RegistrationValidator(userData).validate();
      } catch (exception) {
        const e: ValidationError = exception;
        throw new HttpException(409, e.message);
      }

      const signUpUserData: User = await this.authService.signup(userData);

      response.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDTO = request.body;
      const { cookie, findUser } = await this.authService.login(userData);

      //set token to authenticate later with
      //response.setHeader('Set-Cookie', [cookie]);
      response.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);

      //remove auth token as well
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
