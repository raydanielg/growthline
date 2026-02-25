import ClientsHero from "@/app/components/clients/Hero";
import ClientsShowcase from "@/app/components/clients/Showcase";
import LogoShowcase from "@/app/components/home/LogoShowcase";
import NetworkBackground from "@/app/components/ui/NetworkBackground";

export default function ClientsPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <NetworkBackground />
      <div className="relative z-10">
        <ClientsHero />
        <LogoShowcase />
        <ClientsShowcase />
      </div>
    </main>
  );
}
