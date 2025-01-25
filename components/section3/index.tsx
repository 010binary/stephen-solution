"use client";

import Image from "next/image";
import AnimatedCounter from "./animatedcounter";

const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 77,
    label: "Office Worldwide",
  },
  {
    value: 38,
    suffix: "K",
    label: "Workers Employed",
  },
];

export default function WorldMap() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container max-w-[95rem] px-4 mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="relative">
            <Image
              src="/World-map-a.png"
              alt="World Map"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-4xl font-bold mb-6">
              We Spread Around The World
            </h2>
            <p className="text-gray-600 mb-12">
              Laoreet lorem consectetuer hendrerit dictumst curae volutpat
              cubilia elit velit natoque. Eleifend diam volutpat lectus aliquam
              aenean. Dolor sed orci scelerisque taciti sodales tortor.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
