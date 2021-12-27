import { FirestoreUser } from '@core/services/firebase/firestore/types.firestore';

export interface User extends FirestoreUser {
  name: string;
  email: string;
  id: string;
}
