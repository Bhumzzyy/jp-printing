import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleCheck,
  Ruler,
  Sparkles,
  Tag,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceArt from "@/components/ui/ServiceArt";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  getServiceBySlug,
  services,
} from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: `${service.title} | JP PRINTING & SIGNS`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="service-detail">
        {/* Breadcrumb */}
        <div className="container detail-crumbs">
          <Link href="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/services#${service.category.toLowerCase()}`}>
            {service.category}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="detail-crumbs__current">{service.title}</span>
        </div>

        {/* Hero */}
        <section className="detail-hero">
          <div className="container detail-hero__grid">
            <div className="detail-hero__copy">
              <span className="detail-pill">
                <service.icon size={15} /> {service.category}
              </span>
              <h1>{service.title}</h1>
              <p className="detail-hero__tagline">{service.tagline}</p>
              <p className="detail-hero__desc">{service.description}</p>

              <div className="detail-hero__actions">
                <Link href="/contact" className="button button--dark">
                  Get a Quote <ArrowUpRight size={17} />
                </Link>
                <a href="tel:+19059191181" className="button button--outline">
                  Call 905 919 1181
                </a>
              </div>

              <p className="detail-hero__price">
                <Tag size={15} /> {service.priceNote}
              </p>
            </div>

            <div className="detail-hero__art">
              <ServiceArt variant={service.art} className="detail-art" />
            </div>
          </div>
        </section>

        {/* Features + specs */}
        <section className="section detail-body">
          <div className="container detail-body__grid">
            <div className="detail-features">
              <span className="eyebrow">
                <span className="eyebrow__dot" /> WHAT&apos;S AVAILABLE
              </span>
              <h2>Everything you can get with {service.title.toLowerCase()}.</h2>
              <ul className="detail-list">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span>
                      <Check size={14} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <span className="eyebrow detail-eyebrow-spaced">
                <span className="eyebrow__dot" /> POPULAR USES
              </span>
              <div className="detail-uses">
                {service.uses.map((use) => (
                  <span key={use} className="detail-use">
                    <Sparkles size={13} /> {use}
                  </span>
                ))}
              </div>
            </div>

            <aside className="detail-specs">
              <div className="detail-specs__head">
                <Ruler size={19} />
                <h3>Specifications</h3>
              </div>
              <dl>
                {service.specs.map((spec) => (
                  <div className="detail-spec" key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="detail-specs__cta">
                <CircleCheck size={20} />
                <p>
                  Not sure what you need? We&apos;ll help you choose the right
                  options for your project.
                </p>
                <Link href="/contact" className="text-link">
                  Talk to us <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section detail-related">
            <div className="container">
              <div className="section-topline">
                <div className="section-heading">
                  <span className="eyebrow">MORE IN {service.category.toUpperCase()}</span>
                  <h2>You might also need.</h2>
                </div>
                <Link href="/services" className="text-link">
                  All services <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="service-grid service-grid--three">
                {related.map((item, index) => (
                  <ServiceCard key={item.slug} service={item} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
