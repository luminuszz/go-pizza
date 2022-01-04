import { Action, ThunkAction } from '@reduxjs/toolkit';

import { Store } from '@core/store';

type RootState = ReturnType<typeof Store.getState>;

type AppDispatch = typeof Store.dispatch;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

enum AsyncStatus {
  pending = 'pending',
  succeeded = 'succeeded',
  rejected = 'rejected',
  idle = 'idle',
}

interface Slice {
  status: AsyncStatus;
}

export { RootState, AppDispatch, AsyncStatus, AppThunk, Slice };
