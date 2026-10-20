import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="section">
        <div className="container">
          <SectionHeading
            eyebrow="ABOUT JP PRINTING & SIGNS"
            title="Helping your ideas make an impression."
            description="We help businesses bring their ideas to life through printing, signage and custom print solutions. Our focus is on understanding your project and finding the right way to present your brand."
          />
          <p className="muted">
            Connect with Jot Panag and Deepi Panag to discuss your printing
            needs and explore the options for your next project.
          </p>
          <br />
          <Link href="/contact" className="button button--dark">
            Talk to Our Team ↗
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}