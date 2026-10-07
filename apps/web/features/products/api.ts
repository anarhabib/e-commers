import { apiGet } from "@/lib/api-client";
import type { Product, ProductFacets } from "./types";

export type ProductList = {
  products: Product[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type SearchParams = Record<string, string | string[] | undefined>;

function toQueryString(params: SearchParams) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    for (const item of Array.isArray(value) ? value : [value]) {
      query.append(key, item);
    }
  }
  const text = query.toString();
  return text ? `?${text}` : "";
}

export function getProducts(params: SearchParams = {}) {
  return apiGet<ProductList>(`/products${toQueryString(params)}`);
}

export function getProductFilters(params: SearchParams = {}) {
  return apiGet<ProductFacets>(`/products/filters${toQueryString(params)}`);
}
