import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import ServiceArt from "@/components/ui/ServiceArt";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <Sparkles size={14} aria-hidden="true" />
            YOUR LOCAL PRINT PARTNER
          </span>
          <h1>
            Good ideas
            <br />
            deserve to
            <br />
            <span>get noticed.</span>
          </h1>
          <p>
            From a little card to a big storefront sign, we help turn your
            ideas into print and graphics people can see, touch, and remember.
          </p>
          <div className={styles.actions}>
            <Link href="/services" className={styles.primary}>
              Explore what we do <ArrowUpRight size={17} />
            </Link>
            <Link href="/contact" className={styles.secondary}>
              Let&apos;s talk
            </Link>
          </div>
          <a className={styles.scroll} href="#about-range">
            <span>SCROLL TO MEET JP</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.visual} aria-label="Colorful print and signage artwork">
          <div className={styles.artBackplate} />
          <div className={styles.artMain}>
            <ServiceArt variant="exterior" className={styles.art} />
          </div>
          <div className={`${styles.artSmall} ${styles.artSmallTop}`}>
            <ServiceArt variant="business-cards" className={styles.art} />
            <span>PRINT THAT POPS</span>
          </div>
          <div className={`${styles.artSmall} ${styles.artSmallBottom}`}>
            <ServiceArt variant="window" className={styles.art} />
            <span>MADE FOR YOUR BRAND</span>
          </div>
          <span className={styles.sticker}>IDEA<br />→ IMPACT</span>
          <div className={styles.colorDots} aria-hidden="true">
            <i /><i /><i /><i />
          </div>
        </div>
      </div>
    </section>
  );
}
