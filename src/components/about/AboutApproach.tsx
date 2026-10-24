import Link from "next/link";
import { ArrowRight, MessageCircle, Ruler, WandSparkles } from "lucide-react";
import styles from "./AboutApproach.module.css";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Tell us what you have in mind",
    description: "Share your idea, purpose, quantity, and timing.",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Shape the right solution",
    description: "Review suitable formats, materials, and finishing options.",
  },
  {
    icon: WandSparkles,
    number: "03",
    title: "Get ready to make it real",
    description: "Move forward with a print or signage direction that fits.",
  },
];

export default function AboutApproach() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <span>STRAIGHTFORWARD, START TO FINISH</span>
          <h2>
            FROM FIRST
            <br />
            THOUGHT TO
            <br />
            <em>FINISHED PIECE.</em>
          </h2>
          <Link href="/contact" className={styles.link}>
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.steps}>
          {steps.map(({ icon: Icon, number, title, description }) => (
            <article className={styles.step} key={number}>
              <div className={styles.stepHead}>
                <span>{number}</span>
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
