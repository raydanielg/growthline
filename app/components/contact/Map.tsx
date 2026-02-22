export default function Map() {
  return (
    <section className="rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-emerald-700 text-xs font-black uppercase tracking-[0.3em]">Location</p>
          <h2 className="mt-3 text-xl sm:text-2xl font-black text-zinc-900">Map</h2>
        </div>
        <div className="hidden sm:block h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]" />
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50">
        <div className="grid place-items-center px-6 py-10 text-sm text-zinc-600">
          Map placeholder (embed later)
        </div>
      </div>
    </section>
  );
}
