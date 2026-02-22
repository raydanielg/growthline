import Image from "next/image";

export default function ProfileBackground() {
  return (
    <section id="background" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/6amMart-Lines-1024x362.webp"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-[#0056b3]/10" />
              <Image
                src="/construction-worker-portrait-with-hard-hat-trucks-background_1222783-31158.jpg"
                alt="Company background"
                width={900}
                height={900}
                className="relative h-[360px] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
              Background
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
              Built for the field.
              <span className="text-[#0056b3]"> Proven in execution</span>
            </h2>
            <p className="mt-5 text-zinc-600 text-base sm:text-lg leading-relaxed">
              Growthline Limited was founded to solve real operational challenges on
              the ground—moving people, equipment, and materials safely and on time.
              Our systems are designed around reliability, compliance, and
              responsive client support.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-zinc-900">Reliability</p>
                <p className="mt-2 text-sm text-zinc-600">
                  Operational readiness and consistent delivery.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-zinc-900">Safety</p>
                <p className="mt-2 text-sm text-zinc-600">
                  HSE-first mindset in every assignment.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-zinc-900">Support</p>
                <p className="mt-2 text-sm text-zinc-600">
                  Fast communication and practical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
