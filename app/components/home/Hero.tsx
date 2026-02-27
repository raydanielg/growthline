"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
 

const heroVideoSrc = "/myvideo.mp4";
const heroVideoPoster = "/46a71782-e4c9-415f-beee-8c2c0db48a62.JPG.jpeg";

export default function Hero() {
  const headlinePhrases = [
    "Deliver on time.",
    "Built for site demands.",
    "Safety-first execution.",
    "Reliable fleet support.",
  ];
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlinePhase, setHeadlinePhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const intervalMs = 3200;
    const outMs = 260;
    const inMs = 520;

    let intervalId: ReturnType<typeof setInterval> | undefined;
    let outId: ReturnType<typeof setTimeout> | undefined;
    let inId: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      setHeadlinePhase("out");
      outId = setTimeout(() => {
        setHeadlineIndex((i) => (i + 1) % headlinePhrases.length);
        setHeadlinePhase("in");
      }, outMs);
    };

    inId = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, intervalMs);
    }, inMs);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (outId) clearTimeout(outId);
      if (inId) clearTimeout(inId);
    };
  }, [headlinePhrases.length]);

  return (
    <section className="relative h-[56vh] sm:h-[72vh] lg:h-[82vh] w-full overflow-hidden bg-black flex items-center">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center sm:scale-105 opacity-75 sm:opacity-80 contrast-125 saturate-110"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-black/35 sm:bg-black/25"></div>

      {/* CONTENT */}
      <div className="relative h-full mx-auto w-full px-4 sm:px-6 flex items-center py-8 sm:py-0">
        <div className="w-full max-w-4xl space-y-6 sm:space-y-10 relative z-10 text-left">
          <div className="space-y-3 sm:space-y-6">
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Move heavy.
              <span
                key={headlinePhrases[headlineIndex]}
                className={`block transition-all duration-500 will-change-transform ${
                  headlinePhase === "in"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                {headlinePhrases[headlineIndex]}
              </span>
            </h1>
            <p className="text-base sm:text-2xl text-white/90 max-w-2xl mx-0 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              Logistics built for industrial sites—safety-first coordination, dependable fleet, and responsive support.
            </p>
          </div>

          <div className="h-px w-16 bg-white/35" />

          <div className="flex justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Link
              href="/about"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-xl bg-[#0056b3] px-6 sm:px-7 text-[13px] sm:text-sm font-bold text-white hover:bg-[#004999] transition-all active:scale-95 border-b-4 border-[#003f8c] hover:border-[#00357a] whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="block h-[64px] w-full sm:h-[88px]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,78 C180,108 420,118 720,104 C1030,90 1240,60 1440,32 L1440,120 L0,120 Z"
            fill="#f4f4f5"
          />
          <path
            d="M0,78 C180,108 420,118 720,104 C1030,90 1240,60 1440,32"
            fill="none"
            stroke="rgba(0,0,0,0.14)"
            strokeWidth="2"
            strokeDasharray="1 10"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute bottom-0 right-0 h-[64px] w-[180px] sm:h-[88px] sm:w-[240px] overflow-hidden">
          <svg
            viewBox="0 0 240 120"
            className="h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M40,120 L240,52 L240,120 Z" fill="#dc2626" />
          </svg>
        </div>
      </div>
    </section>
  );
}

