import Container from "../layout/Container";
import SolutionCard from "./solution-card";
import {
  FlaskRoundIcon as Flask,
  Flame,
  Factory,
  Droplet,
  Building2,
  Wind,
} from "lucide-react";

export default function SolutionsGrid() {
  const solutionsGridData = [
    {
      title: "Petrolium Refinery",
      description:
        "Comprehensive installation and repair services for petroleum refineries to ensure smooth and efficient operations.",
      icon: <Factory className="w-8 h-8 text-gray-600" />,
      featured: true,
    },
    {
      title: "Thermal Power",
      description:
        "Expert maintenance and repair solutions for thermal power plants to maximize uptime and performance.",
      icon: <Flame className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Gas Flaring",
      description:
        "Specialized services for gas flaring systems to enhance safety and compliance with environmental regulations.",
      icon: <Wind className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Oil Pump",
      description:
        "Reliable installation and repair services for oil pumps to ensure continuous and efficient extraction.",
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Chemical Factory",
      description:
        "Tailored solutions for chemical factories to maintain and repair critical infrastructure and equipment.",
      icon: <Flask className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Methane Elimination",
      description:
        "Advanced services for methane elimination systems to improve safety and reduce environmental impact.",
      icon: <Building2 className="w-8 h-8 text-gray-600" />,
    },
  ];

  return (
    <Container>
      <div className="mb-7 text-center md:text-left md:flex">
        <h2 className="text-4xl capitalize md:text-5xl font-bold mb-4 w-full md:w-1/2">
          Powerful solutions for a sustainable future
        </h2>
        <section className="w-full md:w-1/2">
          <p className="text-justify text-gray-600 md:pt-4">
            Here are some of the industries that can benefit from our oil well
            head installation and repair services: petroleum refineries, thermal
            power plants, gas flaring systems, oil extraction operations,
            chemical factories, and methane elimination systems.
          </p>
          <div className="w-16 h-1 bg-blue-500 mt-3"></div>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionsGridData.map((solution) => (
          <SolutionCard
            key={solution.title}
            title={solution.title}
            description={solution.description}
            icon={solution.icon}
            featured={solution.featured}
          />
        ))}
      </div>
    </Container>
  );
}
