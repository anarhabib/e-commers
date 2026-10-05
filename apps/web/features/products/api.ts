import { apiGet } from "@/lib/api-client";
import type { Product } from "./types";

export type ProductList = {
  products: Product[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export function getProducts() {
  return apiGet<ProductList>("/products");
}
