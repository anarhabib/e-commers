# Flame Lenses web app

The storefront is built with the Next.js App Router. Its catalog and product
detail pages read product data from the API app.

## Frontend structure

- `app/` contains route pages and global styles.
- `app/products/[id]/` displays a product detail page.
- `components/` contains reusable storefront UI.
- `lib/products.ts` contains API access and product formatting helpers.
- `types/product.ts` describes the product API response.

## Running locally

Start the API and web apps from the repository root with `pnpm dev`. The web
app expects the API at `http://localhost:4000` by default. Set `API_URL` in the
web app environment to use a different API origin.

Product images are read from each product's optional `imageUrl`. Products
without an image display a built-in placeholder.
