
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const products = [
  { name: "Business Cards", image: "/images/business-cards.jpg", artVariant: "business-cards", slug: "business-cards-stationery" },
  { name: "Flyers & Brochures", image: "/images/flyers.jpg", artVariant: "flyers", slug: "flyers-brochures-postcards" },
  { name: "Stickers & Labels", image: "/images/stickers.jpg", artVariant: "stickers", slug: "stickers-labels" },
  { name: "Custom Banners", image: "/images/banners.jpg", artVariant: "banner", slug: "custom-banners" },
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
          <Link href={`/services/${product.slug}`} className="fp-card" key={product.slug}>
            <ImagePlaceholder
              className="fp-placeholder"
              label={product.name}
              imagePath={product.image}
              artVariant={product.artVariant}
            />
            <span className="fp-number">0{index + 1}</span>
            <div className="fp-label">
              <h3>{product.name}</h3>
              <span>↗</span>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .fp-section { padding: 100px 7%; background: #fff; color: #171717; }
        .fp-heading { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 38px; }
        .fp-heading span { font-size: 10px; letter-spacing: 2px; color: #707070; }
        .fp-heading h2 { margin: 14px 0 0; font-size: clamp(38px, 5.5vw, 70px); letter-spacing: -1.5px; line-height: .95; }
        .fp-heading > a { color: #171717; font-size: 11px; text-decoration: none; border-bottom: 1px solid; padding-bottom: 8px; white-space: nowrap; }
        .fp-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .fp-card { position: relative; display: block; min-width: 0; aspect-ratio: .78; overflow: hidden; background: #f2f2f2; color: #171717; text-decoration: none; }
        .fp-card .fp-placeholder { min-height: 0; transition: transform .6s ease; }
        .fp-card:hover .fp-placeholder { transform: scale(1.04); }
        .fp-number { position: absolute; top: 14px; left: 14px; padding: 8px 11px; border-radius: 30px; background: white; font-size: 11px; }
        .fp-label { position: absolute; bottom: 10px; left: 10px; right: 10px; display: flex; justify-content: space-between; align-items: center; padding: 14px; background: #fff; }
        .fp-label h3 { margin: 0; font-size: 15px; }
        .fp-label > span { font-size: 21px; }
        @media(max-width: 800px) { .fp-section { padding: 70px 22px; } .fp-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; } }
        @media(max-width: 420px) { .fp-heading { align-items: start; flex-direction: column; } .fp-heading h2 { letter-spacing: -1px; } .fp-label { padding: 10px; } .fp-label h3 { font-size: 12px; } }
      `}</style>
    </section>
  );
}
