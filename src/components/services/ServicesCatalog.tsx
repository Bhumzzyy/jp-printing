"use client";

import { useEffect, useMemo, useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  categories,
  services,
  type ServiceCategory,
} from "@/data/services";

type Filter = "All" | ServiceCategory;

const filters: Filter[] = ["All", ...categories];

export default function ServicesCatalog() {
  const [active, setActive] = useState<Filter>("All");

  useEffect(() => {
    const syncFilterFromHash = () => {
      const hash = window.location.hash.slice(1).toLowerCase();
      const category = categories.find(
        (category) => category.toLowerCase() === hash
      );
      if (category) {
        setActive(category);
      }
    };

    syncFilterFromHash();
    window.addEventListener("hashchange", syncFilterFromHash);
    return () => window.removeEventListener("hashchange", syncFilterFromHash);
  }, []);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: services.length };
    for (const cat of categories) {
      map[cat] = services.filter((s) => s.category === cat).length;
    }
    return map;
  }, []);

  const visible = useMemo(
    () => (active === "All" ? services : services.filter((s) => s.category === active)),
    [active]
  );

  return (
    <section className="section services-catalog">
      <div className="container">
        <div className="catalog-toolbar">
          <div className="catalog-filters" role="tablist" aria-label="Filter services">
            {filters.map((filter) => (
              <button
                key={filter}
                id={filter === "All" ? undefined : filter.toLowerCase()}
                type="button"
                role="tab"
                aria-selected={active === filter}
                className={`catalog-filter ${
                  active === filter ? "catalog-filter--active" : ""
                }`}
                onClick={() => setActive(filter)}
              >
                {filter}
                <span className="catalog-filter__count">{counts[filter]}</span>
              </button>
            ))}
          </div>

          <p className="catalog-result">
            Showing <strong>{visible.length}</strong>{" "}
            {visible.length === 1 ? "service" : "services"}
          </p>
        </div>

        <div className="service-grid">
          {visible.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
