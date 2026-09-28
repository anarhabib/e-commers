import Fastify from "fastify";

export function buildApp() {
    const app = Fastify({logger: true});

    app.get("/health", async (request, reply) => {
        return {status: "ok", service:"flame-lenses-api"};
    });
    return app;
}