import { z } from 'zod';

import { isString, isBoolean } from '@core/helpers/validationTypes';

export const UserEntity = z.object({
  name: isString,
  email: isString,
  id: isString,
  isAdmin: isBoolean,
});

export type User = z.infer<typeof UserEntity>;

export const userLoginPayloadSchema = UserEntity.pick({ email: true }).extend({
  password: isString,
});

export type UserLoginPayload = z.infer<typeof userLoginPayloadSchema>;

export const userForgotPasswordSchema = UserEntity.pick({ email: true });

export type UserForgotPassword = z.infer<typeof userForgotPasswordSchema>;
