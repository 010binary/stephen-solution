"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  image?: string
  heading?: string
  description?: string
  className?: string
  imageClassName?: string
}

export default function PageHero({ image, heading, description, className, imageClassName }: PageHeroProps) {
  return (
    <div className={cn("relative min-h-[400px] flex items-center", className)}>
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={heading || "Hero background"}
            fill
            className={cn("object-cover object-center", imageClassName)}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          {heading && <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{heading}</h1>}
          {description && (
            <div className="relative pl-8 border-l-2 border-[#e5fb34]">
              <p className="text-lg text-white">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

