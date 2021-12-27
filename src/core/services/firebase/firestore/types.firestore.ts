// Exceptions

export enum FirestoreExceptionCode {
  notFound = 'DOC_NOT_FOUND',
  genericError = 'GENERIC_ERROR',
}

export type FirestoreExceptionErrorShape = {
  code: FirestoreExceptionCode;
  message?: string;
};

// Entities
export type FirestoreUser = {
  name: string;
  isAdmin: boolean;
  email: string;
};
