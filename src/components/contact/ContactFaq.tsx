import { ArrowDownRight, HelpCircle } from "lucide-react";
import styles from "./ContactFaq.module.css";

const questions = [
  {
    question: "What information should I include in an enquiry?",
    answer:
      "Tell us what you are looking to print or make, approximate quantity, size, preferred materials, and any deadlines. If some details are still undecided, we can talk them through.",
  },
  {
    question: "Can you help me choose the right product or material?",
    answer:
      "Yes. Share the purpose of your project and we can discuss options for formats, materials, and finishes that suit your needs.",
  },
  {
    question: "Can I send my own artwork or design?",
    answer:
      "You can include artwork or design details when you contact us. We can discuss your files and any project-specific requirements together.",
  },
  {
    question: "Do you work on custom signs and graphics?",
    answer:
      "Yes. We offer a range of custom signage and graphics options. Contact us with your space, idea, and requirements to get started.",
  },
];

export default function ContactFaq() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.questions}>
          <span className={styles.eyebrow}><HelpCircle size={15} /> QUICK ANSWERS</span>
          <h2>Good questions.<br /><em>Clear answers.</em></h2>
          <div className={styles.list}>
            {questions.map((item) => (
              <details className={styles.item} key={item.question}>
                <summary>
                  {item.question}
                  <ArrowDownRight size={17} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className={styles.artPanel} aria-label="Abstract print and signage illustration">
          <div className={styles.artCircle} />
          <div className={styles.artCard}>
            <span>ASK US</span>
            <strong>LET&apos;S<br />MAKE<br /><i>IT REAL.</i></strong>
            <div className={styles.artIcon}><HelpCircle size={46} strokeWidth={1.4} /></div>
          </div>
          <div className={styles.artTag}>WE&apos;RE HERE TO HELP</div>
          <span className={styles.registration} aria-hidden="true">+</span>
        </div>
      </div>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span>
            LET&apos;S TALK PRINT · START YOUR PROJECT · LET&apos;S TALK PRINT ·
            START YOUR PROJECT ·&nbsp;
          </span>
          <span>
            LET&apos;S TALK PRINT · START YOUR PROJECT · LET&apos;S TALK PRINT ·
            START YOUR PROJECT ·&nbsp;
          </span>
        </div>
      </div>
    </section>
  );
}
