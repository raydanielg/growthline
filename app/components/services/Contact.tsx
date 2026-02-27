import Link from "next/link";

export default function ServicesContact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="overflow-hidden border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/40">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="lg:col-span-7 p-10 sm:p-16 relative">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#0056b3]" />
              <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">
                Contact
              </p>
              <h2 className="mt-6 text-4xl sm:text-5xl font-black text-zinc-900 leading-[1.1]">
                Need a quote?
                <span className="block text-[#0056b3]">Let’s talk</span>
              </h2>
              <p className="mt-8 text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Tell us what you need and we’ll recommend the best service plan with
                timelines, equipment, and dedicated support.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-[#0056b3] px-10 text-sm font-black text-white hover:bg-[#004494] transition-all active:scale-95 shadow-xl shadow-[#0056b3]/20"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+255712345678"
                  className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-zinc-900 bg-zinc-950 px-10 text-sm font-black text-white hover:bg-zinc-800 transition-all active:scale-95"
                >
                  Call +255 712 345 678
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative bg-zinc-50">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    backgroundImage: "url('/icon-wave-line.png')",
                    backgroundSize: "300px auto",
                    backgroundRepeat: "repeat" 
                  }}
                />
              </div>
              <div className="relative h-full p-10 sm:p-16 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="group relative border border-zinc-100 bg-white p-8 transition-all hover:shadow-xl hover:border-[#0056b3]/20">
                    <div className="absolute top-0 left-0 w-1 h-0 bg-[#0056b3] transition-all group-hover:h-full" />
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Email</p>
                    <p className="mt-2 text-base font-bold text-zinc-900">info@growthlinelogistics.co.tz</p>
                  </div>
                  <div className="group relative border border-zinc-100 bg-white p-8 transition-all hover:shadow-xl hover:border-[#0056b3]/20">
                    <div className="absolute top-0 left-0 w-1 h-0 bg-[#0056b3] transition-all group-hover:h-full" />
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Phone</p>
                    <p className="mt-2 text-base font-bold text-zinc-900 whitespace-nowrap">
                      +255 712 345 678
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="h-1.5 w-16 bg-[#0056b3]" />
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.4em] text-zinc-950">
                    Growthline Logistics
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
