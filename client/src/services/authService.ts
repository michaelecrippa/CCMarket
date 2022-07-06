import { UserDTO } from '../models/DTOs/userDTO.model';
import { httpService } from './httpService';

export interface UserAuth {
  id: number,
  name: string,
  email: string,
  sex?: string,
  nationality?: string,
  token: string
}

type UserChangeHandler = (user: UserAuth | null) => void;

export class AuthService {
  private handler: UserChangeHandler | null = null;
  
  set changeHandler(handler: UserChangeHandler | null) {
    this.handler = handler;
  }

  private setCurrentUser(user: UserAuth | null) {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }

    this.handler?.(user);
  }

  get storedUser(): UserAuth | null {
    const userJson = localStorage.getItem('currentUser');
    const currentUser: UserAuth =  userJson && JSON.parse(userJson);  

    return currentUser ?? null;
  }

  
  async login({ email, password } : UserDTO) {
    const userAuth = await httpService.post<UserAuth>('login', {
      email,
      password
    });

    this.setCurrentUser(userAuth);
  }

  logout() {
    this.setCurrentUser(null);
  }
}

export const authService = new AuthService();