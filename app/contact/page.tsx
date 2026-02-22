import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";

export default function ContactPage() {
  return (
    <main>
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Reach out for quotes, partnerships, or service inquiries.
        </p>
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
}
