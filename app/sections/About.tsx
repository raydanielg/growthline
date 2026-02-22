"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-white">
      {/* BACKGROUND IMAGE WITH LOW OPACITY */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Image
          src="/6amMart-Lines-1024x362.webp"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE SIDE */}
          <div
            className={`relative group transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-zinc-100 shadow-2xl">
              <Image
                src="/JAY_5469.JPG.jpeg"
                alt="Growthline Team"
                width={800}
                height={600}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* FLOATING STAT CARD */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-zinc-50 hidden md:block animate-bounce-slow">
              <div className="text-4xl font-black text-emerald-600 mb-1">10+</div>
              <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div
            className={`space-y-8 transition-all duration-[900ms] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-sm">
                About Growthline Limited
              </h2>
              <h3 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-tight">
                Pioneering Excellence in <span className="text-[#0056b3]">Industrial Logistics</span>
              </h3>
            </div>
            
            <p className="text-lg text-zinc-600 leading-relaxed">
              Founded on the principles of reliability and efficiency, Growthline Limited has emerged as a leader in providing comprehensive site support and logistics solutions across Tanzania and East Africa.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div
                className={`flex gap-4 transition-all duration-[900ms] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Safety First</h4>
                  <p className="text-sm text-zinc-500">Uncompromising commitment to safety and compliance in every project.</p>
                </div>
              </div>
              <div
                className={`flex gap-4 transition-all duration-[900ms] delay-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0056b3]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Modern Fleet</h4>
                  <p className="text-sm text-zinc-500">State-of-the-art equipment and machinery for any scale of operations.</p>
                </div>
              </div>
            </div>

            <div
              className={`pt-4 transition-all duration-[900ms] delay-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/about"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-zinc-900 px-8 text-base font-bold text-white hover:bg-zinc-800 transition-all active:scale-95 shadow-lg"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
