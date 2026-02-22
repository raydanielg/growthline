import ProfileHero from "@/app/components/profile/Hero";
import ProfileBackground from "@/app/components/profile/Background";
import ProfileMission from "@/app/components/profile/Mission";
import ProfileTeam from "@/app/components/profile/Team";

export default function ProfilePage() {
  return (
    <main>
      <ProfileHero />
      <ProfileBackground />
      <ProfileMission />
      <ProfileTeam />
    </main>
  );
}
