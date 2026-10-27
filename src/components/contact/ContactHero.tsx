import { ArrowDown } from "lucide-react";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> LET&apos;S TALK PRINT
          </span>

          <h1>
            Have an idea?
            <br />
            <span className={styles.textGradient}>Let&apos;s make it happen.</span>
          </h1>

          <p>
            Tell us what you&apos;re planning. We&apos;ll help you explore the
            print, signs, and graphics that make your idea stand out.
          </p>

          <a className={styles.scroll} href="#contact-options">
            <span>FIND YOUR WAY TO CONNECT</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
