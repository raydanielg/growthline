import CertificatesGrid from "@/app/components/certificates/Grid";
import CertificatesHero from "@/app/components/certificates/Hero";
import NetworkBackground from "@/app/components/ui/NetworkBackground";

export default function CertificatesPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <NetworkBackground />
      <div className="relative z-10">
        <CertificatesHero />
        <CertificatesGrid />
      </div>
    </main>
  );
}
