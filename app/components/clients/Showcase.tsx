"use client";

import Clients from "@/app/components/home/Clients";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientsShowcase() {
  const quotes = [
    {
      title: "Reliable delivery",
      desc: "Consistent support with clear communication and well-coordinated timelines.",
    },
    {
      title: "Strong field support",
      desc: "A practical team that responds quickly and solves problems on the ground.",
    },
    {
      title: "Safety-minded execution",
      desc: "Disciplined operations with strong compliance and reporting.",
    },
  ];

  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveQuote((i) => (i + 1) % quotes.length);
    }, 3200);

    return () => clearInterval(t);
  }, [quotes.length]);

  return (
    <section className="bg-white pb-24 relative overflow-hidden">
      {/* Background Pattern */}
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

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="pt-16">
          <Clients />
        </div>

        <div className="mt-24 overflow-hidden border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/40">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="lg:col-span-7 p-10 sm:p-16 relative">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#0056b3]" />
              <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">
                Feedback
              </p>
              <h2 className="mt-6 text-4xl sm:text-5xl font-black text-zinc-900 leading-[1.1]">
                Clients choose Growthline for
                <span className="block text-[#0056b3]">execution quality</span>
              </h2>
              <p className="mt-8 text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Our goal is simple: reduce operational friction with reliable
                logistics and responsive site support.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-[#0056b3] px-10 text-sm font-black text-white hover:bg-[#004494] transition-all active:scale-95 shadow-xl shadow-[#0056b3]/20"
                >
                  Start a project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-zinc-900 bg-zinc-950 px-10 text-sm font-black text-white hover:bg-zinc-800 transition-all active:scale-95"
                >
                  View services
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5 p-10 sm:p-16 overflow-hidden bg-zinc-50">
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
              
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0056b3]">
                    Client feedback
                  </p>
                  <div className="flex gap-2">
                    {quotes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveQuote(i)}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i === activeQuote ? "w-8 bg-[#0056b3]" : "w-2 bg-zinc-300"
                        }`}
                        aria-label={`Go to feedback ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-8 relative h-[280px]">
                  {quotes.map((q, index) => {
                    const isActive = index === activeQuote;
                    const offset = (index - activeQuote + quotes.length) % quotes.length;
                    const isNext = offset === 1;
                    const isPrev = offset === quotes.length - 1;

                    const base =
                      "absolute inset-0 border border-zinc-200/70 bg-white/95 backdrop-blur p-8 shadow-2xl shadow-zinc-900/10 transition-all duration-700";

                    if (isActive) {
                      return (
                        <div
                          key={q.title}
                          className={`${base} z-30 opacity-100 translate-y-0 scale-100`}
                        >
                          <div className="absolute top-0 left-0 h-1 w-full bg-[#0056b3]" />
                          <p className="text-xl font-black text-zinc-950 uppercase tracking-tight">{q.title}</p>
                          <p className="mt-4 text-base text-zinc-600 leading-relaxed font-medium">{q.desc}</p>
                          <div className="mt-8 flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                            Verified client
                            <div className="h-px w-12 bg-zinc-200" />
                          </div>
                        </div>
                      );
                    }

                    if (isNext) {
                      return (
                        <div
                          key={q.title}
                          className={`${base} pointer-events-none z-20 opacity-60 translate-y-8 scale-[0.98]`}
                          aria-hidden="true"
                        >
                          <p className="text-lg font-black text-zinc-900/80">{q.title}</p>
                        </div>
                      );
                    }

                    if (isPrev) {
                      return (
                        <div
                          key={q.title}
                          className={`${base} pointer-events-none z-10 opacity-30 -translate-y-8 scale-[0.96]`}
                          aria-hidden="true"
                        >
                          <p className="text-lg font-black text-zinc-900/70">{q.title}</p>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={q.title}
                        className={`${base} pointer-events-none z-0 opacity-0 translate-y-10 scale-[0.94]`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
