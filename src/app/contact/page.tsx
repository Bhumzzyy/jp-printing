import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactFormInteractive from "@/components/contact/ContactFormInteractive";

export const metadata: Metadata = {
  title: "Contact & Quote Request | JP Printing & Signs | Ontario, Canada",
  description:
    "Request a free quote or consult with JP Printing & Signs in Ontario. Direct telephone: 905 919 1181. Email: jpprint13@gmail.com. We specialize in custom printing, signage, and installation.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="container" style={{ padding: "80px 0", textAlign: "center" }}>Loading contact portal...</div>}>
          <ContactFormInteractive />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
