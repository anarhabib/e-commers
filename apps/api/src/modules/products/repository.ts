import { prisma } from "../../lib/prisma.js";
import type { Prisma } from "../../generated/prisma/client.js";
import type {
  CreateProductInput,
  UpdateProductInput,
  ListProductsQuery,
} from "./schema.js";

export const productRepository = {
  findMany(query: ListProductsQuery) {
    const { category, make, model, year, search, page, limit } = query;

    const where: Prisma.ProductWhereInput = {
      ...(category && { category }),
      ...(make && { make: { equals: make, mode: "insensitive" } }),
      ...(model && { model: { equals: model, mode: "insensitive" } }),
      // "fits a 2007 car": yearFrom <= 2007 <= yearTo
      ...(year && { yearFrom: { lte: year }, yearTo: { gte: year } }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { sku: { contains: search, mode: "insensitive" } },
        ],
      }),
    };

    return prisma.$transaction([
      prisma.product.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.product.count({ where }),
    ]);
  },

  findById(id: string) {
    return prisma.product.findUnique({ where: { id } });
  },

  deleteById(id: string) {
    return prisma.product.delete({ where: { id } });
  },

  create(data: CreateProductInput) {
    return prisma.product.create({ data });
  },

  update(id: string, data: UpdateProductInput) {
    return prisma.product.update({ where: { id }, data });
  },
};
