
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Palette,
  Sparkles,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Palette,
    number: "01",
    title: "Your brand, your way",
    description:
      "Print solutions shaped around your vision, message and unique brand identity.",
    color: "cyan",
  },
  {
    icon: Target,
    number: "02",
    title: "Attention to detail",
    description:
      "We focus on the little details that help your printed materials look professional.",
    color: "magenta",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Made to make an impact",
    description:
      "Thoughtful printing helps your business communicate clearly and stand out.",
    color: "yellow",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container why-section__grid">
        <div className="why-section__intro">
          <span className="eyebrow eyebrow--light">
            WHY JP PRINTING & SIGNS
          </span>

          <h2>
            Not just ink on paper.
            <br />
            <span>It&apos;s your brand in the world.</span>
          </h2>

          <p>
            Every project starts with an idea. We help you turn it into
            something tangible, professional and unmistakably yours.
          </p>

          <Link href="/about" className="button button--light">
            Get to Know Us <ArrowUpRight size={17} />
          </Link>

          <div className="why-section__stamp">
            <CheckCircle2 size={18} />
            <span>YOUR IDEA MATTERS HERE</span>
          </div>
        </div>

        <div className="why-section__reasons">
          {reasons.map(({ icon: Icon, number, title, description, color }) => (
            <article className="reason-card" key={number}>
              <div className="reason-card__top">
                <span className={`reason-card__icon reason-card__icon--${color}`}>
                  <Icon size={22} />
                </span>
                <span className="reason-card__number">{number}</span>
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
