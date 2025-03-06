"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  image: string | StaticImageData;
  name: string;
  position?: string;
  index: number;
}

export default function TeamCard({
  image,
  name,
  position,
  index,
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
    >
      <Card className="overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            {position && <p className="text-gray-600 mb-4">{position}</p>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
