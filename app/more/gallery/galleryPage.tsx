"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GalleryGrid from "./galleryGrid";
import GalleryModal from "./galleryModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "@/components/layout/Container";

// Define image categories
const categories = [
  { id: "all", label: "All" },
  { id: "wellheads", label: "Wellheads" },
  { id: "operations", label: "Operations" },
  { id: "equipment", label: "Equipment" },
];

// Sample gallery data - replace with your actual images
const galleryImages = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  title: `Oil Wellhead ${i + 1}`,
  category:
    i % 3 === 0 ? "wellheads" : i % 3 === 1 ? "operations" : "equipment",
  description: `High-quality industrial wellhead equipment used in oil extraction operations.`,
  imageUrl: `/product/product${i + 1}.jpeg?height=${800 + i * 10}&width=${
    600 + i * 10
  }`,
  alt: `Oil wellhead equipment ${i + 1}`,
}));

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Filter images based on active category
  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Modal navigation handlers
  const handlePrevious = () => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Oil Wellhead Gallery
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of high-quality oil wellhead equipment and
          operations. These images showcase our commitment to excellence in the
          oil and gas industry.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center mb-6">
          <TabsList className="bg-gray-100">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="px-6 py-2"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Gallery Grid */}
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <GalleryGrid
              images={filteredImages}
              onImageClick={(id) => setSelectedImage(id)}
            />
          </TabsContent>
        ))}
      </Tabs>

      {/* Image Modal */}
      {selectedImage !== null && (
        <GalleryModal
          images={filteredImages}
          selectedId={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </Container>
  );
}
