"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface InteractiveSectionProps {
  title: string;
  description: string;
}

export default function InteractiveSection({
  title,
  description,
}: InteractiveSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-2 text-white border-b border-[#e5fb34] py-2">
        <ChevronRight
          className={`w-6 h-6 text-[#e5fb34] ${
            isOpen ? "rotate-90 duration-300" : " duration-300"
          }`}
        />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-200"
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
