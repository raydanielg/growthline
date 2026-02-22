export default function Team() {
  const members = [
    { name: "Operations Lead", role: "Planning and dispatch" },
    { name: "Fleet Supervisor", role: "Maintenance and readiness" },
    { name: "Safety Officer", role: "HSE and compliance" },
    { name: "Project Coordinator", role: "Client support" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Our team</h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            A practical team built for field execution and responsive support.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-zinc-950"
            >
              <p className="font-semibold">{m.name}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
