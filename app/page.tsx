import Hero from "@/components/hero/index";
import NewsSection from "@/components/news";
import WorldMap from "@/components/section3";
import ParallaxSection from "@/components/section4";
import Bridge from "@/components/section5";
import SolutionsGrid from "@/components/solutions";
import TeamSection from "@/components/team";
import WhoWeAre from "@/components/whoWeAre/index";
import WhyChooseUs from "@/components/whyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WorldMap />
      <ParallaxSection />
      <SolutionsGrid />
      <WhyChooseUs />
      <Bridge />
      <TeamSection />
      <NewsSection />
    </>
  );
}
