import ProfileHero from "../components/profile/Hero";
import ProfileBackground from "../components/profile/Background";
import ProfileMission from "../components/profile/Mission";
import ProfileTeam from "../components/profile/Team";

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
