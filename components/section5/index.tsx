"use client";

import { workerbg } from "@/public";

export default function Bridge() {
  return (
    <section className="relative max-h-fit  overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 opacity-60 bg-black/50 transition-all duration-300
          bg-cover bg-center bg-no-repeat 
          lg:bg-fixed"
        style={{
          backgroundImage: `url(${workerbg.src})`,
        }}
      />

      {/* Content */}
      <div className="relative max-h-fit bg-black/40">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Excellence in Oil Well Management
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ensuring Sustainable Energy for the Future
              </h2>
              <p className="text-gray-200 mb-8 text-xl">
                Our expertise in oil well management ensures the efficient and
                responsible extraction of vital energy resources. We are
                committed to innovation, safety, and sustainability in all our
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
