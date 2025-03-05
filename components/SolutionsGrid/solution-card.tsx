import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
}

export default function SolutionCard({
  title,
  description,
  icon,
  featured = false,
}: SolutionCardProps) {
  return (
    <Card
      className={`relative group ${featured ? "bg-[#647973]" : "bg-gray-100"}`}
    >
      <CardContent className="p-6">
        <div className="border border-dashed border-gray-400 w-16 h-16 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3
          className={`text-xl font-semibold mb-3 ${
            featured ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p className={`${featured ? "text-gray-200" : "text-gray-600"}`}>
          {description}
        </p>
        <Link
          href="#"
          className={`absolute top-6 right-6 bg-blue-500 p-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1`}
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </CardContent>
    </Card>
  );
}
