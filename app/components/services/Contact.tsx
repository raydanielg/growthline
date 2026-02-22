import Link from "next/link";

export default function ServicesContact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/40">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="lg:col-span-7 p-10 sm:p-12">
              <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
                Contact
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
                Need a quote?
                <span className="text-[#0056b3]"> Let’s talk</span>
              </h2>
              <p className="mt-5 text-zinc-600 text-base sm:text-lg leading-relaxed">
                Tell us what you need and we’ll recommend the best service plan with
                timelines, equipment, and support.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-600 px-8 text-sm font-black text-white hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-900/20"
                >
                  Contact us
                </Link>
                <a
                  href="tel:+255000000000"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 text-sm font-black text-zinc-900 hover:bg-zinc-50 transition-all active:scale-95"
                >
                  Call +255 000 000 000
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-white to-[#0056b3]/15" />
              <div className="relative h-full p-10 sm:p-12 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="rounded-2xl border border-zinc-100 bg-white/70 backdrop-blur p-6">
                    <p className="text-sm font-black text-zinc-900">Email</p>
                    <p className="mt-2 text-sm text-zinc-600">info@growthline.co.tz</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 bg-white/70 backdrop-blur p-6">
                    <p className="text-sm font-black text-zinc-900">Phone</p>
                    <p className="mt-2 text-sm text-zinc-600 whitespace-nowrap">
                      +255 000 000 000
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 bg-white/70 backdrop-blur p-6">
                    <p className="text-sm font-black text-zinc-900">Response time</p>
                    <p className="mt-2 text-sm text-zinc-600">Same day (business hours)</p>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]" />
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                    Growthline Limited
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
