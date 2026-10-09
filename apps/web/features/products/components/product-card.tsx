import Image from "next/image";
import { Button, buttonStyles } from "@/components/ui/button";
import type { Product } from "../types";
import { formatPrice } from "../utils";
import { ShoppingCartPlus as ShoppingCartPlusIcon } from "lucide-react";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-md border border-gray-300 bg-white">
      <Link
        href={href}
        className="relative flex aspect-3/2 items-center justify-center bg-primary-soft"
      >
        <Image
          src={
            product.imageUrl ||
            "https://klearz.com/images/thumbnails/650/480/detailed/13/1jpg.jpg"
          }
          alt={product.name}
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col border-t border-gray-200 px-3 py-2.5">
        {/* Category */}
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-muted">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="min-h-14 py-2 font-semibold leading-snug text-secondary">
          <Link href={href} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>

        {/* Compatibility */}
        <div className="mt-2 flex items-start gap-1.5">
          <span className="mt-2px flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-primary text-[7px] text-primary">
            ✓
          </span>

          <p className="text-[10px] leading-[1.35] text-muted">
            {product.make} {product.model} {product.yearFrom}-{product.yearTo}
          </p>
        </div>
        <div className="mt-auto">
          {/* Price */}
          <p className="mt-3 text-[16px] font-bold tracking-tight text-secondary">
            {formatPrice(product.priceCents)}
          </p>
          {/* Actions */}
          <div className="mt-2 flex justify-end gap-1.5">
            <Link
              href={href}
              className={buttonStyles("outlined", "max-sm:hidden")}
            >
              Details
            </Link>

            <Button className="flex-1" variant="primary">
              <ShoppingCartPlusIcon className="h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
