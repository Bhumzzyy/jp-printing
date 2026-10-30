import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesDirectory from "@/components/services/ServicesDirectory";

export const metadata: Metadata = {
  title: "Commercial Services Catalogue | JP Printing & Signs | Ontario",
  description:
    "Explore our 8 core service categories: storefront signage, vehicle wraps, banners, real estate signs, marketing collateral, business cards, large format printing, and window graphics.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesDirectory />
      </main>
      <Footer />
    </>
  );
}
