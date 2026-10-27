import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "PRINT",
    description: "Small details. Big impressions.",
    image: "/hero/printing-banner.png",
    href: "/services?category=printing",
    className: "ps-print",
  },
  {
    title: "SIGNS",
    description: "Make your brand impossible to miss.",
    image: "/hero/signage-banner.png",
    href: "/services?category=signs",
    className: "ps-signs",
  },
];

export default function PrintAndSigns() {
  return (
    <section className="ps-section">
      <div className="ps-heading">
        <span>ONE BRAND. MANY WAYS TO SHOW UP.</span>
        <h2>
          FROM PAPER
          <br />
          TO PLACES.
        </h2>
      </div>

      <div className="ps-grid">
        {categories.map((item) => (
          <Link
            href={item.href}
            className={`ps-card ${item.className}`}
            key={item.title}
          >
            <Image
              src={item.image}
              alt={
                item.title === "PRINT"
                  ? "Printed marketing materials"
                  : "Custom signage and graphics"
              }
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              className="ps-image"
            />

            <div className="ps-content">
              <p>{item.description}</p>
              <h3>{item.title}</h3>
              <span className="ps-arrow">↗</span>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .ps-section {
          padding: 100px 7%;
          background: #f5f5f5;
          color: #171717;
        }

        .ps-heading > span {
          font-size: 10px;
          letter-spacing: 2px;
          color: #707070;
        }

        .ps-heading h2 {
          margin: 18px 0 38px;
          font-size: clamp(48px, 7vw, 88px);
          line-height: .88;
          letter-spacing: -2px;
        }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .ps-card {
          position: relative;
          display: block;
          height: 470px;
          overflow: hidden;
          background: #171717;
          color: #fff;
          text-decoration: none;
        }

        .ps-image {
          object-fit: cover;
          transition: transform .7s ease;
        }

        .ps-card:hover .ps-image {
          transform: scale(1.04);
        }

        .ps-card::after {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 30% 0 0;
          background: linear-gradient(transparent, #000c);
          pointer-events: none;
        }

        .ps-content {
          position: absolute;
          z-index: 2;
          bottom: 25px;
          left: 25px;
          right: 25px;
        }

        .ps-content p {
          font-size: 13px;
        }

        .ps-content h3 {
          margin: 8px 0 15px;
          font-size: clamp(45px, 6vw, 76px);
          letter-spacing: -1.5px;
        }

        .ps-arrow {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #00b9d6;
          color: #171717;
          font-size: 23px;
          transition: transform .3s ease;
        }

        .ps-card:hover .ps-arrow {
          transform: translate(4px, -4px);
        }

        .ps-signs .ps-arrow {
          background: #f5d800;
        }

        @media (max-width: 700px) {
          .ps-section {
            padding: 70px 22px;
          }

          .ps-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .ps-card {
            height: 360px;
          }

          .ps-heading h2 {
            letter-spacing: -1px;
          }
        }
      `}</style>
    </section>
  );
}