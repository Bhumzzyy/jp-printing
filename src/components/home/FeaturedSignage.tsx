
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function FeaturedSignage() {
  return (
    <section className="fs-section">
      <ImagePlaceholder
        className="fs-image"
        label="Custom branded storefront signage"
        imagePath="/images/featured-storefront-sign.jpg"
        artVariant="exterior"
      />

      <div className="fs-content">
        <span>SIGNS THAT SHOW UP</span>
        <h2>
          YOUR <span className="fs-cyan">BRAND.</span>
          <br />
          OUT IN THE <span className="fs-pink">WORLD.</span>
        </h2>
        <p>From storefronts to windows and walls, make every space say something.</p>
        <Link href="/services">EXPLORE SIGNAGE ↗</Link>
      </div>

      <span className="fs-index">JP / 02</span>

      <style>{`
        .fs-section {
          position: relative;
          min-height: 620px;
          overflow: hidden;
          background: #171717;
          color: white;
          view-timeline-name: --fs-parallax;
          view-timeline-axis: block;
        }

        .fs-image {
          position: absolute;
          inset: -12% 0;
          min-height: 0;
          border: 0;
          will-change: transform;
        }

        .fs-section::after {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 0;
          background: linear-gradient(
            90deg,
            #101010f5 0%,
            #171717d9 42%,
            #17171765 76%,
            #17171720 100%
          );
          pointer-events: none;
        }

        .fs-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          min-height: 620px;
          padding: 90px 24px;
          margin: 0 auto;
          text-align: center;
          text-shadow: 0 2px 18px #0009;
        }

        .fs-content > span {
          display: inline-block;
          padding: 10px 14px;
          border: 1px solid #f5d800;
          background: #171717cf;
          color: #f5d800;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
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
          transition: transform .2s ease, background-color .2s ease, box-shadow .2s ease;
        }

        .fs-content a:hover {
          transform: translateY(-2px);
          background: #ffe92e;
          box-shadow: 0 12px 30px #000a;
        }

        /* Background parallax */

        @supports (animation-timeline: view()) {
          .fs-image > svg {
            animation: fs-parallax linear both;
            animation-timeline: --fs-parallax;
            animation-range: entry 0% exit 100%;
          }

          @keyframes fs-parallax {
            from {
              transform: translateY(-14%) scale(1.12);
            }
            to {
              transform: translateY(14%) scale(1.12);
            }
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .fs-image > svg {
            animation: none !important;
          }

          .fs-content a {
            transition: none;
          }
        }

        .fs-index {
          position: absolute;
          z-index: 3;
          right: 30px;
          bottom: 25px;
          font-size: 11px;
          letter-spacing: 2px;
        }

        @media(max-width: 700px) {
          .fs-section {
            min-height: 520px;
          }

          .fs-content {
            min-height: 520px;
            padding: 75px 24px;
          }

          .fs-content h2 {
            letter-spacing: -1px;
          }
        }
      `}</style>
    </section>
  );
}
