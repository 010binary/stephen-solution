"use client";

import Image from "next/image";
import AnimatedProgressBar from "./animatedProgressBar";

const stats = [
  { label: "Cleaner", percentage: 90 },
  { label: "Stronger", percentage: 75 },
  { label: "Better", percentage: 82 },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://web.moxcreative.com/oeelco/wp-content/uploads/sites/6/2023/01/oil-and-gas-refinery-plant-form-industry-zone-aerial-view-oil-and-gas-industrial-e1674900174945.jpg"
                alt="Oil and gas refinery plant"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="absolute bottom-[-20%] right-[-10%] w-2/3">
              <Image
                src="https://web.moxcreative.com/oeelco/wp-content/uploads/sites/6/2023/01/aerial-view-of-oil-refinery-industrial-site-in-a-modern-city-e1674900154491.jpg"
                alt="Aerial view of oil refinery"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-12">
            <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
            <h2 className="text-4xl font-bold mb-6">
              Promoting responsible use of petroleum resources
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              {stats.map((stat) => (
                <AnimatedProgressBar
                  key={stat.label}
                  label={stat.label}
                  percentage={stat.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
