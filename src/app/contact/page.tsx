import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactInquiry from "@/components/contact/ContactInquiry";

export const metadata: Metadata = {
  title: "Contact JP Printing & Signs | Let's Make It Print",
  description:
    "Have a printing, signage, or custom graphics project in mind? Contact JP Printing & Signs to explore the right options for your business.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactMethods />
        <ContactFaq />
        <ContactInquiry />
      </main>
      <Footer />
    </>
  );
}
