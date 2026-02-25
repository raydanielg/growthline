"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CapacityCapabilities() {
  const items = [
    {
      title: "Fleet readiness",
      desc: "Preventive maintenance schedules and daily checks to keep units field-ready.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11"/><path d="M16 17h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1"/><path d="M7 17a2 2 0 1 0 4 0"/><path d="M17 17a2 2 0 1 0 4 0"/></svg>
      ),
      accent: "bg-blue-50 text-[#0056b3]",
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
      accent: "bg-blue-50 text-[#0056b3]",
    },
    {
      title: "Planning & coordination",
      desc: "Clear timelines, route planning, and documentation alignment across stakeholders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      ),
      accent: "bg-blue-50 text-[#0056b3]",
    },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-zinc-50 py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: "url('/icon-wave-line.png')",
              backgroundSize: "400px auto",
              backgroundRepeat: "repeat" 
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="relative p-10 border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/60">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#0056b3]" />
              <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">
                Advanced Capacity
              </p>
              <h2 className="mt-6 text-4xl sm:text-5xl font-black text-zinc-900 leading-[1.1]">
                High-performance <br/>site solutions
              </h2>
              <p className="mt-6 text-zinc-600 text-base sm:text-lg leading-relaxed font-medium">
                Our capacity is defined by a modern fleet, disciplined maintenance, and a safety-first operational culture that ensures zero-delay execution.
              </p>
            </div>

            <div className="grid gap-6">
              {items.map((i, idx) => (
                <div
                  key={i.title}
                  className={`group relative border border-zinc-100 bg-white p-8 transition-all duration-500 hover:shadow-xl hover:border-[#0056b3]/20 ${
                    mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute top-0 left-0 h-full w-1 bg-[#0056b3] transition-all duration-500 group-hover:w-2" />
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 shrink-0 bg-blue-50 text-[#0056b3] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      {i.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-900">{i.title}</h3>
                      <p className="mt-2 text-sm text-zinc-500 font-medium leading-relaxed">{i.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative space-y-6">
              {/* Main Image with decorative border */}
              <div className="relative group overflow-hidden border border-zinc-200 bg-white shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-blue-500/10">
                <div className="absolute top-0 left-0 h-1.5 w-full bg-[#0056b3] z-10" />
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/trucksimages/DJI_0698.JPG"
                    alt="Main fleet operations"
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-white text-xl font-black leading-tight tracking-tight">
                    Primary Operations Hub
                  </p>
                  <p className="mt-2 text-white/70 text-xs font-bold uppercase tracking-widest">Growthline Execution</p>
                </div>
              </div>

              {/* Secondary Images Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group overflow-hidden border border-zinc-200 bg-white shadow-xl transition-all duration-700 hover:-translate-y-2">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/trucksimages/DJI_0607.JPG"
                      alt="Fleet readiness"
                      fill
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-115"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-[#0056b3]/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="absolute top-0 left-0 h-1 w-0 bg-[#0056b3] transition-all duration-500 group-hover:w-full" />
                </div>

                <div className="relative group overflow-hidden border border-zinc-200 bg-white shadow-xl transition-all duration-700 hover:-translate-y-2">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/trucksimages/JAY_5640.JPG"
                      alt="Site support"
                      fill
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-115"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-[#0056b3]/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="absolute top-0 left-0 h-1 w-0 bg-[#0056b3] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>

              {/* Decorative Pulse Elements */}
              <div className="absolute -top-12 -right-12 h-48 w-48 bg-[#0056b3]/5 blur-3xl animate-pulse" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 bg-[#0056b3]/10 blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
