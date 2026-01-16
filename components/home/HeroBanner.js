"use client"

import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-yellow-400 hidden md:block">
      {/* Background Shape */}
      <div className="absolute inset-0">
        <svg
          className="absolute left-0 top-0 h-full"
          viewBox="0 0 600 400"
          fill="none"
          preserveAspectRatio="xMinYMid slice"
        >
          <path d="M0 0H400C400 0 500 100 450 200C400 300 500 400 500 400H0V0Z" className="fill-emerald-600" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center min-h-[320px]">
          {/* Left Content */}
          <div className="max-w-md py-10 relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight text-balance">
              AgroVeli — платформа для поиска и размещения сельхозтоваров.
            </h1>
            <p className="text-white/90 text-base mb-6 leading-relaxed">
              Здесь вы можете найти агро-товары и связаться с продавцом напрямую для покупки.
            </p>
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-6 py-5 text-base font-medium">
              Найти Товар
            </Button>
          </div>

          {/* Right Image Area */}
          <div className="flex-1 relative hidden lg:flex justify-end items-end">
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute -left-20 top-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white/30">
                <img src="/fresh-pumpkins-vegetables-autumn-harvest.jpg" alt="Pumpkins" className="w-full h-full object-cover" />
              </div>
              {/* Main Image */}
              <img
                src="/smiling-woman-farmer-with-basket-of-fresh-vegetabl.jpg"
                alt="Farmer with vegetables"
                className="h-80 object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
