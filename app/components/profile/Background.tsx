"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfileBackground() {
  const images = [
    "/DJI_0698.JPG.jpeg",
    "/JAY_5640.JPG.jpeg",
    "/JAY_5514.JPG.jpeg",
    "/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg",
    "/construction-worker-portrait-with-hard-hat-trucks-background_1222783-31158.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [pausedUntil, setPausedUntil] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((i) => {
        if (Date.now() < pausedUntil) return i;
        return (i + 1) % images.length;
      });
    }, 3500);

    return () => clearInterval(t);
  }, [images.length, pausedUntil]);

  const advance = () => {
    setPausedUntil(Date.now() + 8000);
    setCurrent((i) => (i + 1) % images.length);
  };

  return (
    <section id="background" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-[#0056b3]/5 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-[#0056b3]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
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
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="order-1 lg:order-none lg:col-span-5">
            <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">
              Company Overview
            </p>
            <h2 className="mt-6 text-4xl sm:text-5xl font-black text-zinc-900 leading-[1.1]">
              Built for the field.
              <span className="block text-[#0056b3]">Proven in execution</span>
            </h2>
            <p className="mt-8 text-zinc-600 text-base sm:text-lg leading-relaxed">
              Growthline Limited supports industrial operations with reliable logistics,
              equipment readiness, and responsive site support. We focus on safety-first
              execution, clear communication, and consistent delivery timelines.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Industrial logistics & site support",
                "Equipment rental & deployment",
                "HSE-first execution & reporting",
                "Planning, coordination & documentation",
                "Reliable response and on-time delivery",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center border border-zinc-100 bg-white shadow-sm transition-colors group-hover:bg-[#0056b3] group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="text-sm font-bold text-zinc-700 tracking-tight">{t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-none lg:col-span-7">
            <div
              className="relative mx-auto h-[400px] sm:h-[460px] w-full max-w-[680px] lg:max-w-[600px] flex items-end lg:ml-auto"
              onClick={advance}
              onTouchStart={advance}
              role="button"
              tabIndex={0}
              aria-label="Change images"
            >
              <div className="absolute -top-10 left-10 h-24 w-24 rounded-full bg-[#0056b3]/10 blur-2xl" />
              <div className="absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-[#0056b3]/20 blur-2xl" />

              <div
                className="group absolute left-1/2 lg:left-auto lg:right-0 bottom-4 z-30 w-[94%] sm:w-[82%] lg:w-[94%] -translate-x-1/2 lg:translate-x-0 rotate-[-4deg] border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/20 transition-all duration-700 hover:-translate-y-4 hover:rotate-0"
              >
                <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden">
                  <Image
                    src={images[current]}
                    alt="Operations"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              <div
                className="group absolute left-1/2 lg:left-auto lg:right-0 bottom-4 z-20 w-[94%] sm:w-[82%] lg:w-[94%] -translate-x-1/2 lg:translate-x-0 lg:-translate-x-8 rotate-[2deg] -translate-y-[24px] scale-[0.96] border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10 transition-transform duration-700 opacity-90"
                aria-hidden="true"
              >
                <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden">
                  <Image
                    src={images[(current + 1) % images.length]}
                    alt="Field team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className="group absolute left-1/2 lg:left-auto lg:right-0 bottom-4 z-10 w-[94%] sm:w-[82%] lg:w-[94%] -translate-x-1/2 lg:translate-x-0 lg:-translate-x-16 rotate-[8deg] -translate-y-[48px] scale-[0.92] border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10 transition-transform duration-700 opacity-80"
                aria-hidden="true"
              >
                <div className="relative h-[280px] sm:h-[340px] w-full overflow-hidden">
                  <Image
                    src={images[(current + 2) % images.length]}
                    alt="Equipment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Reliability",
                  desc: "Operational readiness and consistent delivery.",
                },
                {
                  title: "Safety",
                  desc: "HSE-first mindset in every assignment.",
                },
                {
                  title: "Support",
                  desc: "Fast communication and practical solutions.",
                },
                {
                  title: "Coordination",
                  desc: "Clear plans, routes, and stakeholder alignment.",
                },
                {
                  title: "Reporting",
                  desc: "Updates that help teams make decisions quickly.",
                },
                {
                  title: "Readiness",
                  desc: "Teams and equipment prepared for field execution.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="relative group border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#0056b3]/20 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#0056b3] transition-all duration-300 group-hover:h-full" />
                  <p className="text-sm font-black text-zinc-900 uppercase tracking-tight">{p.title}</p>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
