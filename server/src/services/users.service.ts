import { user as UserModel } from '../database/models/User';
import { HttpException } from '@/exceptions/HttpException';
import { asset } from '@/database/models/Asset';

export class UserService {
  public getUserByEmail(email: string): Promise<UserModel> {
    try {
      return UserModel.findOne({ where: { email } });
    } catch (exception) {
      throw new HttpException(500, `Retrieving user with name:${email} failed!`);
    }
  }

  public getUserById(userId: number): Promise<UserModel> {
    try {
      return UserModel.findOne({ where: { id: userId }, include: asset });
    } catch (exception) {
      throw new HttpException(500, `Retrieving user with id:${userId} failed!`);
    }
  }
}
