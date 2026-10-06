import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Product } from "../types";
import { formatPrice } from "../utils";
import { ShoppingCartPlus as ShoppingCartPlusIcon } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    // <li className="rounded-lg border p-4">
    //   <h2 className="font-semibold">{product.name}</h2>
    //   <p className="text-sm text-gray-600">
    //     {product.make} {product.model} {product.yearFrom}-{product.yearTo}
    //   </p>
    //   <p className="mt-2 text-lg font-bold">
    //     {formatPrice(product.priceCents)}
    //   </p>
    //   <p className="text-sm">
    //     {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
    //   </p>
    // </li>
    <article className="w-full max-w-220 overflow-hidden rounded-md border border-gray-300 bg-white">
      <div className="relative flex aspect-1.5/1 items-center justify-center bg-primary-soft">
        <Image
          src={
            product.imageUrl ||
            "https://klearz.com/images/thumbnails/650/480/detailed/13/1jpg.jpg"
          }
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="border-t border-gray-200 px-3 py-2.5">
        {/* Brand */}
        <p className="font-mono text-[8px] font-medium uppercase tracking-[0.08em] text-muted">
          {product.make}
        </p>

        {/* Name */}
        <h3 className="mt-1 min-h-34p text-[12px] font-semibold leading-[1.35] text-secondary">
          {product.name}
        </h3>

        {/* Compatibility */}
        <div className="mt-2 flex items-start gap-1.5">
          <span className="mt-2px flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-primary text-[7px] text-primary">
            ✓
          </span>

          <p className="text-[9px] leading-[1.35] text-muted">
            {product.make} {product.model} {product.yearFrom}-{product.yearTo}
          </p>
        </div>
        {/* Price */}
        <p className="mt-3 text-[16px] font-bold tracking-tight text-secondary">
          {formatPrice(product.priceCents)}
        </p>
        {/* Actions */}
        <div className="mt-2 flex justify-end gap-1.5">
          <Button variant="outlined">Details</Button>

          <Button className="flex-1" variant="primary">
            <ShoppingCartPlusIcon className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}
