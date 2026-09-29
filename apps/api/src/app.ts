import Fastify from "fastify";
import { prisma } from "./lib/prisma.js";
import { healthRoutes } from "./modules/health/routes.js";
import { productRoutes } from "./modules/products/routes.js";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(healthRoutes);
  app.register(productRoutes);
  app.addHook("onClose", async () => prisma.$disconnect());

  return app;
}
