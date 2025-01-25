"use client";

import { Button } from "@/components/ui/button";

export default function Bridge() {
  return (
    <section className="relative max-h-fit  overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 opacity-60 bg-black/50 transition-all duration-300
          bg-cover bg-center bg-no-repeat 
          lg:bg-fixed"
        style={{
          backgroundImage: `url('/oil-gas-operations-iraq.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative max-h-fit bg-black/40">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
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
              <Button className="bg-[#e5fb34] text-black hover:bg-[#d4ea23] rounded-none">
                DISCOVER MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
