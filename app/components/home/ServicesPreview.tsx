"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

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
    image: "/WhatsApp Image 2026-02-26 at 22.40.47.jpeg",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(interval);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-zinc-50 py-24 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0056b3]/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] -z-10" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-[#0056b3] font-black uppercase tracking-[0.3em] text-xs">Expertise</p>
            <h3 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-tight">
              Our <span className="text-[#0056b3]">Services</span>
            </h3>
            <p className="max-w-2xl text-zinc-600 text-lg">
              Specialized solutions designed for industrial efficiency and operational excellence.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollPrev}
              className="group h-12 w-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-[#0056b3] hover:border-[#0056b3] transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={scrollNext}
              className="group h-12 w-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-[#0056b3] hover:border-[#0056b3] transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {items.map((it, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <Link
                  href="/services"
                  className="group relative block h-[500px] rounded-[2.5rem] overflow-hidden bg-white border border-zinc-100 shadow-xl transition-all duration-700"
                >
                  <Image 
                    src={it.image} 
                    alt={it.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className={`w-14 h-14 rounded-2xl ${it.accent} backdrop-blur-md flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <div className={it.color}>{it.icon}</div>
                    </div>
                    
                    <div className="space-y-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h4 className="text-2xl font-black text-white leading-tight">{it.title}</h4>
                      <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 line-clamp-2">
                        {it.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
                          Explore <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === selectedIndex ? "w-12 bg-[#0056b3]" : "w-4 bg-zinc-200"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
