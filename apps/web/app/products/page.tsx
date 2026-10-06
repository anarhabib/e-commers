import { getProducts } from "@/features/products/api";
import { ProductGrid } from "@/features/products/components/product-grid";

export default async function ProductsPage() {
  const { products } = await getProducts();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className=" text-3xl font-bold">Replacement Lenses</h1>
      <p className="mb-6 text-muted-foreground">
        Discover our wide range of high-quality replacement lenses for all your
        needs.
      </p>
      <ProductGrid products={products} />
    </main>
  );
}
