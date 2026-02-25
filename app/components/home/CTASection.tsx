"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative bg-white">
      <div className="w-full px-0 py-14 sm:py-20">
        <div className="relative w-full overflow-hidden rounded-none border-y border-zinc-100 bg-black shadow-2xl shadow-zinc-200/40">
          <div className="absolute inset-0">
            <Image
              src="/trucksimages/JAY_5514.JPG"
              alt="Contact us background"
              fill
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
          </div>

          <div className="relative px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
            <div className="max-w-3xl">
              <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.35em] text-white/80">
                Get in touch with us anytime
              </p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                <div className="shrink-0">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                      <span className="absolute inset-0 rounded-full bg-red-600/35 ring-1 ring-red-400/40 animate-ripple" />
                      <span className="absolute inset-0 rounded-full bg-red-600/25 ring-1 ring-red-300/30 animate-ripple [animation-delay:700ms]" />
                    </div>

                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-red-600 shadow-2xl shadow-black/40 grid place-items-center">
                      <div className="h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.05]">
                    Looking for the best
                    <span className="block">logistics transport service?</span>
                  </h2>

                  <div className="mt-7">
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center justify-center bg-black px-7 text-[12px] font-black uppercase tracking-[0.18em] text-white shadow-lg hover:bg-zinc-900 transition-colors active:scale-95"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-ripple {
          animation: ripple 2.2s ease-out infinite;
          transform-origin: center;
        }
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.55;
          }
          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-ripple {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
