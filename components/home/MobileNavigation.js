"use client"

import { Home, PlusSquare, Heart, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  { id: "home", label: "Главная", icon: Home },
  { id: "add", label: "Добавить", icon: PlusSquare },
  { id: "favorites", label: "Фаворит", icon: Heart },
  { id: "profile", label: "Войти", icon: User },
]

export function MobileNavigation() {
  const [activeItem, setActiveItem] = useState("home")

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="flex flex-col items-center gap-1 py-2 px-3"
            >
              <Icon
                className={cn("h-5 w-5 transition-colors", isActive ? "text-[#0F6A4F]" : "text-muted-foreground")}
              />
              <span
                className={cn(
                  "text-xs transition-colors",
                  isActive ? "text-[#0F6A4F] font-medium" : "text-muted-foreground",
                )}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
