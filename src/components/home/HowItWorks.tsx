import Link from "next/link";
import { ArrowUpRight, MessageCircle, PackageCheck, PencilRuler } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell us your idea",
    description: "Share what you want to print, your quantity and how you plan to use it.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Discuss the details",
    description: "We'll discuss suitable options, specifications and the next steps for your project.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Move your project forward",
    description: "Confirm the details and timeline with us before your print order proceeds.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="SIMPLE AS 1, 2, PRINT"
          title="From first thought to print-ready plans."
          description="Getting started is simple. Tell us what you're looking for, and we'll help you work through the details."
          centered
        />

        <div className="steps-grid">
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <article className="step-card" key={number}>
              <div className="step-card__top">
                <span className="step-card__icon"><Icon size={23} /></span>
                <span className="step-card__number">{number}</span>
              </div>
              {index < steps.length - 1 && <span className="step-card__connector" />}
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="how-it-works__cta">
          <Link href="/contact" className="button button--dark">
            Tell Us About Your Project <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}