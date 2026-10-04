import type { Product } from "../types";
import { formatPrice } from "../utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <li className="rounded-lg border p-4">
      <h2 className="font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">
        {product.make} {product.model} {product.yearFrom}-{product.yearTo}
      </p>
      <p className="mt-2 text-lg font-bold">
        {formatPrice(product.priceCents)}
      </p>
      <p className="text-sm">
        {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
      </p>
    </li>
  );
}
