export default function ContactInfo() {
  return (
    <section className="relative border border-zinc-100 bg-white p-10 shadow-2xl shadow-zinc-200/60 overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-full bg-[#0056b3]" />
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">Details</p>
          <h2 className="mt-4 text-2xl font-black text-zinc-900">Contact <br/>information</h2>
        </div>
      </div>

      <div className="mt-10 grid gap-4 text-sm">
        <div className="group relative border border-zinc-100 bg-zinc-50/50 p-6 transition-all hover:bg-white hover:shadow-lg">
          <div className="absolute top-0 left-0 w-1 h-0 bg-[#0056b3] transition-all group-hover:h-full" />
          <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Phone</p>
          <p className="mt-2 text-base font-bold text-zinc-900">+255 712 345 678</p>
        </div>
        <div className="group relative border border-zinc-100 bg-zinc-50/50 p-6 transition-all hover:bg-white hover:shadow-lg">
          <div className="absolute top-0 left-0 w-1 h-0 bg-[#0056b3] transition-all group-hover:h-full" />
          <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Email</p>
          <p className="mt-2 text-base font-bold text-zinc-900">info@growthlinelogistics.co.tz</p>
        </div>
        <div className="group relative border border-zinc-100 bg-zinc-50/50 p-6 transition-all hover:bg-white hover:shadow-lg">
          <div className="absolute top-0 left-0 w-1 h-0 bg-[#0056b3] transition-all group-hover:h-full" />
          <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Office</p>
          <p className="mt-2 text-base font-bold text-zinc-900">Dar es Salaam, Tanzania</p>
        </div>
        <div className="group relative border border-zinc-100 bg-zinc-50/50 p-6 transition-all hover:bg-white hover:shadow-lg">
          <div className="absolute top-0 left-0 w-1 h-0 bg-[#0056b3] transition-all group-hover:h-full" />
          <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Hours</p>
          <p className="mt-2 text-base font-bold text-zinc-900">Mon - Sat: 08:00 - 18:00</p>
        </div>
      </div>
    </section>
  );
}
