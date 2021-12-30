import { z } from 'zod';

const MessageTypeEnum = z.enum(['success', 'info', 'error']);

type MessageType = z.infer<typeof MessageTypeEnum>;

type ReactNativeToastMessage = {
  type: MessageType;
  text1: string;
  text2?: string;
};

const MessageSchema = z.object({
  type: MessageTypeEnum.optional(),
  title: z.string().nonempty(),
  description: z.string().optional(),
});

type Message = z.infer<typeof MessageSchema>;

type MessageWithoutType = Omit<Message, 'type'>;

export { ReactNativeToastMessage, MessageWithoutType, Message, MessageType };
