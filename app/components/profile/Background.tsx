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
    <section id="background" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-white to-white" />
        <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-[#0056b3]/10 blur-3xl" />
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
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="order-1 lg:order-none lg:col-span-5">
            <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
              Overview
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
              Built for the field.
              <span className="text-[#0056b3]"> Proven in execution</span>
            </h2>
            <p className="mt-5 text-zinc-600 text-base sm:text-lg leading-relaxed">
              Growthline Limited supports industrial operations with reliable logistics,
              equipment readiness, and responsive site support. We focus on safety-first
              execution, clear communication, and consistent delivery timelines.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Industrial logistics & site support",
                "Equipment rental & deployment",
                "HSE-first execution & reporting",
                "Planning, coordination & documentation",
                "Reliable response and on-time delivery",
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
          </div>

          <div className="order-2 lg:order-none lg:col-span-7">
            <div
              className="relative mx-auto h-[380px] sm:h-[420px] w-full max-w-[680px] lg:max-w-[560px] flex items-end lg:ml-auto"
              onClick={advance}
              onTouchStart={advance}
              role="button"
              tabIndex={0}
              aria-label="Change images"
            >
              <div className="absolute -top-10 left-10 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-[#0056b3]/20 blur-2xl" />

              <div
                className="group absolute left-1/2 lg:left-auto lg:right-0 bottom-4 z-30 w-[94%] sm:w-[78%] lg:w-[92%] -translate-x-1/2 lg:translate-x-0 rotate-[-6deg] rounded-[2rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/15 ring-1 ring-black/5 transition-transform duration-700 hover:-translate-y-2 hover:rotate-[-4deg]"
              >
                <div className="relative h-[260px] sm:h-[300px] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={images[current]}
                    alt="Operations"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                </div>
              </div>

              <div
                className="group absolute left-1/2 lg:left-auto lg:right-0 bottom-4 z-20 w-[94%] sm:w-[78%] lg:w-[92%] -translate-x-1/2 lg:translate-x-0 lg:-translate-x-6 rotate-[2deg] -translate-y-[18px] scale-[0.96] rounded-[2rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10 ring-1 ring-black/5 transition-transform duration-700 opacity-90"
                aria-hidden="true"
              >
                <div className="relative h-[260px] sm:h-[300px] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={images[(current + 1) % images.length]}
                    alt="Field team"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                </div>
              </div>

              <div
                className="group absolute left-1/2 lg:left-auto lg:right-0 bottom-4 z-10 w-[94%] sm:w-[78%] lg:w-[92%] -translate-x-1/2 lg:translate-x-0 lg:-translate-x-12 rotate-[10deg] -translate-y-[34px] scale-[0.92] rounded-[2rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10 ring-1 ring-black/5 transition-transform duration-700 opacity-80"
                aria-hidden="true"
              >
                <div className="relative h-[260px] sm:h-[300px] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={images[(current + 2) % images.length]}
                    alt="Equipment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="rounded-2xl border border-zinc-100 bg-white/80 backdrop-blur p-6 shadow-sm"
                >
                  <p className="text-sm font-black text-zinc-900">{p.title}</p>
                  <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
