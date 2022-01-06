import {
  loginWithEmailAndPasswordThunk,
  logoutWithEmailAndPassword,
} from '@features/auth/auth.thunks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AsyncStatus, RootState } from '@core/types/redux.type';
import { User } from '@core/types/user.type';

type AuthSlice = {
  user: User | null;
  status: keyof typeof AsyncStatus;
  error: any;
};

const initialState: AuthSlice = {
  user: null,
  status: AsyncStatus.idle,
  error: null,
};

const REDUCER_NAME = 'auth';

const authSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
    },

    resetSessionStatus: (state) => {
      state.status = AsyncStatus.idle;
    },
  },

  extraReducers: (build) => {
    build.addCase(loginWithEmailAndPasswordThunk.pending, (state) => {
      state.status = AsyncStatus.pending;
    });

    build.addCase(loginWithEmailAndPasswordThunk.rejected, (state, action) => {
      state.status = AsyncStatus.rejected;

      state.error = action.error;
    });

    build.addCase(
      loginWithEmailAndPasswordThunk.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.user = payload;
        state.status = AsyncStatus.succeeded;
      },
    );

    build.addCase(logoutWithEmailAndPassword.rejected, (state) => {
      state.status = AsyncStatus.rejected;
    });

    build.addCase(logoutWithEmailAndPassword.fulfilled, (state) => {
      state.status = AsyncStatus.succeeded;
      state.user = null;
    });
  },
});

// action
export const { resetUser, resetSessionStatus } = authSlice.actions;

// selectors
export const getUser = (state: RootState) => state.auth.user;
export const getSessionError = (state: RootState) => state.auth.error;
export const getSessionStatus = (state: RootState) => state.auth.status;

export default authSlice.reducer;
