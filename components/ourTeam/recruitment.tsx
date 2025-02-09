"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const values = [
  { label: "Accountability", id: 1 },
  { label: "Integrity", id: 2 },
  { label: "Citizenship", id: 3 },
  { label: "Safety", id: 4 },
  { label: "Excellence", id: 5 },
  { label: "Enthusiastic", id: 6 },
];

export default function RecruitmentSection() {
  const Router = useRouter();

  const handleClick = () => {
    Router.push("/careers");
  };
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/ourTeam/generalteampic.jpg"
                alt="Team members in safety gear"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {" "}
                  Open Recruitment{" "}
                </h3>
                <h2 className="text-4xl font-bold mb-4">
                  {" "}
                  Interested in joining our team ?{" "}
                </h2>
                <p className="text-gray-600">
                  Egestas porta posuere curabitur mauris dictumst si laoreet
                  vivamus etiam.Senectus iaculis non ultricies facilisi
                  penatibus.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value.id} className="flex items-center gap-2">
                    <div className="text-black">
                      <Check strokeWidth={3} className="h-5 w-5 " />
                    </div>
                    <span className="font-bold "> {value.label} </span>
                  </div>
                ))}
              </div>

              <Button
                className="bg-[#e5fb34] text-black hover:bg-[#d4ea23]"
                onClick={handleClick}
              >
                {" "}
                VIEW CAREERS{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
