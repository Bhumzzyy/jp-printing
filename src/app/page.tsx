import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
  CheckCircle2,
  Users,
  Compass,
  Award,
  Layers,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { serviceCategories } from "@/data/services";
import { products } from "@/data/products";
import styles from "@/components/home/HomeSections.module.css";

export const metadata = {
  title: "JP Printing & Signs | Commercial Printing & Architectural Signage | Ontario",
  description:
    "High-quality commercial printing and architectural signage solutions that help Canadian businesses look professional and stand out. Specializing in business cards, storefront signs, vehicle wraps, and large format printing.",
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Navbar />

      <main>
        {/* =================================================================
            SECTION 1: HERO
            ================================================================= */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrap}>
            <Image
              src="/image/hero/jp-modern-storefront.webp"
              alt="JP Printing & Signs Modern Commercial Facility & Storefront"
              fill
              priority
              className={styles.heroBg}
            />
            <div className={styles.heroOverlay} />
          </div>

          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <span className={styles.taglineCyan}>PRINT</span>{" "}
                <span className={styles.taglineMagenta}>WITHOUT</span>{" "}
                <span className={styles.taglineYellow}>LIMITS</span>
              </div>
              <h1 className={styles.heroTitle}>Your Local Print & Sign Partner</h1>
              <p className={styles.heroDesc}>
                High-quality printing and signage solutions that help Canadian businesses look professional and stand out.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: "14px 28px", fontSize: "15px" }}>
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 2: QUICK TRUST INDICATORS
            ================================================================= */}
        <section className={styles.trustBar}>
          <div className={`container ${styles.trustGrid}`}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className={styles.trustTitle}>Quality Printing</div>
                <div className={styles.trustSubtitle}>Commercial-grade stocks & rich inks</div>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <Clock size={22} />
              </div>
              <div>
                <div className={styles.trustTitle}>Fast Turnaround</div>
                <div className={styles.trustSubtitle}>Reliable local Ontario production</div>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <Sparkles size={22} />
              </div>
              <div>
                <div className={styles.trustTitle}>Custom Solutions</div>
                <div className={styles.trustSubtitle}>Tailored sizes, finishes & substrates</div>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <MapPin size={22} />
              </div>
              <div>
                <div className={styles.trustTitle}>Ontario-Based Service</div>
                <div className={styles.trustSubtitle}>Local expertise & on-site installation</div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 3: OUR SERVICES (ALL 8 MAIN CATEGORIES)
            ================================================================= */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow eyebrow-accent">Primary Offerings</span>
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Explore our full-spectrum commercial printing and custom architectural signage catalogue.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {serviceCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/services/${category.slug}`}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceCardImage}>
                    <Image
                      src={category.heroImage}
                      alt={category.title}
                      width={400}
                      height={250}
                      className={styles.serviceCardImg}
                    />
                  </div>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{category.title}</h3>
                    <p className={styles.serviceCardDesc}>{category.tagline}</p>
                    <div className={styles.serviceCardFooter}>
                      <span>View Services</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 4: FEATURED VEHICLE WRAP BANNER
            ================================================================= */}
        <section className={styles.vehicleBanner}>
          <div className={styles.vehicleBgWrap}>
            <Image
              src="/image/hero/vehicle-wrap/branded-printing-van-office-park.webp"
              alt="JP Printing & Signs Commercial Branded Fleet Van in Ontario"
              fill
              className={styles.vehicleBgImg}
            />
            <div className={styles.vehicleOverlay} />
          </div>

          <div className="container">
            <div className={styles.vehicleContent}>
              <span className="eyebrow" style={{ color: "var(--brand-cyan)", marginBottom: "16px" }}>
                Commercial Fleet Branding
              </span>
              <h2 className={styles.vehicleHeading}>
                Turn Your Business Into a Moving Brand
              </h2>
              <p className={styles.vehicleDesc}>
                Make every journey an opportunity to put your business in view with professional vehicle graphics. From single work van logos to full fleet wraps, we engineer durable automotive graphics that work 24/7.
              </p>
              <Link
                href="/services/vehicle-wraps-graphics"
                className="btn btn-primary"
                style={{ backgroundColor: "#FFFFFF", color: "#1D2123", borderColor: "#FFFFFF", padding: "14px 28px", fontSize: "15px" }}
              >
                Explore Vehicle Wraps
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 5: FEATURED PRODUCTS
            ================================================================= */}
        <section className={styles.productsSection}>
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow eyebrow-accent">Popular Products</span>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">
                High-demand print items ready for immediate customization and quick order fulfillment.
              </p>
            </div>

            <div className={styles.productsGrid}>
              {featuredProducts.map((prod) => (
                <Link
                  key={prod.slug}
                  href={`/products/${prod.slug}`}
                  className={styles.productCard}
                >
                  <div className={styles.productCardImgWrap}>
                    <Image
                      src={prod.primaryImage}
                      alt={prod.name}
                      width={360}
                      height={270}
                      className={styles.productCardImg}
                    />
                  </div>
                  <div className={styles.productCardBody}>
                    <div className={styles.productCardTag}>{prod.category}</div>
                    <h3 className={styles.productCardTitle}>{prod.name}</h3>
                    <p className={styles.productCardDesc}>{prod.tagline}</p>
                    <div className={styles.productCardLink}>
                      <span>View Product</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 6: FROM CONCEPT TO INSTALLATION (4-STEP WORKFLOW)
            ================================================================= */}
        <section className={styles.workflowSection}>
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow">Our Proven Process</span>
              <h2 className="section-title">From Concept to Installation</h2>
              <p className="section-subtitle">
                A streamlined visual workflow guaranteeing precision, quality control, and timely delivery.
              </p>
            </div>

            <div className={styles.workflowGrid}>
              <div className={styles.workflowCard}>
                <div className={styles.workflowImgWrap}>
                  <Image
                    src="/image/about/team/print-studio-team-collaboration.webp"
                    alt="Print Studio Team Collaboration on Project Requirements"
                    width={360}
                    height={240}
                    className={styles.workflowImg}
                  />
                </div>
                <div className={styles.workflowBody}>
                  <div className={styles.workflowStep}>01 — Consultation</div>
                  <h3 className={styles.workflowTitle}>Discuss Your Needs</h3>
                  <p className={styles.workflowDesc}>
                    We evaluate your branding objectives, on-site measurements, preferred substrates, and project timeline.
                  </p>
                </div>
              </div>

              <div className={styles.workflowCard}>
                <div className={styles.workflowImgWrap}>
                  <Image
                    src="/image/about/workspace/architectural-design-workspace.webp"
                    alt="Architectural Design Workspace and Proofing"
                    width={360}
                    height={240}
                    className={styles.workflowImg}
                  />
                </div>
                <div className={styles.workflowBody}>
                  <div className={styles.workflowStep}>02 — Design</div>
                  <h3 className={styles.workflowTitle}>Design & Proof</h3>
                  <p className={styles.workflowDesc}>
                    Our prepress team generates accurate visual digital mockups to verify scale, color values, and bleed.
                  </p>
                </div>
              </div>

              <div className={styles.workflowCard}>
                <div className={styles.workflowImgWrap}>
                  <Image
                    src="/image/about/facility/large-format-print-workshop.webp"
                    alt="Modern Large Format Printing Workshop Equipment"
                    width={360}
                    height={240}
                    className={styles.workflowImg}
                  />
                </div>
                <div className={styles.workflowBody}>
                  <div className={styles.workflowStep}>03 — Production</div>
                  <h3 className={styles.workflowTitle}>High-Quality Production</h3>
                  <p className={styles.workflowDesc}>
                    Fabricated using commercial flatbed UV presses, precision CNC cutters, and durable overlaminates.
                  </p>
                </div>
              </div>

              <div className={styles.workflowCard}>
                <div className={styles.workflowImgWrap}>
                  <Image
                    src="/image/projects/installations/storefront-vinyl-installation.webp"
                    alt="Storefront Vinyl Installation in Action"
                    width={360}
                    height={240}
                    className={styles.workflowImg}
                  />
                </div>
                <div className={styles.workflowBody}>
                  <div className={styles.workflowStep}>04 — Delivery</div>
                  <h3 className={styles.workflowTitle}>Professional Installation</h3>
                  <p className={styles.workflowDesc}>
                    Expert on-site installation across Ontario ensuring clean, bubble-free adhesion and lasting stability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 7: WHY CHOOSE JP PRINTING & SIGNS (HOMEPAGE ONLY)
            ================================================================= */}
        <section className={styles.whySection}>
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow eyebrow-accent">The JP Difference</span>
              <h2 className="section-title">Why Choose JP Printing & Signs?</h2>
              <p className="section-subtitle">
                A dependable Canadian partner committed to premium craftsmanship and customer service.
              </p>
            </div>

            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <Layers size={22} />
                </div>
                <h3 className={styles.whyTitle}>Premium Materials</h3>
                <p className={styles.whyDesc}>
                  We utilize commercial-grade vinyls, heavy cardstocks, and weather-tested outdoor substrates.
                </p>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <Compass size={22} />
                </div>
                <h3 className={styles.whyTitle}>Custom Design Support</h3>
                <p className={styles.whyDesc}>
                  Complimentary file checks, bleed validation, and tailored layouts for any custom dimension.
                </p>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <Users size={22} />
                </div>
                <h3 className={styles.whyTitle}>Experienced Team</h3>
                <p className={styles.whyDesc}>
                  Skilled printmakers and certified installers dedicated to getting every detail right.
                </p>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <CheckCircle2 size={22} />
                </div>
                <h3 className={styles.whyTitle}>Personal Customer Service</h3>
                <p className={styles.whyDesc}>
                  Direct communication with Jot Panag and Deepi Panag on quotes, proofs, and project updates.
                </p>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyIconWrap}>
                  <MapPin size={22} />
                </div>
                <h3 className={styles.whyTitle}>Ontario-Based Business</h3>
                <p className={styles.whyDesc}>
                  Convenient local pickup and dependable regional delivery throughout Ontario communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 8: RECENT WORK / VISUAL SHOWCASE
            ================================================================= */}
        <section className={styles.showcaseSection}>
          <div className="container">
            <div className="section-header text-center">
              <span className="eyebrow">Real-World Applications</span>
              <h2 className="section-title">Visual Showcase</h2>
              <p className="section-subtitle">
                A curated look at recent architectural installations, vehicle graphics, and print craft.
              </p>
            </div>

            <div className={styles.showcaseGrid}>
              <Link href="/projects" className={styles.showcaseCard}>
                <div className={styles.showcaseImgWrap}>
                  <Image
                    src="/image/hero/jp-modern-storefront.webp"
                    alt="Commercial Retail Storefront Fascia Sign"
                    width={400}
                    height={270}
                    className={styles.showcaseImg}
                  />
                </div>
                <div className={styles.showcaseBody}>
                  <div className={styles.showcaseTag}>Storefront Signs</div>
                  <h3 className={styles.showcaseTitle}>Commercial Storefront Dimensional Signage</h3>
                  <p className={styles.showcaseDesc}>
                    Exterior 3D letters and coordinated entrance wayfinding.
                  </p>
                </div>
              </Link>

              <Link href="/projects" className={styles.showcaseCard}>
                <div className={styles.showcaseImgWrap}>
                  <Image
                    src="/image/hero/vehicle-wrap/jp-colourful-delivery-van.webp"
                    alt="Full Commercial Delivery Van Wrap"
                    width={400}
                    height={270}
                    className={styles.showcaseImg}
                  />
                </div>
                <div className={styles.showcaseBody}>
                  <div className={styles.showcaseTag}>Vehicle Wraps</div>
                  <h3 className={styles.showcaseTitle}>Fleet Delivery Van Wrap</h3>
                  <p className={styles.showcaseDesc}>
                    High-visibility cast vinyl graphics with protective overlaminate.
                  </p>
                </div>
              </Link>

              <Link href="/projects" className={styles.showcaseCard}>
                <div className={styles.showcaseImgWrap}>
                  <Image
                    src="/image/products/business-cards/luxury-business-card-finishes.webp"
                    alt="Luxury Business Card Finishes Collection"
                    width={400}
                    height={270}
                    className={styles.showcaseImg}
                  />
                </div>
                <div className={styles.showcaseBody}>
                  <div className={styles.showcaseTag}>Printed Materials</div>
                  <h3 className={styles.showcaseTitle}>Executive Business Card Finishes</h3>
                  <p className={styles.showcaseDesc}>
                    Silk lamination, spot UV highlights, and fine textured cardstocks.
                  </p>
                </div>
              </Link>

              <Link href="/projects" className={styles.showcaseCard}>
                <div className={styles.showcaseImgWrap}>
                  <Image
                    src="/image/services/banners-displays/architectural-exhibition-booth.webp"
                    alt="Architectural Trade Show Exhibition Booth"
                    width={400}
                    height={270}
                    className={styles.showcaseImg}
                  />
                </div>
                <div className={styles.showcaseBody}>
                  <div className={styles.showcaseTag}>Banners & Displays</div>
                  <h3 className={styles.showcaseTitle}>Architectural Exhibition Booth</h3>
                  <p className={styles.showcaseDesc}>
                    Non-glare dye-sublimated tension fabric backdrops and display panels.
                  </p>
                </div>
              </Link>

              <Link href="/projects" className={styles.showcaseCard}>
                <div className={styles.showcaseImgWrap}>
                  <Image
                    src="/image/services/large-format-signs/construction-site-hoardings.webp"
                    alt="Condominium Construction Perimeter Hoardings"
                    width={400}
                    height={270}
                    className={styles.showcaseImg}
                  />
                </div>
                <div className={styles.showcaseBody}>
                  <div className={styles.showcaseTag}>Large Format</div>
                  <h3 className={styles.showcaseTitle}>Development Site Hoardings</h3>
                  <p className={styles.showcaseDesc}>
                    Heavy-duty aluminum composite panels with anti-graffiti barrier.
                  </p>
                </div>
              </Link>

              <Link href="/projects" className={styles.showcaseCard}>
                <div className={styles.showcaseImgWrap}>
                  <Image
                    src="/image/services/real-estate-signage/modern-home-for-sale-open-house.webp"
                    alt="Modern Real Estate Yard Sign and Open House A-Frame"
                    width={400}
                    height={270}
                    className={styles.showcaseImg}
                  />
                </div>
                <div className={styles.showcaseBody}>
                  <div className={styles.showcaseTag}>Real Estate</div>
                  <h3 className={styles.showcaseTitle}>Residential Property Marketing</h3>
                  <p className={styles.showcaseDesc}>
                    Coordinated lawn signs, directional arrows, and open house sandwich boards.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================================
            SECTION 10: FINAL CTA
            ================================================================= */}
        <section className={styles.finalCtaSection}>
          <div className="container">
            <div className={styles.finalCtaInner}>
              <div className={styles.finalCtaEyebrow}>Let’s Build Together</div>
              <h2 className={styles.finalCtaTitle}>Let’s Bring Your Ideas to Life</h2>
              <p className={styles.finalCtaDesc}>
                From professional print materials to custom exterior signage, let’s create something that represents your business with distinction.
              </p>
              <div className={styles.finalCtaButtons}>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#1D2123",
                    borderColor: "#FFFFFF",
                    padding: "14px 32px",
                    fontSize: "15px",
                  }}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:9059191181"
                  className="btn btn-outline"
                  style={{
                    color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    padding: "14px 28px",
                    fontSize: "15px",
                  }}
                >
                  Call 905 919 1181
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
