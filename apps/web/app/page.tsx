import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">Flame Lenses</h1>
      <p className="mt-2">Tail lights, headlights and side markers.</p>
      <Link href="/products" className="mt-4 inline-block underline">
        Browse products
      </Link>
    </main>
  );
}
