import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsDirectory from "@/components/products/ProductsDirectory";

export const metadata: Metadata = {
  title: "Commercial Products Directory | JP Printing & Signs | Ontario",
  description:
    "Explore our complete product catalog: custom business cards, wedding invitation suites, table tent cards, promotional banners, storefront signage, vehicle wraps, and real estate signs.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsDirectory />
      </main>
      <Footer />
    </>
  );
}

