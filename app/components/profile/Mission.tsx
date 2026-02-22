export default function ProfileMission() {
  return (
    <section id="mission" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.3em]">
              Mission & Vision
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
              Quality operations with
              <span className="text-[#0056b3]"> measurable safety</span>
            </h2>
            <p className="mt-5 text-zinc-600 text-base sm:text-lg leading-relaxed">
              We focus on field execution—process, people, and equipment—so that
              clients can run operations with confidence.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="group rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/40 transition-all duration-700">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              <p className="mt-5 text-lg font-black text-zinc-900">Mission</p>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Deliver safe, reliable logistics and site support that keeps
                projects moving—on time and within scope.
              </p>
              <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-700 group-hover:w-16" />
            </div>

            <div className="group rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm hover:shadow-2xl hover:shadow-zinc-200/40 transition-all duration-700">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#0056b3] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <p className="mt-5 text-lg font-black text-zinc-900">Vision</p>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Be the most trusted partner for industrial operations across East
                Africa—defined by safety, service, and performance.
              </p>
              <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-[#0056b3] transition-all duration-700 group-hover:w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
