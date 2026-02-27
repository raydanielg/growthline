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
    color: "text-[#0056b3]",
    accent: "bg-[#0056b3]/10",
  },
  {
    title: "Equipment Rental",
    desc: "Modern fleet of excavators, bulldozers, and cranes available with expert operators.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/></svg>
    ),
    image: "/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg",
    color: "text-[#0056b3]",
    accent: "bg-[#0056b3]/10",
  },
  {
    title: "Water Supply & Water Bowser",
    desc: "Reliable industrial water delivery and bowser services for site maintenance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
    ),
    image: "/949888e8-341f-4b7a-a82d-f56f6e04431a.JPG.jpeg",
    color: "text-[#0056b3]",
    accent: "bg-[#0056b3]/10",
  },
  {
    title: "Project Logistics",
    desc: "End-to-end logistics planning and execution for large-scale projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    ),
    image: "/JAY_5613.JPG.jpeg",
    color: "text-[#0056b3]",
    accent: "bg-[#0056b3]/10",
  }
];

export default function ServicesPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-zinc-50 py-24 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0056b3]/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] -z-10" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <p className="text-[#0056b3] font-black uppercase tracking-[0.3em] text-xs">Expertise</p>
          <h3 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-tight">
            Our <span className="text-[#0056b3]">Services</span>
          </h3>
          <p className="max-w-2xl text-zinc-600 text-lg">
            Specialized solutions designed for industrial efficiency and operational excellence.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid gap-8 grid-cols-4">
          {items.map((it, idx) => (
            <Link
              key={it.title}
              href="/services"
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden bg-white border border-zinc-100 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <Image 
                src={it.image} 
                alt={it.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className={`w-14 h-14 rounded-2xl ${it.accent} backdrop-blur-md flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <div className={it.color}>{it.icon}</div>
                </div>
                
                <div className="space-y-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="text-2xl font-black text-white leading-tight">{it.title}</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {it.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <span className="text-white text-xs font-black uppercase tracking-widest">Explore</span>
                    <div className="h-0.5 w-8 bg-[#0056b3] rounded-full"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* MOBILE SLIDER - IMPROVED TRANSITIONS */}
        <div className="lg:hidden relative">
          <div className="relative h-[500px] w-full">
            {items.map((it, index) => (
              <div
                key={it.title}
                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  index === currentSlide 
                    ? "opacity-100 translate-x-0 scale-100 rotate-0" 
                    : index < currentSlide 
                    ? "opacity-0 -translate-x-full scale-90 -rotate-6" 
                    : "opacity-0 translate-x-full scale-90 rotate-6"
                }`}
              >
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
                  <Image src={it.image} alt={it.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end items-center text-center">
                    <div className={`w-16 h-16 rounded-[1.5rem] ${it.accent} backdrop-blur-md flex items-center justify-center mb-6`}>
                      <div className={it.color}>{it.icon}</div>
                    </div>
                    <h4 className="text-3xl font-black text-white mb-4 leading-tight">{it.title}</h4>
                    <p className="text-zinc-300 text-base leading-relaxed mb-10 max-w-sm">
                      {it.desc}
                    </p>
                    <Link 
                      href="/services" 
                      className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-black text-zinc-900 shadow-xl active:scale-95 transition-transform"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INDICATORS */}
          <div className="flex justify-center gap-3 mt-12">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 transition-all duration-700 rounded-full ${
                  i === currentSlide ? "w-10 bg-[#0056b3] shadow-[0_0_15px_rgba(0,86,179,0.45)]" : "w-2 bg-zinc-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
