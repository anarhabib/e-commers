import { buildApp } from "./app.js";

const app = buildApp();
const port = Number(process.env.PORT) || 4000;

try {
  await app.listen({ port, host: "0.0.0.0" });
  app.log.info(`Server is running on port ${port}`);
} catch (error) {
  app.log.error(error);
  await app.close();
  process.exitCode = 1;
}
