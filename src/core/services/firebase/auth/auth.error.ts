import strings from '@core/config/locale/strings';

export enum ExceptionsCodes {
  userNotFound = 'auth/user-not-found',
  wrongPassword = 'auth/wrong-password',
  genericError = 'generic-error',
}

export class FireAuthBaseError extends Error {
  code: string;

  name = 'FireAuthBaseError';

  message: string;

  constructor(error: any) {
    super();
    this.handleError(error);
  }

  handleError(error: any) {
    const currentError = Object.entries(ExceptionsCodes).find(
      ([_, code]) => code === error.code,
    );
    if (currentError) {
      const [exceptionCodeKey, exceptionCodeValue] = currentError;
      this.code = exceptionCodeValue;
      this.message = strings.sessionError[exceptionCodeKey];
    } else {
      this.code = ExceptionsCodes.genericError;
      this.message = strings.sessionError.genericError;
    }
  }
}

export const isFirebaseAuthError = (e) => e instanceof FireAuthBaseError;
