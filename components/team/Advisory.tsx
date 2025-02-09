"use client";

import TeamCard from "./teamCard";
import Container from "../layout/Container";

interface TeamMember {
  name: string;
  image: string;
  position: string;
}

interface AdvisoryProps {
  teamMembers: TeamMember[];
}

export default function Advisory({ teamMembers }: AdvisoryProps) {
  return (
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Meet Our Advisory team</h2>
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
