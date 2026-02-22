import CompanyHistory from "../components/about/CompanyHistory";
import MissionVision from "../components/about/MissionVision";
import Team from "../components/about/Team";
import Certificates from "../components/about/Certificates";

export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight">About Us</h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Learn who we are, what we stand for, and how we work.
        </p>
      </div>
      <CompanyHistory />
      <MissionVision />
      <Team />
      <Certificates />
    </main>
  );
}
