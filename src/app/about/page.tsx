import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutRange from "@/components/about/AboutRange";
import AboutDifference from "@/components/about/AboutDifference";
import AboutApproach from "@/components/about/AboutApproach";
import AboutShowcase from "@/components/about/AboutShowcase";

export const metadata: Metadata = {
  title: "About JP Printing & Signs | Your Local Print Partner",
  description:
    "Meet JP Printing & Signs. We help businesses bring their ideas to life with thoughtful printing, signage, and custom graphics.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutRange />
        <AboutDifference />
        <AboutApproach />
        <AboutShowcase />
      </main>
      <Footer />
    </>
  );
}
