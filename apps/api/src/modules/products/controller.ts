import type { FastifyReply, FastifyRequest } from "fastify";
import { productService } from "./service.js";
import { createProductSchema, updateProductSchema } from "./schema.js";

type ProductIdParams = {
  id: string;
};

export const productController = {
  listProducts() {
    return productService.listProducts();
  },

  getProductById(request: FastifyRequest<{ Params: ProductIdParams }>) {
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

  async createProduct(request: FastifyRequest, reply: FastifyReply) {
    const data = createProductSchema.parse(request.body);
    const product = await productService.createProduct(data);
    return reply.status(201).send(product);
  },

  async updateProduct(
    request: FastifyRequest<{ Params: ProductIdParams }>,
    reply: FastifyReply,
  ) {
    const { id } = request.params;
    const data = updateProductSchema.parse(request.body);
    const product = await productService.updateProduct(id, data);
    return reply.send(product);
  }
};
