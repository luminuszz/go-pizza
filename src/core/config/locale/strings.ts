import { ExceptionsCodes } from '@core/services/firebase/auth/auth.error';
import { FirestoreExceptionCode } from '@core/services/firebase/firestore/types.firestore';

import validationsMessages from './validationsMessages';

type CreateMessageType<T extends string> = Record<T, string>;

type SessionError = Record<keyof typeof ExceptionsCodes, string>;

type UserError = Record<keyof typeof FirestoreExceptionCode, string>;

type PermissionsMessage = CreateMessageType<
  'cameraError' | 'imageGalleryError'
>;

interface Strings extends Object {
  sessionError: SessionError;
  user: UserError;
  permissions: PermissionsMessage;
  [key: string]: Object;
}

const strings = {
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

  pages: {
    createProduct: {
      labels: {
        name: 'Nome',
        description: 'Descrição',
        maxCharactersHelperText: (value: string | number) =>
          `${value} de 60 characters`,

        sizesAndPricesTitle: 'Tamanhos e preços',
      },

      messages: {
        success: 'Produto criado com sucesso !',
        error: 'Houve um erro na criação do produto',
      },
    },

    signIn: {
      forgotPassswordTitle: 'Esqueci minha senha',
      title: 'Login',
    },
    forgotPasssword: {
      title: 'Esqueci minha senha',
      backToLoginMessage: 'Voltar para o login',
    },
  },
  validationsMessages,
};

export default strings;
