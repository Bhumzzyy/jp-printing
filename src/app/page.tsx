
import HomeHero from "@/components/home/HomeHero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PrintTicker from "@/components/home/PrintTicker";
import PrintAndSigns from "@/components/home/PrintAndSigns";
import ProductGallery from "@/components/home/ProductGallery";
import FeaturedSignage from "@/components/home/FeaturedSignage";
import AboutPreview from "@/components/home/AboutPreview";
import HowItWorks from "@/components/home/HowItWorks";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <main className="home-page">
      <HomeHero />

      <FeaturedProducts />

      <PrintTicker />

      <PrintAndSigns />

      <ProductGallery />

      <FeaturedSignage />

      <AboutPreview />

      <HowItWorks />

      <HomeCTA />
    </main>
  );
}
