import { firebaseAuth } from '@core/services/firebase/auth';
import { firebaseFireStorage } from '@core/services/firebase/firestorage';
import { firebaseFirestore } from '@core/services/firebase/firestore';

export const useFirebase = () => ({
  auth: firebaseAuth,
  firestore: firebaseFirestore,
  fireStorage: firebaseFireStorage,
});
