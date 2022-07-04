import { User as UserDTO } from '@/interfaces/users.interface';
import { user as DataBaseUserModel } from '@/database/models/User';

export class UserTransformer {
  transform(user: DataBaseUserModel): UserDTO {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      profilePicture: user.picture_uri,
    };
  }

  transformWithToken(user: DataBaseUserModel): UserDTO {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      profilePicture: user.picture_uri,
      authToken: user.token,
    };
  }
}
