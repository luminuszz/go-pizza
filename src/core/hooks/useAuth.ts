import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import {
  getSessionStatus,
  getSessionError,
  getUser,
  resetUser,
} from '@features/session/session.slice';
import { loginWithEmailAndPasswordThunk } from '@features/session/session.thunks';

import { useAppSelector } from '@core/hooks/useRedux';
import { useToast } from '@core/hooks/useToast';
import { AsyncStatus } from '@core/types/redux.type';
import { User } from '@core/types/user.type';

type UseAuthType = {
  loginWithEmailAndPassword: (email: string, password: string) => void;
  logout: () => void;
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

  const logout = useCallback(() => appDispatch(resetUser()), [appDispatch]);

  const loginWithEmailAndPassword = useCallback(
    (email: string, password: string) =>
      appDispatch(
        loginWithEmailAndPasswordThunk({
          email,
          password,
        }),
      ),
    [appDispatch],
  );

  useEffect(() => {
    if (error && status === AsyncStatus.rejected) {
      notify.error({
        title: error.message,
      });
    }
    if (user && status === AsyncStatus.fulfilled) {
      notify.success({
        title: `Login feito com sucesso, Bem vindo ${user.name}`,
      });
    }
  }, [error, user, status, notify]);

  return {
    user,
    isAuthenticated,
    loginWithEmailAndPassword,
    logout,
    isLoading,
  };
}
