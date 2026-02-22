import AllServices from "../components/services/AllServices";

export default function ServicesPage() {
  return (
    <main>
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Browse our capabilities and find the right support for your operation.
        </p>
      </div>
      <AllServices />
    </main>
  );
}
