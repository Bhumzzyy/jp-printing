import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesCatalog from "@/components/services/ServicesCatalog";
import { printingServices, signsServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Printing & Signage — JP PRINTING & SIGNS",
  description:
    "Explore our full range of printing and signage services — from business cards, flyers and calendars to banners, window graphics, channel letters and vehicle wraps.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="services-page">
        <section className="page-hero">
          <div className="container page-hero__inner">
            <span className="eyebrow">
              <span className="eyebrow__dot" /> EVERYTHING WE MAKE
            </span>
            <h1>
              Printing &amp; signage,
              <br />
              <span className="text-gradient">all in one place.</span>
            </h1>
            <p>
              From everyday print essentials to full storefront signage, we
              cover {printingServices.length} printing and{" "}
              {signsServices.length} signage services. Browse the full
              catalogue below — every service has its own page with materials,
              sizes and uses.
            </p>
          </div>
        </section>

        <ServicesCatalog />
      </main>

      <Footer />
    </>
  );
}
