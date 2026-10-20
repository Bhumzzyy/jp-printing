import Link from "next/link";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import { ArrowUpRight, Camera, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="section">
        <div className="container">
          <SectionHeading
            eyebrow="LET'S TALK PRINT"
            title="Tell us what you're dreaming up."
            description="Need business cards, promotional materials, custom signs or something different? Reach out to discuss your project."
          />

          <div className="solutions-grid">
            <article className="solution-card">
              <Mail size={25} />
              <h3>Email us</h3>
              <p>Send your product details, quantity and project requirements.</p>
              <a href="mailto:jpprint13@gmail.com">
                jpprint13@gmail.com <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="solution-card">
              <Phone size={25} />
              <h3>Call us</h3>
              <p>Speak with us about your printing requirements.</p>
              <a href="tel:+19059191181">
                905 919 1181 <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="solution-card">
              <Camera size={25} />
              <h3>Follow our work</h3>
              <p>Connect with JP PRINTING & SIGNS on Instagram.</p>
              <a
                href="https://www.instagram.com/jpprintingandsigns/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Instagram <ArrowUpRight size={16} />
              </a>
            </article>
          </div>

          <p className="muted" style={{ marginTop: 30 }}>
            Contact persons: Jot Panag and Deepi Panag.
          </p>
          <Link href="/products" className="button button--dark">
            Explore Products <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}