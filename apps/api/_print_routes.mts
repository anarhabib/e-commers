import { buildApp } from './src/app.ts';
const app = buildApp();
await app.ready();
console.log(app.printRoutes());
await app.close();
