import ProfileSection from "@/components/ProfileSection";
import { DevIcon } from "@/components/DevIcon";
import { Awards } from "@/components/Awards";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-16 sm:px-10 sm:py-24">
      <ProfileSection />
      <DevIcon />
      <Awards />
    </main>
  );
}
