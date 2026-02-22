import ServicesContact from "@/app/components/services/Contact";
import ServicesHero from "@/app/components/services/Hero";
import AllServices from "@/app/components/services/AllServices";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <AllServices />
      <ServicesContact />
    </main>
  );
}
