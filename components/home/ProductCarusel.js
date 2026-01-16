"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Heart, Star, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProductCarousel({ title, products, badgeColor, badgeIcon }) {
  const [favorites, setFavorites] = useState(products.filter((p) => p.favorite).map((p) => p.id))
  const scrollRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const toggleFavorite = (productId) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 288 // approximate card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })

      if (direction === "right" && currentSlide < products.length - 1) {
        setCurrentSlide(currentSlide + 1)
      } else if (direction === "left" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }
    }
  }

  const BadgeIcon = badgeIcon === "star" ? Star : Tag

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium",
            badgeColor,
          )}
        >
          <BadgeIcon className="h-4 w-4" />
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-border bg-transparent"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-border bg-transparent"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2 -mx-4 px-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={() => toggleFavorite(product.id)}
          />
        ))}
      </div>

      {/* Dots Indicator (Mobile) */}
      <div className="flex justify-center gap-1.5 md:hidden">
        {products.slice(0, 4).map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentSlide % 4 ? "bg-emerald-600" : "bg-border",
            )}
          />
        ))}
      </div>
    </section>
  )
}

function ProductCard({
                       product,
                       isFavorite,
                       onToggleFavorite,
                     }) {
  return (
    <div className="flex-shrink-0 w-[260px] snap-start">
      <div className="relative group">
        {/* Image */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
          <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />

          {/* Viewed Badge */}
          {product.viewed && (
            <div className="absolute top-2 right-2 bg-foreground/80 text-background text-xs px-2 py-1 rounded">
              Просмотрено
            </div>
          )}

          {/* Image Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {[0, 1, 2].map((dot) => (
              <div key={dot} className={cn("w-1.5 h-1.5 rounded-full", dot === 0 ? "bg-white" : "bg-white/50")} />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="mt-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground">{product.location}</p>
              <h3 className="text-base font-medium text-emerald-600 truncate">{product.title}</h3>
            </div>
            <button onClick={onToggleFavorite} className="shrink-0 p-1">
              <Heart
                className={cn(
                  "h-5 w-5 transition-colors",
                  isFavorite ? "fill-rose-500 text-rose-500" : "text-muted-foreground hover:text-rose-500",
                )}
              />
            </button>
          </div>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-lg font-bold text-foreground">{product.price}₾</span>
            {product.unit && <span className="text-sm text-muted-foreground">{product.unit}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
