import Link from "next/link";
import { ArrowUpRight, PanelsTopLeft, Printer, Signpost } from "lucide-react";
import styles from "./AboutRange.module.css";

const categories = [
  {
    number: "01",
    title: "Print",
    text: "Business cards, flyers, brochures, and everyday essentials that carry your brand.",
    href: "/services/business-cards-stationery",
    icon: Printer,
    color: "cyan",
  },
  {
    number: "02",
    title: "Signs",
    text: "Storefronts, windows, and displays that help your business stand out in the real world.",
    href: "/services/exterior-signage",
    icon: Signpost,
    color: "pink",
  },
  {
    number: "03",
    title: "Custom",
    text: "Unique formats and graphics, shaped around your idea and what you need to communicate.",
    href: "/services",
    icon: PanelsTopLeft,
    color: "yellow",
  },
];

export default function AboutRange() {
  return (
    <section className={styles.section} id="about-range">
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <span>ONE PARTNER. MANY WAYS TO MAKE AN IMPRESSION.</span>
          <h2>
            WHAT WE
            <br />
            <em>MAKE.</em>
          </h2>
        </div>
        <div className={styles.cards}>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                className={`${styles.card} ${styles[category.color]}`}
                href={category.href}
                key={category.number}
              >
                <div className={styles.cardTop}>
                  <span>{category.number}</span>
                  <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <span className={styles.cardLink}>
                  Explore <ArrowUpRight size={17} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
