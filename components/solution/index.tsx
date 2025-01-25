import SolutionCard from "./solution-card"
import { FlaskRoundIcon as Flask, Flame, Factory, Droplet, Building2, Wind } from "lucide-react"

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
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Powerful solutions for a sustainable future</h2>
          <p className="text-gray-600">
            Ultricies purus commodo arcu pellentesque sapien. Porta platea efficitur neque inceptos natoque quam
            curabitur. Suspendisse montes torquent luctus sagittis blandit nisl cubilia. Libero mattis nibh consequat
            class nunc.
          </p>
          <div className="w-16 h-1 bg-[#e5fb34] mx-auto mt-6"></div>
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
  )
}

