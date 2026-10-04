import { Search } from "lucide-react";

export function SearchForm({ className }: { className?: string }) {
  return (
    <form action="/products" role="search" className={className}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          name="search"
          placeholder="Search parts or SKU"
          aria-label="Search products"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
    </form>
  );
}
