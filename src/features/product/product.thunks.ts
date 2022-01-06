import { addManyProducts } from '@features/product/product.slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { firebaseFireStorage } from '@core/services/firebase/firestorage';
import { firebaseFirestore } from '@core/services/firebase/firestore';
import { CreateProductPayload, Product } from '@core/types/product.types';

export const createProduct = createAsyncThunk<any, CreateProductPayload>(
  'createProduct',
  async (payload) => {
    const product: Omit<Product, 'id'> = { ...payload, photoPath: null };

    if (product.imageUrl) {
      const fileName = new Date().getTime().toString();

      const imageRef = await firebaseFireStorage
        .folder('products')
        .save(`${fileName}.png`, product.imageUrl);

      product.imageUrl = await imageRef.getDownloadURL();
      product.photoPath = imageRef.fullPath;
    }
    await firebaseFirestore.getRepository('PRODUCT').save(product);
  },
);

export const fetchAllProducts = createAsyncThunk(
  'fetchAllProducts',
  async (_, { dispatch }) => {
    const response = await firebaseFirestore.getRepository('PRODUCT').getAll();

    dispatch(addManyProducts(response));
  },
);
