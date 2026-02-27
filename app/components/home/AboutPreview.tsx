"use client";

import Image from "next/image";
import Link from "next/link";

const images = [
  "/WhatsApp Image 2026-02-26 at 23.59.59.jpeg",
  "/WhatsApp Image 2026-02-27 at 00.00.49.jpeg",
  "/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg",
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            {/* Animated corner lines */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#0056b3] z-20 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#0056b3] z-20 animate-pulse delay-700" />
            
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 shadow-2xl">
              <Image
                src="/WhatsApp Image 2026-02-26 at 23.59.59.jpeg"
                alt="Growthline Logistics Operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />

              {/* Enhanced Experience Badge */}
              <div className="absolute top-0 right-0 z-40 bg-[#0056b3] p-5 shadow-2xl">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="relative">
                    <span className="text-5xl font-black text-white leading-none">10+</span>
                    <div className="absolute -top-1 -right-2 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="mt-2 flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-100 leading-none">Years of</span>
                    <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white leading-none mt-1.5">Expertise</span>
                  </div>
                </div>
              </div>

              {/* Moving scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0056b3]/20 to-transparent h-1/2 w-full -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em] mb-4">
                Corporate Overview
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-[1.1]">
                About <span className="text-[#0056b3]">Growthline Logistics</span>
              </h2>
            </div>

            <p className="text-lg text-zinc-600 leading-relaxed">
              We are a service-driven company delivering logistics and industrial support for complex operations. 
              Our focus is safety, reliability, and on-time delivery across Tanzania and East Africa.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 border-l-4 border-[#0056b3] space-y-2">
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Our Mission</p>
                <p className="text-sm text-zinc-600">To provide efficient and safe logistics solutions that empower industrial growth.</p>
              </div>
              <div className="p-6 bg-zinc-50 border-l-4 border-zinc-900 space-y-2">
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Our Team</p>
                <p className="text-sm text-zinc-600">Skilled professionals dedicated to operational excellence and site safety.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-900 px-8 text-sm font-black text-white hover:bg-zinc-800 transition-all active:scale-95"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
