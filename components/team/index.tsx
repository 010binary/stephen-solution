"use client";

import { Button } from "@/components/ui/button";
import TeamCard from "./teamCard";

const teamMembers = [
  {
    image: "/team/Team_1.jpg",
    name: "Jason Ramos",
    position: "Managing Director",
  },
  {
    image: "/team/Team_3.jpg",
    name: "Charles Bernardi",
    position: "Head of Operation",
  },
  {
    image: "/team/Team_7.jpg",
    name: "Corrie Deegan",
    position: "Customer Relation",
  },
  {
    image: "/team/Team_8.jpg",
    name: "James Lomas",
    position: "Operations Lead",
  },
];

export default function TeamSection() {
  return (
    <section className="md:py-16 ">
      <div className="container max-w-[95rem] px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <Button variant="outline" className="border-2">
            ALL TEAM MEMBER
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              image={member.image}
              name={member.name}
              position={member.position}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
