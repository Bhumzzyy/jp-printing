import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getAllServiceSlugs,
  resolveAnyServiceSlug,
  subcategoryServices,
  serviceCategories,
} from "@/data/services";
import styles from "@/components/services/ServicePages.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveAnyServiceSlug(slug);

  if (!resolved) {
    return { title: "Service Not Found | JP Printing & Signs" };
  }

  if (resolved.type === "category" && resolved.category) {
    return {
      title: `${resolved.category.title} | JP Printing & Signs Ontario`,
      description: resolved.category.tagline,
    };
  }

  if (resolved.type === "subcategory" && resolved.subcategory) {
    return {
      title: `${resolved.subcategory.title} | ${resolved.subcategory.categoryTitle} | JP Printing & Signs`,
      description: resolved.subcategory.tagline,
    };
  }

  return { title: "Services | JP Printing & Signs" };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const resolved = resolveAnyServiceSlug(slug);

  if (!resolved) {
    notFound();
  }

  /* =========================================================================
     SCENARIO 1: CATEGORY LANDING PAGE (e.g. /services/business-cards)
     ========================================================================= */
  if (resolved.type === "category" && resolved.category) {
    const category = resolved.category;
    const subcats = category.subcategories
      .map((subSlug) => subcategoryServices.find((s) => s.slug === subSlug))
      .filter(Boolean);

    return (
      <>
        <Navbar />

        <main className={styles.pageWrap}>
          <div className="container">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span className="current">{category.title}</span>
            </nav>

            {/* Category Hero Block */}
            <div className={styles.categoryHero}>
              <div className={styles.categoryHeroContent}>
                <span className="eyebrow eyebrow-accent">Category Overview</span>
                <h1 className={styles.categoryHeroTitle}>{category.title}</h1>
                <div className={styles.categoryHeroTagline}>{category.tagline}</div>
                <p className={styles.categoryHeroDesc}>{category.description}</p>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <Link
                    href={`/contact?service=${encodeURIComponent(category.title)}`}
                    className="btn btn-primary"
                  >
                    Request Category Quote
                  </Link>
                  <a href="tel:9059191181" className="btn btn-secondary">
                    Call 905 919 1181
                  </a>
                </div>
              </div>

              <div className={styles.categoryHeroImageWrap}>
                <Image
                  src={category.heroImage}
                  alt={category.title}
                  fill
                  priority
                  className={styles.categoryHeroImg}
                />
              </div>
            </div>

            {/* Subcategories Grid */}
            <div>
              <div className="section-header">
                <span className="eyebrow">Available Subcategories</span>
                <h2 className={styles.sectionTitle}>Explore {category.title} Options</h2>
                <p className="section-subtitle">
                  Select a specific subcategory below to explore detailed specifications, materials, and custom finishes.
                </p>
              </div>

              <div className={styles.subcatGrid}>
                {subcats.map((sub) =>
                  sub ? (
                    <Link
                      key={sub.slug}
                      href={`/services/${sub.slug}`}
                      className={styles.subcatCard}
                    >
                      <div className={styles.subcatImgWrap}>
                        <Image
                          src={sub.image}
                          alt={sub.title}
                          width={400}
                          height={270}
                          className={styles.subcatImg}
                        />
                      </div>
                      <div className={styles.subcatBody}>
                        <h3 className={styles.subcatTitle}>{sub.title}</h3>
                        <p className={styles.subcatDesc}>{sub.tagline}</p>
                        <div className={styles.subcatLink}>
                          <span>View Details & Options</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            </div>

            {/* Benefits & Applications */}
            <div className={styles.twoColCards}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Key Advantages</h3>
                <ul className={styles.featureList}>
                  {category.benefits.map((benefit, i) => (
                    <li key={i} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Ideal Applications</h3>
                <ul className={styles.featureList}>
                  {category.applications.map((app, i) => (
                    <li key={i} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Gallery Thumbs if available */}
            {category.gallery.length > 0 && (
              <div style={{ marginTop: "40px", marginBottom: "60px" }}>
                <span className="eyebrow">Related Photography</span>
                <h3 className={styles.sectionTitle} style={{ marginBottom: "20px" }}>
                  Material & Application Gallery
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                  {category.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: "relative",
                        aspectRatio: "16/10",
                        borderRadius: "var(--radius-small)",
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${category.title} showcase detail ${idx + 1}`}
                        fill
                        className={styles.subcatImg}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Final Callout */}
          <div
            style={{
              backgroundColor: "#1D2123",
              color: "#FFFFFF",
              padding: "70px 0",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <div className="container-narrow">
              <span className="eyebrow" style={{ color: "var(--brand-cyan)" }}>Ontario Commercial Printing</span>
              <h2 style={{ color: "#FFFFFF", marginBottom: "14px" }}>
                Need a Custom Quote for {category.title}?
              </h2>
              <p style={{ color: "#C8C5BD", fontSize: "16px", marginBottom: "26px" }}>
                Tell us your dimensions, quantities, and timing requirements. We provide complimentary digital proofs and fast turnaround.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(category.title)}`}
                className="btn btn-primary"
                style={{ backgroundColor: "#FFFFFF", color: "#1D2123", borderColor: "#FFFFFF", padding: "14px 28px" }}
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  /* =========================================================================
     SCENARIO 2: SUBCATEGORY DETAIL PAGE (e.g. /services/restaurant-table-wrapping)
     ========================================================================= */
  if (resolved.type === "subcategory" && resolved.subcategory) {
    const sub = resolved.subcategory;
    const parentCategory = serviceCategories.find((c) => c.slug === sub.categorySlug);
    const relatedSubs = sub.relatedSubcategorySlugs
      .map((relSlug) => subcategoryServices.find((s) => s.slug === relSlug))
      .filter(Boolean);

    return (
      <>
        <Navbar />

        <main className={styles.pageWrap}>
          <div className="container">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              {parentCategory && (
                <>
                  <Link href={`/services/${parentCategory.slug}`}>{parentCategory.title}</Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
              <span className="current">{sub.title}</span>
            </nav>

            {/* Service Detail Hero */}
            <div className={styles.detailHero}>
              {/* Left Column: Image and Gallery */}
              <div className={styles.detailImageColumn}>
                <div className={styles.mainDetailImageWrap}>
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    priority
                    className={styles.mainDetailImg}
                  />
                </div>

                {sub.gallery.length > 0 && (
                  <div className={styles.galleryThumbs}>
                    <div className={styles.thumbWrap}>
                      <Image
                        src={sub.image}
                        alt={`${sub.title} main view`}
                        fill
                        className={styles.thumbImg}
                      />
                    </div>
                    {sub.gallery.map((img, i) => (
                      <div key={i} className={styles.thumbWrap}>
                        <Image
                          src={img}
                          alt={`${sub.title} alternate view ${i + 1}`}
                          fill
                          className={styles.thumbImg}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Title, Description, and Configurable Options */}
              <div className={styles.detailInfoColumn}>
                <span className="eyebrow eyebrow-accent">{sub.categoryTitle}</span>
                <h1 className={styles.detailTitle}>{sub.title}</h1>
                <div className={styles.detailTagline}>{sub.tagline}</div>
                <p className={styles.detailDesc}>{sub.description}</p>

                {/* Available Options Block */}
                {sub.options.length > 0 && (
                  <div className={styles.optionsCard}>
                    <div className={styles.optionsCardTitle}>Available Options & Finishes</div>
                    <div className={styles.optionsList}>
                      {sub.options.map((opt, idx) => (
                        <div key={idx} className={styles.optionRow}>
                          <span className={styles.optionLabel}>{opt.label}:</span>
                          <span className={styles.optionValues}>{opt.values.join(" · ")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Action Buttons */}
                <div className={styles.detailActions}>
                  <Link
                    href={`/contact?service=${encodeURIComponent(sub.title)}`}
                    className="btn btn-primary"
                    style={{ padding: "14px 28px" }}
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="tel:9059191181"
                    className="btn btn-secondary"
                    style={{ padding: "14px 24px" }}
                  >
                    Call 905 919 1181
                  </a>
                </div>
              </div>
            </div>

            {/* Features & Applications Section */}
            <div className={styles.twoColCards}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Key Features & Quality</h3>
                <ul className={styles.featureList}>
                  {sub.features.map((feat, i) => (
                    <li key={i} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Typical Applications</h3>
                <ul className={styles.featureList}>
                  {sub.applications.map((app, i) => (
                    <li key={i} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Services Row */}
            {relatedSubs.length > 0 && (
              <div className={styles.relatedSection}>
                <span className="eyebrow">Complementary Offerings</span>
                <h3 className={styles.sectionTitle}>Related Services</h3>
                <div className={styles.relatedGrid}>
                  {relatedSubs.map((rel) =>
                    rel ? (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className={styles.relatedCard}
                      >
                        <span className={styles.relatedCardTitle}>{rel.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return notFound();
}
