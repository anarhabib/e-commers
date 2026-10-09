import {
  getProducts,
  getProductFilters,
  type SearchParams,
} from "@/features/products/api";
import { ProductGrid } from "@/features/products/components/product-grid";
import { ProductFilters } from "@/features/products/components/product-filters";
import { Pagination } from "@/features/products/components/pagination";
import { MobileFilters } from "@/features/products/components/mobile-filters";

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
        {/* Phones and tablets: sticky toolbar + bottom sheet */}
        <div className="lg:hidden">
          <MobileFilters facets={facets} total={list.total} />
        </div>

        {/* Desktop sidebar */}
        <div className="hidden pt-8 lg:block">
          <ProductFilters facets={facets} />
        </div>

        <section>
          {/* On phones the count is already in the toolbar */}
          <p className="mb-4 hidden font-mono text-xs text-muted lg:block">
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
