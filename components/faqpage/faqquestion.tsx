import FAQSection from "../sections/accordion";
import { faqData } from "@/data/index";

export default function FaqQuestion() {
  return (
    <FAQSection
      title={faqData.title}
      description={faqData.description}
      faqs={faqData.faqs}
    />
  );
}
