import { z } from 'zod';

import {
  IsStringOrNumberValid,
  IsString,
  WithId,
} from '@core/helpers/validationTypes';

const BaseProductSchema = z.object({
  name: IsString,
  description: IsString.max(60),
  imageUrl: IsString.nullable().optional(),
  pPrice: IsStringOrNumberValid,
  mPrice: IsStringOrNumberValid,
  gPrice: IsStringOrNumberValid,
});

const ProductSchema = BaseProductSchema.merge(WithId);

export type Product = z.infer<typeof ProductSchema>;

export const createProductSchema = ProductSchema.omit({ id: true });

export type CreateProduct = z.infer<typeof createProductSchema>;
