import { ArrowUpRight, Camera, Mail, Phone } from "lucide-react";
import styles from "./ContactMethods.module.css";

const methods = [
  {
    icon: Mail,
    number: "01",
    title: "Email your idea",
    description: "Send artwork, details, or a quick note about what you need.",
    label: "jpprint13@gmail.com",
    href: "mailto:jpprint13@gmail.com",
    color: "cyan",
  },
  {
    icon: Phone,
    number: "02",
    title: "Talk it through",
    description: "Call us to discuss a project or explore your print options.",
    label: "905 919 1181",
    href: "tel:+19059191181",
    color: "pink",
  },
  {
    icon: Camera,
    number: "03",
    title: "See what we make",
    description: "Follow along for print projects, signs, and inspiration.",
    label: "Visit Instagram",
    href: "https://www.instagram.com/jpprintingandsigns/",
    color: "yellow",
  },
];

export default function ContactMethods() {
  return (
    <section className={styles.section} id="contact-options">
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <span>YOUR PROJECT, YOUR WAY</span>
          <h2>Pick a way<br />to connect.</h2>
          <p>We&apos;re ready when you are. Choose the easiest way to start.</p>
        </div>
        <div className={styles.grid}>
          {methods.map(({ icon: Icon, number, title, description, label, href, color }) => (
            <article className={`${styles.card} ${styles[color]}`} key={number}>
              <div className={styles.cardTop}>
                <span className={styles.icon}><Icon size={21} strokeWidth={1.8} /></span>
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noreferrer" : undefined}>
                {label}<ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
