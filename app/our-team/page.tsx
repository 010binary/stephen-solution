import React from "react";
import PageHero from "@/components/page-hero";
import TeamSection from "@/components/team";
import { completeteamMembers } from "@/data";
import Bridge from "@/components/section5";
import RecruitmentSection from "@/components/ourTeam/recruitment";

const page = () => {
  return (
    <>
      <PageHero
        image="/oil-gas-operations-iraq.jpg"
        heading="Our Team"
        description="From the most remote corners of the Earth comes the fuel that makes modern life possible."
      />
      <TeamSection teamMembers={completeteamMembers} />
      <Bridge />
      <RecruitmentSection />
    </>
  );
};

export default page;
