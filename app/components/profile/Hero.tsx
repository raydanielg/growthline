import Link from "next/link";

export default function ProfileHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-white to-white" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
              Company Profile
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black text-zinc-900 leading-tight">
              Growthline Limited
              <span className="text-[#0056b3]">.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-zinc-600 text-base sm:text-lg leading-relaxed">
              Reliable industrial logistics, equipment rental, and comprehensive site
              support services built for performance, safety, and on-time delivery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-600 px-8 text-sm font-black text-white hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-900/20"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 text-sm font-black text-zinc-900 hover:bg-zinc-50 transition-all active:scale-95"
              >
                View services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-2xl shadow-zinc-200/40">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6">
                  <p className="text-2xl font-black text-zinc-900">10+</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                    Years
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6">
                  <p className="text-2xl font-black text-zinc-900">24/7</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                    Support
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6">
                  <p className="text-2xl font-black text-zinc-900">HSE</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                    Compliance
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-6">
                  <p className="text-2xl font-black text-zinc-900">Fleet</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                    Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
