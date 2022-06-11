import { httpService } from './httpService';

class UserService {
  async createUser(input: {email: string, password: string}): Promise<boolean> {
    return httpService.post<boolean>('signup', input);
  }
}

export const userService = new UserService();