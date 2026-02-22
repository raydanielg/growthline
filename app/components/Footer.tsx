import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-zinc-950 text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg"
          alt="Footer background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/90 to-zinc-950" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="py-20 grid gap-12 lg:grid-cols-12">
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Growthline logo"
                width={160}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-300 leading-relaxed max-w-sm">
              Growthline Limited delivers industrial logistics, equipment rental, bulk cargo handling, and site support services across Tanzania and East Africa.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.89h-2.3v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.4 2H7.8A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.4-2.15a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.5H6.9V21H3.5V8.5Zm5.6 0h3.26v1.7h.05c.45-.86 1.55-1.77 3.2-1.77 3.43 0 4.07 2.26 4.07 5.2V21h-3.4v-5.54c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H9.1V8.5Z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2H22l-6.77 7.73L23.5 22h-6.5l-5.09-6.79L5.94 22H2l7.3-8.35L1 2h6.66l4.6 6.1L18.9 2Zm-1.14 18h1.7L6.75 3.9H4.93L17.76 20Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* MENUS */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-sm font-black tracking-widest uppercase text-white">Menu</p>
                <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]"></span>
              </div>
              <div className="space-y-3 text-sm text-zinc-300">
                <Link href="/" className="block hover:text-emerald-300 transition-colors">Home</Link>
                <Link href="/about" className="block hover:text-emerald-300 transition-colors">Profile</Link>
                <Link href="/services" className="block hover:text-emerald-300 transition-colors">Services</Link>
                <Link href="/contact" className="block hover:text-emerald-300 transition-colors">Contact us</Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-sm font-black tracking-widest uppercase text-white">Profile</p>
                <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]"></span>
              </div>
              <div className="space-y-3 text-sm text-zinc-300">
                <Link href="/about" className="block hover:text-emerald-300 transition-colors">Background</Link>
                <Link href="/about" className="block hover:text-emerald-300 transition-colors">About us</Link>
                <Link href="/about" className="block hover:text-emerald-300 transition-colors">Mission</Link>
                <Link href="/about" className="block hover:text-emerald-300 transition-colors">Team</Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-sm font-black tracking-widest uppercase text-white">Services</p>
                <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]"></span>
              </div>
              <div className="space-y-3 text-sm text-zinc-300">
                <Link href="/services" className="block hover:text-emerald-300 transition-colors">Bulk cargo</Link>
                <Link href="/services" className="block hover:text-emerald-300 transition-colors">Equipment rental</Link>
                <Link href="/services" className="block hover:text-emerald-300 transition-colors">Water supply</Link>
                <Link href="/services" className="block hover:text-emerald-300 transition-colors">Project logistics</Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-sm font-black tracking-widest uppercase text-white">Legal</p>
                <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]"></span>
              </div>
              <div className="space-y-3 text-sm text-zinc-300">
                <Link href="/terms" className="block hover:text-emerald-300 transition-colors">Terms</Link>
                <Link href="/privacy" className="block hover:text-emerald-300 transition-colors">Privacy policy</Link>
                <Link href="/" className="block hover:text-emerald-300 transition-colors">Certificates</Link>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-1 space-y-4">
            <div className="inline-block">
              <p className="text-sm font-black tracking-widest uppercase text-white">Contact</p>
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-[#0056b3]"></span>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <a href="mailto:info@growthline.co.tz" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                info@growthline.co.tz
              </a>
              <a href="tel:+255000000000" className="flex items-center gap-2 hover:text-emerald-300 transition-colors whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="tabular-nums">+255 000 000 000</span>
              </a>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">© {year} Growthline Limited. All rights reserved.</p>
          <p className="text-sm text-zinc-500">Industrial Logistics • Equipment Rental • Water Supply</p>
        </div>
      </div>
    </footer>
  );
}
