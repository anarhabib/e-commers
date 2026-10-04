import { productRepository } from "./repository.js";
import { NotFoundError } from "../../lib/errors.js";
import { CreateProductInput, UpdateProductInput } from "./schema.js";

export const productService = {
  listProducts() {
    return productRepository.findAll();
  },

  async getProductById(id: string) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new NotFoundError(`Product not found`);
    }
    return product;
  },

  async deleteProduct(id: string) {
    await productService.getProductById(id);
    await productRepository.deleteById(id);
  },

  async createProduct(data: CreateProductInput) {
    return await productRepository.create(data);
  },

  async updateProduct(id: string, data: UpdateProductInput) {
    await productService.getProductById(id);
    return await productRepository.update(id, data);
  },
};
