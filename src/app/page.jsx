import NewArrivals from "@/components/Home-Component/NewArrivals";
import ServiceFeaturesSection from "@/components/About-Component/Services";
export default function Home() {
  return (
    <section>
      <NewArrivals/>
      <div className="my-12">
        <ServiceFeaturesSection/>
      </div>
    </section>
  );
}
