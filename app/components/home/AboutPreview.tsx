import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const points = [
  "A personal approach to your project",
  "Print options tailored to your needs",
  "A focus on details and presentation",
];

export default function AboutPreview() {
  return (
    <section className="section about-preview">
      <div className="container about-preview__grid">
        <div className="about-preview__visual">
          <div className="about-preview__image">
            <Image
              src="/images/p.jpg"
              alt="Printing materials prepared for a business project"
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
          <div className="about-preview__caption">
            <span className="about-preview__caption-icon">JP.</span>
            <div>
              <strong>Every project has a story.</strong>
              <span>Let&apos;s help you tell yours.</span>
            </div>
          </div>
          <span className="about-preview__decoration" aria-hidden="true">✳</span>
        </div>

        <div className="about-preview__content">
          <span className="eyebrow">A LITTLE ABOUT US</span>
          <h2>
            Good printing starts with
            <span className="text-gradient"> understanding your idea.</span>
          </h2>
          <p>
            At JP PRINTING & SIGNS, we believe printed materials should do more
            than fill a page. They should help your business communicate,
            connect and be remembered.
          </p>
          <p>
            Whether you&apos;re preparing everyday business essentials or
            something special for a campaign, we&apos;re here to help you
            explore the right print solution.
          </p>

          <ul className="check-list">
            {points.map((point) => (
              <li key={point}>
                <span><Check size={14} /></span>
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