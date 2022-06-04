import { useContext, createContext} from 'react';

//TODO https://usehooks.com/useAuth/
const authContext = createContext(true);

export function useAuth() {
  return useContext(authContext);
}