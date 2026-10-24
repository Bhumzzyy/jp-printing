import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import ServicesStrip from "@/components/home/ServicesStrip";
import ServiceCategories from "@/components/home/ServiceCategories";
import PopularServices from "@/components/home/PopularServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutPreview from "@/components/home/AboutPreview";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <ServicesStrip />
        <ServiceCategories />
        <PopularServices />
        <WhyChooseUs />
        <AboutPreview />
        <HowItWorks />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
