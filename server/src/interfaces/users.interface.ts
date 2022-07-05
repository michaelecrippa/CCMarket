export interface User {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  authToken?: string;
}
