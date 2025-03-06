"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServiceDetail {
  label: string;
  value: string;
}

interface ServiceDetailsProps {
  overview: {
    title: string;
    description: string;
  };
  images: {
    left: string;
    right: string;
  };
  benefits: {
    description: string;
    list: string[];
  };
  details: ServiceDetail[];
  contactSection: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export default function ServiceDetails({
  overview,
  images,
  benefits,
  details,
  contactSection,
}: ServiceDetailsProps) {
  return (
    <div className="mx-auto lg:px-2 py-12">
      <div className="grid lg:grid-cols-[1fr,400px] gap-8">
        {/* Main Content */}
        <div className="space-y-12">
          {/* Overview Section */}
          <section>
            <h1 className="text-3xl font-bold mb-6">{overview.title}</h1>
            <p className="text-gray-600 leading-relaxed">
              {overview.description}
            </p>
          </section>

          {/* Images Section */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={images.left || "/placeholder.svg"}
                alt="Project image left"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={images.right || "/placeholder.svg"}
                alt="Project image right"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Benefits of Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="text-gray-600 leading-relaxed">
                {benefits.description}
              </p>
              <ul className="space-y-3">
                {benefits.list.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Project Details */}
          <div className="divide-y">
            {details.map((detail, index) => (
              <div key={index} className="py-4">
                <h3 className="font-semibold mb-1">{detail.label}</h3>
                <p className="text-gray-600">{detail.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-[#647973] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{contactSection.title}</h3>
            <p className="mb-6 text-gray-100">{contactSection.description}</p>
            <Button className="w-full bg-blue-500 text-black hover:bg-blue-400">
              {contactSection.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
