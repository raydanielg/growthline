"use client";

import BulkCargo from "./BulkCargo";
import EquipmentRental from "./EquipmentRental";
import WaterSupply from "./WaterSupply";
import HeavyHaulage from "./HeavyHaulage";
import ProjectLogistics from "./ProjectLogistics";
import ElectricalContractors from "./ElectricalContractors";
import { useEffect, useState } from "react";

export default function AllServices() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-white pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-[#0056b3]/5 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-[#0056b3]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: "url('/icon-wave-line.png')",
              backgroundSize: "400px auto",
              backgroundRepeat: "repeat" 
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">
            What we do
          </p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-black text-zinc-900 leading-[1.1]">
            Core services that keep
            <span className="block text-[#0056b3]">sites running</span>
          </h2>
          <p className="mt-6 max-w-2xl text-zinc-600 text-base sm:text-lg leading-relaxed">
            Designed for reliability, safety, and speed—supported by responsive
            communication and clear reporting.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <BulkCargo />
          </div>
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <EquipmentRental />
          </div>
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <WaterSupply />
          </div>
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <ProjectLogistics />
          </div>
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <HeavyHaulage />
          </div>

          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <ElectricalContractors />
          </div>
        </div>
      </div>
    </section>
  );
}
