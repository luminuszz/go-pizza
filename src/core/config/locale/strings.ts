import { ExceptionsCodes } from '@core/services/firebase/auth/auth.error';
import { FirestoreExceptionCode } from '@core/services/firebase/firestore/types.firestore';

type CreateMessageType<T extends string> = Record<T, string>;

type SessionError = Record<keyof typeof ExceptionsCodes, string>;

type UserError = Record<keyof typeof FirestoreExceptionCode, string>;

type PermissionsMessage = CreateMessageType<
  'cameraError' | 'imageGalleryError'
>;

type Strings = {
  sessionError: SessionError;
  user: UserError;
  permissions: PermissionsMessage;
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

  permissions: {
    cameraError: 'Permissão para camera necessária',
    imageGalleryError: 'Permissão para galeria ncessária ',
  },
};

export default strings;
