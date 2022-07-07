import { NextFunction, Request, Response } from 'express';

import { CreateUserDTO } from '@/dtos/createUser.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { user as DatabaseUserModel } from '@/database/models/User';
import AuthService from '@services/auth.service';
import { HttpException } from '@exceptions/HttpException';
import { ValidationError } from '@exceptions/ValidationException';
import { RegistrationValidator } from '@/validators/userRegistrationValidator';
import { UserTransformer } from '@/transformers/UserTransformer';
import { LoginUserDTO } from '@/dtos/loginUser.dto';

class AuthController {
  private authService = new AuthService();
  private userTransfomer = new UserTransformer();

  public signUp = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDTO = request.body;

      try {
        new RegistrationValidator(userData).validate();
      } catch (exception) {
        const e: ValidationError = exception;
        throw new HttpException(409, e.message);
      }

      const signUpUserData: DatabaseUserModel = await this.authService.signup(userData);

      response.status(201).json({
        data: this.userTransfomer.transform(signUpUserData),
        message: 'signup',
      });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: LoginUserDTO = request.body;
      const { cookie, user } = await this.authService.login(userData);

      response
        .setHeader('Set-Cookie', [cookie]);
      response
        .status(200)
        .json({
          data: this.userTransfomer.transform(user),
          message: 'login',
        })
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (request: RequestWithUser, response: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: LoginUserDTO = request.body;
      const { cookie } = await this.authService.logout(userData);

      response
        .setHeader('Set-Cookie', [cookie]);
      response
        .status(200)
        .json({ message: 'Logged out user!' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
