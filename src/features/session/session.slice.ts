import { loginWithEmailAndPasswordThunk } from '@features/session/session.thunks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AsyncStatus, RootState } from '@core/types/redux.type';
import { User } from '@core/types/user.type';

interface SessionSlice {
  user: User | null;
  status: keyof typeof AsyncStatus;
  error: any;
}

const initialState: SessionSlice = {
  user: null,
  status: AsyncStatus.normal,
  error: null,
};

const REDUCER_NAME = 'session';

const sessionSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
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
        state.status = AsyncStatus.fulfilled;
      },
    );
  },
});

// action

export const { resetUser } = sessionSlice.actions;

// selectors
export const getUser = (state: RootState) => state.session.user;
export const getSessionError = (state: RootState) => state.session.error;
export const getSessionStatus = (state: RootState) => state.session.status;

export default sessionSlice.reducer;
