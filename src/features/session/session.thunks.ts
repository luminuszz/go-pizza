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

  return {
    name: storedUser.name,
    email: userByAuth.email,
    id: userByAuth.uid,
    isAdmin: storedUser.isAdmin,
  };
});
