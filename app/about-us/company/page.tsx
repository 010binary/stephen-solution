import RecruitmentSection from "@/components/ourTeam/recruitment";
import PageHero from "@/components/page-hero";
// import NewsSection from "@/components/news";
import ProjectsSection from "@/components/project";
import WorldMap from "@/components/bridge/WorldMap";
import ParallaxSection from "@/components/bridge/ParallaxSection";
import Bridge from "@/components/bridge/section5";
import SolutionsGrid from "@/components/SolutionsGrid";
import Advisory from "@/components/team/Advisory";
import Management from "@/components/team/Management";
import TeamSection from "@/components/team/Management";
import WhoWeAre from "@/components/whoWeAre/index";
import WhyChooseUs from "@/components/whyChooseUs";
import { completeteamMembers, teamMembers } from "@/data/index";
import { workerbg } from "@/public";
import React from "react";

export default function Home() {
  return (
    <>
      <PageHero
        image={workerbg}
        heading="Our Team"
        description="From the most remote corners of the Earth comes the fuel that makes modern life possible."
      />
      <section className="space-y-9 pt-6">
        <Management teamMembers={teamMembers} />
        <Bridge />
        <Advisory teamMembers={completeteamMembers} />
        <RecruitmentSection />
      </section>
      <WhoWeAre />
      <WorldMap />
      <ParallaxSection />
      <SolutionsGrid />
      <WhyChooseUs />
      <Bridge />
      <TeamSection teamMembers={teamMembers} />
      <ProjectsSection />
    </>
  );
}
