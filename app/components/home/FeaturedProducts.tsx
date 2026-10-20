import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "../ui/ProductCard";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  return (
    <section className="section featured-products">
      <div className="container">
        <SectionHeading
          eyebrow="THE PRINT LINEUP"
          title="The little details that make a big difference."
          description="Explore some of our popular print options. Have something else in mind? We can talk through your requirements."
        />

        <div className="product-grid product-grid--four">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              category={product.category}
              description={product.description}
              image={product.image}
              href={product.href}
              tag={product.tag}
              index={index}
            />
          ))}
        </div>

        <div className="featured-products__bottom">
          <p>Got a project that doesn&apos;t fit in a box? Let&apos;s talk.</p>
          <Link href="/contact" className="button button--outline">
            Ask About Custom Printing <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}