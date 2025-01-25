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
  const solutions = [
    {
      title: "Petrolium Refinery",
      description:
        "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales.",
      icon: <Factory className="w-8 h-8 text-gray-600" />,
      featured: true,
    },
    {
      title: "Thermal Power",
      description:
        "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales.",
      icon: <Flame className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Gas Flaring",
      description:
        "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales.",
      icon: <Wind className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Oil Pump",
      description:
        "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales.",
      icon: <Droplet className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Chemical Factory",
      description:
        "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales.",
      icon: <Flask className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Methane Elimination",
      description:
        "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales.",
      icon: <Building2 className="w-8 h-8 text-gray-600" />,
    },
  ];

  return (
    <section className="py-8 md:py-16 ">
      <div className="container max-w-[95rem] mx-auto px-6">
        <div className="mb-7 text-center md:text-left md:flex">
          <h2 className="text-4xl capitalize md:text-5xl font-bold mb-4 w-full md:w-1/2">
            Powerful solutions for a sustainable future
          </h2>
          <section className="w-full md:w-1/2">
            <p className="text-justify text-gray-600 md:pt-4">
              Ultricies purus commodo arcu pellentesque sapien. Porta platea
              efficitur neque inceptos natoque quam curabitur. Suspendisse
              montes torquent luctus sagittis blandit nisl cubilia. Libero
              mattis nibh consequat class nunc.
            </p>
            <div className="w-16 h-1 bg-[#e5fb34] mt-3"></div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              featured={solution.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
