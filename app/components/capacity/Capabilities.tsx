export default function CapacityCapabilities() {
  const items = [
    {
      title: "Fleet readiness",
      desc: "Preventive maintenance schedules and daily checks to keep units field-ready.",
    },
    {
      title: "Operators & supervision",
      desc: "Experienced operators supported by practical supervision and dispatch.",
    },
    {
      title: "Safety compliance",
      desc: "HSE-first execution with toolbox talks, permits support, and incident reporting.",
    },
    {
      title: "Planning & coordination",
      desc: "Clear timelines, route planning, and documentation alignment across stakeholders.",
    },
  ];

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10">
          <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
            Strength
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900">
            What we bring to every site
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 text-base sm:text-lg leading-relaxed">
            Capacity is more than equipment—it’s process, people, and discipline.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((i) => (
            <div
              key={i.title}
              className="group rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700"
            >
              <p className="text-xl font-black text-zinc-900">{i.title}</p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                {i.desc}
              </p>
              <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-700 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
