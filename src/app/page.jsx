import NewArrivals from "@/components/Home-Component/NewArrivals";
import ServiceFeaturesSection from "@/components/About-Component/Services";
import HeroSection from "@/components/Home-Component/Herosection";
import FlashSales from "@/components/Home-Component/FlashSales";
export default function Home() {
  return (
    <section>
      <HeroSection/>
      <FlashSales/>
      <NewArrivals/>
      <div className="my-12">
        <ServiceFeaturesSection/>
      </div>
    </section>
  );
}
