import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceArt from "@/components/ui/ServiceArt";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className="service-card"
      style={{ animationDelay: `${index * 55}ms` }}
    >
      <Link href={`/services/${service.slug}`} className="service-card__art">
        <ServiceArt variant={service.art} />
        <span className="service-card__cat">{service.category}</span>
        <span className="service-card__arrow" aria-hidden="true">
          <ArrowUpRight size={19} />
        </span>
      </Link>

      <div className="service-card__body">
        <span className="service-card__icon" aria-hidden="true">
          <Icon size={18} />
        </span>
        <h3>
          <Link href={`/services/${service.slug}`}>{service.title}</Link>
        </h3>
        <p>{service.tagline}</p>
      </div>
    </article>
  );
}
