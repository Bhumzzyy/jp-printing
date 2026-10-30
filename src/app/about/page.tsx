import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { serviceCategories } from "@/data/services";
import styles from "@/components/about/AboutSections.module.css";

export const metadata = {
  title: "About Us | JP Printing & Signs | Ontario, Canada",
  description:
    "Learn about JP Printing & Signs. Managed by Jot Panag and Deepi Panag, we provide high-grade commercial printing, architectural exterior signage, and vehicle wraps across Ontario.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* =================================================================
            A. ABOUT HERO
            ================================================================= */}
        <section className={styles.aboutHero}>
          <div className={styles.aboutHeroImgWrap}>
            <Image
              src="/image/hero/modern-charcoal-storefront.webp"
              alt="JP Printing & Signs Modern Architectural Facility"
              fill
              priority
              className={styles.aboutHeroImg}
            />
            <div className={styles.aboutHeroOverlay} />
          </div>

          <div className="container">
            <div className={styles.aboutHeroContent}>
              <span className={styles.aboutEyebrow}>
                COMMERCIAL PRINT &amp; SIGN STUDIO
              </span>
              <h1 className={styles.aboutHeroTitle}>
                A Local Team That Brings<br />Brands to Life
              </h1>
              <p className={styles.aboutHeroDesc}>
                JP Printing &amp; Signs is an Ontario-based commercial printing and custom signage studio. We combine precision production with personalized service to deliver visual solutions Canadian businesses can rely on.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            B. OUR STORY
            ================================================================= */}
        <section className={styles.storySection}>
          <div className="container">
            <div className={styles.twoColGrid}>
              <div className={styles.colImageWrap}>
                <Image
                  src="/image/about/team/print-design-consultation.webp"
                  alt="Collaborative Print Design Consultation at JP Printing & Signs"
                  width={600}
                  height={450}
                  className={styles.colImg}
                />
              </div>

              <div className={styles.storyContent}>
                <span className="eyebrow eyebrow-accent">Our Journey</span>
                <h2>Craftsmanship & Direct Communication</h2>
                <p>
                  Managed by Jot Panag and Deepi Panag, JP Printing & Signs was established with a singular focus: to provide businesses across Ontario with reliable, high-grade printing and custom architectural signage backed by genuine customer care.
                </p>
                <p>
                  Instead of navigating detached online web-to-print portals with zero human oversight, our clients work directly with knowledgeable print specialists. We take the time to evaluate file preparation, verify bleed and resolution, recommend suitable paper stocks or sign substrates, and ensure on-time delivery for mission-critical deadlines.
                </p>
                <div style={{ marginTop: "24px" }}>
                  <Link href="/contact" className="btn btn-primary">
                    Start a Conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            C. OUR FACILITY & PRODUCTION
            ================================================================= */}
        <section className={styles.facilitySection}>
          <div className="container">
            <div className={styles.facilityGrid}>
              <div className={styles.storyContent}>
                <span className="eyebrow">Production Power</span>
                <h2>State-of-the-Art Workshop Capabilities</h2>
                <p>
                  Our workshop houses commercial wide-format flatbed UV presses, precision roll-to-roll eco-solvent printers, computerized contour vinyl cutters, and heavy-duty cold and heat-assist laminators.
                </p>
                <ul className={styles.capabilityList}>
                  <li className={styles.capabilityItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span><strong>Flatbed UV Printing:</strong> Direct-to-substrate printing on Coroplast, aluminum composite, acrylic, and foam boards.</span>
                  </li>
                  <li className={styles.capabilityItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span><strong>High-Resolution Roll Printing:</strong> Saturated photo-realistic printing on banner vinyl, tension fabric, and vehicle wrap films.</span>
                  </li>
                  <li className={styles.capabilityItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span><strong>Precision Finishing:</strong> Hemming, grommeting, scoring, custom die-cutting, and specialty protective overlaminations.</span>
                  </li>
                </ul>
              </div>

              <div className={styles.colImageWrap}>
                <Image
                  src="/image/about/facility/large-format-print-workshop.webp"
                  alt="Industrial Large Format Print Workshop Equipment"
                  width={600}
                  height={450}
                  className={styles.colImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            D. OUR VALUES
            ================================================================= */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow eyebrow-accent">Core Principles</span>
              <h2 className="section-title">What Guides Our Work</h2>
              <p className="section-subtitle">
                Four foundational commitments that ensure every print run and sign installation meets the highest professional standard.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueNumber}>01</div>
                <h3 className={styles.valueTitle}>Quality First</h3>
                <p className={styles.valueDesc}>
                  We never compromise on substrates or inks. From 16pt cardstocks to 7-year cast automotive films, we select materials built to last.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueNumber}>02</div>
                <h3 className={styles.valueTitle}>Customer Focus</h3>
                <p className={styles.valueDesc}>
                  You communicate directly with representatives who understand technical specifications, offering practical advice and swift quote turnaround.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueNumber}>03</div>
                <h3 className={styles.valueTitle}>Attention to Detail</h3>
                <p className={styles.valueDesc}>
                  Every graphic file undergoes thorough prepress inspection. We catch scaling errors, color shifts, and resolution issues before ink hits substrate.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueNumber}>04</div>
                <h3 className={styles.valueTitle}>Long-Term Relationships</h3>
                <p className={styles.valueDesc}>
                  We aim to be your ongoing print partner for years, supporting your business as it scales and updates marketing collateral.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            E. HOW WE WORK
            ================================================================= */}
        <section className={styles.processSection}>
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow">Our Methodology</span>
              <h2 className="section-title">How We Work</h2>
              <p className="section-subtitle">
                From initial request to final inspection, our structured approach keeps you informed at every milestone.
              </p>
            </div>

            <div className={styles.processGrid}>
              <div className={styles.processCard}>
                <div className={styles.processStep}>Phase 01</div>
                <h3 className={styles.processTitle}>Consultation</h3>
                <p className={styles.processDesc}>
                  We review your project scope, quantity, intended viewing distance, environmental conditions, and budget.
                </p>
              </div>

              <div className={styles.processCard}>
                <div className={styles.processStep}>Phase 02</div>
                <h3 className={styles.processTitle}>Digital Proofing</h3>
                <p className={styles.processDesc}>
                  You receive an accurate digital proof to confirm layout, spelling, dimensional proportions, and finish choices.
                </p>
              </div>

              <div className={styles.processCard}>
                <div className={styles.processStep}>Phase 03</div>
                <h3 className={styles.processTitle}>Craft Production</h3>
                <p className={styles.processDesc}>
                  Our workshop prints, cuts, laminates, and inspects your products under stringent quality benchmarks.
                </p>
              </div>

              <div className={styles.processCard}>
                <div className={styles.processStep}>Phase 04</div>
                <h3 className={styles.processTitle}>Delivery & Install</h3>
                <p className={styles.processDesc}>
                  Pick up locally in Ontario, request regional shipping, or have our professional team install on-site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            F. OUR SERVICES SHORTCUT
            ================================================================= */}
        <section className={styles.servicesShortcut}>
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow eyebrow-accent">Explore Offerings</span>
              <h2 className="section-title">What We Can Create For You</h2>
              <p className="section-subtitle">
                Explore our primary categories to see specific subcategories, materials, and applications.
              </p>
            </div>

            <div className={styles.shortcutGrid}>
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/services/${cat.slug}`}
                  className={styles.shortcutCard}
                >
                  <div className={styles.shortcutImgWrap}>
                    <Image
                      src={cat.heroImage}
                      alt={cat.title}
                      width={360}
                      height={225}
                      className={styles.shortcutImg}
                    />
                  </div>
                  <div className={styles.shortcutTitle}>
                    <span>{cat.title}</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            G. FINAL CTA
            ================================================================= */}
        <section
          style={{
            backgroundColor: "#1D2123",
            color: "#FFFFFF",
            padding: "80px 0",
            textAlign: "center",
          }}
        >
          <div className="container-narrow">
            <span className="eyebrow" style={{ color: "var(--brand-cyan)" }}>Ready To Get Started?</span>
            <h2 style={{ color: "#FFFFFF", marginBottom: "16px" }}>Let’s Discuss Your Next Project</h2>
            <p style={{ color: "#C8C5BD", fontSize: "16px", marginBottom: "30px", maxWidth: "600px", marginInline: "auto" }}>
              Whether you need 500 premium business cards or an entire storefront signage package, our Ontario team is ready to assist.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "#FFFFFF", color: "#1D2123", borderColor: "#FFFFFF", padding: "14px 28px" }}>
                Request a Free Quote
              </Link>
              <Link href="/services" className="btn btn-outline" style={{ color: "#FFFFFF", borderColor: "rgba(255, 255, 255, 0.4)", padding: "14px 28px" }}>
                Browse All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
