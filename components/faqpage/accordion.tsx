"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQItem[];
}

export default function FAQSection({
  title,
  description,
  faqs,
}: FAQSectionProps) {
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midpoint);
  const rightColumnFaqs = faqs.slice(midpoint);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {leftColumnFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`left-${index}`}>
                  <AccordionTrigger className="bg-[#647973] text-white px-6 py-4 hover:no-underline hover:bg-[#576b66] [&[data-state=open]>div>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#f8f8f8] px-6 py-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {rightColumnFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`right-${index}`}>
                  <AccordionTrigger className="bg-[#647973] text-white px-6 py-4 hover:no-underline hover:bg-[#576b66] [&[data-state=open]>div>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#f8f8f8] px-6 py-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
