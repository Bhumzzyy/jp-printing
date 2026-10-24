
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const gallery = [
  { title: "Calendars", slug: "calendars", image: "/images/calendars.jpg", artVariant: "calendar", style: "pg-tall" },
  { title: "Take-out Menus", slug: "take-out-laminated-menus", image: "/images/menus.jpg", artVariant: "menu" },
  { title: "Presentation Folders", slug: "presentation-folders", image: "/images/folders.jpg", artVariant: "folder" },
  { title: "Custom Banners", slug: "custom-banners", image: "/images/custom-banners.jpg", artVariant: "banner", style: "pg-wide" },
  { title: "Event Tickets", slug: "event-tickets-bookmarks", image: "/images/tickets.jpg", artVariant: "ticket" },
  { title: "Invitation Cards", slug: "greeting-invitation-cards", image: "/images/invitations.jpg", artVariant: "card" },
  { title: "Lawn Signs", slug: "lawn-signs-feather-flags", image: "/images/lawn-signs.jpg", artVariant: "lawn-sign" },
  { title: "Window Graphics", slug: "window-graphics", image: "/images/window-graphics.jpg", artVariant: "window", style: "pg-wide-last" },
];

export default function ProductGallery() {
  return (
    <section className="pg-section">
      <div className="pg-heading">
        <div>
          <span>A FEW THINGS WE MAKE</span>
          <h2>THE COLLECTION.</h2>
        </div>
        <Link href="/services">DISCOVER ALL SERVICES ↗</Link>
      </div>

      <div className="pg-grid">
        {gallery.map((item) => (
          <Link href={`/services/${item.slug}`} className={`pg-item ${item.style ?? ""}`} key={item.slug}>
            <ImagePlaceholder
              className="pg-placeholder"
              label={item.title}
              imagePath={item.image}
              artVariant={item.artVariant}
            />
            <div className="pg-label"><span>{item.title}</span><span>↗</span></div>
          </Link>
        ))}
      </div>

      <style>{`
        .pg-section { padding: 100px 7%; background: #fff; color: #171717; }
        .pg-heading { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 38px; }
        .pg-heading > div > span { color: #707070; font-size: 10px; letter-spacing: 2px; }
        .pg-heading h2 { margin: 12px 0 0; font-size: clamp(36px, 5.5vw, 70px); letter-spacing: -1.5px; }
        .pg-heading > a { color: #171717; text-decoration: none; border-bottom: 1px solid; padding-bottom: 7px; font-size: 11px; }
        .pg-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-rows: 210px; grid-auto-flow: dense; gap: 14px; }
        .pg-item { position: relative; display: block; min-width: 0; overflow: hidden; background: #f2f2f2; color: #171717; text-decoration: none; }
        .pg-placeholder { min-height: 0; transition: transform .6s ease; }
        .pg-item:hover .pg-placeholder { transform: scale(1.04); }
        .pg-tall { grid-row: span 2; }
        .pg-wide { grid-column: span 2; }
        .pg-wide-last { grid-column: span 3; }
        .pg-label { position: absolute; bottom: 9px; left: 9px; right: 9px; display: flex; align-items: center; justify-content: space-between; padding: 13px; background: #fff; font-size: 13px; }
        @media(max-width: 760px) { .pg-section { padding: 70px 22px; } .pg-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: 165px; gap: 10px; } .pg-wide-last { grid-column: span 2; } .pg-heading { align-items: start; flex-direction: column; } .pg-heading h2 { letter-spacing: -1px; } }
      `}</style>
    </section>
  );
}
