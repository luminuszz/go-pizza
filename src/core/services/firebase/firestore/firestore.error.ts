import strings from '@core/config/locale/strings';
import {
  FirestoreExceptionErrorShape,
  FirestoreExceptionCode,
} from '@core/services/firebase/firestore/types.firestore';

export class FireStoreBaseError extends Error {
  code: string;

  name = 'FireStoreError';

  message: string;

  constructor(error: FirestoreExceptionErrorShape) {
    super();
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
      this.message = strings.user[currentErrorKey];
    } else {
      this.code = FirestoreExceptionCode.genericError;
    }
  }
}
