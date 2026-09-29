import Image from "next/image";
import Link from "next/link";
import { formatCategory, formatPrice } from "@/lib/products";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const fitment = [product.make, product.model]
    .filter(Boolean)
    .join(" ");

  return (
    <article className="product-card">
      <Link
        className="product-image-link"
        href={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
      >
        <div className="product-image">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
              unoptimized
            />
          ) : (
            <div className="image-placeholder">
              <span>Image coming soon</span>
            </div>
          )}
        </div>
      </Link>
      <div className="product-card-copy">
        <p className="product-category">{formatCategory(product.category)}</p>
        <h3>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        {fitment && <p className="product-fitment">{fitment}</p>}
        <div className="product-card-bottom">
          <span className="product-price">{formatPrice(product.priceCents)}</span>
          <span className="product-side">{product.side ?? "View details"} →</span>
        </div>
      </div>
    </article>
  );
}
