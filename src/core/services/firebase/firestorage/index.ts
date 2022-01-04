import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage';

import { FireStorageError } from '@core/services/firebase/firestorage/fireStorage.error';
import { Folders } from '@core/services/firebase/firestorage/types.fireStorage';

storage().ref();

export class FireStorage {
  private readonly storage = storage();

  // @ts-ignore
  private folderRef: FirebaseStorageTypes.Reference;

  constructor() {
    this.folder = this.folder.bind(this);
    this.save = this.save.bind(this);
  }

  protected async save(
    name: string,
    image: any,
  ): Promise<FirebaseStorageTypes.Reference> {
    try {
      const fileNameRef = this.storage.ref(
        `${this.folderRef.fullPath}/${name}`,
      );

      await fileNameRef.putFile(image);

      return fileNameRef;
    } catch (e) {
      throw new FireStorageError(e as any);
    }
  }

  folder(folderName: Folders) {
    this.folderRef = this.storage.ref(`/${folderName}`);

    return {
      save: this.save,
    };
  }
}

export const firebaseFireStorage = new FireStorage();
