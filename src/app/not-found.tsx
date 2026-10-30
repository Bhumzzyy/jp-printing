import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Page Not Found | JP Printing & Signs",
  description: "The page you requested could not be found. Explore our commercial printing and signage services.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "65vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px" }}>
          <span className="eyebrow eyebrow-accent">404 — Error</span>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 4vw, 3.2rem)", margin: "12px 0 16px" }}>
            Page Not Found
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: "1.6", marginBottom: "32px" }}>
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Explore our offerings below.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Browse Services
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

