import {
  getProducts,
  getProductFilters,
  type SearchParams,
} from "@/features/products/api";
import { ProductGrid } from "@/features/products/components/product-grid";
import { ProductFilters } from "@/features/products/components/product-filters";
import { SlidersHorizontal } from "lucide-react";
import { Pagination } from "@/features/products/components/pagination";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const [list, facets] = await Promise.all([
    getProducts(params),
    getProductFilters(params),
  ]);
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <details className="rounded-sm lg:hidden">
          <summary className="flex items-center gap-1 cursor-pointer font-mono text-xs font-bold uppercase">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </summary>
          <div className="mt-4">
            <ProductFilters facets={facets} />
          </div>
        </details>
        <div className="hidden pt-8 lg:block">
          <ProductFilters facets={facets} />
        </div>

        <section>
          <p className="mb-4 font-mono text-xs text-muted">
            {list.total} products
          </p>
          <ProductGrid products={list.products} />
          <Pagination
            page={list.page}
            totalPages={list.totalPages}
            searchParams={params}
          />
        </section>
      </div>
    </main>
  );
}
