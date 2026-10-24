import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import HeroArt from "@/components/ui/HeroArt";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">
            <span className="eyebrow__dot" /> YOUR LOCAL PRINT & SIGN PARTNER
          </span>

          <h1>
            Printing &amp; signage
            <br />
            that makes you
            <br />
            <span className="text-gradient">impossible to miss.</span>
          </h1>

          <p className="hero__description">
            From business cards and flyers to storefront signs and vehicle
            wraps, we help Mississauga businesses get noticed — with
            full-colour quality and fast turnaround.
          </p>

          <div className="hero__actions">
            <Link href="/services" className="button button--dark">
              Explore Services <ArrowUpRight size={17} />
            </Link>
            <Link href="/contact" className="button button--outline">
              Get a Free Quote
            </Link>
          </div>

          <ul className="hero__points">
            <li>
              <Check size={14} /> 24 print &amp; signage services
            </li>
            <li>
              <Check size={14} /> Design help available
            </li>
            <li>
              <Check size={14} /> Fast local turnaround
            </li>
          </ul>

          <div className="hero__trust">
            <span className="hero__trust-icon">
              <Check size={15} />
            </span>
            <p>
              Trusted by businesses across Mississauga &amp; the GTA for
              printing that makes an impression.
            </p>
          </div>
        </div>

        <div className="hero__visual">
          <HeroArt className="hero__art" />

          <div className="hero__floating-card hero__floating-card--top">
            <span className="color-dots">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>Full-colour CMYK printing.</span>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__floating-star">✳</span>
            <div>
              <strong>Print &amp; signs, done right.</strong>
              <small>One team, every project.</small>
            </div>
          </div>
        </div>
      </div>

      <a href="#categories" className="hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
