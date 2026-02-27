"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function CertificatesGrid() {
  const docs = [
    {
      title: "Certificate of Incorporation",
      desc: "Official BRELA registration for Growthline Logistics.",
      file: "/GLC CERTIFICATE OF INCORPORATION.pdf",
      type: "PDF Document"
    },
    {
      title: "Business License (LESEN)",
      desc: "Official business operation license for Growthline.",
      file: "/GW LESEN.pdf",
      type: "PDF Document"
    },
    {
      title: "TIN Certificate",
      desc: "Taxpayer Identification Number (TIN) registration for Growthline Logistics.",
      file: "/GROWTHLINE TIN CERTIFICATE.pdf",
      type: "PDF Document"
    },
    {
      title: "HSE Policy",
      desc: "Health, Safety & Environment policy documentation and procedures.",
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
    <section className="relative bg-zinc-50 py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-[#0056b3]/5 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-[#0056b3]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: "url('/icon-wave-line.png')",
              backgroundSize: "400px auto",
              backgroundRepeat: "repeat" 
            }}
          />
        </div>
      </div>

      <div className="w-full px-4 lg:px-12 relative z-10">
        <div className="w-full mb-12">
          <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">
            Digital Repository
          </p>
          <h2 className="mt-6 text-4xl sm:text-6xl font-black text-zinc-900 leading-[1.1]">
            Document Center
          </h2>
          <p className="mt-6 max-w-3xl text-zinc-600 text-lg sm:text-xl font-medium leading-relaxed">
            Browse our official certifications and compliance documents. 
            Select a document to preview or request access for full details.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* COLUMN 1: DOCUMENT LIST */}
          <div className="lg:col-span-3 space-y-4">
            {docs.map((d) => (
              <button
                key={d.title}
                onClick={() => setSelectedDoc(d)}
                className={`w-full text-left p-6 border transition-all duration-500 group relative overflow-hidden ${
                  selectedDoc.title === d.title
                    ? "bg-white border-[#0056b3] shadow-2xl shadow-blue-900/10"
                    : "bg-white/50 border-zinc-200 hover:border-[#0056b3]/30 hover:bg-white"
                }`}
              >
                <div className={`absolute top-0 left-0 h-full w-1 bg-[#0056b3] transition-all duration-500 ${selectedDoc.title === d.title ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 transition-colors duration-500 ${
                      selectedDoc.title === d.title ? "bg-blue-50 text-[#0056b3]" : "bg-zinc-100 text-zinc-500 group-hover:bg-blue-50 group-hover:text-[#0056b3]"
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div>
                      <p className="font-black text-zinc-900 leading-tight tracking-tight">{d.title}</p>
                      <p className="mt-1 text-[10px] font-black text-zinc-400 uppercase tracking-widest">{d.type}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* COLUMN 2: PREVIEW */}
          <div className="lg:col-span-9">
            <div className="relative border border-zinc-200 bg-white p-2 shadow-2xl shadow-zinc-900/20">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#0056b3]" />
              
              <div className="px-6 py-6 border-b border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-zinc-900 uppercase tracking-tight">
                    {selectedDoc.title}
                  </p>
                  <p className="mt-1 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Live Preview Mode
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-50 text-[#0056b3] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
              </div>

              <div className="bg-zinc-100 p-2 sm:p-4">
                <div className="relative h-[85vh] min-h-[800px] w-full overflow-hidden bg-white shadow-inner">
                {selectedDoc.file ? (
                  <iframe
                    src={`${selectedDoc.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="h-full w-full border-none"
                    title="Document Preview"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-12 text-center relative overflow-hidden">
                    {/* Background images for empty state */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                      <Image 
                        src="/trucksimages/DJI_0698.JPG" 
                        alt="Background" 
                        fill 
                        className="object-cover grayscale"
                        sizes="100vw"
                      />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-8 mx-auto w-24 h-24 bg-blue-50 text-[#0056b3] flex items-center justify-center shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>
                      </div>
                      <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter">Document Restricted</h3>
                      <p className="mt-4 text-zinc-500 font-medium leading-relaxed max-w-md mx-auto">
                        For security and compliance reasons, this document is only shared with authorized partners and clients.
                      </p>
                      <Link
                        href="/contact"
                        className="mt-10 inline-flex h-14 items-center justify-center rounded-xl bg-[#0056b3] px-10 text-sm font-black text-white hover:bg-[#004494] transition-all active:scale-95 border-b-4 border-[#003f8c]"
                      >
                        Request Full Access
                      </Link>
                    </div>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
