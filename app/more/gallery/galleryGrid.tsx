"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (id: number) => void;
}

export default function GalleryGrid({
  images,
  onImageClick,
}: GalleryGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            className="overflow-hidden cursor-pointer h-full"
            onClick={() => onImageClick(image.id)}
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <CardContent className="p-0 relative aspect-square">
              <Image
                src={image.imageUrl || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500"
                style={{
                  transform: hoveredId === image.id ? "scale(1.1)" : "scale(1)",
                }}
              />

              {/* Overlay with title on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <div
                  className="p-4 w-full text-white transform translate-y-full transition-transform duration-300"
                  style={{
                    transform:
                      hoveredId === image.id
                        ? "translateY(0)"
                        : "translateY(100%)",
                  }}
                >
                  <h3 className="font-bold">{image.title}</h3>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
