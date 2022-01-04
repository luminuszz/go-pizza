import { createAsyncThunk } from '@reduxjs/toolkit';

import { firebaseAuth } from '@core/services/firebase/auth';
import { firebaseFirestore } from '@core/services/firebase/firestore';
import { User } from '@core/types/user.type';

export const loginWithEmailAndPasswordThunk = createAsyncThunk<
  User,
  { email: string; password: string }
>('loginWithEmailAndPassword', async (request, thunk) => {
  const { user: userByAuth } =
    await firebaseAuth.createSessionWithEmailAndPassword(
      request.email,
      request.password,
    );

  const storedUser = await firebaseFirestore
    .getRepository('USER')
    .getById(userByAuth.uid);

  if (!storedUser) {
    throw new Error('user not found in database');
  }

  return {
    id: userByAuth.uid,
    name: storedUser.name,
    email: storedUser.email,
    isAdmin: storedUser.isAdmin,
  };
});

export const logoutWithEmailAndPassword = createAsyncThunk(
  'logoutWithEmailAndPassword',
  async () => {
    await firebaseAuth.logoutWithEmailAndPassword();
  },
);
