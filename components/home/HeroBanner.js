"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image";

export function HeroBanner() {
  return (
    <section className="relative h-[500px] overflow-hidden bg-transparent md:block">
      {/* Background Shape */}

      <Image
        src="/assets/images/bg1.png"
        alt={"bg1"}
        // layout="fill"
        objectFit="cover"
        className="absolute left-0 top-0 w-full h-full object-cover "
        width={1449}
        height={500}
        quality={100}
      />


      <div className="w-full h-full mx-auto px-8 relative z-10 flex items-center justify-start">
        <div className="flex items-center min-h-[320px]">
          {/* Left Content */}
          <div className="max-w-md py-10 relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight text-balance">
              AgroVeli — платформа для поиска и размещения сельхозтоваров.
            </h1>
            <p className="text-white/90 text-base mb-6 leading-relaxed">
              Здесь вы можете найти агро-товары и связаться с продавцом напрямую для покупки.
            </p>
            <Button variant={"outline"} className="bg-transparent border-white text-white h-[43px] hover:bg-[#0F6A4F] rounded-lg px-6 py-5 text-base font-medium">
              Найти Товар
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
