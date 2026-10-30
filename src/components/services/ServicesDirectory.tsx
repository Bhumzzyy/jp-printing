"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { serviceCategories, subcategoryServices } from "@/data/services";
import styles from "./ServicesDirectory.module.css";

const filterTabs = [
  { id: "all", label: "All Services" },
  { id: "windows-wall-floor-graphics", label: "Windows, Wall & Floor" },
  { id: "banners-displays", label: "Banners & Displays" },
  { id: "storefront-building-signs", label: "Storefront & Building" },
  { id: "vehicle-wraps-graphics", label: "Vehicle Wraps & Graphics" },
  { id: "real-estate-signage", label: "Real Estate Signage" },
  { id: "marketing-materials", label: "Marketing Materials" },
  { id: "business-cards", label: "Business Cards" },
  { id: "large-format-signs", label: "Large Format & Signs" },
];

export default function ServicesDirectory() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return serviceCategories.filter((category) => {
      // Tab matching
      const matchesTab = activeTab === "all" || category.slug === activeTab;
      if (!matchesTab) return false;

      // Search query matching
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      
      const inTitle = category.title.toLowerCase().includes(q);
      const inTagline = category.tagline.toLowerCase().includes(q);
      const inDesc = category.description.toLowerCase().includes(q);
      const inSubcats = category.subcategories.some((subSlug) => {
        const sub = subcategoryServices.find((s) => s.slug === subSlug);
        return sub ? sub.title.toLowerCase().includes(q) : false;
      });

      return inTitle || inTagline || inDesc || inSubcats;
    });
  }, [activeTab, searchQuery]);

  return (
    <>
      {/* Services Header & Filter Controls */}
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-accent">Commercial Catalogue</span>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroLead}>
              Comprehensive commercial printing and custom architectural signage crafted for businesses across Ontario. Discover specialized materials, custom dimensions, and expert installation.
            </p>
          </div>

          <div className={styles.filterBar}>
            {/* Search Box */}
            <div className={styles.searchWrap}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search services, products, or materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Search services"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className={styles.filterTabs} role="tablist">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.filterTab} ${
                    activeTab === tab.id ? styles.activeTab : ""
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className={styles.categoriesSection}>
        <div className="container">
          {filteredCategories.length > 0 ? (
            <div className={styles.categoriesGrid}>
              {filteredCategories.map((category) => {
                const subcats = category.subcategories
                  .map((slug) => subcategoryServices.find((s) => s.slug === slug))
                  .filter(Boolean);

                return (
                  <div key={category.slug} className={styles.categoryCard}>
                    <div className={styles.cardHeroImageWrap}>
                      <Image
                        src={category.heroImage}
                        alt={category.title}
                        width={600}
                        height={340}
                        className={styles.cardHeroImg}
                      />
                    </div>

                    <div className={styles.cardBody}>
                      <h2 className={styles.cardTitle}>{category.title}</h2>
                      <div className={styles.cardTagline}>{category.tagline}</div>
                      <p className={styles.cardDesc}>{category.description}</p>

                      {/* Subcategory Exploration Pills */}
                      <div className={styles.subcategoriesWrap}>
                        <span className={styles.subcatLabel}>Featured Subcategories:</span>
                        <div className={styles.subcatPills}>
                          {subcats.map((sub) =>
                            sub ? (
                              <Link
                                key={sub.slug}
                                href={`/services/${sub.slug}`}
                                className={styles.subcatPill}
                              >
                                {sub.title}
                              </Link>
                            ) : null
                          )}
                        </div>
                      </div>

                      <div className={styles.cardFooter}>
                        <Link
                          href={`/services/${category.slug}`}
                          className={styles.exploreLink}
                        >
                          <span>Explore Category & Specifications</span>
                          <ArrowRight size={14} />
                        </Link>
                        <Link
                          href={`/contact?service=${encodeURIComponent(category.title)}`}
                          className="btn btn-outline"
                          style={{ padding: "8px 16px", fontSize: "12px" }}
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h3 className={styles.noResultsTitle}>No Matching Services Found</h3>
              <p className={styles.noResultsText}>
                We couldn&apos;t find any service matching &ldquo;{searchQuery}&rdquo;. Try adjusting your search or clear filters to view all offerings.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
                className="btn btn-primary"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Final Quote Callout */}
      <section
        style={{
          backgroundColor: "#1D2123",
          color: "#FFFFFF",
          padding: "70px 0",
          textAlign: "center",
          borderTop: "1px solid #2F3538",
        }}
      >
        <div className="container-narrow">
          <span className="eyebrow" style={{ color: "var(--brand-cyan)" }}>Have a Custom Project?</span>
          <h2 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Can&apos;t Find the Exact Size or Substrate?</h2>
          <p style={{ color: "#C8C5BD", fontSize: "16px", marginBottom: "26px" }}>
            We work with custom dimensions, specialty materials, and on-site measurements every day across Ontario. Get in touch with our team for a tailored quote.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "#FFFFFF", color: "#1D2123", borderColor: "#FFFFFF", padding: "14px 28px" }}>
            Request Custom Estimate
          </Link>
        </div>
      </section>
    </>
  );
}

