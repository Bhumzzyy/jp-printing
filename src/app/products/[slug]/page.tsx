import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailInteractive from "@/components/products/ProductDetailInteractive";
import { getProductBySlug, getAllProductSlugs } from "@/data/products";
import styles from "@/components/products/ProductsDirectory.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | JP Printing & Signs" };
  }

  return {
    title: `${product.name} | Custom Printing in Ontario | JP Printing & Signs`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className={styles.detailPageWrap}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span className="current">{product.name}</span>
          </nav>

          {/* Interactive Gallery & Configuration Component */}
          <ProductDetailInteractive product={product} />

          {/* Features & Specifications */}
          <div className={styles.twoColCards}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Craftsmanship & Features</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {product.features.map((feat, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", lineHeight: "1.5" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--brand-cyan)", marginTop: "3px", flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoCardTitle}>Technical Specifications</h3>
              <div>
                {product.specs.map((spec, i) => (
                  <div key={i} className={styles.specRow}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

