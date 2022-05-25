import { httpService } from './httpService';

class UserService {
  async createUser(input: {email: string, password: string}): Promise<boolean> {
    await httpService.post<boolean>('signup', input);

    return true;
  }
}

export const userService = new UserService();