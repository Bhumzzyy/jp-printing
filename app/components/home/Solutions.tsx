import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Megaphone, Store, Tags } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const solutions = [
  {
    icon: BriefcaseBusiness,
    number: "01",
    title: "For everyday business",
    description: "Business cards, stationery and essentials that keep your brand looking consistent.",
  },
  {
    icon: Megaphone,
    number: "02",
    title: "For marketing & promotions",
    description: "Flyers, brochures and promotional print to help spread your message.",
  },
  {
    icon: Store,
    number: "03",
    title: "For spaces & storefronts",
    description: "Signage and display options to help your business get noticed.",
  },
  {
    icon: Tags,
    number: "04",
    title: "For custom ideas",
    description: "Have a specific size, finish or project in mind? Tell us what you need.",
  },
];

export default function Solutions() {
  return (
    <section className="section solutions">
      <div className="container">
        <SectionHeading
          eyebrow="PRINT FOR EVERY PURPOSE"
          title="Whatever you're working on, let's make it look the part."
          description="Different goals call for different print solutions. Start with what you want to achieve, and we'll take it from there."
        />

        <div className="solutions-grid">
          {solutions.map(({ icon: Icon, number, title, description }) => (
            <article className="solution-card" key={number}>
              <div className="solution-card__top">
                <span className="solution-card__icon"><Icon size={22} /></span>
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href="/contact" aria-label={`Ask us about ${title}`}>
                Discuss your project <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}