"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfileHero() {
  const images = [
    "/DJI_0698.JPG.jpeg",
    "/JAY_5640.JPG.jpeg",
    "/JAY_5514.JPG.jpeg",
    "/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg",
  ];

  const headlines = [
    "Industrial logistics",
    "Equipment rental",
    "Site support",
    "Safety-first execution",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentImage((i) => (i + 1) % images.length);
    }, 5000);

    return () => clearInterval(t);
  }, [images.length]);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentText((i) => (i + 1) % headlines.length);
    }, 2600);

    return () => clearInterval(t);
  }, [headlines.length]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src={images[currentImage]}
          alt="Profile background"
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
        <div className="flex min-h-[72vh] items-center py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-white/80 text-xs font-black uppercase tracking-[0.35em]">
              Company Profile
            </p>
            <h1 className="mt-5 text-4xl sm:text-6xl font-black text-white leading-[1.05]">
              Growthline Limited
              <span className="mt-2 block">
                <span className="relative inline-flex">
                  {headlines.map((text, index) => (
                    <span
                      key={text}
                      className={`absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-emerald-300 via-white to-sky-200 bg-clip-text text-transparent transition-all duration-700 ${
                        index === currentText
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3"
                      }`}
                    >
                      {text}.
                    </span>
                  ))}
                  <span className="invisible bg-gradient-to-r from-emerald-300 via-white to-sky-200 bg-clip-text text-transparent">
                    {headlines[0]}.
                  </span>
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">
              Reliable industrial logistics, equipment rental, and comprehensive site support
              built for performance, safety, and on-time delivery.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-black text-zinc-900 hover:bg-emerald-400 hover:text-black transition-all active:scale-95 shadow-2xl shadow-black/30"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur px-8 text-sm font-black text-white hover:bg-white/15 transition-all active:scale-95"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
