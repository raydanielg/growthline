import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/40">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[260px] lg:min-h-[420px]">
              <Image
                src="/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg"
                alt="Need a quote"
                fill
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Fast response
                </div>
              </div>
            </div>

            <div className="p-10 sm:p-14 lg:p-16">
              <div className="max-w-xl space-y-6">
                <div className="space-y-3">
                  <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
                    Need a quote
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
                    Let’s plan your next
                    <span className="text-[#0056b3]"> project</span>
                  </h2>
                  <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                    Share your requirements and timelines. Our team will respond quickly
                    with a tailored solution and a competitive quote.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-600 px-8 text-sm font-black text-white hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
                  >
                    Request a quote
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 text-sm font-black text-zinc-900 hover:bg-zinc-50 transition-all active:scale-95"
                  >
                    View services
                  </Link>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-5">
                    <p className="text-sm font-black text-zinc-900">Email</p>
                    <p className="text-sm text-zinc-600">info@growthline.co.tz</p>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-5">
                    <p className="text-sm font-black text-zinc-900">Call</p>
                    <p className="text-sm text-zinc-600">+255 000 000 000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
