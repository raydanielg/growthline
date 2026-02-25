"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesHero() {
  const images = [
    "/DJI_0698.JPG.jpeg",
    "/JAY_5640.JPG.jpeg",
    "/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg",
    "/construction-worker-portrait-with-hard-hat-trucks-background_1222783-31158.jpg",
  ];

  const highlights = [
    { title: "Bulk cargo", desc: "Handling & coordination", href: "#bulk-cargo" },
    { title: "Equipment", desc: "Rental & operators", href: "#equipment-rental" },
    { title: "Water supply", desc: "Routes & availability", href: "#water-supply" },
    { title: "Logistics", desc: "Planning & delivery", href: "#project-logistics" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentImage((i) => (i + 1) % images.length);
    }, 5000);

    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src={images[currentImage]}
          alt="Services background"
          fill
          priority
          className="object-cover transition-opacity duration-1000"
          style={{ opacity: 0.6, transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
        <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute -bottom-36 -right-24 h-96 w-96 rounded-full bg-[#0056b3]/25 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid min-h-[62vh] sm:min-h-[78vh] lg:min-h-[85vh] items-center gap-8 sm:gap-10 py-12 sm:py-16 lg:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-white/80 text-xs font-black uppercase tracking-[0.35em]">
              Services
            </p>
            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-6xl font-black text-white leading-[1.05]">
              Industrial services built for
              <span className="block bg-gradient-to-r from-emerald-300 via-white to-sky-200 bg-clip-text text-transparent">
                reliability and speed.
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-white/80 text-sm sm:text-lg leading-relaxed">
              From bulk cargo handling to equipment rental, water supply, and project logistics—
              Growthline delivers safety-first execution, strong coordination, and responsive support.
            </p>

            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#contact"
                className="inline-flex h-11 sm:h-14 items-center justify-center rounded-xl sm:rounded-2xl bg-white px-6 sm:px-8 text-[13px] sm:text-sm font-black text-zinc-900 hover:bg-emerald-400 hover:text-black transition-all active:scale-95 shadow-2xl shadow-black/30"
              >
                Request a quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-11 sm:h-14 items-center justify-center rounded-xl sm:rounded-2xl border border-white/25 bg-white/10 backdrop-blur px-6 sm:px-8 text-[13px] sm:text-sm font-black text-white hover:bg-white/15 transition-all active:scale-95"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur p-4 sm:p-8 shadow-2xl shadow-black/30">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/70">
                Explore
              </p>
              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((h) => (
                  <a
                    key={h.title}
                    href={h.href}
                    className="group rounded-2xl border border-white/10 bg-white/10 p-4 sm:p-5 hover:bg-white/15 transition-all"
                  >
                    <p className="text-sm font-black text-white">{h.title}</p>
                    <p className="mt-2 text-xs text-white/70">{h.desc}</p>
                    <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-emerald-400 to-sky-200 transition-all duration-700 group-hover:w-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
