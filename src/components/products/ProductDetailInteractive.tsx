"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/data/products";
import styles from "./ProductsDirectory.module.css";

type Props = {
  product: Product;
};

export default function ProductDetailInteractive({ product }: Props) {
  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (product.gallery.length <= 1) return;
    setActiveImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  const handleNextImage = () => {
    if (product.gallery.length <= 1) return;
    setActiveImageIndex((prev) => (prev + 1) % product.gallery.length);
  };

  // Configuration state initialized with defaults
  const initialOptions: Record<string, string> = {};
  product.options?.forEach((opt) => {
    initialOptions[opt.id] = opt.defaultValue || opt.values[0];
  });
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(initialOptions);

  const handleOptionChange = (optionId: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));

    // Dynamic image switching logic if the user changes Card Type
    if (optionId === "type" && product.gallery.length > 1) {
      const lower = value.toLowerCase();
      let matchIdx = -1;
      if (lower.includes("silk") || lower.includes("matte")) {
        matchIdx = product.gallery.findIndex((g) => g.label?.toLowerCase().includes("silk"));
      } else if (lower.includes("linen")) {
        matchIdx = product.gallery.findIndex((g) => g.label?.toLowerCase().includes("linen"));
      } else if (lower.includes("magnet")) {
        matchIdx = product.gallery.findIndex((g) => g.label?.toLowerCase().includes("magnet"));
      } else if (lower.includes("uncoated") || lower.includes("natural")) {
        matchIdx = product.gallery.findIndex((g) => g.label?.toLowerCase().includes("natural"));
      } else if (lower.includes("plastic")) {
        matchIdx = product.gallery.findIndex((g) => g.label?.toLowerCase().includes("plastic"));
      }
      if (matchIdx !== -1) {
        setActiveImageIndex(matchIdx);
      }
    }
  };

  const activeImage = product.gallery[activeImageIndex] || product.gallery[0];

  // Construct contact quote link with prefilled URL query parameters
  const quoteQueryParams = new URLSearchParams({
    product: product.name,
    ...selectedOptions,
  }).toString();

  return (
    <div className={styles.detailLayout}>
      {/* Left Column: Interactive Image Gallery */}
      <div className={styles.galleryColumn}>
        <div className={styles.mainGalleryWrap}>
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            className={styles.mainGalleryImg}
          />

          {/* Previous / Next Controls */}
          {product.gallery.length > 1 && (
            <>
              <button
                type="button"
                className={styles.galleryNavPrev}
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className={styles.galleryNavNext}
                onClick={handleNextImage}
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Selector Strip */}
        {product.gallery.length > 1 && (
          <div className={styles.thumbnailRow}>
            {product.gallery.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`${styles.thumbButton} ${
                  activeImageIndex === idx ? styles.activeThumb : ""
                }`}
                aria-label={`View image: ${item.label || item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.thumbImg}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Title, Configuration Controls, and Quote CTA */}
      <div className={styles.configColumn}>
        <div className={styles.detailCategory}>{product.category}</div>
        <h1 className={styles.detailTitle}>{product.name}</h1>
        <div className={styles.detailTagline}>{product.tagline}</div>
        <p style={{ color: "var(--foreground)", fontSize: "14px", lineHeight: "1.65", marginBottom: "24px" }}>
          {product.description}
        </p>

        {/* Configurable Option Selectors */}
        {product.options && product.options.length > 0 && (
          <div className={styles.configCard}>
            <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>
              Customize Specifications
            </div>

            {product.options.map((opt) => (
              <div key={opt.id} className={styles.optionGroup}>
                <div className={styles.optionHeader}>
                  <span className={styles.optionTitle}>{opt.label}</span>
                  <span className={styles.selectedVal}>{selectedOptions[opt.id]}</span>
                </div>
                <div className={styles.optionPills}>
                  {opt.values.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleOptionChange(opt.id, val)}
                      className={`${styles.optionPill} ${
                        selectedOptions[opt.id] === val ? styles.optionPillActive : ""
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Primary Quote CTA Block */}
        <div className={styles.quoteActionBlock}>
          <Link
            href={`/contact?${quoteQueryParams}`}
            className="btn btn-primary"
            style={{ padding: "14px 28px", fontSize: "15px", textAlign: "center" }}
          >
            <span>Request Quote for this Configuration</span>
            <ArrowRight size={15} />
          </Link>
          <div className={styles.quoteNotice}>
            All quotes provide transparent Canadian pricing with complimentary digital file proofing prior to production.
          </div>
        </div>
      </div>
    </div>
  );
}

