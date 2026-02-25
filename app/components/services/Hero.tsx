"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <Image
          src="/DJI_0698.JPG.jpeg"
          alt="Services background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="flex min-h-[45vh] sm:min-h-[55vh] items-center py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.35em]">
              Our Services
            </p>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
              Industrial solutions built for
              <span className="block text-[#0056b3]">reliability and speed.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
              From bulk cargo handling to equipment rental and project logistics—
              Growthline delivers safety-first execution and responsive support.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-xl bg-[#0056b3] px-8 text-sm font-black text-white hover:bg-[#004494] transition-all active:scale-95 border-b-4 border-[#003f8c] hover:border-[#00357a]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
