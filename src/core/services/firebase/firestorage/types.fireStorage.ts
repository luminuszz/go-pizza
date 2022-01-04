export type Folders = 'products';
export enum FireStorageExceptionCode {
  genericError = 'GENERIC_ERROR',
}
export type FireStorageExceptionErrorShape = {
  code: FireStorageExceptionCode;
  message?: string;
};
