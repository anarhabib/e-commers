import type { FastifyPluginAsync } from "fastify";
import { productController } from "./controller.js";

export const productRoutes: FastifyPluginAsync = async (app) => {
  app.get("/products", productController.listProducts);
  app.get("/products/filters", productController.getFacets);
  app.get<{ Params: { id: string } }>(
    "/products/:id",
    productController.getProductById,
  );
  app.delete<{ Params: { id: string } }>(
    "/products/:id",
    productController.deleteProduct,
  );
  app.post("/products", productController.createProduct);
  app.patch("/products/:id", productController.updateProduct);
};
