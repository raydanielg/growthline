export default function CompanyHistory() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Company history</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We started with a simple mission: provide dependable logistics and site support. Over time, we grew into a multi-service operation supporting demanding environments.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-950">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold">Founded</dt>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">2015</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">Focus</dt>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Industrial logistics</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">Coverage</dt>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Nationwide</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">Values</dt>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Safety, trust, speed</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
