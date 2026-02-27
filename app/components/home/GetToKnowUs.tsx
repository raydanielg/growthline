import Image from "next/image";

export default function GetToKnowUs() {
  return (
    <section className="relative bg-zinc-100 py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-6">
            <div className="absolute left-0 top-6 h-28 w-2 rounded-full bg-[#0056b3]" />

            <div className="relative pl-6 sm:pl-10">
              {/* Animated corner lines */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#0056b3] z-20 animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#0056b3] z-20 animate-pulse delay-700" />
              
              <div className="relative overflow-hidden bg-white shadow-2xl shadow-zinc-400/20 group/img">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/trucksimages/JAY_5469.JPG"
                    alt="Growthline Logistics operations"
                    fill
                    className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                    sizes="(max-width: 1024px) 92vw, 520px"
                    priority={false}
                  />
                  {/* Moving scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0056b3]/20 to-transparent h-1/2 w-full -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-10 -left-2 sm:-left-6 w-[72%] z-10">
                <div className="relative overflow-hidden bg-white shadow-2xl shadow-zinc-400/20 group/img2">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src="/trucksimages/DJI_0607.JPG"
                      alt="Growthline Logistics team"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/img2:scale-105"
                      sizes="(max-width: 1024px) 70vw, 420px"
                      priority={false}
                    />
                    {/* Moving scan line effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0056b3]/20 to-transparent h-1/2 w-full -translate-y-full animate-[scan_6s_linear_infinite] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 right-8 hidden sm:block">
                <div className="h-14 w-14 rounded-full bg-[#0056b3] shadow-2xl shadow-black/30 grid place-items-center">
                  <div className="h-0 w-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-white translate-x-0.5" />
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-10 right-8 h-20 w-24 overflow-hidden">
                <svg viewBox="0 0 96 80" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,80 L96,20 L96,80 Z" fill="#0056b3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="max-w-2xl space-y-6">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#0056b3]">
                Get to know us
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 leading-[1.1]">
                Logistics solutions built for
                <span className="block text-zinc-900">project delivery.</span>
              </h2>

              <p className="text-sm sm:text-base font-black text-[#0056b3]">
                Simplify your freight and logistics needs with a disciplined, safety-first approach.
              </p>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Growthline Logistics supports construction and industrial operations with reliable fleet deployment,
                  clear coordination, and consistent execution across demanding environments.
                </p>
                <p>
                  Our work is designed for high-volume movements, long-haul routes, and time-critical schedules—
                  backed by reporting and responsive communication.
                </p>
                <p>
                  We scale to match project needs, keeping safety and uptime at the center of every delivery.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-zinc-200/70 p-6 border border-zinc-300/40">
                  <div className="h-10 w-10 rounded-xl bg-[#0056b3] text-white grid place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M12 22V12"/><path d="M12 12 3.5 7.5"/><path d="M12 12 20.5 7.5"/></svg>
                  </div>
                  <p className="mt-4 text-xs font-black text-zinc-900">We optimize cost</p>
                </div>

                <div className="rounded-2xl bg-zinc-200/70 p-6 border border-zinc-300/40">
                  <div className="h-10 w-10 rounded-xl bg-[#0056b3] text-white grid place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
                  </div>
                  <p className="mt-4 text-xs font-black text-zinc-900">Reduced transit time</p>
                </div>

                <div className="rounded-2xl bg-zinc-200/70 p-6 border border-zinc-300/40">
                  <div className="h-10 w-10 rounded-xl bg-[#0056b3] text-white grid place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                  </div>
                  <p className="mt-4 text-xs font-black text-zinc-900">We deliver on time</p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border-2 border-white bg-zinc-200 overflow-hidden shadow-sm">
                  <div className="relative h-full w-full">
                    <Image
                      src="/logo.png"
                      alt=""
                      fill
                      className="object-contain p-2"
                      sizes="48px"
                      priority={false}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-black text-zinc-900">Growthline Logistics Team</p>
                  <p className="text-xs font-bold text-[#0056b3]">Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
