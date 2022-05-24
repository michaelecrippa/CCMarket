import { hash, compare } from 'bcrypt';
import { isNil } from 'lodash';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { user as UserModel } from '../database/models/User';

class AuthService {
  public users = userModel;

  //Validate input via Validator, extend CreateUserDTO
  public async signup(userData: CreateUserDto): Promise<User> {
    if (isNil(userData)) throw new HttpException(400, 'Invalid signup data provided!');

    const findUser = await UserModel.findOne({ where: { email: userData.email } });
    if (findUser) throw new HttpException(409, `Email ${userData.email} is already in use!`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData = await UserModel.create({ username: 'Template', email: userData.email, password: hashedPassword });
    return createUserData;
  }

  public async login(userData: CreateUserDto): Promise<{ cookie: string; findUser: User }> {
    if (isNil(userData)) throw new HttpException(400, 'Invalid signin data provided!');

    const findUser: User = await UserModel.findOne({ where: { email: userData.email } });
    if (!findUser) throw new HttpException(409, `Email ${userData.email} not found!`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Invalid credentials!');

    //const tokenData = this.createToken(findUser);
    //const cookie = this.createCookie(tokenData);

    return { cookie: undefined, findUser };
  }

  public async logout(userData: User): Promise<User> {
    if (isNil(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = this.users.find(user => user.email === userData.email && user.password === userData.password);
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public createToken(user: User): TokenData {
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
