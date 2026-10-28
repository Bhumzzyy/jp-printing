
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  Box,
  CreditCard,
  Layers3,
  Sticker,
} from "lucide-react";

const products = [
  {
    name: "Business Cards",
    type: "PRINT ESSENTIALS",
    icon: CreditCard,
    color: "cyan",
  },
  {
    name: "Flyers & Brochures",
    type: "MARKETING PRINT",
    icon: Layers3,
    color: "pink",
  },
  {
    name: "Stickers & Labels",
    type: "CUSTOM PRINT",
    icon: Sticker,
    color: "yellow",
  },
  {
    name: "Signs & Displays",
    type: "MAKE IT VISIBLE",
    icon: Box,
    color: "purple",
  },
];

const heroImages = [
  {
    src: "/hero/hero1.png",
    alt: "Professional printing and signage project",
  },
  {
    src: "/hero/hero2.png",
    alt: "Custom printed marketing materials",
  },
  {
    src: "/hero/hero3.png",
    alt: "Creative business branding and signage",
  },
];

const thumbnailImages = [
  {
    src: "/hero/cards.png",
    alt: "Business card printing",
  },
  {
    src: "/hero/flayers.png",
    alt: "Flyers and brochures printing",
  },
  {
    src: "/hero/boards.png",
    alt: "Window graphics and signage",
  },
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="jh-section">
      <div className="jh-shell">
        <div className="jh-main">

          {/* LEFT CONTENT */}
          <div className="jh-copy">
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
              From a little card to a big storefront sign. We turn your ideas
              into things people can see, touch and remember.
            </p>
          </div>

          {/* RIGHT HERO SLIDESHOW */}
          <div className="jh-showcase">
            <div
              className="jh-cover-visual"
              aria-label="Featured printing and signage projects"
            >
              {heroImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`jh-cover-slide ${
                    activeSlide === index ? "active" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 650px) 100vw, 50vw"
                    className="jh-cover-art"
                  />
                </div>
              ))}

              {/* SLIDE INDICATORS */}
              <div className="jh-slide-indicators">
                {heroImages.map((image, index) => (
                  <span
                    key={image.src}
                    className={activeSlide === index ? "active" : ""}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* STATIC THUMBNAILS */}
          <div
            className="jh-image-thumbnails"
            aria-label="Featured print and signage work"
          >
            {thumbnailImages.map((image) => (
              <div className="jh-thumbnail" key={image.src}>
                <div className="jh-thumbnail-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="140px"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* WHAT WE MAKE */}
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
                  <span className="jh-product-index">0{index + 1}</span>

                  <div className="jh-product-icon">
                    <Icon size={48} strokeWidth={1.15} />
                  </div>

                  <ArrowUpRight
                    className="jh-product-arrow"
                    size={19}
                  />
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
          --jh-ink: #08090c;
          --jh-cyan: #00d9ff;
          --jh-pink: #ff008c;
          --jh-yellow: #ffe600;

          background: #fff;
          color: #171717;
          font-family: var(--font-poppins), sans-serif;
          overflow-x: clip;
        }

        .jh-shell {
          position: relative;
          padding: 0 6.5%;
          background: var(--jh-ink);
          color: #fff;
          overflow-x: clip;
        }

        /* MAIN HERO */

        .jh-main {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          min-height: clamp(620px, calc(100svh - 68px), 900px);
          margin-inline: -6.95%;
        }

        /* LEFT TEXT AREA - CMYK GRADIENT */

        .jh-copy {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          min-width: 0;
          min-height: 100%;
          overflow: hidden;
          padding: 65px clamp(30px, 5vw, 75px);

          background:
            radial-gradient(
              ellipse at 5% 15%,
              rgba(0, 217, 255, 0.17),
              transparent 43%
            ),
            radial-gradient(
              ellipse at 95% 85%,
              rgba(255, 0, 140, 0.15),
              transparent 43%
            ),
            radial-gradient(
              ellipse at 75% 5%,
              rgba(255, 230, 0, 0.09),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #08090c 0%,
              #101014 48%,
              #08090c 100%
            );
        }

        .jh-copy::before {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          left: -190px;
          bottom: -170px;
          border-radius: 50%;
          background: rgba(0, 217, 255, 0.13);
          filter: blur(90px);
          pointer-events: none;
        }

        .jh-copy::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          right: -190px;
          top: -150px;
          border-radius: 50%;
          background: rgba(255, 0, 140, 0.11);
          filter: blur(90px);
          pointer-events: none;
        }

        .jh-copy h1 {
          position: relative;
          z-index: 1;
          margin: 0;
          font-size: clamp(55px, 6.2vw, 92px);
          font-weight: 950;
          line-height: 0.96;
          letter-spacing: -0.055em;
          color: #fff;
        }

        .jh-copy h1 > span:first-of-type {
          color: var(--jh-cyan);
          text-shadow: 0 0 35px rgba(0, 217, 255, 0.15);
        }

        .jh-period {
          color: var(--jh-pink);
        }

        .jh-description {
          position: relative;
          z-index: 1;
          max-width: 460px;
          margin: 32px 0 0;
          color: #c0c0c8;
          font-size: 15px;
          line-height: 1.9;
        }

        /* RIGHT IMAGE SLIDESHOW */

        .jh-showcase {
          position: relative;
          min-width: 0;
          overflow: hidden;
          background: #171717;
        }

        .jh-cover-visual {
          position: absolute;
          inset: 0;
          overflow: hidden;
          isolation: isolate;
          background: #171717;
        }

        .jh-cover-slide {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .jh-cover-slide.active {
          opacity: 1;
          z-index: 1;
        }

        .jh-cover-art {
          object-fit: cover;
          object-position: center;
        }

        /* SLIDE INDICATORS */

        .jh-slide-indicators {
          position: absolute;
          z-index: 4;
          right: 6%;
          bottom: 7%;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .jh-slide-indicators span {
          display: block;
          width: 20px;
          height: 3px;
          background: #ffffff65;
          transition: background 0.3s ease, width 0.3s ease;
        }

        .jh-slide-indicators span.active {
          width: 35px;
          background: var(--jh-cyan);
        }

        /* HIGHLIGHTED STATIC THUMBNAILS */

        .jh-image-thumbnails {
          position: absolute;
          z-index: 5;
          top: 70%;
          left: 54%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px;

          border: 1px solid rgba(0, 217, 255, 0.75);
          border-radius: 3px;

          background: linear-gradient(
            135deg,
            rgba(10, 12, 18, 0.97),
            rgba(23, 25, 33, 0.94)
          );

          box-shadow:
            0 0 0 3px rgba(0, 217, 255, 0.12),
            0 12px 35px rgba(0, 0, 0, 0.65),
            0 0 28px rgba(0, 217, 255, 0.2);

          transform: translate(-50%, -50%);
          backdrop-filter: blur(14px);
        }

        .jh-thumbnail {
          position: relative;
          display: flex;
          width: 142px;
          padding: 4px;
          overflow: hidden;

          background: #fff;
          border: 2px solid rgba(255, 255, 255, 0.9);

          box-shadow:
            0 3px 12px rgba(0, 0, 0, 0.3),
            0 0 12px rgba(255, 255, 255, 0.15);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .jh-thumbnail:hover {
          z-index: 2;
          transform: translateY(-8px) scale(1.06);
          border-color: var(--jh-cyan);

          box-shadow:
            0 8px 22px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(0, 217, 255, 0.45);
        }

        .jh-thumbnail-image {
          position: relative;
          width: 100%;
          height: 88px;
          overflow: hidden;
          background: #eee;
        }

        .jh-thumbnail-image img {
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .jh-thumbnail:hover .jh-thumbnail-image img {
          transform: scale(1.09);
        }

        /* WHAT WE MAKE */

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

        /* TABLET */

        @media (max-width: 900px) {
          .jh-shell {
            padding-inline: 4%;
          }

          .jh-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            min-height: max(620px, calc(100svh - 68px));
            margin-inline: -4.17%;
          }

          .jh-copy {
            padding: 55px 25px;
          }

          .jh-copy h1 {
            font-size: clamp(43px, 5.3vw, 65px);
          }

          .jh-description {
            font-size: 13px;
          }

          .jh-image-thumbnails {
            top: 70%;
            gap: 8px;
            padding: 8px;
          }

          .jh-thumbnail {
            width: 112px;
          }

          .jh-thumbnail-image {
            height: 68px;
          }

          .jh-products {
            padding-inline: 4%;
          }

          .jh-product-visual {
            min-height: 150px;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .jh-shell {
            padding-inline: 0;
            overflow-x: clip;
          }

          .jh-main {
            grid-template-columns: 1fr;
            min-height: 0;
            margin-inline: 0;
            padding-bottom: 0;
          }

          .jh-copy {
            order: 1;
            min-height: auto;
            padding: 55px 22px 42px;
          }

          .jh-copy h1 {
            font-size: clamp(38px, 11vw, 68px);
            overflow-wrap: break-word;
            word-break: break-word;
          }

          .jh-description {
            max-width: 360px;
            font-size: 13px;
            margin: 22px 0 0;
          }

          .jh-showcase {
            order: 3;
            min-height: 380px;
          }

          .jh-image-thumbnails {
            order: 2;
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            margin: -24px auto -24px;
            z-index: 10;
            width: fit-content;
            max-width: calc(100% - 24px);
            gap: 6px;
            padding: 6px;
          }

          .jh-thumbnail {
            width: min(27vw, 92px);
            padding: 3px;
          }

          .jh-thumbnail-image {
            height: 54px;
          }

          .jh-products {
            padding: 48px 18px 55px;
          }

          .jh-products-heading h2 {
            font-size: clamp(28px, 7.5vw, 42px);
            letter-spacing: -1.5px;
          }

          .jh-products-heading > a {
            font-size: 8px;
          }

          .jh-product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px 10px;
          }

          .jh-product-card {
            min-width: 0;
          }

          .jh-product-visual {
            min-height: 160px;
          }
        }

        @media (max-width: 370px) {
          .jh-copy {
            padding: 45px 16px 36px;
          }

          .jh-copy h1 {
            font-size: clamp(32px, 10vw, 38px);
          }

          .jh-showcase {
            min-height: 320px;
          }

          .jh-image-thumbnails {
            margin: -20px auto -20px;
            padding: 5px;
            gap: 4px;
          }

          .jh-thumbnail {
            width: 27vw;
          }

          .jh-thumbnail-image {
            height: 48px;
          }

          .jh-product-visual {
            min-height: 135px;
          }

          .jh-products {
            padding: 40px 14px 45px;
          }

          .jh-products-heading h2 {
            font-size: 26px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jh-cover-slide,
          .jh-product-icon,
          .jh-slide-indicators span,
          .jh-thumbnail,
          .jh-thumbnail-image img {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
