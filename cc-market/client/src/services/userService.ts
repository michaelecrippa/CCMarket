import { httpService } from './httpService';

class UserService {
    async createUser(input: {email: string, password: string}) {
      await httpService.post('signup', input);
    }
}

export const userService = new UserService();