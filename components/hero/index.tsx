"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { backgroundImages } from "@/data";
import { Minus } from "lucide-react";
import Container from "../layout/Container";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const zoomInContainer = {
    initial: { scale: 100 },
    animate: { scale: 100 },
  };

  return (
    <div className="relative min-h-[50vh] overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => {
        return (
          <motion.div
            key={index}
            variants={zoomInContainer}
            initial={{ opacity: 1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.3 : 1,
            }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 5 }}
            className={`absolute inset-0 z-0 transition-all ease-in-out `}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            transition={{
              opacity: { duration: 5, delay: 0 },
              scale: { duration: 3, delay: 3 },
            }}
          />
        );
      })}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <Container>
        <div className="relative z-20">
          <div className="px-6 lg:px-0 mx-auto pt-24 pb-16 flex justify-between flex-col">
            <div className="max-w-3xl text-center md:text-left ">
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-10">
                Leading the Way in Oilwell Head Solutions
              </h1>
              <p className="text-xl font-semibold md:text-3xl text-gray-200 mb-10 ">
                Providing top-notch installation and maintenance services to
                ensure the efficiency and safety of your oilwell operations.
              </p>
              <Button className="bg-blue-500 text-black hover:bg-blue-700 duration-300 rounded-none w-72 h-16 text-lg md:text-xl">
                LEARN MORE
                <span className="inline">
                  <Minus strokeWidth={3} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
