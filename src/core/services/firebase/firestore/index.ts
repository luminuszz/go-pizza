import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import { FireStoreBaseError } from '@core/services/firebase/firestore/firestore.error';

import { FirestoreExceptionCode, FirestoreUser } from './types.firestore';

enum EntitiesMap {
  USER = 'users',
}

type Entities = {
  users: FirestoreUser;
};

type EntitiesKey = keyof typeof EntitiesMap;

class FireStoreDatabase {
  static _instance: FireStoreDatabase;

  static execute() {
    if (!FireStoreDatabase._instance) {
      FireStoreDatabase._instance = new FireStoreDatabase();
    }

    return FireStoreDatabase._instance;
  }

  private readonly connection = firestore();

  // @ts-ignore
  private collection: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

  constructor() {
    this.getById = this.getById.bind(this);
    this.getRepository = this.getRepository.bind(this);
  }

  getRepository(entityMapKey: EntitiesKey) {
    this.collection = this.connection.collection(EntitiesMap[entityMapKey]);

    return {
      getById: this.getById,
    };
  }

  private async getById(id: string): Promise<FirestoreUser | null> {
    try {
      const ref = await this.collection.doc(id).get();

      return ref.exists ? (ref.data() as FirestoreUser) : null;
    } catch (e) {
      throw new FireStoreBaseError(e as any);
    }
  }
}

export const firebaseFirestore = FireStoreDatabase.execute();
