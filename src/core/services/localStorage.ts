import AsyncStorage from '@react-native-async-storage/async-storage';

interface StorageService {
  set(key: string, value: any): Promise<void> | void;
  get<T extends any>(key: string): Promise<T> | T;
  remove(key: string): Promise<void> | void;
}

export enum Collections {
  'users' = '@gopizza:users',
  'theme' = '@gopizz:theme',
}

type KeyMapCollections = keyof typeof Collections;

class LocalStorageService implements StorageService {
  constructor() {
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.remove = this.remove.bind(this);
  }

  async remove(key: string): Promise<void> {
    await this.connection.removeItem(key);
  }

  private connection = AsyncStorage;

  private static parse = (value: string) => JSON.parse(value);

  private static encode = (value: any) => JSON.stringify(value);

  async get<T extends any>(key: KeyMapCollections): Promise<T> {
    const value = await this.connection.getItem(Collections[key] || key);

    if (value) {
      return LocalStorageService.parse(value);
    }
    throw new Error('Not data');
  }

  async set(key: KeyMapCollections, value: any): Promise<void> {
    if (value && key) {
      await this.connection.setItem(
        Collections[key] || key,
        LocalStorageService.encode(value),
      );
    } else {
      throw new Error('Invalid params');
    }
  }
}

export const localStorageService = new LocalStorageService();
