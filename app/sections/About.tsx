"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const collageImages = [
    "/trucksimages/JAY_5469.JPG",
    "/trucksimages/JAY_5514.JPG",
    "/trucksimages/DJI_0698.JPG",
    "/trucksimages/JAY_5585.JPG",
    "/trucksimages/JAY_5640.JPG",
    "/trucksimages/DJI_0607.JPG",
    "/trucksimages/JAY_5459.JPG",
    "/trucksimages/DJI_0700.JPG",
  ];
  const [collageStart, setCollageStart] = useState(0);

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

  useEffect(() => {
    const t = setInterval(() => {
      setCollageStart((i) => (i + 1) % collageImages.length);
    }, 3500);
    return () => clearInterval(t);
  }, [collageImages.length]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-white">
      {/* BACKGROUND IMAGE WITH LOW OPACITY */}
      <div className="absolute inset-0 z-0 opacity-[0.18]">
        <Image
          src="/dotted-map.png"
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
            <div className="absolute -inset-4 bg-[#0056b3]/10 rounded-[2rem] blur-2xl group-hover:bg-[#0056b3]/20 transition-all duration-700"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-[2rem] border border-zinc-100 shadow-2xl aspect-[4/5]">
                  <Image
                    src={collageImages[collageStart % collageImages.length]}
                    alt="Operations"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 45vw, 320px"
                  />
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-zinc-100 shadow-2xl aspect-[4/5]">
                  <Image
                    src={collageImages[(collageStart + 1) % collageImages.length]}
                    alt="Fleet"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 45vw, 320px"
                  />
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-zinc-100 shadow-2xl aspect-[4/5]">
                  <Image
                    src={collageImages[(collageStart + 2) % collageImages.length]}
                    alt="Port logistics"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 45vw, 320px"
                  />
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-zinc-100 shadow-2xl aspect-[4/5]">
                  <Image
                    src={collageImages[(collageStart + 3) % collageImages.length]}
                    alt="Delivery"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 45vw, 320px"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 hidden sm:block">
                <div className="rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur p-6 shadow-2xl">
                  <div className="flex items-end gap-3">
                    <div className="text-4xl font-black text-zinc-900">10+</div>
                    <div className="pb-1 text-sm font-bold text-zinc-600">Years</div>
                  </div>
                  <div className="mt-2 text-[11px] font-black text-zinc-500 uppercase tracking-[0.22em]">
                    Working experience
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-10 right-0 h-[90px] w-[250px] overflow-hidden">
                <svg viewBox="0 0 250 90" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,90 L250,20 L250,90 Z" fill="#0056b3" />
                </svg>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div
            className={`space-y-8 transition-all duration-[900ms] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-[#0056b3] font-black uppercase tracking-[0.3em] text-xs">
                About Us
              </h2>
              <h3 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-tight">
                We provide full range of <span className="text-[#0056b3]">Logistic services</span>
              </h3>
            </div>
            
            <div className="space-y-5">
              <p className="text-lg text-zinc-700 leading-relaxed">
                Growthline Limited is a trusted industrial logistics partner supporting demanding operations across Tanzania and East Africa. We combine disciplined coordination, reliable equipment, and clear communication to keep sites moving.
              </p>
              <p className="text-base text-zinc-600 leading-relaxed">
                From port handling and heavy haulage to equipment rental and site support, our teams focus on safe execution, predictable delivery, and responsive service—backed by reporting you can rely on.
              </p>
              <p className="text-base text-zinc-600 leading-relaxed">
                Our approach is built around planning, readiness, and strong HSE standards—so you reduce downtime, avoid surprises, and deliver on schedule.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div
                className={`flex gap-4 transition-all duration-[900ms] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0056b3]">
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
              <div className="text-[#0056b3] text-lg font-black tracking-tight">
                “Serving through Safety”
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex h-14 items-center justify-center rounded-none bg-zinc-900 px-8 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-zinc-800 transition-all active:scale-95 shadow-lg"
                >
                  Explore more
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex h-14 items-center justify-center rounded-none border border-zinc-200 bg-white px-8 text-sm font-black uppercase tracking-[0.14em] text-zinc-900 hover:bg-zinc-50 transition-all active:scale-95"
                >
                  Company profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
