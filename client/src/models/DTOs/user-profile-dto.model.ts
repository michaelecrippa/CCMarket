export interface UserProfileDto {
  username: string;
  description: string;
  profilePicture: string;
  bio: string;
  assets: UserAsset[];
}

export interface UserAsset {
  name: string;
  price: number;
  pictureUri: string;
}