import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-white to-white" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
              Services
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black text-zinc-900 leading-tight">
              Industrial services built for
              <span className="text-[#0056b3]"> performance</span>
            </h1>
            <p className="mt-5 max-w-2xl text-zinc-600 text-base sm:text-lg leading-relaxed">
              From bulk cargo handling to equipment rental, water supply, and project
              logistics—Growthline delivers safe execution, strong coordination, and
              responsive support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-600 px-8 text-sm font-black text-white hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-900/20"
              >
                Request a quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 text-sm font-black text-zinc-900 hover:bg-zinc-50 transition-all active:scale-95"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-2xl shadow-zinc-200/40">
              <div className="grid grid-cols-2 gap-6">
                <a href="#bulk-cargo" className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6 hover:bg-white transition-colors">
                  <p className="text-sm font-black text-zinc-900">Bulk cargo</p>
                  <p className="mt-2 text-xs text-zinc-600">Handling & coordination</p>
                </a>
                <a href="#equipment-rental" className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6 hover:bg-white transition-colors">
                  <p className="text-sm font-black text-zinc-900">Equipment</p>
                  <p className="mt-2 text-xs text-zinc-600">Rental & operators</p>
                </a>
                <a href="#water-supply" className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6 hover:bg-white transition-colors">
                  <p className="text-sm font-black text-zinc-900">Water supply</p>
                  <p className="mt-2 text-xs text-zinc-600">Routes & availability</p>
                </a>
                <a href="#project-logistics" className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6 hover:bg-white transition-colors">
                  <p className="text-sm font-black text-zinc-900">Logistics</p>
                  <p className="mt-2 text-xs text-zinc-600">Planning & delivery</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
