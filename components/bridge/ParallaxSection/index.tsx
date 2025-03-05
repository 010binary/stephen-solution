"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ParallaxSectionData } from "@/data";
import Container from "@/components/layout/Container";

interface ExpandableSectionProps {
  title: string;
  content: string;
}

function ExpandableSection({ title, content }: ExpandableSectionProps) {
  return (
    <div className="cursor-pointer">
      <div className="flex items-center gap-2 mb-2">
        <ChevronRight className="w-6 h-6 text-blue-500" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pl-8 text-gray-200"
        >
          <p>{content}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function ParallaxSection() {
  const router = useRouter();

  const handleclick = () => {
    return router.push("/services/installation");
  };

  return (
    <section className="relative max-h-fit">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 opacity-60 transition-all duration-300
          bg-cover bg-center bg-no-repeat
          lg:bg-fixed"
        style={{
          backgroundImage: `url('/city-modern-view-e1674900224633.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative max-h-fit bg-black/40 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Reliable and Efficient
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Vital Energy Resource For A Better Tomorrow
              </h2>
              <p className="text-gray-200 mb-8">
                Our expertise in oil well head installation and repair ensures
                the longevity and efficiency of your operations. We are
                committed to delivering top-notch services that support a
                sustainable energy future.
              </p>
              <Button
                className="bg-blue-500 text-white hover:bg-blue-800 duration-300 rounded-none"
                onClick={() => handleclick()}
              >
                LEARN MORE
              </Button>
            </div>

            {/* Right Content - Expandable Sections */}
            <div className="space-y-6">
              {ParallaxSectionData.map((section) => (
                <ExpandableSection
                  key={section.id}
                  title={section.title}
                  content={section.content}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
