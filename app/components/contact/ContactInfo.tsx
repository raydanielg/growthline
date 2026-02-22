export default function ContactInfo() {
  return (
    <section className="rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.3em]">Details</p>
          <h2 className="mt-3 text-xl sm:text-2xl font-black text-zinc-900">Contact information</h2>
        </div>
        <div className="hidden sm:block h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]" />
      </div>

      <div className="mt-8 grid gap-4 text-sm">
        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
          <p className="text-zinc-900 font-black">Phone</p>
          <p className="mt-1 text-zinc-600">+255 000 000 000</p>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
          <p className="text-zinc-900 font-black">Email</p>
          <p className="mt-1 text-zinc-600">info@company.com</p>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
          <p className="text-zinc-900 font-black">Office</p>
          <p className="mt-1 text-zinc-600">Dar es Salaam, Tanzania</p>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
          <p className="text-zinc-900 font-black">Hours</p>
          <p className="mt-1 text-zinc-600">Mon - Sat: 08:00 - 18:00</p>
        </div>
      </div>
    </section>
  );
}
