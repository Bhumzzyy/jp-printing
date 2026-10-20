"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { faq } from "../../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq-section">
      <div className="container faq-section__grid">
        <div className="faq-section__intro">
          <SectionHeading
            eyebrow="GOOD TO KNOW"
            title="A few things you might be wondering."
            description="Have another question? Reach out and tell us what you need. We're happy to discuss your project."
          />
          <a href="/contact" className="text-link">
            Ask us a question <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="faq-list">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={item.question}>
                <button
                  type="button"
                  className="faq-item__question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={19} />
                </button>
                {isOpen && (
                  <div className="faq-item__answer" id={answerId}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}   