"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "./projectCard";

const projects = [
  {
    title: "Waste Heat Recovery",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    image: "/project/offshore-oil-rig-in-sea-against-sky-e1674900247917.jpg",
  },
  {
    title: "Crude Flexibility",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    image:
      "/project/oil-refinery-factory-at-the-cloudy-sky-petrochemical-plant-petroleum-e1674900200774.jpg",
  },
  {
    title: "Unconventional Gas",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    image: "/project/petrochemical-complex.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/project/topography-1.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      <div className="container max-w-[95rem] mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Our Awesome Projects</h3>
            <h2 className="text-4xl font-bold mb-4">
              We Take All Related Oil & Gas Projects
            </h2>
            <p className="text-gray-600">
              Penatibus condimentum enim arcu finibus litora turpis eget. Tempor
              neque feugiat ornare montes dictumst ullamcorper natoque nostra mi
              et.
            </p>
          </div>
          <Button variant="outline" className="border-2">
            ALL PROJECT
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
