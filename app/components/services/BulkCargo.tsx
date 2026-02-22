export default function BulkCargo() {
  return (
    <section
      id="bulk-cargo"
      className="group rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">Service</p>
          <h3 className="mt-3 text-2xl font-black text-zinc-900">Bulk cargo handling</h3>
        </div>
        <div className="h-12 w-12 shrink-0 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M4 21h16"/></svg>
        </div>
      </div>
      <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-600">
        Loading, handling, and transport coordination for bulk materials. We prioritize
        safe operations, efficient turnaround, and clear reporting.
      </p>
      <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-700 group-hover:w-20" />
    </section>
  );
}
