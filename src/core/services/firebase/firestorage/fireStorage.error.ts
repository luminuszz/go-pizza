import strings from '@core/config/locale/strings';

import {
  FireStorageExceptionErrorShape,
  FireStorageExceptionCode,
} from './types.fireStorage';

export class FireStorageError extends Error {
  code: string;

  name = 'FireStorageError';

  message: string;

  originalMessage: string;

  constructor(error: FireStorageExceptionErrorShape) {
    super();
    this.message = '';
    this.code = '';
    this.originalMessage = this.message;
    this.handleError(error);
  }

  handleError(error: FireStorageExceptionErrorShape) {
    this.code = error.code;

    const currentError = Object.entries(FireStorageExceptionCode).find(
      ([_, code]) => code === error.code,
    );

    if (currentError) {
      const [currentErrorKey, currentCodeErroValue] = currentError;

      this.code = currentCodeErroValue;
      this.message =
        strings.user[currentErrorKey as keyof typeof FireStorageExceptionCode];
    } else {
      this.code = FireStorageExceptionCode.genericError;
      this.message = strings.user.genericError;
    }
  }
}
