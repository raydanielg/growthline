"use client";

import Image from "next/image";

const logos = [
  "67.png",
  "Kings-Builders-Logo.png",
  "Starpeco-Logo-Bitumen-Dar-es-Salaam-Tanzania-East-Africa-Mashariki.png",
  "finallogo.png",
  "logo-011.png",
  "logo-blue.svg",
  "logo.svg",
  "logo_302x312.png",
  "screenshot-2019-04-26-at-15.35.47-200x74.png",
  "tarura.png",
];

function toAlt(filename: string) {
  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function LogoShowcase() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <p className="text-[#0056b3] font-bold uppercase tracking-[0.2em] text-xs">
            Trusted partners
          </p>
          <h3 className="text-2xl sm:text-3xl font-black text-zinc-900">
            Companies we’ve supported
          </h3>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-2xl shadow-zinc-200/40">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="marquee flex items-center gap-10 sm:gap-14">
                {[...logos, ...logos].map((logo, idx) => (
                  <div
                    key={`${logo}-${idx}`}
                    className="flex h-14 w-32 sm:h-16 sm:w-40 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50/40"
                  >
                    <div className="relative h-7 w-24 sm:h-8 sm:w-28 opacity-70">
                      {logo.endsWith(".svg") ? (
                        <img
                          src={`/clients/${logo}`}
                          alt={toAlt(logo)}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <Image
                          src={`/clients/${logo}`}
                          alt={toAlt(logo)}
                          fill
                          className="object-contain"
                          sizes="120px"
                          priority={false}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 26s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
