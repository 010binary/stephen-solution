/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoModal from "./videoModal";
import { Check } from "lucide-react";
import TrustedBrands from "./trustedbrand";

const features = [
  "Clean energy for a bright future",
  "Sustainable development",
  "Improving access to energy",
];

export default function WhoWeAre() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-10 px-4 bg-[#f8f8f8]">
      <div className="container max-w-[95rem] px-4 mx-auto">
        <TrustedBrands />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Who We Are</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Providing affordable and reliable energy
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="bg-[#e5fb34] p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#e5fb34] p-4 rounded-lg">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">
                    We&apos;re No.1 Oil & Gas Company
                  </h4>
                </div>
              </div>
              <Button className="bg-[#e5fb34] text-black hover:bg-[#d4ea23]">
                READ MORE
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Video Button */}
          <div className="relative group">
            
            <img
              src="/placeholder-5.jpg"
              alt="Oil Refinery"
              className="w-full rounded-lg"
            />
            {/* <Image
              src="/placeholder-5.jpg"
              alt="Oil Refinery"
              className="w-full"
              width={100}
              height={100}
            /> */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="absolute top-1 right-1 bg-[#e5fb34] p-4 border-[15px] border-[#f8f8f8] transition-transform group-hover:scale-110"
            >
              <Play className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </section>
  );
}
