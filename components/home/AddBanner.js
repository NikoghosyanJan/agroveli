"use client"

import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"


export function AdBanner({ banners }) {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {banners.map((banner) => (
          <div key={banner.id} className="relative group rounded-xl overflow-hidden">
            {/* Ad Label */}
            <div className="absolute top-2 left-2 z-10 bg-foreground/80 text-background text-xs px-2 py-1 rounded">
              Реклама
            </div>

            {/* More Options */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 h-6 w-6 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full"
            >
              <MoreVertical className="h-3 w-3" />
            </Button>

            {/* Image */}
            <div className="aspect-[4/3] md:aspect-[3/4]">
              <img
                src={banner.image || "/placeholder.svg"}
                alt="Advertisement"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
