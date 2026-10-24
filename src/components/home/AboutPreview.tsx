import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import ServiceArt from "@/components/ui/ServiceArt";

const points = [
  "24 printing & signage services under one roof",
  "A personal, direct approach to every project",
  "Design help, proofs and installation available",
];

export default function AboutPreview() {
  return (
    <section className="section about-preview">
      <div className="container about-preview__grid">
        <div className="about-preview__visual">
          <div className="about-preview__image">
            <ServiceArt variant="business-cards" className="about-preview__art" />
          </div>
          <div className="about-preview__caption">
            <span className="about-preview__caption-icon">JP.</span>
            <div>
              <strong>Every project has a story.</strong>
              <span>Let&apos;s help you tell yours.</span>
            </div>
          </div>
        </div>

        <div className="about-preview__content">
          <span className="eyebrow">A LITTLE ABOUT US</span>
          <h2>
            Good printing starts with
            <span className="text-gradient"> understanding your idea.</span>
          </h2>
          <p>
            At JP PRINTING & SIGNS, we help businesses, organizations and
            individuals turn ideas into print and signage that gets noticed.
            Whether you need everyday business essentials or a standout
            storefront display, we&apos;re here to help you find the right
            solution.
          </p>
          <p>
            Speak directly with Jot and Deepi about your project — no
            run-around, just honest advice and quality work.
          </p>

          <ul className="check-list">
            {points.map((point) => (
              <li key={point}>
                <span>
                  <Check size={14} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Link href="/about" className="button button--dark">
            More About Us <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
