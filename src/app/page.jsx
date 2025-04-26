import NewArrivals from "@/components/Home-Component/NewArrivals";
import ServiceFeaturesSection from "@/components/About-Component/Services";
import HeroSection from "@/components/Home-Component/Herosection";
import FlashSales from "@/components/Home-Component/FlashSales";
import BestSellingProducts from "@/components/Home-Component/BestSellingProducts";
import Categories from "@/components/Home-Component/Categories";
import CategoriesSecond from "@/components/Home-Component/Second-Categories/CategoriesSecond";
import ExploreOurProducts from "@/components/Home-Component/ExploreProducts";
export default function Home() {
  return (
    <section>
      <HeroSection/>
      <FlashSales/>
      <Categories/>
      <BestSellingProducts/>
      <CategoriesSecond/>
      <ExploreOurProducts/>
      <NewArrivals/>
      <div className="my-12">
        <ServiceFeaturesSection/>
      </div>
    </section>
  );
}
