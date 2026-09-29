import type { Product } from "@/types/product";

const apiUrl = (process.env.API_URL ?? "http://localhost:4000").replace(
  /\/$/,
  "",
);

async function fetchProductResponse(path: string): Promise<Response> {
  const response = await fetch(`${apiUrl}${path}`, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Product API request failed with status ${response.status}`);
  }

  return response;
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetchProductResponse("/products");
  return response.json() as Promise<Product[]>;
}

export async function getProduct(id: string): Promise<Product | null> {
  const response = await fetchProductResponse(
    `/products/${encodeURIComponent(id)}`,
  );
  return response.json() as Promise<Product | null>;
}

export function formatPrice(priceCents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceCents / 100);
}

export function formatCategory(category: string): string {
  return category
    .toLowerCase()
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
