import { Header } from "@/components/layout/header";
import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryFilters } from "@/components/home/CategoryFilters";
import { ProductCarousel } from "@/components/home/ProductCarusel";
import { AdBanner } from "@/components/home/AddBanner";
import { MobileNavigation } from "@/components/home/MobileNavigation";

const premiumPlusProducts = [
  {
    id: 1,
    image: "/mandarin.png",
    location: "Марнеули",
    title: "Мандарин",
    price: "2.5",
    unit: "1kg",
    viewed: false,
    favorite: false,
  },
  {
    id: 2,
    image: "/mandarin.png",
    location: "Марнеули",
    title: "Молоко",
    price: "2",
    unit: "1L",
    viewed: true,
    favorite: false,
  },
  {
    id: 3,
    image: "/mandarin.png",
    location: "Болниси",
    title: "Картофель",
    price: "1.2",
    unit: "1kg",
    viewed: true,
    favorite: false,
  },
  {
    id: 4,
    image: "/mandarin.png",
    location: "Ахалцихе",
    title: "Морковь",
    price: "2.5",
    unit: "1kg",
    viewed: false,
    favorite: false,
  },
]

const premiumProducts = [
  {
    id: 5,
    image: "/mandarin.png",
    location: "Тбилиси",
    title: "Кукуруза",
    price: "2.5",
    unit: "1kg",
    viewed: false,
    favorite: false,
  },
  {
    id: 6,
    image: "/mandarin.png",
    location: "Тбилиси",
    title: "Трактор",
    price: "60000",
    unit: "",
    viewed: true,
    favorite: true,
  },
  {
    id: 7,
    image: "/mandarin.png",
    location: "Болниси",
    title: "Лопатка",
    price: "12",
    unit: "",
    viewed: true,
    favorite: false,
  },
  {
    id: 8,
    image: "/mandarin.png",
    location: "Ахалцихе",
    title: "Морковь",
    price: "2.5",
    unit: "1kg",
    viewed: false,
    favorite: false,
  },
  {
    id: 9,
    image: "/mandarin.png",
    location: "Test",
    title: "Test",
    price: "12,000",
    unit: "",
    viewed: true,
    favorite: false,
  },
]

const adBanners = [
  {
    id: 1,
    image: "/mandarin.png",
  },
  {
    id: 2,
    image: "/mandarin.png",
  },
  {
    id: 3,
    image: "/mandarin.png",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <main className="pb-20 md:pb-0">
        <CategoryFilters />
        <div className="container mx-auto px-4 py-6 space-y-8">
          <ProductCarousel
            title="Premium +"
            products={premiumPlusProducts}
            badgeColor="bg-emerald-600"
            badgeIcon="star"
          />
          <AdBanner banners={adBanners} />
          <ProductCarousel title="Premium" products={premiumProducts} badgeColor="bg-rose-500" badgeIcon="tag" />
        </div>
      </main>
      <MobileNavigation />
    </div>
  )
}
