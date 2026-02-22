"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CertificatesHero() {
  const images = [
    "/46a71782-e4c9-415f-beee-8c2c0db48a62.JPG.jpeg",
    "/IMG_2080.JPG",
    "/IMG_2081.JPG",
    "/IMG_2082.JPG",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      {/* IMAGE SLIDER */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentImage ? "opacity-60" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${idx}`}
            fill
            className="object-cover scale-110"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute top-1/4 -right-24 h-[600px] w-[600px] rounded-full bg-[#0056b3]/20 blur-[150px] animate-pulse delay-700" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-emerald-400 text-xs font-black uppercase tracking-[0.3em] mb-4">
              Certificates
            </p>
            <h1 className="text-4xl sm:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
              Compliance
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                You Can Trust
              </span>
            </h1>
            <div className="mt-8 h-1.5 w-24 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            <p className="mt-8 text-white/90 text-lg sm:text-2xl leading-relaxed max-w-2xl font-medium">
              Our documentation and operational standards support safe execution and
              reliable site delivery across all sectors.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-emerald-600 px-8 text-[15px] font-black text-white hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-900/40 group"
              >
                Request documents
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                href="/profile"
                className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-8 text-[15px] font-black text-white hover:bg-white/20 transition-all active:scale-95 backdrop-blur-md group"
              >
                Company profile
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:rotate-45 transition-transform"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
