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
    <section className="bg-white pb-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Clients />

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/40">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="lg:col-span-7 p-10 sm:p-12">
              <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
                Feedback
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900">
                Clients choose Growthline for
                <span className="text-[#0056b3]"> execution quality</span>
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-600 text-base sm:text-lg leading-relaxed">
                Our goal is simple: reduce operational friction with reliable
                logistics and responsive site support.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-600 px-8 text-sm font-black text-white hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-900/20"
                >
                  Start a project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 text-sm font-black text-zinc-900 hover:bg-zinc-50 transition-all active:scale-95"
                >
                  View services
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5 p-10 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
              <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#0056b3]/20 blur-3xl" />
              <div className="absolute inset-0 opacity-[0.06]">
                <div className="absolute inset-0" style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.9) 1px, rgba(0,0,0,0) 0)",
                  backgroundSize: "22px 22px",
                }} />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                    Client feedback
                  </p>
                  <div className="flex gap-2">
                    {quotes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveQuote(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === activeQuote ? "w-8 bg-emerald-500" : "w-2 bg-zinc-200"
                        }`}
                        aria-label={`Go to feedback ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-6 relative h-[260px]">
                  {quotes.map((q, index) => {
                    const isActive = index === activeQuote;
                    const offset = (index - activeQuote + quotes.length) % quotes.length;
                    const isNext = offset === 1;
                    const isPrev = offset === quotes.length - 1;

                    const base =
                      "absolute inset-0 rounded-[1.5rem] border border-zinc-200/70 bg-white/95 backdrop-blur p-7 shadow-2xl shadow-zinc-900/10 transition-all duration-700";

                    if (isActive) {
                      return (
                        <div
                          key={q.title}
                          className={`${base} z-30 opacity-100 translate-y-0 scale-100`}
                        >
                          <p className="text-base font-black text-zinc-950">{q.title}</p>
                          <p className="mt-3 text-sm text-zinc-800 leading-relaxed">{q.desc}</p>
                          <div className="mt-6 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                            Verified client
                            <span className="h-px w-10 bg-zinc-200" />
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
                          <p className="text-sm font-black text-zinc-900/80">{q.title}</p>
                          <p className="mt-3 text-sm text-zinc-700/70 leading-relaxed line-clamp-3">
                            {q.desc}
                          </p>
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
                          <p className="text-sm font-black text-zinc-900/70">{q.title}</p>
                          <p className="mt-3 text-sm text-zinc-700/60 leading-relaxed line-clamp-2">
                            {q.desc}
                          </p>
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
