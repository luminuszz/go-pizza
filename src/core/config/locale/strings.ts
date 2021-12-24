import { ExceptionsCodes } from '@core/services/firebase/auth/auth.error';

type SessionError = Record<keyof typeof ExceptionsCodes, string>;

type Strings = {
  sessionError: SessionError;
};

const strings: Strings = {
  sessionError: {
    userNotFound: 'Usuário não encontrado',
    wrongPassword: 'Senha inválida',
    genericError: 'Houve um erro',
  },
};

export default strings;
