import { Store } from '@core/store';

type RootState = ReturnType<typeof Store.getState>;

type AppDispatch = typeof Store.dispatch;

enum AsyncStatus {
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
  normal = 'normal',
}

export { RootState, AppDispatch, AsyncStatus };
