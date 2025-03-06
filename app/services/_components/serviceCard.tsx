"use client";

import Image from "next/image";

interface ServiceHeroProps {
  index: string | number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ServiceHero({
  index,
  title,
  description,
  imageUrl,
}: ServiceHeroProps) {
  return (
    <div className="relative w-full min-h-[600px] rounded-[32px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Top Bar Content */}
      <div className="relative z-10 flex justify-between items-start p-8">
        <span className="text-[#F0A500] text-6xl font-bold">
          {index.toString().padStart(2, "0")}
        </span>
        <div className="hidden md:flex items-center gap-2">
          <div className="w-6 h-6 bg-red-500"></div>
          <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
          <div className="w-6 h-6 bg-blue-600 transform rotate-45"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-8 pb-8 mt-12">
        {/* Title Box */}
        <div className="relative max-w-lg mx-auto">
          <div className="bg-[#F0A500] text-white text-center py-6 px-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold whitespace-pre-line">
              {title}
            </h2>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[95%] h-4 bg-[#F0A500]/80 -z-10 rounded-lg" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-[#F0A500]/60 -z-20 rounded-lg" />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mt-16 text-white space-y-4">
          {description.split("\n").map((paragraph, i) => (
            <p key={i} className="text-lg text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
