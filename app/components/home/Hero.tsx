"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const heroVideoSrc = "/myvideo.mp4";
const heroVideoPoster = "/46a71782-e4c9-415f-beee-8c2c0db48a62.JPG.jpeg";

const headlines = [
  { text: "Reliable Bulk Cargo Handling", color: "text-emerald-400" },
  { text: "Professional Equipment Rental", color: "text-blue-400" },
  { text: "Quality Water Supply Services", color: "text-amber-400" },
  { text: "Expert Project Logistics", color: "text-emerald-400" }
];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover scale-105 opacity-60"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroVideoPoster}
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative h-full mx-auto w-full px-6 flex items-center">
        {/* RGB AMBIENT GLOW */}
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-[#0056b3]/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        <div className="max-w-4xl space-y-10 relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter min-h-[1.2em]">
              <span className="block text-emerald-500 text-lg sm:text-2xl font-bold uppercase tracking-[0.3em] mb-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                Growthline Limited
              </span>
              <div className="relative overflow-hidden">
                {headlines.map((item, index) => (
                  <span
                    key={item.text}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${item.color} ${
                      index === currentText 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 -translate-y-12"
                    }`}
                  >
                    {item.text}
                  </span>
                ))}
                {/* Invisible spacer to maintain height */}
                <span className="invisible block">{headlines[0].text}</span>
              </div>
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-300 max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              Your premier partner for industrial logistics, heavy haulage, and site support services across East Africa.
            </p>
          </div>

          <div className="flex flex-row items-center gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Link
              href="/about"
              className="flex-1 sm:flex-none inline-flex h-14 sm:h-16 items-center justify-center rounded-2xl bg-emerald-600 px-6 sm:px-10 text-[15px] sm:text-base font-bold text-white hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-900/40 active:scale-95 whitespace-nowrap"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="flex-1 sm:flex-none inline-flex h-14 sm:h-16 items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-xl px-6 sm:px-10 text-[15px] sm:text-base font-bold text-white hover:bg-white hover:text-black transition-all active:scale-95 gap-3 whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE TO WHITE - IMPROVED STYLE */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-100 z-20"></div>
    </section>
  );
}

