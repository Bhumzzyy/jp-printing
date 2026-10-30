"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projectCategories, projectItems, ProjectCategory } from "@/data/projects";
import styles from "./ProjectsGallery.module.css";

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return projectItems;
    return projectItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-accent">Visual Portfolio</span>
            <h1 className={styles.heroTitle}>Our Visual Showcase</h1>
            <p className={styles.heroLead}>
              Explore photographs of commercial print finishes, architectural storefront signage, vehicle wraps, and on-site installations produced across Ontario.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className={styles.filterTabs} role="tablist">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
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
      </section>

      {/* Showcase Grid */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryGrid}>
            {filteredItems.map((item) => (
              <div key={item.id} className={styles.projectCard}>
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={450}
                    height={310}
                    className={styles.projectImg}
                  />
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.categoryTag}>{item.category}</span>
                  <h2 className={styles.cardTitle}>{item.title}</h2>
                  <p className={styles.cardDesc}>{item.description}</p>

                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <span>Substrate: </span>
                      <strong>{item.substrate}</strong>
                    </div>
                    <div className={styles.metaItem}>
                      <span>Application: </span>
                      <strong>{item.application}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
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
          <span className="eyebrow" style={{ color: "var(--brand-cyan)" }}>Have a Similar Project in Mind?</span>
          <h2 style={{ color: "#FFFFFF", marginBottom: "14px" }}>Let&apos;s Discuss Your Signage or Print Plan</h2>
          <p style={{ color: "#C8C5BD", fontSize: "16px", marginBottom: "26px" }}>
            We provide on-site measurements, visual mockups, and transparent Canadian pricing for retail plazas, fleet transit, and corporate offices.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: "#FFFFFF", color: "#1D2123", borderColor: "#FFFFFF", padding: "14px 28px" }}>
            Request Project Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

