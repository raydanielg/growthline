"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ClientItem {
  name: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
  image: string;
}

const clients: ClientItem[] = [
  {
    name: "Mining",
    desc: "Site logistics, heavy haulage and camp support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4 8 4v14" />
        <path d="M9 21v-8h6v8" />
      </svg>
    ),
    accent: "text-[#0056b3] bg-blue-50",
    image: "/trucksimages/DJI_0698.JPG",
  },
  {
    name: "Construction",
    desc: "Equipment rental and project supply chain support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M6 20V9" />
        <path d="M18 20V4" />
        <path d="M6 9h6" />
        <path d="M12 9v11" />
      </svg>
    ),
    accent: "text-[#0056b3] bg-blue-50",
    image: "/trucksimages/JAY_5514.JPG",
  },
  {
    name: "Energy",
    desc: "Reliable transport for critical assets and spares.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
      </svg>
    ),
    accent: "text-[#0056b3] bg-blue-50",
    image: "/trucksimages/DJI_0607.JPG",
  },
  {
    name: "Manufacturing",
    desc: "Bulk cargo handling and warehousing coordination.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 4V8l-7 4V4H4a2 2 0 0 0-2 2z" />
      </svg>
    ),
    accent: "text-[#0056b3] bg-blue-50",
    image: "/trucksimages/JAY_5640.JPG",
  },
  {
    name: "Government",
    desc: "Compliant, safety-first operational support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 3 7v2h18V7z" />
        <path d="M5 10v10" />
        <path d="M9 10v10" />
        <path d="M15 10v10" />
        <path d="M19 10v10" />
        <path d="M3 20h18" />
      </svg>
    ),
    accent: "text-zinc-900 bg-zinc-100",
    image: "/trucksimages/DJI_0700.JPG",
  },
];

export default function Clients() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-[#0056b3] font-bold uppercase tracking-[0.2em] text-xs">
            Trusted By
          </h2>
          <h3 className="text-4xl sm:text-5xl font-black text-zinc-900">
            Industries We <span className="text-[#0056b3]">Serve</span>
          </h3>
          <p className="max-w-2xl text-zinc-600 text-lg">
            We partner with teams that value reliability, safety, and timely delivery.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative flex flex-col h-full bg-white border border-zinc-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated corner lines - Matching About Section */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-[#0056b3] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-[#0056b3] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>

              <div className="p-6 flex flex-col flex-1 relative">
                <div className="absolute top-0 left-0 h-1 w-0 bg-[#0056b3] transition-all duration-500 group-hover:w-full" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-10 w-10 rounded-xl ${client.accent} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                    {client.icon}
                  </div>
                  <h4 className="text-xl font-black text-zinc-900 tracking-tight">
                    {client.name}
                  </h4>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  {client.desc}
                </p>
                
                {/* Status Indicator */}
                <div className="mt-6 pt-4 border-t border-zinc-50 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Operational Support</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
