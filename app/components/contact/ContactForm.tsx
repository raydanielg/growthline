export default function ContactForm() {
  return (
    <section id="message" className="rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-emerald-700 text-xs font-black uppercase tracking-[0.3em]">Message</p>
          <h2 className="mt-3 text-xl sm:text-2xl font-black text-zinc-900">Send a request</h2>
        </div>
        <div className="hidden sm:block h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]" />
      </div>

      <form className="mt-8 grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-black text-zinc-900">Full name</span>
          <input
            className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15"
            name="name"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black text-zinc-900">Email</span>
          <input
            className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-[#0056b3] focus:ring-4 focus:ring-[#0056b3]/15"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black text-zinc-900">Message</span>
          <textarea
            className="min-h-36 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15"
            name="message"
            placeholder="Tell us about your request..."
          />
        </label>

        <button
          type="button"
          className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-emerald-600 px-6 text-sm font-black text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-700 active:scale-95"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
