import { z } from "zod";

export const createProductSchema = z.object({
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
  category: z.enum([
    "HEADLIGHT",
    "TAILLIGHT",
    "SIDE_MARKER",
    "STOP_LIGHT",
    "FOG_LIGHT",
  ]),
  priceCents: z.number().int().positive(),
  stock: z.number().int().min(0).default(0),
  imageUrl: z.string().url().optional(),
  make: z.string().trim().optional(),
  model: z.string().trim().optional(),
  yearFrom: z.number().int().min(1900).max(2100).optional(),
  yearTo: z.number().int().min(1900).max(2100).optional(),
  color: z.string().trim().optional(),
  side: z.string().trim().optional(),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
