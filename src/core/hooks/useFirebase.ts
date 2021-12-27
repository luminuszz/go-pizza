import { firebaseAuth } from '@core/services/firebase/auth';
import { firebaseFirestore } from '@core/services/firebase/firestore';

export const useFirebase = () => ({
  auth: firebaseAuth,
  firestore: firebaseFirestore,
});
