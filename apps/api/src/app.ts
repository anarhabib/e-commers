import Fastify from "fastify";
import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

export function buildApp() {
  const app = Fastify({ logger: true });

  app.get("/health", async (request, reply) => {
    return { status: "ok", service: "flame-lenses-api" };
  });

  app.get("/products", async (request, reply) => {
    const products = await prisma.product.findMany();
    return products;
  });

  app.get("/products/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const product = await prisma.product.findUnique({ where: { id } });
    return product;
  });

  app.delete("/delete-product/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    await prisma.product.delete({ where: { id } });
    return { message: "Product deleted" };
  });

  app.delete("/delete-all-products", async (request, reply) => {
    await prisma.product.deleteMany();
    return { message: "All products deleted" };
  });

  return app;
}
