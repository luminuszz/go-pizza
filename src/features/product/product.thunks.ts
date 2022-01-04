import { createAsyncThunk } from '@reduxjs/toolkit';

import { CreateProduct } from '@core/types/product.types';

export const createProduct = createAsyncThunk<any, CreateProduct>(
  'createProduct',
  async (product) => {},
);
