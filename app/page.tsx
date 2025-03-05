import Hero from "@/components/hero/index";

import WorldMap from "@/components/bridge/WorldMap";
import ParallaxSection from "@/components/bridge/ParallaxSection";
import Bridge from "@/components/bridge/section5";
import SolutionsGrid from "@/components/SolutionsGrid";
import Management from "@/components/team/Management";
import WhoWeAre from "@/components/whoWeAre/index";
import WhyChooseUs from "@/components/whyChooseUs";
import { teamMembers } from "@/data/index";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="space-y-20 pt-10 pb-10 ">
        <WhoWeAre />
        <WorldMap />
        <ParallaxSection />
        <SolutionsGrid />
        <WhyChooseUs />
        <Bridge />
        <Management teamMembers={teamMembers} btn={true} />
      </section>
    </>
  );
}
