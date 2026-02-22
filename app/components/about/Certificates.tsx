export default function Certificates() {
  const items = [
    "Safety training records",
    "Equipment inspection schedules",
    "Operator certifications",
    "Project compliance documentation",
  ];

  return (
    <section className="bg-zinc-50 py-16 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Certificates</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We maintain documentation to support compliance and safe operations.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
            <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
