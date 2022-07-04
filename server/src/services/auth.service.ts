import { hash, compare } from 'bcrypt';
import { isNil } from 'lodash';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';

import { CreateUserDTO } from '@/dtos/createUser.dto';
import { LoginUserDTO } from '@/dtos/loginUser.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User as UserDTO } from '@interfaces/users.interface';
import { user as DatabaseUserModel } from '../database/models/User';

class AuthService {
  public async signup(userData: CreateUserDTO): Promise<DatabaseUserModel> {
    const hashedPassword = await hash(userData.password, 10);
    try {
      const createUserData = await DatabaseUserModel.create({
        username: userData.userName,
        email: userData.email,
        password: hashedPassword,
        first_name: userData.firstName,
        last_name: userData.lastName,
        picture_uri: '', //TODO save pictures and store the uri in the database
        created_at: new Date(),
      });

      return createUserData;
    } catch {
      throw new HttpException(500, 'Saving new user was not successful!');
    }
  }

  public async login(userData: LoginUserDTO): Promise<{ cookie: string; user: DatabaseUserModel }> {
    if (isNil(userData)) throw new HttpException(400, 'Invalid signin data provided!');

    const user: DatabaseUserModel = await DatabaseUserModel.findOne({ where: { email: userData.email } });
    if (!user) throw new HttpException(409, `Email ${userData.email} not found!`);

    const isPasswordMatching: boolean = await compare(userData.password, user.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Invalid credentials!');

    const tokenData = this.createToken(user);
    const cookie = this.createCookie(tokenData);

    return { cookie, user };
  }

  public async logout(userData: UserDTO): Promise<boolean> {
    if (isNil(userData)) throw new HttpException(400, "You're not userData");

    const findUser: DatabaseUserModel = await DatabaseUserModel.findOne({ where: { email: userData.email } });
    if (!findUser) throw new HttpException(409, "You're not user");

    return true;
  }

  public createToken(user: UserDTO): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AuthService;
