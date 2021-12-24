import { firebaseAuth } from '@core/services/firebase/auth';

export const useFirebase = () => ({
  auth: firebaseAuth,
});
