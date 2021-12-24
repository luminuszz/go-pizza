import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import {
  getSessionStatus,
  getSessionError,
  getUser,
} from '@features/session/session.slice';
import { loginWithEmailAndPasswordThunk } from '@features/session/session.thunks';

import { useAppSelector } from '@core/hooks/useRedux';
import { useToast } from '@core/hooks/useToast';
import { User } from '@core/types/user.type';

type UseAuthType = {
  loginWithEmailAndPassword: (email: string, password: string) => void;
  logout: () => Promise<void>;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export function useAuth(): UseAuthType {
  const notify = useToast();
  const appDispatch = useDispatch();

  const user = useAppSelector(getUser);
  const error = useAppSelector(getSessionError);
  const status = useAppSelector(getSessionStatus);

  const isAuthenticated = useMemo(() => !!user, [user]);
  const isLoading = useMemo(() => status === 'pending', [status]);

  const loginWithEmailAndPassword = (email: string, password: string) =>
    appDispatch(
      loginWithEmailAndPasswordThunk({
        email,
        password,
      }),
    );

  useEffect(() => {
    if (error && status === 'rejected') {
      notify.error({
        title: error.message,
      });
    }
    if (user && status === 'fulfilled') {
      notify.success({
        title: `Login feito com sucesso, Bem vindo ${user.name}`,
      });
    }
  }, [error, user, status, notify]);

  return {
    user,
    isAuthenticated,
    loginWithEmailAndPassword,
    logout: async () => {},
    isLoading,
  };
}
