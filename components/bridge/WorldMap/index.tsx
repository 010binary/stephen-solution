"use client";

import Image from "next/image";
import AnimatedCounter from "./animatedcounter";
import { worldmap } from "@/public";
import Container from "@/components/layout/Container";

const stats = [
  {
    value: 2,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 10,
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
    <section className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="relative">
            <Image
              src={worldmap}
              alt="World Map"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-4xl font-bold mb-6">
              Global Expertise in Oil Well Head Installation and Repair
            </h2>
            <p className="text-gray-600 mb-12">
              Based in Nigeria, we provide top-notch oil well head installation
              and repair services worldwide. Our team of experts ensures the
              highest standards of quality and safety in every project we
              undertake.
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
      </Container>
    </section>
  );
}
