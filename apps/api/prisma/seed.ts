import { PrismaClient } from "../src/generated/prisma/client.js";

const prisma = new PrismaClient();

async function main() {
  const product = await prisma.product.create({
    data: {
      name: "Honda Civic Clear Tail Light - Left",
      slug: "honda-civic-clear-taillight-left-2006-2008",
      description: "OEM-style clear lens tail light, driver side.",
      sku: "TL-CIV-06-08-L",
      category: "TAILLIGHT",
      priceCents: 8999,
      stock: 12,
      make: "Honda",
      model: "Civic",
      yearFrom: 2006,
      yearTo: 2008,
      color: "Clear",
      side: "Left",
    },
  });

  console.log("Created product:", product);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });