import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import ServicesStrip from "./components/home/ServicesStrip";
import PopularServices from "./components/home/PopularServices";
import WhyChooseUs from "./components/home/WhyChooseUs";
import FeaturedProducts from "./components/home/FeaturedProducts";
import AboutPreview from "./components/home/AboutPreview";
import Solutions from "./components/home/Solutions";
import HowItWorks from "./components/home/HowItWorks";
import FAQ from "./components/home/FAQ";
import ContactCTA from "./components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <ServicesStrip />
        <PopularServices />
        <WhyChooseUs />
        <FeaturedProducts />
        <AboutPreview />
        <Solutions />
        <HowItWorks />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}