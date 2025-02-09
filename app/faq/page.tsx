import FaqQuestion from "@/components/faqpage/faqquestion";
import Navigation from "@/components/layout/Header";
import RecruitmentSection from "@/components/ourTeam/recruitment";
import Bridge from "@/components/section5";
import React from "react";

const page = () => {
  return (
    <>
      <Navigation />
      <FaqQuestion />
      <Bridge />
      <RecruitmentSection />
    </>
  );
};

export default page;
