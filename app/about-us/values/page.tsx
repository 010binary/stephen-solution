import React from "react";
import PageHero from "@/components/page-hero";
import { teamMembers } from "@/data";
import Bridge from "@/components/bridge/section5";
import RecruitmentSection from "@/components/ourTeam/recruitment";
import Management from "@/components/team/Management";
import { Moderncity } from "@/public";
import ValuesSection  from "@/components/values/ValuesSection";

const page = () => {
  return (
    <>
      <PageHero
        image={Moderncity}
        heading="Our Values"
        description="At the heart of our operations, we prioritize safety, innovation, and sustainability to deliver the energy that powers progress."
      />
      <section className="space-y-14 pt-10 pb-20">
        <ValuesSection />
        <Bridge />
        <Management teamMembers={teamMembers} btn={true} />
        <RecruitmentSection />
      </section>
    </>
  );
};

export default page;
