export default function MissionVision() {
  return (
    <section className="bg-zinc-50 py-16 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Deliver reliable logistics and industrial services that keep our clients operating safely and efficiently.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
            <h3 className="text-xl font-semibold">Vision</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Be the most trusted partner for complex site operations through consistent service quality and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
