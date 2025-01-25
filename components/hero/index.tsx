"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../navigation";
import InteractiveSection from "./interactive-section";
import { Button } from "@/components/ui/button";
import { backgroundImages, sections } from "@/data";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[95dvh] max-h-screen">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 "
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20">
        <Navigation />

        <div className="max-w-[95rem] mx-auto px-4 pt-24 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meeting Future Demand In A Sustainable Way
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              We&apos;re doing our part in that regard with greener practices
              that don&apos;t harm the environment.
            </p>
            <Button className="bg-[#e5fb34] text-black hover:bg-[#d4ea23]">
              DISCOVER MORE
            </Button>
          </div>

          {/* Interactive Sections */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <InteractiveSection
                key={section.title}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
