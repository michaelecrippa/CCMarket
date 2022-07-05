import { httpService } from './httpService';
import { UserProfileDto } from '../models/DTOs/user-profile-dto.model';

class UserService {
  createUser(input: { email: string, password: string }): Promise<boolean> {
    return httpService.post<boolean>('signup', input);
  }

  getUserById(userId: number): Promise<UserProfileDto> {
    return httpService.get<UserProfileDto>(`users/${userId}`);
  }
}

export const userService = new UserService();