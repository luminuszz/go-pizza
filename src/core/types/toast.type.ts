type MessageType = 'success' | 'error' | 'info';

type ReactNativeToastMessage = {
  type: MessageType;
  text1: string;
  text2?: string;
};

type Message = {
  type?: MessageType;
  title: string;
  description?: string;
};

type MessageWithoutType = Omit<Message, 'type'>;

export { ReactNativeToastMessage, MessageWithoutType, Message, MessageType };
