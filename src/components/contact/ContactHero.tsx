import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, Printer, Sparkles } from "lucide-react";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <Sparkles size={15} aria-hidden="true" />
            LET&apos;S TALK PRINT
          </span>
          <h1>
            Have an idea?
            <br />
            <span>Let&apos;s make</span>
            <br />
            it happen.
          </h1>
          <p>
            Tell us what you&apos;re planning. We&apos;ll help you explore the
            print, signs, and graphics that make your idea stand out.
          </p>
          <div className={styles.actions}>
            <Link href="#project-enquiry" className={styles.primary}>
              Start your enquiry <ArrowUpRight size={17} />
            </Link>
            <a className={styles.emailLink} href="mailto:jpprint13@gmail.com">
              <Mail size={16} /> jpprint13@gmail.com
            </a>
          </div>
          <a className={styles.scroll} href="#contact-options">
            FIND YOUR WAY TO CONNECT <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.visual} aria-label="Print project illustration">
          <div className={styles.sheetBack} />
          <div className={styles.sheet}>
            <span className={styles.sheetEyebrow}>A LITTLE IDEA CAN GO A LONG WAY</span>
            <div className={styles.poster}>
              <span>MAKE</span>
              <strong>IT<br />PRINT.</strong>
              <Printer size={49} strokeWidth={1.35} aria-hidden="true" />
            </div>
            <div className={styles.sheetFooter}>
              <span>JP PRINTING &amp; SIGNS</span>
              <span>YOUR LOCAL PRINT PARTNER</span>
            </div>
          </div>
          <div className={styles.stamp}>IDEA<br />→ IMPACT</div>
          <div className={styles.floatNote}>
            <i /> YOUR NEXT PROJECT STARTS HERE
          </div>
          <div className={styles.dots} aria-hidden="true"><b /><b /><b /><b /></div>
        </div>
      </div>
    </section>
  );
}
