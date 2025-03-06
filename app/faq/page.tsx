import FaqQuestion from "@/components/faqpage/faqquestion";
import RecruitmentSection from "@/components/ourTeam/recruitment";
import Bridge from "@/components/bridge/section5";
import React from "react";
import PageHero from "@/components/page-hero";
import { contact } from "@/public/backgrounds";

const page = () => {
  return (
    <>
      <PageHero
        image={contact}
        heading="Frequently asked questions"
        description="From the most remote corners of the Earth comes the fuel that makes modern life possible."
      />
      <section className="space-y-16 pt-10 pb-10">
        <FaqQuestion />
        <Bridge />
        <RecruitmentSection />
      </section>
    </>
  );
};

export default page;
