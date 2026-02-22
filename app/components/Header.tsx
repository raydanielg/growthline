"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* TOP BAR */}
      <div className="w-full bg-[#0056b3] text-white py-2 px-4 sm:px-6">
        <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-[11px] sm:text-[12px] font-medium">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="mailto:info@growthline.co.tz" className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@growthline.co.tz
            </a>
            <a href="tel:+255000000000" className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +255 000 000 000
            </a>
          </div>
          <div className="hidden md:block">
            Reliable Logistics & Industrial Services
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white shadow-sm">
        <div className="mx-auto flex w-full items-center justify-between gap-6 px-6 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="Growthline logo"
                width={160}
                height={60}
                className="h-10 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-[15px] font-normal text-zinc-900 lg:flex">
            <Link href="/" className="hover:text-[#0056b3] transition-colors relative group py-2">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056b3] transition-all group-hover:w-full"></span>
            </Link>

            {/* PROFILE DROPDOWN */}
            <div className="group relative py-2">
              <Link
                href="/profile"
                className="relative inline-flex items-center gap-1 pb-2 hover:text-[#0056b3] transition-colors"
              >
                Profile
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 group-hover:rotate-180 transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="invisible absolute left-0 top-full pt-2 w-52 opacity-0 translate-y-2 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50">
                <div className="bg-white border border-zinc-100 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden p-1.5">
                  <Link href="/profile#background" className="flex items-center px-4 py-2.5 text-[14px] text-zinc-700 hover:bg-zinc-50 hover:text-[#0056b3] rounded-lg transition-colors">Background</Link>
                  <Link href="/profile" className="flex items-center px-4 py-2.5 text-[14px] text-zinc-700 hover:bg-zinc-50 hover:text-[#0056b3] rounded-lg transition-colors">About Us</Link>
                  <Link href="/profile#mission" className="flex items-center px-4 py-2.5 text-[14px] text-zinc-700 hover:bg-zinc-50 hover:text-[#0056b3] rounded-lg transition-colors">Mission</Link>
                  <Link href="/profile#team" className="flex items-center px-4 py-2.5 text-[14px] text-zinc-700 hover:bg-zinc-50 hover:text-[#0056b3] rounded-lg transition-colors">Team</Link>
                </div>
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div className="group relative py-2">
              <Link
                href="/services"
                className="relative inline-flex items-center gap-1 pb-2 hover:text-[#0056b3] transition-colors"
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 group-hover:rotate-180 transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="invisible absolute left-0 top-full pt-2 w-60 opacity-0 translate-y-2 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50">
                <div className="bg-white border border-zinc-100 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden p-1.5">
                  <Link href="/services#bulk-cargo" className="flex items-center px-4 py-2.5 text-[14px] text-zinc-700 hover:bg-zinc-50 hover:text-[#0056b3] rounded-lg transition-colors">Bulk Cargo</Link>
                  <Link href="/services#equipment-rental" className="flex items-center px-4 py-2.5 text-[14px] text-zinc-700 hover:bg-zinc-50 hover:text-[#0056b3] rounded-lg transition-colors">Equipment Rental</Link>
                  <Link href="/services#water-supply" className="flex items-center px-4 py-2.5 text-[14px] text-zinc-700 hover:bg-zinc-50 hover:text-[#0056b3] rounded-lg transition-colors">Water Supply</Link>
                  <Link href="/services#project-logistics" className="flex items-center px-4 py-2.5 text-[14px] text-zinc-700 hover:bg-zinc-50 hover:text-[#0056b3] rounded-lg transition-colors">Project Logistics</Link>
                </div>
              </div>
            </div>

            <Link href="/capacity" className="hover:text-[#0056b3] transition-colors relative group py-2">
              Capacity
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056b3] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/clients" className="hover:text-[#0056b3] transition-colors relative group py-2">
              Clients
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056b3] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/certificates" className="hover:text-[#0056b3] transition-colors relative group py-2">
              Certificates
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056b3] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="hover:text-[#0056b3] transition-colors relative group py-2">
              Contact us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0056b3] transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="lg:hidden p-2 text-zinc-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* MOBILE NAV MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full bg-white border-t border-zinc-100 animate-in fade-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4 gap-2">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 rounded-xl">Home</Link>
              
              <div className="px-4 py-2">
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Profile</p>
                <div className="grid gap-1 pl-2 border-l border-zinc-100">
                  <Link href="/profile#background" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-zinc-600 hover:text-[#0056b3]">Background</Link>
                  <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-zinc-600 hover:text-[#0056b3]">About Us</Link>
                  <Link href="/profile#mission" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-zinc-600 hover:text-[#0056b3]">Mission</Link>
                  <Link href="/profile#team" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-zinc-600 hover:text-[#0056b3]">Team</Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Services</p>
                <div className="grid gap-1 pl-2 border-l border-zinc-100">
                  <Link href="/services#bulk-cargo" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-zinc-600 hover:text-[#0056b3]">Bulk Cargo</Link>
                  <Link href="/services#equipment-rental" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-zinc-600 hover:text-[#0056b3]">Equipment Rental</Link>
                  <Link href="/services#water-supply" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-zinc-600 hover:text-[#0056b3]">Water Supply</Link>
                  <Link href="/services#project-logistics" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 text-sm text-zinc-600 hover:text-[#0056b3]">Project Logistics</Link>
                </div>
              </div>

              <Link href="/capacity" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 rounded-xl">Capacity</Link>
              <Link href="/clients" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 rounded-xl">Clients</Link>
              <Link href="/certificates" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 rounded-xl">Certificates</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 rounded-xl text-[#0056b3]">Contact us</Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

