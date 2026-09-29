import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoreHeader } from "@/components/store-header";
import { formatCategory, formatPrice, getProduct } from "@/lib/products";
import type { Product } from "@/types/product";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  let product: Product | null;

  try {
    product = await getProduct(id);
  } catch (error) {
    console.error(`Failed to load product ${id}:`, error);
    return (
      <>
        <StoreHeader />
        <main className="section-shell page-message">
          <p className="notice notice-error" role="alert">
            We couldn&apos;t load this product. Please try again in a moment.
          </p>
          <Link className="text-link" href="/">
            Back to all products
          </Link>
        </main>
      </>
    );
  }

  if (!product) {
    notFound();
  }

  const fitment = [product.yearFrom, product.yearTo]
    .filter((year): year is number => year !== null)
    .join("–");
  const vehicle = [product.make, product.model, fitment]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <StoreHeader />
      <main className="section-shell detail-page">
        <Link className="text-link back-link" href="/">
          ← Back to all products
        </Link>
        <div className="product-detail">
          <div className="detail-image">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                unoptimized
              />
            ) : (
              <div className="image-placeholder detail-placeholder">
                <span>Image coming soon</span>
              </div>
            )}
          </div>
          <div className="detail-copy">
            <p className="eyebrow">{formatCategory(product.category)}</p>
            <h1>{product.name}</h1>
            <p className="detail-price">{formatPrice(product.priceCents)}</p>
            <p className="detail-description">{product.description}</p>
            {vehicle && (
              <div className="detail-spec">
                <span>Vehicle fitment</span>
                <strong>{vehicle}</strong>
              </div>
            )}
            {product.side && (
              <div className="detail-spec">
                <span>Side</span>
                <strong>{product.side}</strong>
              </div>
            )}
            <p
              className={
                product.stock > 0 ? "stock-status" : "stock-status out-of-stock"
              }
            >
              {product.stock > 0
                ? `${product.stock} in stock`
                : "Currently out of stock"}
            </p>
            <p className="sku">SKU: {product.sku}</p>
          </div>
        </div>
      </main>
    </>
  );
}
