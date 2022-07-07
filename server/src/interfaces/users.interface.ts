export interface User {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  bio?: string;

  // TODO: make a separate ArtAssetDTO for assets[]. 
  assets?: object[];
}
