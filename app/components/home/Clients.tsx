"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ClientItem {
  name: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  image: string;
}

const clients: ClientItem[] = [
  {
    name: "Mining",
    desc: "Site logistics, heavy haulage and camp support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4 8 4v14" />
        <path d="M9 21v-8h6v8" />
      </svg>
    ),
    accent: "text-emerald-600 bg-emerald-50",
    image: "/46a71782-e4c9-415f-beee-8c2c0db48a62.JPG.jpeg",
  },
  {
    name: "Construction",
    desc: "Equipment rental and project supply chain support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M6 20V9" />
        <path d="M18 20V4" />
        <path d="M6 9h6" />
        <path d="M12 9v11" />
      </svg>
    ),
    accent: "text-[#0056b3] bg-blue-50",
    image: "/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg",
  },
  {
    name: "Energy",
    desc: "Reliable transport for critical assets and spares.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
      </svg>
    ),
    accent: "text-amber-600 bg-amber-50",
    image: "/male-bus-driver-portrait_23-2151582632.jpg",
  },
  {
    name: "Manufacturing",
    desc: "Bulk cargo handling and warehousing coordination.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 4V8l-7 4V4H4a2 2 0 0 0-2 2z" />
      </svg>
    ),
    accent: "text-purple-600 bg-purple-50",
    image: "/construction-worker-portrait-with-hard-hat-trucks-background_1222783-31158.jpg",
  },
  {
    name: "Government",
    desc: "Compliant, safety-first operational support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 3 7v2h18V7z" />
        <path d="M5 10v10" />
        <path d="M9 10v10" />
        <path d="M15 10v10" />
        <path d="M19 10v10" />
        <path d="M3 20h18" />
      </svg>
    ),
    accent: "text-zinc-900 bg-zinc-100",
    image: "/JAY_5613.JPG.jpeg",
  },
];

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pausedUntil, setPausedUntil] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (Date.now() < pausedUntil) return prev;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 700);
        return (prev + 1) % clients.length;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [pausedUntil]);

  const active = clients[currentSlide];
  const advance = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPausedUntil(Date.now() + 8000);
    setCurrentSlide((i) => (i + 1) % clients.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-14 space-y-4">
          <h2 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs">
            Trusted By
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-zinc-900">
            Industries We <span className="text-[#0056b3]">Serve</span>
          </h3>
          <p className="max-w-2xl text-zinc-600">
            We partner with teams that value reliability, safety, and timely delivery.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="relative z-0 lg:col-span-5">
            <div
              className="relative mx-auto h-[360px] sm:h-[420px] w-full max-w-[680px] lg:mx-0 lg:max-w-[520px] flex items-end"
              onClick={advance}
              onTouchStart={advance}
              role="button"
              tabIndex={0}
              aria-label="Change industry images"
            >
              <div className="absolute -top-10 left-10 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-[#0056b3]/20 blur-2xl" />

              <div className="absolute inset-0 opacity-[0.06]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.9) 1px, rgba(0,0,0,0) 0)",
                    backgroundSize: "22px 22px",
                  }}
                />
              </div>

              {clients.map((client, index) => {
                const position = (index - currentSlide + clients.length) % clients.length;
                // Only show active and next 2 cards in stack
                if (position > 2 && position < clients.length - 1) return null;

                const isTransitioningOut = isAnimating && position === clients.length - 1;

                return (
                  <div
                    key={client.name}
                    className={`group absolute left-1/2 bottom-4 w-[94%] sm:w-[78%] lg:w-[88%] -translate-x-1/2 rounded-[2rem] border border-zinc-200 bg-white shadow-2xl transition-all duration-700 ease-in-out ring-1 ring-black/5 ${
                      position === 0
                        ? "z-30 rotate-[-6deg] opacity-100 translate-y-0 scale-100"
                        : position === 1
                        ? "z-20 rotate-[2deg] -translate-y-[18px] lg:-translate-x-5 scale-[0.96] opacity-90"
                        : position === 2
                        ? "z-10 rotate-[10deg] -translate-y-[34px] lg:-translate-x-10 scale-[0.92] opacity-80"
                        : isTransitioningOut
                        ? "z-40 rotate-[-15deg] -translate-y-[120%] opacity-0 scale-110 pointer-events-none"
                        : "z-0 opacity-0 scale-75 pointer-events-none"
                    }`}
                  >
                    <div className="relative h-[260px] sm:h-[300px] w-full overflow-hidden rounded-[2rem]">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 94vw, 560px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {clients.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPausedUntil(Date.now() + 8000);
                    setCurrentSlide(i);
                  }}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i === currentSlide ? "w-8 bg-emerald-500" : "w-2 bg-zinc-200"
                  }`}
                  aria-label={`Go to industry ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 lg:col-span-7">
            <div className="rounded-[2rem] border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/40 overflow-hidden">
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-12 w-12 rounded-2xl ${active.accent} flex items-center justify-center transition-transform duration-700`}
                  >
                    {active.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                      Industry
                    </p>
                    <h4 className="mt-1 text-2xl sm:text-3xl font-black text-zinc-900">
                      {active.name}
                    </h4>
                  </div>
                </div>

                <p className="mt-5 text-zinc-600 text-base sm:text-lg leading-relaxed">
                  {active.desc} Our work focuses on safety-first execution, clear coordination,
                  and on-time delivery across demanding operating environments.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    "Planning, permits and coordination",
                    "Equipment, fleet and crew readiness",
                    "HSE-first execution and reporting",
                    "Reliable response and continuous support",
                  ].map((t) => (
                    <div
                      key={t}
                      className="flex items-start gap-3 rounded-2xl border border-zinc-100 bg-white/70 backdrop-blur px-5 py-4 shadow-sm"
                    >
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]" />
                      <p className="text-sm font-bold text-zinc-700 leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {["Reliability", "Safety", "Coordination", "Readiness"].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-6"
                    >
                      <p className="text-sm font-black text-zinc-900">{t}</p>
                      <p className="mt-2 text-sm text-zinc-600">
                        Practical execution standards that reduce operational friction.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
