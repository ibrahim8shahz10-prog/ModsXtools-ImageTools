import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedTools from "@/components/home/FeaturedTools";
import StatsSection from "@/components/home/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedTools />
    </>
  );
}
