import CapacityCapabilities from "@/app/components/capacity/Capabilities";
import CapacityHero from "@/app/components/capacity/Hero";
import NetworkBackground from "@/app/components/ui/NetworkBackground";

export default function CapacityPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <NetworkBackground />
      <div className="relative z-10">
        <CapacityHero />
        <CapacityCapabilities />
      </div>
    </main>
  );
}
