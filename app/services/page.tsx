import ServicesContact from "@/app/components/services/Contact";
import ServicesHero from "@/app/components/services/Hero";
import AllServices from "@/app/components/services/AllServices";
import NetworkBackground from "@/app/components/ui/NetworkBackground";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <NetworkBackground />
      <div className="relative z-10">
        <ServicesHero />
        <AllServices />
        <ServicesContact />
      </div>
    </main>
  );
}
