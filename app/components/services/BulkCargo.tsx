export default function BulkCargo() {
  return (
    <section
      id="bulk-cargo"
      className="group relative border border-zinc-100 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0056b3]/10"
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-[#0056b3] transition-all duration-500 group-hover:w-full" />
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">Service</p>
          <h3 className="mt-4 text-2xl font-black text-zinc-900 leading-tight">Bulk cargo <br/>handling</h3>
        </div>
        <div className="h-14 w-14 shrink-0 bg-blue-50 text-[#0056b3] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M4 21h16"/></svg>
        </div>
      </div>
      <p className="mt-6 text-zinc-500 leading-relaxed font-medium">
        Loading, handling, and transport coordination for bulk materials. We prioritize
        safe operations, efficient turnaround, and clear reporting.
      </p>
    </section>
  );
}
