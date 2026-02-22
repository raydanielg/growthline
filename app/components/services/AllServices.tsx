import BulkCargo from "./BulkCargo";
import EquipmentRental from "./EquipmentRental";
import WaterSupply from "./WaterSupply";
import HeavyHaulage from "./HeavyHaulage";
import ProjectLogistics from "./ProjectLogistics";

export default function AllServices() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10">
          <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
            What we do
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900">
            Core services that keep sites running
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 text-base sm:text-lg leading-relaxed">
            Designed for reliability, safety, and speed—supported by responsive
            communication and clear reporting.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <BulkCargo />
          <EquipmentRental />
          <WaterSupply />
          <ProjectLogistics />
          <HeavyHaulage />
        </div>
      </div>
    </section>
  );
}
