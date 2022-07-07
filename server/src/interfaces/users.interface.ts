import { Asset } from "./assets.interface";

export interface User {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  bio?: string;
  assets?: Asset[];
}
