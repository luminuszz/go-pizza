import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import { FireStoreBaseError } from '@core/services/firebase/firestore/firestore.error';

import { FirestoreUser } from './types.firestore';

enum EntitiesMap {
  USER = 'users',
}

type Entities = {
  users: FirestoreUser;
};

type EntitiesKey = keyof typeof EntitiesMap;

class FireStoreDatabase {
  private readonly connection = firestore();

  private collection: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

  getRepository(entityMapKey: EntitiesKey) {
    this.collection = this.connection.collection(EntitiesMap[entityMapKey]);

    return {
      getById: this.getById,
    };
  }

  private async getById(id: string): Promise<FirestoreUser> {
    try {
      return (await this.collection.doc(id).get()) as unknown as FirestoreUser;
    } catch (e) {
      throw new FireStoreBaseError(e);
    }
  }
}

export const firebaseFirestore = new FireStoreDatabase();
