import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "../ui/ProductCard";
import { services } from "../../data/services";

export default function PopularServices() {
  return (
    <section className="section popular-services" id="services">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            eyebrow="WHAT WE PRINT"
            title="Your idea. Our expertise. A whole lot of impact."
            description="The right print can turn a first glance into a lasting impression. Find the right fit for your next project."
          />
          <Link href="/products" className="text-link">
            All Products <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="product-grid product-grid--four">
          {services.map((service, index) => (
            <ProductCard
              key={service.number}
              title={service.title}
              category="PRINT SOLUTIONS"
              description={service.description}
              image={service.image}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}