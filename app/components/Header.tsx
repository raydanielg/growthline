"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full bg-zinc-900 text-zinc-100 py-2 px-4 sm:px-6">
        <div className="mx-auto flex items-center justify-between gap-3 text-[11px] sm:text-[12px] font-medium">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-6">
            <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              <span className="min-w-0 truncate">Dar es Salaam, Tanzania</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
              Mon - Fri: 8am - 5pm | Saturday: 8am - 2pm
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-4">
            <a href="mailto:info@growthlinelogistics.co.tz" className="hidden sm:flex items-center gap-2 whitespace-nowrap hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@growthlinelogistics.co.tz
            </a>

            <a href="https://growthlinelogistics.co.tz/" className="hidden md:flex items-center gap-2 whitespace-nowrap hover:text-white transition-colors" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>
              growthlinelogistics.co.tz
            </a>

            <a href="tel:+255712345678" className="flex items-center gap-2 whitespace-nowrap hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +255 712 345 678
            </a>

            <div className="hidden md:flex items-center gap-3 text-zinc-300">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.2 6h2.3v3h-2c-.7 0-1 .3-1 1v1.9H17l-.5 3h-3v7A10 10 0 0 0 22 12Z" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.9L4.7 22H1.6l7.4-8.5L1 2h6.9l4.8 6.2L18.9 2Zm-1.2 18h1.7L6.8 3.9H5L17.7 20Z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" /></svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28.5 28.5 0 0 0 2 12a28.5 28.5 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.5 28.5 0 0 0 22 12a28.5 28.5 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-zinc-100/90 backdrop-blur supports-[backdrop-filter]:bg-zinc-100/70">
        <div className="mx-auto flex w-full items-center justify-between gap-4 px-6 py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Image src="/logo.png" alt="Growthline Logistics logo" width={160} height={60} className="h-10 sm:h-14 w-auto object-contain" priority />
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-[13px] font-semibold tracking-[0.08em] text-zinc-600 lg:flex flex-nowrap whitespace-nowrap">
            <Link href="/" className="relative group py-2 uppercase whitespace-nowrap transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 rounded-md">
              Home
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#0056b3] transition-all duration-300 group-hover:w-9"></span>
            </Link>

            <Link href="/profile" className="relative group py-2 uppercase whitespace-nowrap transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 rounded-md">
              Profile
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#0056b3] transition-all duration-300 group-hover:w-9"></span>
            </Link>

            <Link href="/services" className="relative group py-2 uppercase whitespace-nowrap transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 rounded-md">
              Services
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#0056b3] transition-all duration-300 group-hover:w-9"></span>
            </Link>

            <Link href="/capacity" className="relative group py-2 uppercase whitespace-nowrap transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 rounded-md">
              Capacity
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#0056b3] transition-all duration-300 group-hover:w-9"></span>
            </Link>
            <Link href="/clients" className="relative group py-2 uppercase whitespace-nowrap transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 rounded-md">
              Clients
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#0056b3] transition-all duration-300 group-hover:w-9"></span>
            </Link>
            <Link href="/certificates" className="relative group py-2 uppercase whitespace-nowrap transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 rounded-md">
              Certificates
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#0056b3] transition-all duration-300 group-hover:w-9"></span>
            </Link>
            <Link href="/contact" className="relative group py-2 uppercase whitespace-nowrap transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 rounded-md">
              Contact us
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#0056b3] transition-all duration-300 group-hover:w-9"></span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center justify-end">
            <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-[#0056b3] px-5 text-[12px] font-bold tracking-[0.08em] uppercase text-white shadow-sm hover:bg-[#004999] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100">
              Contact Us
            </Link>
          </div>

          <button className="lg:hidden p-2 text-zinc-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden w-full border-t border-black/5 bg-zinc-100/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-100/80 animate-in fade-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4 gap-2">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-zinc-800 hover:bg-white/70 rounded-xl">Home</Link>

              <div className="px-4 py-2">
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.18em] mb-2">Profile</p>
                <div className="grid gap-1 pl-3 border-l border-black/5">
                  <Link href="/profile#background" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">Background</Link>
                  <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">About Us</Link>
                  <Link href="/profile#mission" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">Mission</Link>
                  <Link href="/profile#team" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">Team</Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.18em] mb-2">Services</p>
                <div className="grid gap-1 pl-3 border-l border-black/5">
                  <Link href="/services#bulk-cargo" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">Bulk Cargo</Link>
                  <Link href="/services#equipment-rental" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">Equipment Rental</Link>
                  <Link href="/services#water-supply" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">Water Supply</Link>
                  <Link href="/services#project-logistics" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">Project Logistics</Link>
                  <Link href="/services#electrical-contractors" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-[13px] text-zinc-700 hover:text-[#0056b3]">Electrical Contractors</Link>
                </div>
              </div>

              <Link href="/capacity" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-zinc-800 hover:bg-white/70 rounded-xl">Capacity</Link>
              <Link href="/clients" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-zinc-800 hover:bg-white/70 rounded-xl">Clients</Link>
              <Link href="/certificates" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-zinc-800 hover:bg-white/70 rounded-xl">Certificates</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-zinc-800 hover:bg-white/70 rounded-xl">Contact us</Link>

              <div className="px-4 pt-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex h-11 w-full items-center justify-center rounded-md bg-[#0056b3] text-[12px] font-bold tracking-[0.10em] uppercase text-white shadow-sm hover:bg-[#004999] transition-colors">
                  Contact Us
                </Link>
              </div>

              <div className="mt-3 grid gap-2 px-4 pb-2 text-[12px] text-zinc-600">
                <a href="mailto:info@growthlinelogistics.co.tz" className="hover:text-[#0056b3] transition-colors">info@growthlinelogistics.co.tz</a>
                <a href="https://growthlinelogistics.co.tz/" target="_blank" rel="noreferrer" className="hover:text-[#0056b3] transition-colors">growthlinelogistics.co.tz</a>
                <a href="tel:+255712345678" className="hover:text-[#0056b3] transition-colors">+255 712 345 678</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}