"use client";

import { useEffect, useState } from "react";

export default function CapacityCapabilities() {
  const items = [
    {
      title: "Fleet readiness",
      desc: "Preventive maintenance schedules and daily checks to keep units field-ready.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11"/><path d="M16 17h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1"/><path d="M7 17a2 2 0 1 0 4 0"/><path d="M17 17a2 2 0 1 0 4 0"/></svg>
      ),
      accent: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "Operators & supervision",
      desc: "Experienced operators supported by practical supervision and dispatch.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16"/><path d="M8 6h4"/><path d="M8 10h4"/><path d="M8 14h4"/><path d="M8 18h4"/><path d="M20 20V8a2 2 0 0 0-2-2h-2"/></svg>
      ),
      accent: "bg-blue-50 text-[#0056b3]",
    },
    {
      title: "Safety compliance",
      desc: "HSE-first execution with toolbox talks, permits support, and incident reporting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 7v6c0 5 3.8 9.4 9 11 5.2-1.6 9-6 9-11V7z"/><path d="m9 12 2 2 4-4"/></svg>
      ),
      accent: "bg-amber-50 text-amber-700",
    },
    {
      title: "Planning & coordination",
      desc: "Clear timelines, route planning, and documentation alignment across stakeholders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      ),
      accent: "bg-zinc-100 text-zinc-900",
    },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-white pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-white to-white" />
        <div className="absolute inset-0 opacity-[0.14]">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-transparent to-[#0056b3]/30" />
        </div>
        <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-emerald-500/12 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-[#0056b3]/12 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.9) 1px, rgba(0,0,0,0) 0)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] border border-white/60 bg-white/75 backdrop-blur p-8 shadow-2xl shadow-zinc-200/40">
              <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
                Strength
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
                What we bring to every site
              </h2>
              <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
                Capacity is more than equipment—it’s process, people, and discipline.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]" />
                <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                  Growthline Limited
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {items.map((i, idx) => (
                <div
                  key={i.title}
                  className={`transition-all duration-700 ease-out ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-white to-[#0056b3]/8" />
                    </div>

                    <div className="relative flex items-start justify-between gap-6">
                      <div>
                        <p className="text-lg font-black text-zinc-900">{i.title}</p>
                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                          {i.desc}
                        </p>
                      </div>
                      <div
                        className={`h-12 w-12 shrink-0 rounded-2xl ${i.accent} flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        {i.icon}
                      </div>
                    </div>

                    <div className="relative mt-6 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-700 group-hover:w-24" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
