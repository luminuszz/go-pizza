import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { Product } from '@core/types/product.types';
import { AsyncStatus, RootState } from '@core/types/redux.type';

import { createProduct, fetchAllProducts } from './product.thunks';

type ProductState = {
  status: AsyncStatus;
  error: { message: string } | null;
};

const REDUCER_NAME = 'product';

const productAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = productAdapter.getInitialState<ProductState>({
  status: AsyncStatus.idle,
  error: null,
});

const productSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    addManyProducts: productAdapter.addMany,
  },
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
      state.error = action.error as any;
    });

    build.addCase(fetchAllProducts.pending, (state) => {
      state.status = AsyncStatus.pending;
    });

    build.addCase(fetchAllProducts.fulfilled, (state) => {
      state.status = AsyncStatus.succeeded;
    });

    build.addCase(fetchAllProducts.rejected, (state, action) => {
      state.status = AsyncStatus.rejected;
      state.error = action.error as any;
    });
  },
});

// actions

export const { addManyProducts } = productSlice.actions;

// selectors
const productAdapterSelectors = productAdapter.getSelectors(
  (state: RootState) => state.product,
);

export const selectAllProducts = (state: RootState) =>
  productAdapterSelectors.selectAll(state);

export const selectProductsCount = (state: RootState) =>
  productAdapterSelectors.selectTotal(state);

export const getProductStatus = (state: RootState) => state.product.status;
export const getProductError = (state: RootState) => state.product.error;

export default productSlice.reducer;
