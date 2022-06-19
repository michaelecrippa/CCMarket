import { user as UserModel } from '../database/models/User';

import { HttpException } from '@/exceptions/HttpException';

export class UserService {
  public getUser(email: string): Promise<UserModel> {
    try {
      return UserModel.findOne({ where: { email } });
    } catch (exception) {
      throw new HttpException(500, `Retrieving entity with name:${email} failed!`);
    }
  }
}

export default UserService;
