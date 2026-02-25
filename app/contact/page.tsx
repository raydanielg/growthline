import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import ContactHero from "../components/contact/Hero";
import NetworkBackground from "../components/ui/NetworkBackground";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <NetworkBackground />
      <div className="relative z-10">
        <ContactHero />
        <section className="relative bg-zinc-50 py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
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
              <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">Get in touch</p>
              <h2 className="mt-6 text-4xl sm:text-5xl font-black text-zinc-900 leading-[1.1]">Tell us what <span className="block text-[#0056b3]">you need</span></h2>
              <p className="mt-6 max-w-2xl text-zinc-600 text-base sm:text-lg leading-relaxed">
                Share your request and our team will get back with the right plan, pricing, and availability.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <div className="lg:col-span-5 space-y-8">
                <ContactInfo />
                <Map />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
