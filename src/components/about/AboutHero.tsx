
import { ArrowDown } from "lucide-react";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> YOUR LOCAL PRINT PARTNER
          </span>

          <h1>
            Good ideas deserve
            <br />
            to <span className={styles.textGradient}>get noticed.</span>
          </h1>

          <p>
            From a little card to a big storefront sign, we help turn your
            ideas into print and graphics people can see, touch, and remember.
          </p>

          <a className={styles.scroll} href="#about-range">
            <span>SCROLL TO MEET JP</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
