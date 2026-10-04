import { prisma } from "../../lib/prisma.js";
import type { CreateProductInput, UpdateProductInput } from "./schema.js";

export const productRepository = {
  findAll() {
    return prisma.product.findMany();
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
  }
};
