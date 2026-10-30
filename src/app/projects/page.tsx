import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsGallery from "@/components/projects/ProjectsGallery";

export const metadata: Metadata = {
  title: "Visual Showcase & Project Applications | JP Printing & Signs | Ontario",
  description:
    "Explore our visual showcase: commercial storefront dimensional signage, architectural window films, delivery van wraps, trade show exhibition booths, and luxury business card finishes.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsGallery />
      </main>
      <Footer />
    </>
  );
}

