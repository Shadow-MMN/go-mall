import Image from "next/image";
import { Store, CircleDollarSign, ShoppingBag, Truck, Headset, ShieldCheck, Wallet, Twitter, Instagram, Linkedin } from 'lucide-react';
import AboutHero from "@/components/About-Component/AboutHero";
import StatsCards from "@/components/About-Component/StatsCards";
import TeamSection from "@/components/About-Component/Team";
import ServiceFeaturesSection from "@/components/About-Component/Services";
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