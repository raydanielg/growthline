import Hero from "@/app/components/home/Hero";
import About from "@/app/sections/About";
import ServicesPreview from "./components/home/ServicesPreview";
import Stats from "./components/home/Stats";
import Clients from "./components/home/Clients";
import CTASection from "./components/home/CTASection";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Hero />
      <About />
      <ServicesPreview />
      <Clients />
      <CTASection />
    </main>
  );
}
