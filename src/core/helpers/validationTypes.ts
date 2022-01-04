import { z, ZodTypeAny } from 'zod';

import validationsMessages from '@core/config/locale/validationsMessages';

export const IsString = z
  .string({
    invalid_type_error: validationsMessages.invalidType,
    required_error: validationsMessages.required,
  })
  .nonempty(validationsMessages.required);

export const IsNumber = z.number({
  invalid_type_error: validationsMessages.invalidType,
  required_error: validationsMessages.required,
});

export const IsBoolean = z.boolean({
  invalid_type_error: validationsMessages.invalidType,
  required_error: validationsMessages.required,
});

export const IsStringOrNumberValid = z.union([
  z
    .string({
      invalid_type_error: validationsMessages.invalidType,
      required_error: validationsMessages.required,
    })
    .nonempty(validationsMessages.required),
  z
    .number({ invalid_type_error: validationsMessages.invalidType })
    .positive(validationsMessages.positive),
]);

export const isArrayOf = (schema: ZodTypeAny) =>
  z.array(schema, { invalid_type_error: validationsMessages.invalidType });

export const WithId = z.object({
  id: z.string({
    invalid_type_error: validationsMessages.invalidType,
    required_error: validationsMessages.required,
  }),
});
