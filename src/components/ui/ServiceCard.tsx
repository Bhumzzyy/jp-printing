import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <article
      className="service-card"
      style={{ animationDelay: `${index * 55}ms` }}
    >
      <Link href={`/services/${service.slug}`} className="service-card__art">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 720px) 50vw, (max-width: 1100px) 33vw, 25vw"
        />
        <span className="service-card__arrow" aria-hidden="true">
          <ArrowUpRight size={19} />
        </span>
      </Link>

      <div className="service-card__body">
        <h3>
          <Link href={`/services/${service.slug}`}>{service.title}</Link>
        </h3>
        <p>{service.tagline}</p>
      </div>
    </article>
  );
}
