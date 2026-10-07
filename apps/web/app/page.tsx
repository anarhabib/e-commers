import { getProductFilters } from "@/features/products/api";
import { VehicleSelector } from "@/features/products/components/vehicle-selector";

export default async function Home() {
  const facets = await getProductFilters();

  return (
    <main>
      <section className="bg-secondary px-4 py-16 text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-black sm:text-5xl">
            Find lights that fit your car
          </h1>
          <p className="text-white/70">
            Choose your vehicle to see matching parts.
          </p>
          <div className="rounded-sm bg-white p-4 text-secondary">
            <VehicleSelector
              vehicles={facets.vehicles}
              columns="sm:grid-cols-3"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
