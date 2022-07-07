import { UserService } from '@services/users.service';
import { Request, Response, NextFunction } from 'express';
import { user as DatabaseUserModel } from '@/database/models/User';
import { UserTransformer } from '@/transformers/UserTransformer';

class UsersController {
  public userService = new UserService();

  private userTransofmer = new UserTransformer();

  // public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const findAllUsersData: User[] = await this.userService.findAllUser();

  //     res.status(200).json({ data: findAllUsersData, message: 'findAll' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // TODO: we could use query parameter for asset inclusion
  public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData: DatabaseUserModel = await this.userService.getUserById(userId);

      res.status(200).json({ data: this.userTransofmer.transform(userData), message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };


  // public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = Number(req.params.id);
  //     const userData: CreateUserDto = req.body;
  //     const updateUserData: User[] = await this.userService.updateUser(userId, userData);

  //     res.status(200).json({ data: updateUserData, message: 'updated' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userId = Number(req.params.id);
  //     const deleteUserData: User[] = await this.userService.deleteUser(userId);

  //     res.status(200).json({ data: deleteUserData, message: 'deleted' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default UsersController;
