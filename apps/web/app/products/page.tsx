import { getProducts } from "@/features/products/api";
import { ProductGrid } from "@/features/products/components/product-grid";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Products</h1>
      <ProductGrid products={products} />
    </main>
  );
}
