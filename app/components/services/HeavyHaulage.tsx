export default function HeavyHaulage() {
  return (
    <section
      id="heavy-haulage"
      className="group rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">Service</p>
          <h3 className="mt-3 text-2xl font-black text-zinc-900">Heavy Haulage</h3>
        </div>
        <div className="h-12 w-12 shrink-0 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11"/><path d="M16 17h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1"/><path d="M7 17a2 2 0 1 0 4 0"/><path d="M17 17a2 2 0 1 0 4 0"/></svg>
        </div>
      </div>
      <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-600">
        Abnormal loads and low-bed transport for heavy equipment. Route planning,
        permits support, and on-site coordination.
      </p>
      <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-700 group-hover:w-20" />
    </section>
  );
}
