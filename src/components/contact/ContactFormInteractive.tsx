"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Send,
  Building2,
} from "lucide-react";
import { faq } from "@/data/faq";
import { serviceCategories, subcategoryServices } from "@/data/services";
import styles from "./ContactSection.module.css";

export default function ContactFormInteractive() {
  const searchParams = useSearchParams();

  // Prefill service/product from URL params if available
  const defaultServiceParam =
    searchParams.get("service") || searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: defaultServiceParam,
    quantity: searchParams.get("quantity") || "",
    details: "",
    artworkStatus: "I have print-ready artwork (PDF, AI, EPS)",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Update default service when param changes
  useEffect(() => {
    if (defaultServiceParam) {
      setFormData((prev) => ({ ...prev, service: defaultServiceParam }));
    }
  }, [defaultServiceParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Quote Request: ${formData.service || "Commercial Project"} - ${formData.fullName}`
    );

    const body = encodeURIComponent(
      `JP Printing & Signs Quote Request\n` +
        `-----------------------------------------\n` +
        `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Company: ${formData.company || "Not specified"}\n` +
        `Requested Service/Product: ${formData.service || "General Inquiry"}\n` +
        `Estimated Quantity: ${formData.quantity || "Not specified"}\n` +
        `Artwork Status: ${formData.artworkStatus}\n\n` +
        `Project Details & Dimensions:\n${formData.details}\n` +
        `-----------------------------------------\n` +
        `Sent via JP Printing & Signs online quote portal.`
    );

    setSubmitted(true);
    // Open default email client with populated information
    window.location.href = `mailto:jpprint13@gmail.com?subject=${subject}&body=${body}`;
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrap}>
      <div className="container">
        {/* Main Two-Column Contact Section */}
        <div className={styles.contactGrid}>
          {/* Left Column: Business Details */}
          <div className={styles.infoColumn}>
            <span className="eyebrow eyebrow-accent">Ontario, Canada</span>
            <h1 className={styles.heading}>Let&apos;s Talk About Your Project</h1>
            <p className={styles.lead}>
              We&apos;re here to help with your commercial printing and architectural signage needs. Get in touch with our team for honest advice, accurate proofs, and transparent estimates.
            </p>

            <div className={styles.contactCards}>
              {/* Phone */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrap}>
                  <Phone size={20} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Direct Phone</div>
                  <a href="tel:9059191181" className={styles.cardValue}>
                    905 919 1181
                  </a>
                  <div className={styles.cardSubtext}>
                    Call during business hours for immediate project assistance.
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrap}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Direct Email</div>
                  <a href="mailto:jpprint13@gmail.com" className={styles.cardValue}>
                    jpprint13@gmail.com
                  </a>
                  <div className={styles.cardSubtext}>
                    Send files, blueprints, and request no-obligation quotes.
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrap}>
                  <Clock size={20} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Operating Hours</div>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--foreground)" }}>
                    Monday – Friday: 9:00 AM – 6:00 PM
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--foreground)", marginTop: "2px" }}>
                    Saturday: 10:00 AM – 3:00 PM
                  </div>
                  <div className={styles.cardSubtext}>
                    Sunday: Closed. Closed on statutory holidays.
                  </div>
                </div>
              </div>

              {/* Region */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrap}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Service Area</div>
                  <div className={styles.cardValue}>Ontario, Canada</div>
                  <div className={styles.cardSubtext}>
                    Providing local pickups, reliable regional shipping, and on-site signage installation.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.serviceBadge}>
              <strong>Direct Management:</strong> Every inquiry is reviewed by Jot Panag and Deepi Panag, ensuring personalized technical oversight from proofing through installation.
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 className={styles.successTitle}>Your Quote Request Is Ready</h3>
                <p className={styles.successText}>
                  Your default email client has been opened with your project information addressed to <strong>jpprint13@gmail.com</strong>.
                  <br /><br />
                  Please click <strong>Send</strong> in your email app to complete your submission. We look forward to reviewing your specifications!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Edit Inquiry or Submit Another
                </button>
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Request a Custom Quote</h2>
                  <p className={styles.formSubtitle}>
                    Fill in your project scope below. We reply promptly with transparent Canadian pricing.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.rowTwo}>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Full Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>
                        Email Address <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.ca"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.rowTwo}>
                    <div className={styles.field}>
                      <label className={styles.label}>
                        Phone Number <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="905 555 0123"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Optional"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.rowTwo}>
                    <div className={styles.field}>
                      <label className={styles.label}>Service / Product Interest</label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className={styles.select}
                      >
                        <option value="">Select an Offering...</option>
                        <optgroup label="Main Categories">
                          {serviceCategories.map((c) => (
                            <option key={c.slug} value={c.title}>
                              {c.title}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Specific Subcategories">
                          {subcategoryServices.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </optgroup>
                        <option value="Other / Bespoke Custom Request">
                          Other / Bespoke Custom Request
                        </option>
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>Estimated Quantity</label>
                      <input
                        type="text"
                        placeholder="e.g. 500 cards, 2 signs, 1 van wrap"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Artwork / File Status</label>
                    <select
                      value={formData.artworkStatus}
                      onChange={(e) =>
                        setFormData({ ...formData, artworkStatus: e.target.value })
                      }
                      className={styles.select}
                    >
                      <option value="I have print-ready artwork (PDF, AI, EPS)">
                        I have print-ready artwork (PDF, AI, EPS)
                      </option>
                      <option value="I have logos and text, but need layout assistance">
                        I have logos and text, but need layout assistance
                      </option>
                      <option value="I need full custom design from scratch">
                        I need full custom design from scratch
                      </option>
                      <option value="Re-ordering previous job on file">
                        Re-ordering previous job on file
                      </option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>
                      Project Details & Dimensions <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      required
                      placeholder="Please specify desired dimensions, installation requirements, paper stocks, or any deadlines..."
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    <span>Send Message / Request Quote</span>
                    <Send size={15} />
                  </button>

                  <div className={styles.fallbackNotice}>
                    Submitting prepares an email to <strong>jpprint13@gmail.com</strong>. You may also call <strong>905 919 1181</strong> directly.
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* =================================================================
            FAQ ACCORDION SECTION
            ================================================================= */}
        <div className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <span className="eyebrow eyebrow-accent">Customer Questions</span>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <p style={{ color: "var(--muted)", fontSize: "16px" }}>
              Helpful details regarding file preparation, turnaround times, and on-site signage installation.
            </p>
          </div>

          <div className={styles.faqList}>
            {faq.map((item, idx) => (
              <div key={idx} className={styles.faqCard}>
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className={styles.faqTrigger}
                  aria-expanded={openFaqIndex === idx}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`${styles.faqChevron} ${
                      openFaqIndex === idx ? styles.faqChevronOpen : ""
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className={styles.faqAnswer}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

