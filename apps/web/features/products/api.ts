import { apiGet } from "@/lib/api-client";
import type { Product } from "./types";

export function getProducts() {
  return apiGet<Product[]>("/products");
}
