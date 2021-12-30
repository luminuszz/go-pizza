import { z } from 'zod';

export const UserEntity = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty(),
  id: z.string().nonempty(),
  isAdmin: z.boolean(),
});

export const userLoginPayloadSchema = UserEntity.pick({ email: true }).extend({
  password: z.string().nonempty(),
});
export type UserLoginPayload = z.infer<typeof userLoginPayloadSchema>;

export const userForgotPasswordSchema = UserEntity.pick({ email: true });

export type UserForgotPassword = z.infer<typeof userForgotPasswordSchema>;

export type User = z.infer<typeof UserEntity>;
