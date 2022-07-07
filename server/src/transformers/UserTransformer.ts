import { User as UserDTO } from '@/interfaces/users.interface';
import { user as DataBaseUserModel } from '@/database/models/User';
import { ArtAssetTransformer } from './ArtAssetTransformer';

export class UserTransformer {
  private assetsTransformer = new ArtAssetTransformer();

  transform(user: DataBaseUserModel): UserDTO {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      profilePicture: user.picture_uri,
    };
  }

  transformWithAssets(user: DataBaseUserModel): UserDTO {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      profilePicture: user.picture_uri,
      bio: user.bio,
      assets: this.assetsTransformer.transformAssets(user.userAssets),
    };
  }
}