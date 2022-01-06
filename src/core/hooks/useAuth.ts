import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import {
  getSessionStatus,
  getSessionError,
  getUser,
} from '@features/auth/auth.slice';
import {
  loginWithEmailAndPasswordThunk,
  logoutWithEmailAndPassword,
} from '@features/auth/auth.thunks';

import { useFirebase } from '@core/hooks/useFirebase';
import { useAppSelector } from '@core/hooks/useRedux';
import { useToast } from '@core/hooks/useToast';
import { FireAuthBaseError } from '@core/services/firebase/auth/auth.error';
import { AsyncStatus } from '@core/types/redux.type';
import { User } from '@core/types/user.type';

type UseAuthType = {
  loginWithEmailAndPassword: (email: string, password: string) => void;
  sendForgotEmailPassword: (email: string) => Promise<void>;
  logout: () => void;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export function useAuth(): UseAuthType {
  const notify = useToast();
  const appDispatch = useDispatch();
  const { auth } = useFirebase();

  const user = useAppSelector(getUser);
  const error = useAppSelector(getSessionError);
  const status = useAppSelector(getSessionStatus);

  const isAuthenticated = useMemo(() => !!user, [user]);
  const isLoading = useMemo(() => status === 'pending', [status]);

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

  const logout = useCallback(
    () => appDispatch(logoutWithEmailAndPassword()),
    [appDispatch],
  );

  const sendForgotEmailPassword = useCallback(
    async (email: string) => {
      auth
        .sendEmailForgotPassword(email)
        .then(() => {
          notify.success({
            title: 'E-mail enviado',
            description: 'Verifique sua caixa de entrada',
          });
        })
        .catch((e) => {
          if (e instanceof FireAuthBaseError) {
            notify.error({
              title: e.message,
            });
          }
        });
    },
    [auth, notify],
  );

  useEffect(() => {
    if (error && status === AsyncStatus.rejected) {
      notify.error({
        title: error.message,
      });
    }
    if (user && status === AsyncStatus.succeeded) {
      notify.success({
        title: `Login feito com sucesso ! Bem vindo ${user.name}`,
      });
    }
  }, [error, user, status, notify]);

  return {
    user,
    isAuthenticated,
    loginWithEmailAndPassword,
    logout,
    isLoading,
    sendForgotEmailPassword,
  };
}
