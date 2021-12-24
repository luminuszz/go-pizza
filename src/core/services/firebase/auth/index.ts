// eslint-disable-next-line max-classes-per-file
import auth from '@react-native-firebase/auth';

import { FireAuthBaseError } from '@core/services/firebase/auth/auth.error';

class FirebaseAuth {
  private readonly firebaseAuth = auth();

  async createSessionWithEmailAndPassword(email: string, password: string) {
    try {
      return await this.firebaseAuth.signInWithEmailAndPassword(
        email,
        password,
      );
    } catch (e) {
      console.log({ e });

      throw new FireAuthBaseError(e);
    }
  }
}

export const firebaseAuth = new FirebaseAuth();
