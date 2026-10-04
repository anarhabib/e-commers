import { z } from "zod";

export const productCategories = [
  "HEADLIGHT",
  "TAILLIGHT",
  "SIDE_MARKER",
  "STOP_LIGHT",
  "FOG_LIGHT",
] as const;

// One rule per field, defined once. Create and update both reuse these.
const productFields = {
  name: z.string().trim().min(1).max(200),
  slug: z
    .string()
    .trim()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Use lowercase letters, numbers and dashes",
    ),
  description: z.string().trim().min(1),
  sku: z.string().trim().min(1).max(50),
  category: z.enum(productCategories),
  priceCents: z.number().int().positive(),
  stock: z.number().int().min(0),
  imageUrl: z.string().url(),
  make: z.string().trim().min(1),
  model: z.string().trim().min(1),
  yearFrom: z.number().int().min(1900).max(2100),
  yearTo: z.number().int().min(1900).max(2100),
  color: z.string().trim().min(1),
  side: z.string().trim().min(1),
};

// CREATE: some fields required, some optional, stock defaults to 0
export const createProductSchema = z.object({
  name: productFields.name,
  slug: productFields.slug,
  description: productFields.description,
  sku: productFields.sku,
  category: productFields.category,
  priceCents: productFields.priceCents,
  stock: productFields.stock.default(0),
  imageUrl: productFields.imageUrl.optional(),
  make: productFields.make.optional(),
  model: productFields.model.optional(),
  yearFrom: productFields.yearFrom.optional(),
  yearTo: productFields.yearTo.optional(),
  color: productFields.color.optional(),
  side: productFields.side.optional(),
});

// UPDATE: every field optional, but at least one must be sent
export const updateProductSchema = z
  .object(productFields)
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "Send at least one field to update",
  });

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
