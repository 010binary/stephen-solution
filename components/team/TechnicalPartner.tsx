"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "../layout/Container";

const logos = [
  { id: 1, url: "/clients/Client-2.png" },
  { id: 2, url: "/clients/Client-3.png" },
  { id: 3, url: "/clients/Client-4.png" },
  { id: 4, url: "/clients/Client-5.png" },
  { id: 5, url: "/clients/Client-2.png" },
  { id: 6, url: "/clients/Client-3.png" },
];

export default function TechnicalPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) =>
        current === logos.length - 2 ? 0 : current + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === logos.length - 2 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? logos.length - 2 : current - 1
    );
  };

  return (
    <div className=" bg-[#f8f8f8]">
      <Container>
        <div className="py-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800/60">
            Technical Partners
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                {logos.map((logo) => (
                  <div key={logo.id} className="min-w-[50%] px-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <Image
                        src={logo.url || "/clients/Client-3.png"}
                        alt={`Logo ${logo.id}`}
                        width={160}
                        height={40}
                        className="grayscale hover:grayscale-0 transition-all mx-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
