"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactHero() {
  const heroImageSrc = "/46a71782-e4c9-415f-beee-8c2c0db48a62.JPG.jpeg";

  const headlines = [
    { text: "fast quotes", color: "text-emerald-300" },
    { text: "clear timelines", color: "text-sky-300" },
    { text: "reliable delivery", color: "text-amber-300" },
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentHeadline((p) => (p + 1) % headlines.length);
    }, 2600);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-28">
      {/* BACKGROUND IMAGE */}
      <Image
        src={heroImageSrc}
        alt="Contact background"
        fill
        priority
        className="object-cover scale-110 opacity-40"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/90 via-black/70 to-black/95" />

      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-[#0056b3]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid min-h-[55vh] items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-emerald-300 text-xs font-black uppercase tracking-[0.3em]">
              Contact
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white leading-tight">
              Get
              <span className={`ml-2 ${headlines[currentHeadline].color} transition-colors duration-500`}>
                {headlines[currentHeadline].text}
              </span>
              <span className="text-white"> for your project</span>
            </h1>
            <p className="mt-5 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">
              Request a quote, ask about availability, or share your project timeline.
              We respond fast and keep communication clear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
