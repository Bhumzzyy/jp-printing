import { popularServices } from "@/data/services";

export default function ServicesStrip() {
  const highlights = popularServices.map((s) => s.title);

  return (
    <section className="services-strip" aria-label="Printing and signage services">
      <div className="services-strip__track">
        {[...highlights, ...highlights].map((service, index) => (
          <div className="services-strip__item" key={`${service}-${index}`}>
            <span className={`services-strip__star services-strip__star--${index % 4}`}>
              ✳
            </span>
            <span>{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
