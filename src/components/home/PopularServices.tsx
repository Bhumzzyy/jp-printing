import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { popularServices } from "@/data/services";

export default function PopularServices() {
  return (
    <section className="section popular-services" id="services">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            eyebrow="MOST POPULAR"
            title="The print & signs businesses ask for most."
            description="A few of our go-to products. Browse the full catalogue for the complete range of printing and signage."
          />
          <Link href="/services" className="text-link">
            All Services <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="service-grid">
          {popularServices.slice(0, 8).map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
