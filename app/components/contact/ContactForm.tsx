"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          industry: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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

      <form onSubmit={handleSubmit} className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
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
          <span className="text-xs font-black text-zinc-400 uppercase tracking-widest group-focus-within:text-[#0056b3] transition-colors">Company Name</span>
          <input
            required
            className="h-14 border-b-2 border-zinc-100 bg-transparent text-lg text-zinc-900 outline-none transition focus:border-[#0056b3]"
            name="company"
            placeholder="Your company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
          <span className="text-xs font-black text-zinc-400 uppercase tracking-widest group-focus-within:text-[#0056b3] transition-colors">Phone Number</span>
          <input
            required
            className="h-14 border-b-2 border-zinc-100 bg-transparent text-lg text-zinc-900 outline-none transition focus:border-[#0056b3]"
            name="phone"
            placeholder="+255 --- --- ---"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </label>

        <label className="grid gap-3 group">
          <span className="text-xs font-black text-zinc-400 uppercase tracking-widest group-focus-within:text-[#0056b3] transition-colors">Industry</span>
          <select
            required
            className="h-14 border-b-2 border-zinc-100 bg-transparent text-lg text-zinc-900 outline-none transition focus:border-[#0056b3] appearance-none"
            name="industry"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          >
            <option value="" disabled>Select industry</option>
            <option value="Mining">Mining</option>
            <option value="Construction">Construction</option>
            <option value="Energy">Energy</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Logistics">Logistics</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="grid gap-3 group">
          <span className="text-xs font-black text-zinc-400 uppercase tracking-widest group-focus-within:text-[#0056b3] transition-colors">Subject</span>
          <input
            required
            className="h-14 border-b-2 border-zinc-100 bg-transparent text-lg text-zinc-900 outline-none transition focus:border-[#0056b3]"
            name="subject"
            placeholder="What is this regarding?"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </label>

        <label className="grid gap-3 group sm:col-span-2">
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

        <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-6">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-14 items-center justify-center rounded-xl bg-[#0056b3] px-10 text-sm font-black text-white shadow-xl shadow-[#0056b3]/20 transition hover:bg-[#004494] active:scale-95 w-full sm:w-max border-b-4 border-[#003f8c] disabled:opacity-50"
          >
            {status === "loading" ? "Processing..." : "Submit Request"}
          </button>

          {status === "success" && (
            <p className="text-emerald-600 font-bold animate-in fade-in slide-in-from-left-2">
              ✓ Message submitted successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 font-bold animate-in fade-in slide-in-from-left-2">
              ✕ Failed to send. Please try again.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

