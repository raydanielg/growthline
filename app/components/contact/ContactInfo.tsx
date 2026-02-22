export default function ContactInfo() {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
      <h2 className="text-xl font-semibold">Contact information</h2>
      <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">Phone</p>
          <p>+255 000 000 000</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">Email</p>
          <p>info@company.com</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">Office</p>
          <p>Dar es Salaam, Tanzania</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">Hours</p>
          <p>Mon - Sat: 08:00 - 18:00</p>
        </div>
      </div>
    </section>
  );
}
