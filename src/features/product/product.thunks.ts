import { createAsyncThunk } from '@reduxjs/toolkit';

import { firebaseFireStorage } from '@core/services/firebase/firestorage';
import { firebaseFirestore } from '@core/services/firebase/firestore';
import { Product } from '@core/types/product.types';

export const createProduct = createAsyncThunk<any, Product>(
  'createProduct',
  async (product) => {
    if (product.imageUrl) {
      const fileName = new Date().getTime().toString();

      const imageRef = await firebaseFireStorage
        .folder('products')
        .save(`${fileName}.png`, product.imageUrl);

      product.imageUrl = await imageRef.getDownloadURL();
      await firebaseFirestore.getRepository('PRODUCT').save({
        ...product,
        photoPath: imageRef.fullPath,
      });

      return;
    }
    await firebaseFirestore.getRepository('PRODUCT').save({
      ...product,
      photoPath: null,
    });
  },
);
