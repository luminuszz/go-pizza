import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import { FireStoreBaseError } from '@core/services/firebase/firestore/firestore.error';

import { FirestoreProduct, FirestoreUser } from './types.firestore';

enum EntitiesMap {
  USER = 'users',
  PRODUCT = 'products',
}

type Entities = {
  USER: FirestoreUser;
  PRODUCT: FirestoreProduct;
};

type EntitiesKey = keyof Entities;

type EntitySchema<T extends EntitiesKey> = Entities[T];

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
    this.save = this.save.bind(this);
  }

  getRepository<T extends EntitiesKey>(entityMapKey: T) {
    this.collection = this.connection.collection(EntitiesMap[entityMapKey]);

    return {
      getById: this.getById,
      save: (values: EntitySchema<T>) => this.save(values),
    };
  }

  private async save<T extends EntitiesKey>(
    payload: EntitySchema<EntitiesKey>,
  ) {
    try {
      await this.collection.add(payload);
    } catch (e) {
      throw new FireStoreBaseError(e as any);
    }
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
