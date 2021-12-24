import Toast from 'react-native-toast-message';

import {
  Message,
  MessageWithoutType,
  ReactNativeToastMessage,
} from '@core/types/toast.type';

export function useToast() {
  const createMessage = ({
    description,
    title,
    type,
  }: Message): ReactNativeToastMessage => ({
    type,
    text1: title,
    text2: description,
  });

  return {
    success: (toast: MessageWithoutType) =>
      Toast.show(createMessage({ ...toast, type: 'success' })),

    error: (toast: MessageWithoutType) =>
      Toast.show(createMessage({ ...toast, type: 'error' })),

    info: (toast: MessageWithoutType) =>
      Toast.show(createMessage({ ...toast, type: 'info' })),
  };
}
