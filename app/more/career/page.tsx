import ContactForm from "@/app/contact/contactForm";
import ContactInfo from "@/app/contact/contactInfo";
import PageHero from "@/components/page-hero";
import { contact } from "@/public/backgrounds";
import React from "react";

const page = () => {
  return (
    <>
      <PageHero
        image={contact}
        heading="Career with us"
        description="From the most remote corners of the Earth comes the fuel that makes modern life possible."
      />
      <section className="space-y-16 pt-10 pb-10">
        <ContactForm />
        <ContactInfo />
      </section>
    </>
  );
};

export default page;
