import AboutHero from "@/components/About-Component/AboutHero";
import StatsCards from "@/components/About-Component/StatsCards";
import TeamSection from "@/components/About-Component/Team";
import ServiceFeaturesSection from "@/components/About-Component/Services";

export const metadata = {
  title: "About Us",
  description: "Learn more about us and our mission.",
};


export default function About() {
  return (
    <section className="flex flex-col gap-8">
      <AboutHero/>
      <StatsCards/>
      <TeamSection/>
      <ServiceFeaturesSection/>
    </section>
  );
}