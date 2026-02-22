import BulkCargo from "./BulkCargo";
import EquipmentRental from "./EquipmentRental";
import WaterSupply from "./WaterSupply";
import HeavyHaulage from "./HeavyHaulage";
import ProjectLogistics from "./ProjectLogistics";

export default function AllServices() {
  return (
    <section className="pb-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6">
          <BulkCargo />
          <EquipmentRental />
          <WaterSupply />
          <HeavyHaulage />
          <ProjectLogistics />
        </div>
      </div>
    </section>
  );
}
