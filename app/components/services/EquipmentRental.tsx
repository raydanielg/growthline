export default function EquipmentRental() {
  return (
    <section
      id="equipment-rental"
      className="group rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">Service</p>
          <h3 className="mt-3 text-2xl font-black text-zinc-900">Equipment rental</h3>
        </div>
        <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-50 text-[#0056b3] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h16"/><path d="M6 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M6 21h12"/><path d="M7 21V10"/><path d="M17 21V10"/><path d="M21 12v7a2 2 0 0 1-2 2"/></svg>
        </div>
      </div>
      <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-600">
        Equipment and operator support for site work. Flexible schedules, dependable
        maintenance, and rapid deployment.
      </p>
      <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-700 group-hover:w-20" />
    </section>
  );
}
