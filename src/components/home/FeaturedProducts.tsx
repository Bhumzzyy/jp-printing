
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Business Cards",
    image: "/fproducts/pro1.png",
    slug: "business-cards-stationery",
  },
  {
    name: "Flyers & Brochures",
    image: "/fproducts/pro2.png",
    slug: "flyers-brochures-postcards",
  },
  {
    name: "Stickers & Labels",
    image: "/fproducts/pro3.png",
    slug: "stickers-labels",
  },
  {
    name: "Custom Banners",
    image: "/fproducts/pro4.png",
    slug: "custom-banners",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="fp-section">
      <div className="fp-heading">
        <div>
          <span>MADE TO MAKE AN IMPRESSION</span>
          <h2>THE GOOD STUFF.</h2>
        </div>

        <Link href="/services">VIEW ALL SERVICES ↗</Link>
      </div>

      <div className="fp-grid">
        {products.map((product, index) => (
          <Link
            href={`/services/${product.slug}`}
            className="fp-card"
            key={product.slug}
          >
            <div className="fp-image-wrapper">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 800px) 50vw, 25vw"
                className="fp-image"
              />
            </div>

            <span className="fp-number">
              0{index + 1}
            </span>

            <div className="fp-label">
              <h3>{product.name}</h3>
              <span>↗</span>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .fp-section {
          padding: 100px 7%;
          background: #fff;
          color: #171717;
        }

        .fp-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 38px;
        }

        .fp-heading span {
          font-size: 10px;
          letter-spacing: 2px;
          color: #707070;
        }

        .fp-heading h2 {
          margin: 14px 0 0;
          font-size: clamp(38px, 5.5vw, 70px);
          letter-spacing: -1.5px;
          line-height: .95;
        }

        .fp-heading > a {
          color: #171717;
          font-size: 11px;
          text-decoration: none;
          border-bottom: 1px solid;
          padding-bottom: 8px;
          white-space: nowrap;
        }

        .fp-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .fp-card {
          position: relative;
          display: block;
          min-width: 0;
          aspect-ratio: .78;
          overflow: hidden;
          background: #f2f2f2;
          color: #171717;
          text-decoration: none;
        }

        .fp-image-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .fp-image {
          object-fit: cover;
          transition: transform .6s ease;
        }

        .fp-card:hover .fp-image {
          transform: scale(1.04);
        }

        .fp-number {
          position: absolute;
          z-index: 2;
          top: 14px;
          left: 14px;
          padding: 8px 11px;
          border-radius: 30px;
          background: white;
          font-size: 11px;
        }

        .fp-label {
          position: absolute;
          z-index: 2;
          bottom: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px;
          background: #fff;
        }

        .fp-label h3 {
          margin: 0;
          font-size: 15px;
        }

        .fp-label > span {
          font-size: 21px;
        }

        @media(max-width: 800px) {
          .fp-section {
            padding: 70px 22px;
          }

          .fp-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
        }

        @media(max-width: 420px) {
          .fp-heading {
            align-items: start;
            flex-direction: column;
          }

          .fp-heading h2 {
            letter-spacing: -1px;
          }

          .fp-label {
            padding: 10px;
          }

          .fp-label h3 {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}