"use client";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700"
            >
              <div className="flex min-h-[180px]">
                <div className="relative w-[40%] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/0 to-transparent" />
                </div>

                <div className="w-[60%] p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-11 w-11 rounded-2xl ${c.accent} flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-lg font-black text-zinc-900">{c.name}</p>
                      <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-700 group-hover:w-12" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-zinc-500 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {c.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-zinc-400 opacity-0 translate-y-2 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
                    Learn more
                    <span className="h-px w-10 bg-zinc-200 group-hover:bg-emerald-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE AUTO-SLIDER */}
        <div className="lg:hidden relative h-[240px]">
          {clients.map((c, index) => (
            <div
              key={c.name}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="h-full rounded-[2rem] border border-zinc-100 bg-white shadow-xl overflow-hidden">
                <div className="flex h-full">
                  <div className="w-[38%] relative">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />
                  </div>
                  <div className="w-[62%] p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-2xl ${c.accent} flex items-center justify-center`}>
                        {c.icon}
                      </div>
                      <p className="text-lg font-black text-zinc-900">{c.name}</p>
                    </div>
                    <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {clients.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === currentSlide ? "w-8 bg-emerald-500" : "w-2 bg-zinc-200"
                }`}
                aria-label={`Go to client ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
