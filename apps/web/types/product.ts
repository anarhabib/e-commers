export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  sku: string;
  category: string;
  priceCents: number;
  imageUrl: string | null;
  stock: number;
  make: string | null;
  model: string | null;
  yearFrom: number | null;
  yearTo: number | null;
  color: string | null;
  side: string | null;
  createdAt: string;
  updatedAt: string;
};
