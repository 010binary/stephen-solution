"use client";

import { Button } from "@/components/ui/button";
import TeamCard from "./teamCard";
import Container from "../layout/Container";
import { useRouter } from "next/navigation";

interface TeamMember {
  name: string;
  image: string;
  position: string;
}

interface ManagementProps {
  teamMembers: TeamMember[];
  btn?: boolean;
}

export default function Management({ teamMembers, btn }: ManagementProps) {
  const router = useRouter();

  const handleclick = () => {
    router.push("/about-us/team");
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="max-w-2xl mb-6 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600 text-justify">
            Our leadership team brings decades of experience in oil well head
            installation and repair, ensuring top-notch service and expertise.
          </p>
        </div>
        {btn && (
          <Button variant="outline" className="border-2" onClick={handleclick}>
            ALL TEAM MEMBER
          </Button>
        )}
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
    </Container>
  );
}
