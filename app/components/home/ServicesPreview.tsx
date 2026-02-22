"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const items = [
  {
    title: "Bulk Cargo Handling",
    desc: "Comprehensive loading, unloading, and transport solutions for all types of bulk materials.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9h20M2 15h20M10 9V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4M10 15v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4"/></svg>
    ),
    image: "/46a71782-e4c9-415f-beee-8c2c0db48a62.JPG.jpeg",
    color: "text-emerald-600"
  },
  {
    title: "Equipment Rental",
    desc: "Modern fleet of excavators, bulldozers, and cranes available with expert operators.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/></svg>
    ),
    image: "/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg",
    color: "text-[#0056b3]"
  },
  {
    title: "Water Supply",
    desc: "Reliable industrial water delivery and bowser services for site maintenance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
    ),
    image: "/949888e8-341f-4b7a-a82d-f56f6e04431a.JPG.jpeg",
    color: "text-amber-600"
  },
  {
    title: "Project Logistics",
    desc: "End-to-end logistics planning and execution for large-scale projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    ),
    image: "/JAY_5613.JPG.jpeg",
    color: "text-emerald-600"
  }
];

export default function ServicesPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-zinc-900">
            Our <span className="text-[#0056b3]">Services</span>
          </h3>
          <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid gap-6 grid-cols-4">
          {items.map((it) => (
            <Link
              key={it.title}
              href="/services"
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image src={it.image} alt={it.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 ${it.color}`}>
                  {it.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{it.title}</h4>
                <p className="text-zinc-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {it.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* MOBILE AUTO-SLIDER */}
        <div className="lg:hidden relative h-[450px]">
          {items.map((it, index) => (
            <div
              key={it.title}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image src={it.image} alt={it.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full text-center flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 ${it.color}`}>
                    {it.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4">{it.title}</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8">
                    {it.desc}
                  </p>
                  <Link href="/services" className="px-8 py-3 bg-[#0056b3] text-white rounded-xl text-sm font-bold">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* SLIDER DOTS */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === currentSlide ? "w-8 bg-emerald-500" : "w-2 bg-zinc-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
