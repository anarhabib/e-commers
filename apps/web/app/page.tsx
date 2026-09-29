import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { StoreHeader } from "@/components/store-header";
import { getProducts } from "@/lib/products";
import type { Product } from "@/types/product";

export const dynamic = "force-dynamic";

export default async function Home() {
  let products: Product[];
  let errorMessage: string | null = null;

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Failed to load the product catalog:", error);
    products = [];
    errorMessage =
      "We couldn't load the catalog right now. Please try again in a moment.";
  }

  return (
    <>
      <StoreHeader />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Lighting made to fit</p>
            <h1>See the road ahead. Be seen behind.</h1>
            <p className="hero-copy">
              Find dependable automotive lights and lenses made for your
              vehicle.
            </p>
            <Link className="button button-light" href="#products">
              Shop all lighting
            </Link>
          </div>
          <div className="hero-art" aria-hidden="true">
            <span className="hero-orbit hero-orbit-one" />
            <span className="hero-orbit hero-orbit-two" />
            <span className="hero-lamp">
              <span />
            </span>
          </div>
        </section>

        <section className="catalog section-shell" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The essentials</p>
              <h2>Shop lighting</h2>
            </div>
            <p className="muted">Find the right replacement for your ride.</p>
          </div>

          {errorMessage ? (
            <p className="notice notice-error" role="alert">
              {errorMessage}
            </p>
          ) : products.length > 0 ? (
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Products are on the way</h3>
              <p>
                There aren&apos;t any products to show yet. Check back soon.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-content">
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              F
            </span>
            Flame Lenses
          </Link>
          <p>Replacement lighting for the road ahead.</p>
        </div>
      </footer>
    </>
  );
}
