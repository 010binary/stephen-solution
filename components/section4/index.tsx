"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableSectionProps {
  title: string;
  content: string;
}

function ExpandableSection({ title, content }: ExpandableSectionProps) {
  return (
    <div className="cursor-pointer">
      <div className="flex items-center gap-2 mb-2">
        <ChevronRight className="w-6 h-6 text-[#e5fb34]" />
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
  const sections = [
    {
      id: "aspiration",
      title: "Aspiration",
      content:
        "Metus montes cras massa venenatis id dignissim suspendisse purus nibh. Mollis sapien facilisis luctus.",
    },
    {
      id: "vision",
      title: "Vision",
      content:
        "Metus montes cras massa venenatis id dignissim suspendisse purus nibh. Mollis sapien facilisis luctus.",
    },
    {
      id: "mission",
      title: "Mission",
      content:
        "Metus montes cras massa venenatis id dignissim suspendisse purus nibh. Mollis sapien facilisis luctus.",
    },
  ];

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
      <div className="relative max-h-fit bg-black/40">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h3 className="text-lg font-semibold mb-4">
                Preserve And Conserve
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Vital Energy Resource For A Better Tomorrow
              </h2>
              <p className="text-gray-200 mb-8">
                Cubilia scelerisque ultricies at cras tempus phasellus primis
                habitant. Penatibus pulvinar at vel cursus dignissim sem
                condimentum molestie. Lobortis hac aenean posuere justo letius
                laoreet augue.
              </p>
              <Button className="bg-blue-500 text-black hover:bg-blue-800 duration-300">
                DISCOVER MORE
              </Button>
            </div>

            {/* Right Content - Expandable Sections */}
            <div className="space-y-6">
              {sections.map((section) => (
                <ExpandableSection
                  key={section.id}
                  title={section.title}
                  content={section.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
