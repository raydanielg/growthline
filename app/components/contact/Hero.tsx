"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactHero() {
  const images = [
    "/trucksimages/DJI_0698.JPG",
    "/trucksimages/DJI_0607.JPG",
    "/trucksimages/JAY_5640.JPG",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-40" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="Contact background"
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex min-h-[45vh] sm:min-h-[55vh] items-center py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.35em]">
              Contact Us
            </p>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
              Get reliable solutions
              <span className="block text-[#0056b3]">for your project.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
              Request a quote, ask about availability, or share your project timeline.
              We respond fast and keep communication clear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
