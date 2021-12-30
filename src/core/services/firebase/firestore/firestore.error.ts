import strings from '@core/config/locale/strings';
import {
  FirestoreExceptionErrorShape,
  FirestoreExceptionCode,
} from '@core/services/firebase/firestore/types.firestore';

export class FireStoreBaseError extends Error {
  code: string;

  name = 'FireStoreError';

  message: string;

  originalMessage: string;

  constructor(error: FirestoreExceptionErrorShape) {
    super();
    this.message = '';
    this.code = '';
    this.originalMessage = this.message;
    this.handleError(error);
  }

  handleError(error: FirestoreExceptionErrorShape) {
    this.code = error.code;

    const currentError = Object.entries(FirestoreExceptionCode).find(
      ([_, code]) => code === error.code,
    );

    if (currentError) {
      const [currentErrorKey, currentCodeErroValue] = currentError;

      this.code = currentCodeErroValue;
      this.message =
        strings.user[currentErrorKey as keyof typeof FirestoreExceptionCode];
    } else {
      this.code = FirestoreExceptionCode.genericError;
      this.message = strings.user.genericError;
    }
  }
}
