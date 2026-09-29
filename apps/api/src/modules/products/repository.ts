import { prisma } from "../../lib/prisma.js";

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

};
