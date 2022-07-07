import { UserDTO } from '../models/DTOs/userDTO.model';
import { httpService } from './httpService';
import { UserAuth } from '../interfaces/user/UserAuth.interface';

type UserChangeHandler = (user: UserAuth | undefined) => void;

export class AuthService {
  private handler: UserChangeHandler | undefined = undefined;

  set changeHandler(handler: UserChangeHandler | undefined) {
    this.handler = handler;
  }

  private setCurrentUser(user: UserAuth | undefined) {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }

    this.handler?.(user);
  }

  get storedUser(): UserAuth | undefined {
    const userJson = localStorage.getItem('currentUser');
    const currentUser: UserAuth = userJson && JSON.parse(userJson);

    return currentUser ?? undefined;
  }

  async login({ email, password }: UserDTO) {
    const userAuth = await httpService.post<UserAuth>('login', {
      email,
      password,
    });

    this.setCurrentUser(userAuth);
  }

  async logout({ email }: Partial<UserDTO>) {
    await httpService.post('logout', {
      email,
    });
    this.setCurrentUser(undefined);
  }
}

export const authService = new AuthService();
