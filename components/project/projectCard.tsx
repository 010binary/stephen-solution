"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <Card className="group relative bg-white rounded-none shadow-[0_0_40px_0_rgba(0,0,0,0.08)] hover:shadow-[0_0_50px_0_rgba(0,0,0,0.12)] transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-8 bg-white relative">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <Button
            variant="link"
            className="bg-blue-500 text-black hover:bg-blue-800 duration-300 px-8 h-12"
          >
            READ MORE
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
