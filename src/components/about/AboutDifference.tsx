import { BadgeCheck, HeartHandshake, Shapes } from "lucide-react";
import styles from "./AboutDifference.module.css";

const reasons = [
  {
    icon: HeartHandshake,
    title: "A real conversation",
    description:
      "Work directly with Jot Panag and Deepi Panag to talk through your goals and project details.",
  },
  {
    icon: Shapes,
    title: "Options that fit",
    description:
      "Explore materials, formats, and finishes with guidance tailored to the work you have in mind.",
  },
  {
    icon: BadgeCheck,
    title: "Thoughtful from start to finish",
    description:
      "Every project gets attention to the details that make your brand feel like your brand.",
  },
];

export default function AboutDifference() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.titleBlock}>
          <span>THE JP DIFFERENCE</span>
          <h2>
            GOOD WORK
            <br />
            STARTS WITH
            <br />
            <i>GOOD PEOPLE.</i>
          </h2>
          <div className={styles.colorMark} aria-hidden="true">
            <b /><b /><b />
          </div>
        </div>
        <div className={styles.reasons}>
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <article className={styles.reason} key={title}>
              <div className={styles.icon}>
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <span className={styles.number}>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
