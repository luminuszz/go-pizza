import { z } from 'zod';

import { IsString, IsBoolean } from '@core/helpers/validationTypes';

export const UserEntity = z.object({
  name: IsString,
  email: IsString,
  id: IsString,
  isAdmin: IsBoolean,
});

export type User = z.infer<typeof UserEntity>;

export const userLoginPayloadSchema = UserEntity.pick({ email: true }).extend({
  password: IsString,
});

export type UserLoginPayload = z.infer<typeof userLoginPayloadSchema>;

export const userForgotPasswordSchema = UserEntity.pick({ email: true });

export type UserForgotPassword = z.infer<typeof userForgotPasswordSchema>;
