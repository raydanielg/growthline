import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">About us</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We are a service-driven company delivering logistics and industrial support for complex operations. Our focus is safety, reliability, and on-time delivery.
            </p>
            <Link href="/about" className="text-sm font-semibold hover:underline">
              Learn more
            </Link>
          </div>
          <div className="rounded-3xl border border-black/10 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-950">
            <div className="space-y-3">
              <p className="text-sm font-semibold">What you can expect</p>
              <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                <li>Professional team and modern equipment</li>
                <li>Transparent communication</li>
                <li>Strong HSE culture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
