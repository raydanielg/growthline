export default function ProfileMission() {
  return (
    <section id="mission" className="relative bg-zinc-50 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "url('/icon-wave-line.png')",
            backgroundSize: "600px auto",
            backgroundRepeat: "repeat" 
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.4em]">
                Our Purpose
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-black text-zinc-900 leading-[1.1]">
                Quality operations with
                <span className="block text-[#0056b3]">measurable safety</span>
              </h2>
            </div>
            
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl">
              We focus on field execution—process, people, and equipment—so that
              clients can run operations with confidence and complete peace of mind.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="h-1 w-12 bg-[#0056b3]" />
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Growthline Logistics Standards</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-8 sm:grid-cols-2">
            {/* Mission Card */}
            <div className="group relative bg-white p-10 shadow-sm border border-zinc-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0056b3]/10">
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#0056b3] transition-all duration-500 group-hover:w-full" />
              
              <div className="h-14 w-14 bg-blue-50 text-[#0056b3] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              
              <h3 className="mt-8 text-2xl font-black text-zinc-900">Mission</h3>
              <p className="mt-4 text-zinc-500 leading-relaxed font-medium">
                Deliver safe, reliable logistics and site support that keeps
                projects moving—on time and within scope, every single day.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white p-10 shadow-sm border border-zinc-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0056b3]/10">
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#0056b3] transition-all duration-500 group-hover:w-full" />

              <div className="h-14 w-14 bg-blue-50 text-[#0056b3] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              
              <h3 className="mt-8 text-2xl font-black text-zinc-900">Vision</h3>
              <p className="mt-4 text-zinc-500 leading-relaxed font-medium">
                Be the most trusted partner for industrial operations across East
                Africa—defined by safety, excellence, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
