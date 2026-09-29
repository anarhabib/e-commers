import { productRepository } from "./repository.js";
import { NotFoundError } from "../../lib/errors.js";

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
};
