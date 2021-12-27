import { ExceptionsCodes } from '@core/services/firebase/auth/auth.error';
import { FirestoreExceptionCode } from '@core/services/firebase/firestore/types.firestore';

type SessionError = Record<keyof typeof ExceptionsCodes, string>;

type UserError = Record<keyof typeof FirestoreExceptionCode, string>;

type Strings = {
  sessionError: SessionError;
  user: UserError;
};

const strings: Strings = {
  sessionError: {
    userNotFound: 'Usuário não encontrado',
    wrongPassword: 'Senha inválida',
    genericError: 'Houve um erro',
  },

  user: {
    genericError: 'Houve um erro',
    notFound: 'Usuário não encontrado',
  },
};

export default strings;
