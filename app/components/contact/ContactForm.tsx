"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleChoice = (type: "email" | "whatsapp") => {
    const { name, email, message } = formData;
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    if (type === "whatsapp") {
      const url = `https://wa.me/255799012028?text=${encodeURIComponent(`*New Project Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`)}`;
      window.open(url, "_blank");
    } else {
      const mailto = `mailto:info@growthlinelogistics.co.tz?subject=Project Request from ${name}&body=${encodeURIComponent(text)}`;
      window.location.href = mailto;
    }
    setShowPopup(false);
  };

  return (
    <section id="message" className="relative border border-zinc-100 bg-white p-10 sm:p-16 shadow-2xl shadow-zinc-200/60 overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-full bg-[#0056b3]" />
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">Message</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900">Send a request</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-12 grid gap-8">
        <label className="grid gap-3 group">
          <span className="text-xs font-black text-zinc-400 uppercase tracking-widest group-focus-within:text-[#0056b3] transition-colors">Full name</span>
          <input
            required
            className="h-14 border-b-2 border-zinc-100 bg-transparent text-lg text-zinc-900 outline-none transition focus:border-[#0056b3]"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label className="grid gap-3 group">
          <span className="text-xs font-black text-zinc-400 uppercase tracking-widest group-focus-within:text-[#0056b3] transition-colors">Email Address</span>
          <input
            required
            className="h-14 border-b-2 border-zinc-100 bg-transparent text-lg text-zinc-900 outline-none transition focus:border-[#0056b3]"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>

        <label className="grid gap-3 group">
          <span className="text-xs font-black text-zinc-400 uppercase tracking-widest group-focus-within:text-[#0056b3] transition-colors">Message</span>
          <textarea
            required
            className="min-h-36 border-b-2 border-zinc-100 bg-transparent py-4 text-lg text-zinc-900 outline-none transition focus:border-[#0056b3] resize-none"
            name="message"
            placeholder="Tell us about your request..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </label>

        <button
          type="submit"
          className="mt-4 inline-flex h-14 items-center justify-center rounded-xl bg-[#0056b3] px-10 text-sm font-black text-white shadow-xl shadow-[#0056b3]/20 transition hover:bg-[#004494] active:scale-95 w-full sm:w-max border-b-4 border-[#003f8c]"
        >
          Submit Request
        </button>
      </form>

      {/* POPUP SELECTION */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-md bg-white border border-zinc-100 p-10 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[#0056b3]" />
            <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter">Submit via</h3>
            <p className="mt-4 text-zinc-500 font-medium leading-relaxed">
              How would you like to send this request? Select your preferred platform.
            </p>
            
            <div className="mt-10 grid gap-4">
              <button
                onClick={() => handleChoice("whatsapp")}
                className="flex items-center justify-between w-full p-6 border-2 border-zinc-100 hover:border-[#25D366] hover:bg-green-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-green-50 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-300">
                    <img 
                      src="/Whatsapp-Linear-32px.svg" 
                      alt="WhatsApp" 
                      className="w-7 h-7 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <span className="font-black text-zinc-900 uppercase tracking-tight">Official WhatsApp</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>

              <button
                onClick={() => handleChoice("email")}
                className="flex items-center justify-between w-full p-6 border-2 border-zinc-100 hover:border-[#0056b3] hover:bg-blue-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-50 text-[#0056b3] flex items-center justify-center group-hover:bg-[#0056b3] group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <span className="font-black text-zinc-900 uppercase tracking-tight">Email Hub</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-300 group-hover:text-[#0056b3] group-hover:translate-x-1 transition-all"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-8 w-full text-center text-xs font-black text-zinc-400 uppercase tracking-widest hover:text-zinc-900 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

