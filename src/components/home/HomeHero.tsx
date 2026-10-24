
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Box,
  Building2,
  CreditCard,
  ChevronDown,
  Layers3,
  Printer,
  Sparkles,
  Sticker,
} from "lucide-react";
import ServiceArt from "@/components/ui/ServiceArt";
import { printingServices, signsServices } from "@/data/services";

const products = [
  { name: "Business Cards", type: "PRINT ESSENTIALS", icon: CreditCard, color: "cyan" },
  { name: "Flyers & Brochures", type: "MARKETING PRINT", icon: Layers3, color: "pink" },
  { name: "Stickers & Labels", type: "CUSTOM PRINT", icon: Sticker, color: "yellow" },
  { name: "Signs & Displays", type: "MAKE IT VISIBLE", icon: Box, color: "purple" },
];

export default function HomeHero() {
  return (
    <section className="jh-section">
      <div className="jh-shell">
        <div className="jh-topline">
          <Link href="/" className="jh-brand">
            <Image
              src="/jp_logo1.png"
              alt="JP Printing & Signs"
              width={2000}
              height={1024}
              className="jh-brand-logo"
              priority
            />
          </Link>

          <nav className="jh-nav" aria-label="Main navigation">
            <Link className="jh-nav-active" href="/">Home</Link>
            <details className="jh-service-dropdown">
              <summary>
                Services <ChevronDown size={13} />
              </summary>
              <div className="jh-service-menu">
                <Link className="jh-all-services" href="/services">All services</Link>
                <div className="jh-service-menu-columns">
                  <div>
                    <span>Printing</span>
                    {printingServices.map((service) => (
                      <Link key={service.slug} href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <span>Signs</span>
                    {signsServices.map((service) => (
                      <Link key={service.slug} href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </details>
            <Link href="/about">About</Link>
          </nav>

          <Link href="/contact" className="jh-top-cta">
            CONTACT US <span><ArrowUpRight size={14} /></span>
          </Link>
        </div>

        <div className="jh-main">
          <div className="jh-copy">
            <div className="jh-eyebrow">
              <Sparkles size={14} />
              YOUR LOCAL PRINT PARTNER
            </div>

            <h1>
              MAKE YOUR
              <br />
              BRAND
              <br />
              <span>IMPOSSIBLE</span>
              <br />
              TO MISS<span className="jh-period">.</span>
            </h1>

            <p className="jh-description">
              From a little card to a big storefront sign.
              We turn your ideas into things people can see,
              touch and remember.
            </p>

            <div className="jh-actions">
              <Link href="/services" className="jh-button jh-button-primary">
                EXPLORE OUR WORK <ArrowUpRight size={17} />
              </Link>
              <Link href="/contact" className="jh-button jh-button-secondary">
                GET A QUOTE
              </Link>
            </div>

            <div className="jh-trust">
              <div className="jh-trust-icon">
                <BadgeCheck size={20} />
              </div>
              <div>
                <strong>YOUR IDEA, OUR PRINT.</strong>
                <span>Serving Mississauga & the GTA</span>
              </div>
            </div>
          </div>

          <div className="jh-showcase">
            <div className="jh-cover-visual" aria-label="Custom printing and signage artwork">
              <ServiceArt variant="exterior" className="jh-cover-art" />
              <div className="jh-cover-shade" />
              <div className="jh-floating-tag jh-tag-one">
                <Printer size={14} />
                <span>PRINT THAT POPS</span>
              </div>

              <div className="jh-floating-tag jh-tag-two">
                <Sparkles size={14} />
                <span>MADE FOR YOUR BRAND</span>
              </div>

              <div className="jh-round-stamp">
                <span>PRINT</span>
                <Building2 size={21} />
                <span>THAT LASTS</span>
              </div>

              <div className="jh-color-dots">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          <div className="jh-image-thumbnails" aria-label="Featured print and signage work">
            <div className="jh-thumbnail">
              <ServiceArt variant="business-cards" className="jh-thumbnail-art" />
              <span>Business cards</span>
            </div>
            <div className="jh-thumbnail">
              <ServiceArt variant="flyers" className="jh-thumbnail-art" />
              <span>Flyers &amp; brochures</span>
            </div>
            <div className="jh-thumbnail">
              <ServiceArt variant="window" className="jh-thumbnail-art" />
              <span>Window graphics</span>
            </div>
          </div>
        </div>

        <div className="jh-bottomline">
          <span>YOUR NEXT BIG IDEA STARTS HERE</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>

      <div className="jh-products">
        <div className="jh-products-heading">
          <div>
            <span>THE GOOD STUFF</span>
            <h2>WHAT WE MAKE.</h2>
          </div>
          <Link href="/services">
            ALL SERVICES <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="jh-product-grid">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <Link
                href="/services"
                className={`jh-product-card jh-${product.color}`}
                key={product.name}
              >
                <div className="jh-product-visual">
                  <span className="jh-product-index">
                    0{index + 1}
                  </span>
                  <div className="jh-product-icon">
                    <Icon size={48} strokeWidth={1.15} />
                  </div>
                  <ArrowUpRight className="jh-product-arrow" size={19} />
                </div>

                <div className="jh-product-info">
                  <span>{product.type}</span>
                  <h3>{product.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .jh-section {
          --jh-ink: #171717;
          --jh-cyan: #00b9d6;
          --jh-pink: #e5007d;
          --jh-yellow: #f5d800;
          background: #fff;
          color: var(--jh-ink);
          font-family: Arial, Helvetica, sans-serif;
        }

        .jh-shell {
          position: relative;
          padding: 0 6.5%;
          background: var(--jh-ink);
          color: #fff;
        }

        .jh-topline {
          position: relative;
          z-index: 5;
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 18px;
          border-bottom: 1px solid #ffffff25;
        }

        .jh-brand {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          text-decoration: none;
        }

        .jh-brand-logo {
          display: block;
          width: 116px;
          height: auto;
          border-radius: 0;
        }

        .jh-nav {
          position: absolute;
          left: 50%;
          display: flex;
          align-items: center;
          gap: clamp(12px, 2vw, 28px);
          transform: translateX(-50%);
        }

        .jh-nav a {
          padding: 10px 0;
          color: #c7c7c7;
          text-decoration: none;
          font-size: 12px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .jh-service-dropdown {
          position: relative;
        }

        .jh-service-dropdown summary {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 0;
          color: #c7c7c7;
          cursor: pointer;
          font-size: 12px;
          list-style: none;
        }

        .jh-service-dropdown summary::-webkit-details-marker {
          display: none;
        }

        .jh-service-dropdown:hover summary,
        .jh-service-dropdown[open] summary,
        .jh-service-dropdown:focus-within summary {
          color: #fff;
        }

        .jh-service-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          display: none;
          width: min(500px, 80vw);
          max-height: min(65vh, 520px);
          padding: 18px;
          overflow-y: auto;
          border: 1px solid #ffffff45;
          background: #171717;
          box-shadow: 0 16px 40px #0008;
          transform: translateX(-50%);
        }

        .jh-service-dropdown[open] .jh-service-menu,
        .jh-service-dropdown:hover .jh-service-menu,
        .jh-service-dropdown:focus-within .jh-service-menu {
          display: block;
        }

        .jh-service-menu a {
          display: block;
          padding: 5px 0;
          color: #d0d0d0;
          font-size: 11px;
          line-height: 1.4;
          text-decoration: none;
        }

        .jh-service-menu a:hover,
        .jh-service-menu a:focus-visible {
          color: var(--jh-cyan);
        }

        .jh-service-menu .jh-all-services {
          margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ffffff30;
          color: #fff;
          font-weight: 700;
        }

        .jh-service-menu-columns {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .jh-service-menu-columns > div > span {
          display: block;
          margin-bottom: 6px;
          color: var(--jh-yellow);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .jh-nav a:hover,
        .jh-nav .jh-nav-active {
          color: #fff;
        }

        .jh-top-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-left: auto;
          padding: 8px 12px;
          border: 1px solid #ffffff80;
          border-radius: 0;
          color: white;
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .jh-top-cta > span {
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          border: 1px solid #ffffff80;
          border-radius: 0;
          background: transparent;
          color: var(--jh-cyan);
        }

        .jh-top-cta:hover {
          border-color: var(--jh-cyan);
        }

        .jh-main {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          min-height: clamp(560px, calc(100vh - 82px), 820px);
          margin-inline: -6.95%;
        }

        .jh-copy {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          padding: 52px clamp(20px, 3vw, 40px) 112px
            clamp(24px, 5vw, 72px);
        }

        .jh-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 26px;
          color: var(--jh-yellow);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .jh-copy h1 {
          margin: 0;
          font-size: clamp(38px, 4.8vw, 68px);
          font-weight: 950;
          line-height: 0.92;
          letter-spacing: -0.045em;
        }

        .jh-copy h1 > span:first-of-type {
          color: var(--jh-cyan);
        }

        .jh-period {
          color: var(--jh-pink);
        }

        .jh-description {
          max-width: 370px;
          margin: 25px 0 0;
          color: #bcbcbc;
          font-size: 13px;
          line-height: 1.9;
        }

        .jh-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 27px;
        }

        .jh-button {
          min-height: 45px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 0 17px;
          border: 1px solid #ffffff45;
          border-radius: 3px;
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .jh-button-primary {
          border-color: var(--jh-cyan);
          background: var(--jh-cyan);
          color: var(--jh-ink);
        }

        .jh-button-primary:hover {
          background: #fff;
          border-color: #fff;
        }

        .jh-button-secondary {
          color: white;
        }

        .jh-button-secondary:hover {
          background: white;
          color: var(--jh-ink);
        }

        .jh-trust {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 42px;
        }

        .jh-trust-icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border: 1px solid #ffffff35;
          border-radius: 50%;
          color: var(--jh-cyan);
        }

        .jh-trust > div:last-child {
          display: grid;
          gap: 5px;
        }

        .jh-trust strong {
          font-size: 9px;
          letter-spacing: 1px;
        }

        .jh-trust > div:last-child > span {
          color: #aaa;
          font-size: 10px;
        }

        .jh-showcase {
          position: relative;
          min-width: 0;
          overflow: hidden;
          background: #211a17;
        }

        .jh-cover-visual {
          position: absolute;
          inset: 0;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(ellipse at 72% 36%, #a85d30 0%, transparent 48%),
            linear-gradient(140deg, #51301e, #181311 78%);
        }

        .jh-cover-art {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.9;
          mix-blend-mode: screen;
          transform: scale(1.35);
        }

        .jh-cover-shade {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            linear-gradient(90deg, #17171724, transparent 42%),
            linear-gradient(0deg, #17171735, transparent 45%);
        }

        .jh-floating-tag {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 12px;
          background: #fff;
          color: #171717;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 25px #0003;
        }

        .jh-tag-one {
          top: 15%;
          left: 8%;
          transform: rotate(-4deg);
        }

        .jh-tag-one svg {
          color: #00a9c7;
        }

        .jh-tag-two {
          right: 8%;
          bottom: 13%;
          transform: rotate(4deg);
        }

        .jh-tag-two svg {
          color: #e5007d;
        }

        .jh-round-stamp {
          position: absolute;
          z-index: 2;
          right: 5%;
          top: 8%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 66px;
          height: 66px;
          border: 1px solid #ffffff65;
          border-radius: 50%;
          color: white;
          font-size: 7px;
          letter-spacing: 1px;
          transform: rotate(10deg);
        }

        .jh-round-stamp svg {
          color: var(--jh-cyan);
        }

        .jh-color-dots {
          position: absolute;
          z-index: 2;
          bottom: 7%;
          left: 6%;
          display: flex;
          gap: 6px;
        }

        .jh-color-dots i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--jh-cyan);
        }

        .jh-color-dots i:nth-child(2) {
          background: var(--jh-pink);
        }

        .jh-color-dots i:nth-child(3) {
          background: var(--jh-yellow);
        }

        .jh-color-dots i:nth-child(4) {
          background: #fff;
        }

        .jh-image-thumbnails {
          position: absolute;
          z-index: 4;
          top: 70%;
          left: 54%;
          display: flex;
          gap: 9px;
          padding: 8px;
          border: 1px solid #ffffff35;
          background: #171717e8;
          box-shadow: 0 14px 40px #0008;
          transform: translate(-50%, -50%);
          backdrop-filter: blur(12px);
        }

        .jh-thumbnail {
          display: flex;
          width: 138px;
          flex-direction: column;
          gap: 5px;
          padding: 5px;
          background: #fff;
          color: #171717;
        }

        .jh-thumbnail-art {
          display: block;
          width: 100%;
          height: 80px;
        }

        .jh-thumbnail > span {
          overflow: hidden;
          font-size: 7px;
          font-weight: 800;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .jh-bottomline {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 17px 0;
          border-top: 1px solid #ffffff25;
          background: var(--jh-ink);
          color: #999;
          font-size: 8px;
          letter-spacing: 1.3px;
        }

        /* White product strip */

        .jh-products {
          padding: 62px 6.5% 75px;
          background: #fff;
          color: #171717;
        }

        .jh-products-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 27px;
        }

        .jh-products-heading > div > span {
          color: #777;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .jh-products-heading h2 {
          margin: 9px 0 0;
          font-size: clamp(31px, 4.3vw, 49px);
          line-height: 1;
          letter-spacing: -1.5px;
        }

        .jh-products-heading > a {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 7px;
          border-bottom: 1px solid #171717;
          color: #171717;
          text-decoration: none;
          white-space: nowrap;
          font-size: 9px;
          font-weight: 800;
        }

        .jh-product-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 13px;
        }

        .jh-product-card {
          display: block;
          min-width: 0;
          color: #171717;
          text-decoration: none;
        }

        .jh-product-visual {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 185px;
          overflow: hidden;
          background: #f3f3f3;
        }

        .jh-cyan .jh-product-visual {
          background: #dff7fa;
        }

        .jh-pink .jh-product-visual {
          background: #fde5f1;
        }

        .jh-yellow .jh-product-visual {
          background: #fff6c9;
        }

        .jh-purple .jh-product-visual {
          background: #eee8ff;
        }

        .jh-product-index {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 9px;
          color: #777;
        }

        .jh-product-icon {
          display: grid;
          place-items: center;
          width: 86px;
          height: 100px;
          background: #fff;
          box-shadow: 8px 12px 0 #1717170c;
          transform: rotate(-5deg);
          transition: transform 0.35s ease;
        }

        .jh-cyan .jh-product-icon {
          color: #00a9c7;
        }

        .jh-pink .jh-product-icon {
          color: #e5007d;
        }

        .jh-yellow .jh-product-icon {
          color: #8c7700;
        }

        .jh-purple .jh-product-icon {
          color: #7050bd;
        }

        .jh-product-card:hover .jh-product-icon {
          transform: rotate(3deg) translateY(-5px);
        }

        .jh-product-arrow {
          position: absolute;
          right: 10px;
          bottom: 10px;
          transition: transform 0.2s ease;
        }

        .jh-product-card:hover .jh-product-arrow {
          transform: translate(2px, -2px);
        }

        .jh-product-info {
          padding: 13px 2px 0;
        }

        .jh-product-info > span {
          color: #777;
          font-size: 8px;
          letter-spacing: 1.3px;
        }

        .jh-product-info h3 {
          margin: 6px 0 0;
          font-size: 15px;
          letter-spacing: 0;
        }

        /* Tablet */

        @media (max-width: 900px) {
          .jh-shell {
            padding-inline: 4%;
          }

          .jh-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            min-height: 620px;
            margin-inline: -4.17%;
          }

          .jh-copy h1 {
            font-size: clamp(43px, 6vw, 60px);
          }

          .jh-copy {
            padding-left: 5%;
          }

          .jh-copy h1 {
            font-size: clamp(38px, 4.6vw, 48px);
          }

          .jh-image-thumbnails {
            top: 70%;
          }

          .jh-thumbnail {
            width: 112px;
          }

          .jh-thumbnail-art {
            height: 68px;
          }

          .jh-floating-tag {
            font-size: 7px;
            padding: 8px;
          }

          .jh-products {
            padding-inline: 4%;
          }

          .jh-product-visual {
            min-height: 150px;
          }
        }

        /* Mobile */

        @media (max-width: 650px) {
          .jh-topline {
            min-height: 62px;
          }

          .jh-brand-logo {
            width: 96px;
          }

          .jh-nav {
            gap: 10px;
          }

          .jh-nav a {
            padding: 9px 0;
            font-size: 10px;
          }

          .jh-top-cta {
            gap: 5px;
            padding: 6px 8px;
            font-size: 8px;
          }

          .jh-top-cta > span {
            width: 26px;
            height: 26px;
          }

          .jh-main {
            grid-template-columns: 1fr;
            min-height: 0;
            margin-inline: -4.17%;
            padding-bottom: 0;
          }

          .jh-copy {
            min-height: 510px;
            padding: 52px 24px 112px;
          }

          .jh-copy h1 {
            font-size: clamp(47px, 11.7vw, 72px);
          }

          .jh-description {
            max-width: 360px;
          }

          .jh-trust {
            margin-top: 30px;
          }

          .jh-showcase {
            min-height: var(--jh-mobile-showcase-height, 440px);
          }

          .jh-image-thumbnails {
            top: calc(100% - var(--jh-mobile-showcase-height, 440px));
            left: 50%;
            gap: 6px;
          }

          .jh-thumbnail {
            width: min(29vw, 118px);
          }

          .jh-thumbnail-art {
            height: 64px;
          }

          .jh-products {
            padding: 48px 20px 55px;
          }

          .jh-products-heading h2 {
            font-size: clamp(30px, 8vw, 43px);
            letter-spacing: -2px;
          }

          .jh-products-heading > a {
            font-size: 8px;
          }

          .jh-product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px 12px;
          }

          .jh-product-visual {
            min-height: 175px;
          }

          .jh-bottomline {
            font-size: 7px;
          }
        }

        @media (max-width: 370px) {
          .jh-brand-logo {
            width: 78px;
          }

          .jh-nav a {
            padding-inline: 0;
            font-size: 7px;
          }

          .jh-top-cta {
            gap: 4px;
            font-size: 7px;
          }

          .jh-copy h1 {
            font-size: 44px;
          }

          .jh-product-visual {
            min-height: 145px;
          }
        }

        @media (max-width: 440px) {
          .jh-topline {
            gap: 7px;
          }

          .jh-nav {
            gap: 7px;
          }

          .jh-nav a {
            font-size: 8px;
          }

          .jh-top-cta {
            font-size: 0;
            padding: 5px;
          }

          .jh-top-cta > span {
            width: 30px;
            height: 30px;
          }
        }

      `}</style>
    </section>
  );
}
