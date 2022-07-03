export interface UserProfileDto {
  name: string;
  description: string;
  pictureUri: string;
  assets: UserAsset[];
}

export interface UserAsset {
  name: string;
  price: number;
  pictureUri: string;
}