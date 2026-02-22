import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import ContactHero from "../components/contact/Hero";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-white" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-8">
            <p className="text-emerald-700 text-xs font-black uppercase tracking-[0.3em]">Get in touch</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-zinc-900">Tell us what you need</h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Share your request and our team will get back with the right plan, pricing, and availability.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              <Map />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
