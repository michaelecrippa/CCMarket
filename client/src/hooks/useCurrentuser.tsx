import { authService } from '../services/authService';
import { useState, useEffect, createContext, useContext } from 'react';
import { UserAuth } from '../interfaces/user/UserAuth.interface';
import { CurrentUserProviderProps } from '../interfaces/components/UserProviderProps.interface';

const CurrentUserContext = createContext<UserAuth | undefined>(undefined);

export function useCurrentUser(): UserAuth | undefined {
  return useContext(CurrentUserContext);
}

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [user, setUser] = useState<UserAuth | undefined>(authService.storedUser);

  useEffect(() => {
    authService.changeHandler = setUser;
    return () => { authService.changeHandler = undefined };
  });

  return (
    <CurrentUserContext.Provider value={user}>
      {children}
    </CurrentUserContext.Provider>
  );
}