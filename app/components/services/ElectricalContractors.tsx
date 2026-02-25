export default function ElectricalContractors() {
  return (
    <section
      id="electrical-contractors"
      className="group relative border border-zinc-100 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0056b3]/10"
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-[#0056b3] transition-all duration-500 group-hover:w-full" />
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">Service</p>
          <h3 className="mt-4 text-2xl font-black text-zinc-900 leading-tight">Electrical <br/>contractors</h3>
        </div>
        <div className="h-14 w-14 shrink-0 bg-blue-50 text-[#0056b3] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>
        </div>
      </div>
      <p className="mt-6 text-zinc-500 leading-relaxed font-medium">
        Electrical installation, maintenance, and site support for project environments.
        We prioritize safety compliance, clear coordination, and reliable field execution.
      </p>
    </section>
  );
}
