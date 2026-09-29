import { productRepository } from "./repository.js";

export const productService = {
  listProducts() {
    return productRepository.findAll();
  },

  getProductById(id: string) {
    return productRepository.findById(id);
  },

  deleteProduct(id: string) {
    return productRepository.deleteById(id);
  },

  deleteAllProducts() {
    return productRepository.deleteAll();
  },
};
