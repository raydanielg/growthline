import { type ReactNode } from "react";

interface StatItem {
  number: string;
  label: string;
  icon: ReactNode;
  color: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      number: "120+",
      label: "Projects supported",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
      ),
      color: "text-[#0056b3] bg-blue-50"
    },
    {
      number: "35+",
      label: "Fleet units",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><circle cx="7.5" cy="17" r="2.5"/><circle cx="17.5" cy="17" r="2.5"/></svg>
      ),
      color: "text-[#0056b3] bg-blue-50"
    },
    {
      number: "100%",
      label: "Safety training",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
      ),
      color: "text-[#0056b3] bg-blue-50"
    },
    {
      number: "High",
      label: "Client retention",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      color: "text-[#0056b3] bg-blue-50"
    }
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                {stat.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
                  {stat.number}
                </h4>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs pt-2">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
