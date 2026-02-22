export default function ContactForm() {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
      <h2 className="text-xl font-semibold">Send a message</h2>
      <form className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-semibold">Full name</span>
          <input
            className="h-11 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:border-white/10 dark:bg-black dark:focus:ring-white/20"
            name="name"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold">Email</span>
          <input
            className="h-11 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:border-white/10 dark:bg-black dark:focus:ring-white/20"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold">Message</span>
          <textarea
            className="min-h-32 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:border-white/10 dark:bg-black dark:focus:ring-white/20"
            name="message"
            placeholder="Tell us about your request..."
          />
        </label>

        <button
          type="button"
          className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white hover:bg-emerald-700 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
