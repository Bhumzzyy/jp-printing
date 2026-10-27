
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./AboutShowcase.module.css";

const work = [
  {
    label: "PRINT THAT INTRODUCES YOU",
    title: "Brand essentials",
    image: "/hero/about-banner1.png",
    href: "/services?category=printing",
    className: "cards",
  },
  {
    label: "MAKE YOUR SPACE SPEAK",
    title: "Signs & graphics",
    image: "/hero/about-banner2.png",
    href: "/services/exterior-signage",
    className: "signs",
  },
];

export default function AboutShowcase() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <div>
            <span>BUILT AROUND YOUR BRAND</span>
            <h2>
              MAKE IT
              <br />
              <em>MEMORABLE.</em>
            </h2>
          </div>

          <Link href="/services" className={styles.allLink}>
            See all services <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {work.map((item) => (
            <Link
              href={item.href}
              className={`${styles.card} ${styles[item.className]}`}
              key={item.title}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                className={styles.art}
              />

              <div className={styles.cardCopy}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
              </div>

              <span className={styles.arrow} aria-hidden="true">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
