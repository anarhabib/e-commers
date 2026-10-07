export type ProductCategory =
  "HEADLIGHT" | "TAILLIGHT" | "SIDE_MARKER" | "STOP_LIGHT" | "FOG_LIGHT";

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  sku: string;
  category: ProductCategory;
  priceCents: number;
  imageUrl: string | null;
  stock: number;
  make: string | null;
  model: string | null;
  yearFrom: number | null;
  yearTo: number | null;
  color: string | null;
  side: string | null;
};

export type VehicleOption = {
  make: string;
  model: string;
  yearFrom: number | null;
  yearTo: number | null;
};

export type FacetOptions = { value: string; count: number };
export type ProductFacets = {
  categories: FacetOptions[];
  vehicles: VehicleOption[];
};
