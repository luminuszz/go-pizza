import { createSlice } from '@reduxjs/toolkit';

import { Product } from '@core/types/product.types';
import { AsyncStatus, RootState } from '@core/types/redux.type';

import { createProduct } from './product.thunks';

type ProductState = {
  products: Product[];
  status: AsyncStatus;
  error: any | null;
};

const REDUCER_NAME = 'product';

const initialState: ProductState = {
  products: [],
  status: AsyncStatus.idle,
  error: null,
};

const productSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(createProduct.pending, (state) => {
      state.status = AsyncStatus.pending;
      state.error = null;
    });

    build.addCase(createProduct.fulfilled, (state) => {
      state.status = AsyncStatus.succeeded;
    });

    build.addCase(createProduct.rejected, (state, action) => {
      state.status = AsyncStatus.rejected;
      state.error = action.error;
    });
  },
});

// selectors

export const getProductStatus = (state: RootState) => state.product.status;
export const getProductError = (state: RootState) => state.product.error;

export default productSlice.reducer;
