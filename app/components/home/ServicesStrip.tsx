import { serviceHighlights } from "../../data/services";

export default function ServicesStrip() {
  return (
    <section className="services-strip" aria-label="Printing services">
      <div className="services-strip__track">
        {[...serviceHighlights, ...serviceHighlights].map((service, index) => (
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