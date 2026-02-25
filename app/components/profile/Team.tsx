import Image from "next/image";

export default function ProfileTeam() {
  const members = [
    {
      name: "Operations Lead",
      role: "Planning and dispatch",
      image: "/male-bus-driver-portrait_23-2151582632.jpg",
    },
    {
      name: "Fleet Supervisor",
      role: "Maintenance and readiness",
      image: "/yellow-trucks-machinery-lined-up-construction-site-excavators-bulldozers-cranes_1031438-354.jpg",
    },
    {
      name: "Safety Officer",
      role: "HSE and compliance",
      image: "/construction-worker-portrait-with-hard-hat-trucks-background_1222783-31158.jpg",
    },
    {
      name: "Project Coordinator",
      role: "Client support",
      image: "/construction-worker-portrait-with-hard-hat-trucks-background_1222783-31158.jpg",
    },
  ];

  return (
    <section id="team" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-[#0056b3] text-xs font-black uppercase tracking-[0.3em]">
            Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900">
            People behind <span className="text-[#0056b3]">the work</span>
          </h2>
          <p className="max-w-2xl text-zinc-600 text-base sm:text-lg leading-relaxed">
            A practical team built for field execution and responsive support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div
              key={m.name}
              className="group overflow-hidden border border-zinc-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700"
            >
              <div className="relative h-48">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-base font-black text-zinc-900">{m.name}</p>
                <p className="mt-2 text-sm text-zinc-600">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
