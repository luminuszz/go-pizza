import { createAsyncThunk } from '@reduxjs/toolkit';

import { firebaseAuth } from '@core/services/firebase/auth';
import { User } from '@core/types/user.type';

export const loginWithEmailAndPasswordThunk = createAsyncThunk<
  User,
  { email: string; password: string }
>('loginWithEmailAndPassword', async (request, thunk) => {
  const { user } = await firebaseAuth.createSessionWithEmailAndPassword(
    request.email,
    request.password,
  );

  return {
    name: user.displayName,
    email: user.email,
    id: user.uid,
  };
});
