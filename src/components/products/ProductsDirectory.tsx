"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import styles from "./ProductsDirectory.module.css";

const productCategories = [
  "All Products",
  "Business Cards",
  "Wedding Invitations",
  "Table Tent Cards",
  "Banners & Displays",
  "Vehicle Graphics",
  "Storefront Signs",
  "Real Estate Signs",
  "Window & Wall Graphics",
  "Construction Hoardings",
  "Marketing Materials",
];

export default function ProductsDirectory() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category filter
      const matchesCategory =
        activeCategory === "All Products" || prod.category === activeCategory;
      if (!matchesCategory) return false;

      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        prod.name.toLowerCase().includes(q) ||
        prod.tagline.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        prod.category.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-accent">Product Discovery</span>
            <h1 className={styles.heroTitle}>Explore Our Products</h1>
            <p className={styles.heroLead}>
              Browse our curated commercial print and architectural signage products. Every item is fully customizable with specialty paper stocks, finishes, and dimensions.
            </p>
          </div>

          <div className={styles.filterBar}>
            {/* Search Box */}
            <div className={styles.searchWrap}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search products by name or finish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Search products"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className={styles.filterTabs} role="tablist">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${styles.filterTab} ${
                    activeCategory === cat ? styles.activeTab : ""
                  }`}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className={styles.productsSection}>
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className={styles.productsGrid}>
              {filteredProducts.map((prod) => (
                <Link
                  key={prod.slug}
                  href={`/products/${prod.slug}`}
                  className={styles.productCard}
                >
                  <div className={styles.productImgWrap}>
                    <Image
                      src={prod.primaryImage}
                      alt={prod.name}
                      width={400}
                      height={300}
                      className={styles.productImg}
                    />
                    {prod.badge && (
                      <span className={styles.productBadge}>{prod.badge}</span>
                    )}
                  </div>

                  <div className={styles.productBody}>
                    <span className={styles.productCategory}>{prod.category}</span>
                    <h2 className={styles.productTitle}>{prod.name}</h2>
                    <p className={styles.productDesc}>{prod.tagline}</p>

                    <div className={styles.productFooter}>
                      <span className={styles.productLink}>
                        <span>View Details</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "8px" }}>
                No Products Found
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px" }}>
                No products matched &ldquo;{searchQuery}&rdquo;. Try another term or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Products");
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quote Callout */}
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
          <span className="eyebrow" style={{ color: "var(--brand-cyan)" }}>Have a Bespoke Idea?</span>
          <h2 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Looking for a Unique Paper or Large Run?</h2>
          <p style={{ color: "#C8C5BD", fontSize: "16px", marginBottom: "26px" }}>
            We provide custom die-cutting, metallic foil stamping, embossing, and specialized substrate sourcing. Reach out directly with your project requirements.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "#FFFFFF", color: "#1D2123", borderColor: "#FFFFFF", padding: "14px 28px" }}>
            Contact Custom Print Team
          </Link>
        </div>
      </section>
    </>
  );
}

