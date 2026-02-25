import ProfileHero from "@/app/components/profile/Hero";
import ProfileBackground from "@/app/components/profile/Background";
import ProfileMission from "@/app/components/profile/Mission";
import ProfileTeam from "@/app/components/profile/Team";
import NetworkBackground from "@/app/components/ui/NetworkBackground";

export default function ProfilePage() {
  return (
    <main className="relative min-h-screen bg-white">
      <NetworkBackground />
      <div className="relative z-10">
        <ProfileHero />
        <ProfileBackground />
        <ProfileMission />
        <ProfileTeam />
      </div>
    </main>
  );
}
