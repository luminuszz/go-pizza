import { z } from 'zod';

const stringOrNumber = z.union([z.string().nonempty(), z.number().positive()]);

const ProductSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  description: z.string().nonempty().max(60),
  pPrice: stringOrNumber,
  mPrice: stringOrNumber,
  gPrice: stringOrNumber,
  imageUrl: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

export const createProductSchema = ProductSchema.omit({ id: true });

export type CreateProduct = z.infer<typeof createProductSchema>;
