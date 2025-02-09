import Hero from "@/components/hero/index";
// import NewsSection from "@/components/news";
import ProjectsSection from "@/components/project";
import WorldMap from "@/components/section3";
import ParallaxSection from "@/components/section4";
import Bridge from "@/components/section5";
import SolutionsGrid from "@/components/solutions";
import Management from "@/components/team/Management";
import WhoWeAre from "@/components/whoWeAre/index";
import WhyChooseUs from "@/components/whyChooseUs";
import { teamMembers } from "@/data/index";

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
      <Management teamMembers={teamMembers} btn={true} />
      <ProjectsSection />
    </>
  );
}
