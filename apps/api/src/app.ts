import Fastify from "fastify";
import { prisma } from "./lib/prisma.js";
import { healthRoutes } from "./modules/health/routes.js";
import { productRoutes } from "./modules/products/routes.js";
import { NotFoundError } from "./lib/errors.js";
import { ZodError } from "zod";

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

    // 3. Zod validation errors
    if (error instanceof ZodError) {
      return reply.status(400).send({
        error: "Validation failed",
        details: error.issues.map((i) => ({
          field: i.path.join("."),
          message: i.message,
        })),
      });
    }

    if ((error as { code?: string }).code === "P2002") {
      return reply
        .status(409)
        .send({ error: "A product with this SKU or slug already exists" });
    }
    // 4. Everything else: log the details, hide them from the client
    request.log.error(error);
    return reply.status(500).send({ error: "Internal server error" });
  });
  app.register(healthRoutes);
  app.register(productRoutes);
  app.addHook("onClose", async () => prisma.$disconnect());

  return app;
}
