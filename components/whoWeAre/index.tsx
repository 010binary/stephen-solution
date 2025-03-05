/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./videoModal";
import { Check } from "lucide-react";
import TrustedBrands from "./trustedbrand";
import Container from "../layout/Container";

const features = [
  "Expert installation and repair services",
  "State-of-the-art technology",
  "Minimizing downtime and maximizing productivity",
];

export default function WhoWeAre() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section>
      <Container>
        <TrustedBrands />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Who We Are</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Experts in Oil Well Head Installation and Repair
              </h2>
              <p className="text-gray-600 text-justify ">
                We specialize in the installation, maintenance, and repair of
                oil well heads, ensuring efficient and safe operations for your
                energy needs. Our team of experienced professionals is dedicated
                to providing top-notch services that adhere to the highest
                industry standards. We utilize state-of-the-art technology and
                innovative techniques to deliver reliable and cost-effective
                solutions. Whether it&apos;s a new installation or an urgent
                repair, we are committed to minimizing downtime and maximizing
                productivity. Our comprehensive approach includes thorough
                inspections, precise installations, and meticulous maintenance
                to ensure the longevity and optimal performance of your oil well
                heads. Trust us to be your partner in achieving sustainable and
                efficient energy production.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="bg-blue-500 p-1 rounded-full">
                    <Check className="w-5 h-5" strokeWidth={4} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image with Video Button */}
          <div className="relative group">
            <img
              src="/placeholder-5.jpg"
              alt="Oil Refinery"
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setIsVideoOpen(true)}
              className="absolute top-1 right-1 bg-blue-500 scale-110 p-4 border-[15px] border-[#f8f8f8] transition-transform group-hover:scale-100"
            >
              <Play className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </section>
  );
}
