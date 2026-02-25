export default function WhyChooseUs() {
  const items = [
    {
      title: "Safety-first execution",
      desc: "Disciplined HSE standards and site-ready procedures on every job.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
      ),
      accent: "bg-[#0056b3]",
    },
    {
      title: "Reliable fleet & uptime",
      desc: "Planned maintenance, rapid response, and dependable dispatch coordination.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M14 17H6"/><path d="M17 18v-2a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h9v12"/><path d="M16 9h4l1 3v5a1 1 0 0 1-1 1h-2"/></svg>
      ),
      accent: "bg-[#0056b3]",
    },
    {
      title: "Clear coordination",
      desc: "Single point of contact, transparent updates, and predictable delivery windows.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M7 8h10"/><path d="M7 12h6"/></svg>
      ),
      accent: "bg-[#0056b3]",
    },
    {
      title: "Project-ready scale",
      desc: "We adapt quickly to site demand—short mobilization, long-haul, and multi-site support.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 22V12"/><path d="M12 12 3.5 7.5"/><path d="M12 12 20.5 7.5"/></svg>
      ),
      accent: "bg-[#0056b3]",
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white" />
        <div className="absolute -top-40 -left-28 h-80 w-80 rounded-full bg-[#0056b3]/10 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-[#0056b3]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.9) 1px, rgba(0,0,0,0) 0)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.3em]">
              Why choose us
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
              Built for demanding sites—
              <span className="text-[#0056b3]">delivered with discipline.</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
              Growthline combines a reliable fleet, clear coordination, and safety-first execution to keep
              projects moving—on schedule, with fewer surprises.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-[2rem] border border-zinc-100 bg-white p-7 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700"
            >
              <div className="flex items-center justify-between gap-4">
                <div className={`h-12 w-12 rounded-2xl ${it.accent} text-white grid place-items-center shadow-sm`}>
                  {it.icon}
                </div>
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#0056b3] to-sky-300 transition-all duration-700 group-hover:w-10" />
              </div>
              <p className="mt-5 text-base font-black text-zinc-900">{it.title}</p>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
