import type { FastifyReply, FastifyRequest } from "fastify";
import { productService } from "./service.js";

type ProductIdParams = {
  id: string;
};

export const productController = {
  async listProducts() {
    return productService.listProducts();
  },

  async getProductById(request: FastifyRequest<{ Params: ProductIdParams }>) {
    const { id } = request.params;
    return productService.getProductById(id);
  },

  async deleteProduct(
    request: FastifyRequest<{ Params: ProductIdParams }>,
    reply: FastifyReply,
  ) {
    const { id } = request.params;
    await productService.deleteProduct(id);
    return reply.status(204).send();
  },
};
