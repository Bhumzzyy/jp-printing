import Link from "next/link";
import { ArrowUpRight, Printer, Signpost } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  printingServices,
  signsServices,
  type Service,
} from "@/data/services";

function CategoryColumn({
  icon: Icon,
  eyebrow,
  title,
  description,
  items,
  accent,
}: {
  icon: typeof Printer;
  eyebrow: string;
  title: string;
  description: string;
  items: Service[];
  accent: "cyan" | "magenta";
}) {
  return (
    <div className={`category-col category-col--${accent}`}>
      <div className="category-col__head">
        <span className="category-col__icon">
          <Icon size={22} />
        </span>
        <div>
          <span className="category-col__eyebrow">{eyebrow}</span>
          <h3>{title}</h3>
        </div>
        <span className="category-col__count">{items.length}</span>
      </div>

      <p className="category-col__desc">{description}</p>

      <ul className="category-col__list">
        {items.map((service) => (
          <li key={service.slug}>
            <Link href={`/services/${service.slug}`}>
              <span>{service.title}</span>
              <ArrowUpRight size={15} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceCategories() {
  return (
    <section className="section service-categories" id="categories">
      <div className="container">
        <SectionHeading
          eyebrow="TWO WAYS TO GET NOTICED"
          title="Print you can hold. Signs people can't miss."
          description="We cover the full spectrum — everyday printed materials and standout signage. Start with a category to see everything we offer."
          centered
        />

        <div className="category-grid">
          <CategoryColumn
            icon={Printer}
            eyebrow="PRINTING"
            title="Print & Marketing"
            description="Business cards, flyers, menus, calendars and more — full-colour materials for everyday marketing and special occasions."
            items={printingServices}
            accent="cyan"
          />
          <CategoryColumn
            icon={Signpost}
            eyebrow="SIGNS"
            title="Signs & Graphics"
            description="Banners, window graphics, channel letters and vehicle wraps — signage that puts your brand in front of everyone."
            items={signsServices}
            accent="magenta"
          />
        </div>

        <div className="service-categories__cta">
          <p>Can&apos;t find what you&apos;re after? We do custom work too.</p>
          <Link href="/contact" className="button button--dark">
            Ask About a Custom Project <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
