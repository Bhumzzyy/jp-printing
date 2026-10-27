
import Image from "next/image";
import Link from "next/link";

const gallery = [
  { title: "Calendars", slug: "calendars", image: "/print/calender.png", style: "pg-tall" },
  { title: "Take-out Menus", slug: "take-out-laminated-menus", image: "/print/menu.png" },
  { title: "Presentation Folders", slug: "presentation-folders", image: "/print/folder.png" },
  { title: "Custom Banners", slug: "custom-banners", image: "/hero/custome-banner.png", style: "pg-wide" },
  { title: "Event Tickets", slug: "event-tickets-bookmarks", image: "/print/tickets.png" },
  { title: "Invitation Cards", slug: "greeting-invitation-cards", image: "/print/invites.png" },
  { title: "Lawn Signs", slug: "lawn-signs-feather-flags", image: "/print/boards.png" },
  { title: "Window Graphics", slug: "window-graphics", image: "/hero/window-graphics.png", style: "pg-wide-last" },
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
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 760px) 50vw, 25vw"
              className="pg-image"
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
        .pg-image { object-fit: cover; transition: transform .6s ease; }
        .pg-item:hover .pg-image { transform: scale(1.04); }
        .pg-tall { grid-row: span 2; }
        .pg-wide { grid-column: span 2; }
        .pg-wide-last { grid-column: span 3; }
        .pg-label { position: absolute; bottom: 9px; left: 9px; right: 9px; display: flex; align-items: center; justify-content: space-between; padding: 13px; background: #fff; font-size: 13px; }
        @media(max-width: 760px) { .pg-section { padding: 70px 22px; } .pg-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: 165px; gap: 10px; } .pg-wide-last { grid-column: span 2; } .pg-heading { align-items: start; flex-direction: column; } .pg-heading h2 { letter-spacing: -1px; } }
      `}</style>
    </section>
  );
}
