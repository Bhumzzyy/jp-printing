import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import GradientBlob from "../ui/GradientBlob";

export default function Hero() {
  return (
    <section className="hero">
      <GradientBlob className="hero__blob hero__blob--one" />
      <GradientBlob className="hero__blob hero__blob--two" />

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">
            <span className="eyebrow__dot" /> YOUR PRINTING PARTNER
          </span>

          <h1>
            Ideas worth
            <br />
            seeing.
            <br />
            <span className="text-gradient">Prints worth</span>
            <br />
            remembering.
          </h1>

          <p className="hero__description">
            From business essentials to standout signage, we help your brand
            make a lasting impression — one print at a time.
          </p>

          <div className="hero__actions">
            <Link href="/contact" className="button button--dark">
              Start Your Project <ArrowUpRight size={17} />
            </Link>
            <Link href="/products" className="button button--outline">
              Explore Our Work
            </Link>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-icon"><Check size={15} /></span>
            <p>Thoughtful service. Quality print. Your brand at its best.</p>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <Image
              src="/images/p.jpg"
              alt="Printed marketing materials and professional printing work"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className="hero__image"
            />
          </div>

          <div className="hero__floating-card hero__floating-card--top">
            <span className="color-dots">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>Ideas in full colour.</span>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__floating-star">✳</span>
            <div>
              <strong>Make it memorable.</strong>
              <small>Print that speaks for you.</small>
            </div>
          </div>

          <span className="hero__visual-label">JP / PRINT STUDIO</span>
        </div>
      </div>

      <a href="#services" className="hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
} 