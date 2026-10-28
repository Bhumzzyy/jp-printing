import Image from "next/image";
import Link from "next/link";

export default function FeaturedSignage() {
  return (
    <section className="fs-section">
      <div className="fs-background">
        <Image
          src="/hero/bg.png"
          alt="Custom branded storefront signage"
          fill
          priority={false}
          sizes="100vw"
          className="fs-background-image"
        />
      </div>

      <div className="fs-content">
        <h2>
          YOUR <span className="fs-cyan">BRAND.</span>
          <br />
          OUT IN THE <span className="fs-pink">WORLD.</span>
        </h2>

        <p>
          From storefronts to windows and walls, make every space say something.
        </p>

        <Link href="/services">EXPLORE SIGNAGE ↗</Link>
      </div>

      <style>{`
        .fs-section {
          position: relative;
          min-height: 620px;
          overflow: hidden;
          background: #171717;
          color: white;
          isolation: isolate;
          view-timeline-name: --fs-parallax;
          view-timeline-axis: block;
        }

        /* Background image */

        .fs-background {
          position: absolute;
          z-index: 0;
          inset: -18% 0;
          overflow: hidden;
          will-change: transform;
        }

        .fs-background-image {
          object-fit: cover;
          object-position: center;
          transform: scale(1.12);
        }

        /* Dark overlay */

        .fs-section::after {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 0;
          background: linear-gradient(
            90deg,
            #101010eF 0%,
            #171717c9 38%,
            #17171770 70%,
            #17171730 100%
          );
          pointer-events: none;
        }

        /* Content */

        .fs-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 620px;
          padding: 90px 24px;
          margin: 0 auto;
          text-align: center;
          text-shadow: 0 2px 18px #0009;
        }

        .fs-content h2 {
          margin: 25px 0;
          color: #fff;
          font-size: clamp(43px, 7vw, 86px);
          line-height: .98;
          letter-spacing: -1px;
          text-shadow: 0 4px 24px #000;
        }

        .fs-cyan {
          color: #00d5f5;
        }

        .fs-pink {
          color: #ff4aa6;
        }

        .fs-content p {
          max-width: 390px;
          margin: 0 auto;
          color: #fff;
          font-size: clamp(15px, 1.5vw, 18px);
          font-weight: 500;
          line-height: 1.8;
          text-shadow: 0 2px 12px #000;
        }

        .fs-content a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 22px;
          padding: 16px 24px;
          border: 2px solid #fff;
          border-radius: 40px;
          background: #f5d800;
          box-shadow: 0 8px 24px #0008;
          color: #171717;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .7px;
          text-shadow: none;
          transition:
            transform .2s ease,
            background-color .2s ease,
            box-shadow .2s ease;
        }

        .fs-content a:hover {
          transform: translateY(-2px);
          background: #ffe92e;
          box-shadow: 0 12px 30px #000a;
        }

        /* Scroll-based image parallax */

        @supports (animation-timeline: view()) {
          .fs-background {
            animation: fs-parallax linear both;
            animation-timeline: --fs-parallax;
            animation-range: entry 0% exit 100%;
          }

          @keyframes fs-parallax {
            from {
              transform: translateY(-12%);
            }

            to {
              transform: translateY(12%);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fs-background {
            animation: none !important;
          }

          .fs-content a {
            transition: none;
          }
        }

        @media (max-width: 700px) {
          .fs-section {
            min-height: 480px;
          }

          .fs-background {
            inset: -10% 0;
          }

          .fs-content {
            min-height: 480px;
            padding: 60px 20px;
          }

          .fs-content h2 {
            font-size: clamp(34px, 8.5vw, 60px);
            letter-spacing: -1px;
            margin: 18px 0;
          }

          .fs-content p {
            font-size: 14px;
            max-width: 320px;
          }
        }

        @media (max-width: 360px) {
          .fs-section,
          .fs-content {
            min-height: 420px;
            padding: 50px 14px;
          }

          .fs-content h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}