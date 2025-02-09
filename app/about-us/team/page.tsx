import React from "react";
import PageHero from "@/components/page-hero";
import { completeteamMembers, teamMembers } from "@/data";
import Bridge from "@/components/section5";
import RecruitmentSection from "@/components/ourTeam/recruitment";
import Advisory from "@/components/team/Advisory";
import Management from "@/components/team/Management";
import { workerbg } from "@/public";

const page = () => {
  return (
    <>
      <main className="pt-24">
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
      </main>
    </>
  );
};

export default page;
