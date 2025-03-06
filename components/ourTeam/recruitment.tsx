"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import Container from "../layout/Container";
import { team } from "@/public/ourTeam";

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
    Router.push("/contact");
  };
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-12 ">
        {/* Left side - Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={team}
              alt="Team members in safety gear"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="lg:pl-8">
          <div className="space-y-4 flex flex-col gap-6">
            <div>
              <h3 className="text-4xl font-semibold">Open Recruitment</h3>
            </div>
            <div>
              <h2 className="text-5xl font-bold">
                Interested in joining our team?
              </h2>
            </div>
            <div>
              <p className="text-xl text-gray-600">
                We are looking for dedicated professionals to help us manage and
                maintain oil well heads efficiently and safely. Join us to make
                a significant impact in the energy sector.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.id} className="flex items-center gap-2">
                  <div className="text-black rounded-full bg-blue-500  p-1">
                    <Check strokeWidth={3} className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-xl">{value.label}</span>
                </div>
              ))}
            </div>

            <Button
              className="bg-blue-500 text-white hover:bg-blue-500/80 rounded-none w-full py-0"
              onClick={handleClick}
            >
              VIEW CAREERS
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
