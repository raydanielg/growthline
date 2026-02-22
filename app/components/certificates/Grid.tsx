"use client";

import { useState } from "react";
import Link from "next/link";

export default function CertificatesGrid() {
  const docs = [
    {
      title: "Business License (LESEN)",
      desc: "Official business operation license for Growthline.",
      file: "/GW LESEN.pdf",
      type: "PDF Document"
    },
    {
      title: "HSE Policy",
      desc: "Health, Safety & Environment policy documentation and procedures.",
      file: null,
      type: "Shared on Request"
    },
    {
      title: "Company Registration",
      desc: "BRELA registration and operational profile documents.",
      file: null,
      type: "Shared on Request"
    },
    {
      title: "Insurance & Compliance",
      desc: "Relevant coverage and compliance documents for onboarding.",
      file: null,
      type: "Shared on Request"
    }
  ];

  const [selectedDoc, setSelectedDoc] = useState(docs[0]);

  return (
    <section className="bg-zinc-50 py-24">
      <div className="w-full px-4 lg:px-12">
        <div className="w-full mb-12">
          <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
            Digital Repository
          </p>
          <h2 className="mt-4 text-3xl sm:text-6xl font-black text-zinc-900 tracking-tighter">
            Document Center
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-600 text-xl font-medium">
            Browse our official certifications and compliance documents. 
            Select a document to preview or request access.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* COLUMN 1: DOCUMENT LIST */}
          <div className="lg:col-span-3 space-y-4">
            {docs.map((d) => (
              <button
                key={d.title}
                onClick={() => setSelectedDoc(d)}
                className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 group ${
                  selectedDoc.title === d.title
                    ? "bg-white border-emerald-500 shadow-xl shadow-emerald-900/5 ring-1 ring-emerald-500"
                    : "bg-white/50 border-zinc-200 hover:border-emerald-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl transition-colors ${
                      selectedDoc.title === d.title ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-500 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div>
                      <p className="font-black text-zinc-900 leading-tight">{d.title}</p>
                      <p className="mt-1 text-xs font-bold text-zinc-400 uppercase tracking-wider">{d.type}</p>
                    </div>
                  </div>
                  {selectedDoc.title === d.title && (
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* COLUMN 2: PREVIEW */}
          <div className="lg:col-span-9">
            <div className="sticky top-24 rounded-[2.5rem] border border-zinc-200 bg-white p-4 shadow-2xl shadow-zinc-200/50">
              <div className="px-4 pt-4">
                <p className="text-base sm:text-lg font-black text-zinc-900">
                  {selectedDoc.title}
                </p>
                <p className="mt-1 text-xs font-bold text-zinc-400">
                  Preview
                </p>
              </div>

              <div className="mt-4 rounded-[2rem] border border-zinc-100 bg-zinc-100 p-4 sm:p-6">
                <div className="relative h-[85vh] min-h-[900px] max-h-[1400px] w-full overflow-hidden rounded-[1.6rem] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.18)]">
                {selectedDoc.file ? (
                  <iframe
                    src={`${selectedDoc.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="h-full w-full border-none"
                    title="Document Preview"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                    <div className="mb-6 rounded-full bg-zinc-200/50 p-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>
                    </div>
                    <h3 className="text-xl font-black text-zinc-900">Document Restricted</h3>
                    <p className="mt-3 text-zinc-500 font-medium leading-relaxed">
                      For security and compliance reasons, this document is only shared with authorized partners.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-900 px-8 text-sm font-black text-white hover:bg-emerald-600 transition-all active:scale-95"
                    >
                      Request Full Access
                    </Link>
                  </div>
                )}
                
                {/* PREVIEW OVERLAY GRADIENT */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
