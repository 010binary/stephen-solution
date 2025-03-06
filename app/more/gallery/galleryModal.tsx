"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  alt: string;
}

interface GalleryModalProps {
  images: GalleryImage[];
  selectedId: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryModal({
  images,
  selectedId,
  onClose,
  onPrevious,
  onNext,
}: GalleryModalProps) {
  const selectedImage = images.find((img) => img.id === selectedId);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrevious, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown]);

  if (!selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={32} />
        </button>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 z-10 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          className="absolute right-4 z-10 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        {/* Image container */}
        <motion.div
          className="relative max-w-5xl max-h-[80vh] w-full h-full"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 25 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={selectedImage.imageUrl || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
              priority
            />
          </div>

          {/* Image details */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-1">{selectedImage.title}</h2>
            <p className="text-sm text-gray-300">{selectedImage.description}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
