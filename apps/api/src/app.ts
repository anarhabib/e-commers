import Fastify from "fastify";
import { prisma } from "./lib/prisma.js";
import { healthRoutes } from "./modules/health/routes.js";
import { productRoutes } from "./modules/products/routes.js";
import { NotFoundError } from "./lib/errors.js";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.setErrorHandler((error, request, reply) => {
    // 1. Our own "not found" errors
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ error: error.message });
    }

    // 2. Prisma: "record not found" (delete/update of a missing row)
    if ((error as { code?: string }).code === "P2025") {
      return reply.status(404).send({ error: "Not found" });
    }

    // 3. Everything else: log the details, hide them from the client
    request.log.error(error);
    return reply.status(500).send({ error: "Internal server error" });
  });
  app.register(healthRoutes);
  app.register(productRoutes);
  app.addHook("onClose", async () => prisma.$disconnect());

  return app;
}
