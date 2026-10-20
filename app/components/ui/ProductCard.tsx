import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  tag?: string;
  index?: number;
};

export default function ProductCard({
  title,
  category,
  description,
  image,
  href,
  tag,
  index = 0,
}: ProductCardProps) {
  return (
    <article className="product-card" style={{ animationDelay: `${index * 80}ms` }}>
      <Link href={href} className="product-card__image">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {tag && <span className="product-card__tag">{tag}</span>}
        <span className="product-card__arrow" aria-hidden="true">
          <ArrowUpRight size={20} />
        </span>
      </Link>

      <div className="product-card__content">
        <span className="product-card__category">{category}</span>
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </article>
  );
}