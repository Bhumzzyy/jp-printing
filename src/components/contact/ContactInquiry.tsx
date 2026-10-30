"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { printingServices, signsServices, type Service } from "@/data/services";
import styles from "./ContactInquiry.module.css";

export default function ContactInquiry() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const quantity = String(data.get("quantity") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Printing Enquiry - ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "Not provided"}\n` +
        `Service: ${service}\n` +
        `Estimated quantity: ${quantity || "Not specified"}\n\n` +
        `Project Details:\n${message}`,
    );

    setSubmitted(true);
    window.location.href =
      `mailto:jpprint13@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className={styles.section} id="project-enquiry">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>READY WHEN YOU ARE</span>
          <h2>
            Let&apos;s put
            <br />
            your idea
            <br />
            <em>in motion.</em>
          </h2>
          <p>
            Share a few details and your default email app will open with the
            enquiry ready to send. No pressure if you&apos;re still figuring
            things out—we can start with a conversation.
          </p>
          <div className={styles.direct}>
            <a href="mailto:jpprint13@gmail.com"><Mail size={16} /> jpprint13@gmail.com</a>
            <a href="tel:+19059191181"><Phone size={16} /> 905 919 1181</a>
          </div>
          <div className={styles.cmyk} aria-hidden="true"><i /><i /><i /><i /></div>
        </div>

        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.successIcon}><Send size={24} /></span>
              <h3>Your email is ready.</h3>
              <p>
                Your default email app should open with your project details
                filled in. Send the email to complete your enquiry.
              </p>
              <button type="button" onClick={() => setSubmitted(false)}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.fields}>
                <div className={styles.row}>
                  <label>
                    Your name *
                    <input type="text" name="name" required placeholder="Jane Doe" autoComplete="name" />
                  </label>
                  <label>
                    Email address *
                    <input type="email" name="email" required placeholder="jane@example.com" autoComplete="email" />
                  </label>
                </div>
                <div className={styles.row}>
                  <label>
                    Phone number
                    <input type="tel" name="phone" placeholder="Optional" autoComplete="tel" />
                  </label>
                  <label>
                    What do you need? *
                    <select name="service" defaultValue="" required>
                      <option value="" disabled>Select a service</option>
                      <optgroup label="Printing">
                        {printingServices.map((service: Service) => (
                          <option key={service.slug} value={service.title}>{service.title}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Signs">
                        {signsServices.map((service: Service) => (
                          <option key={service.slug} value={service.title}>{service.title}</option>
                        ))}
                      </optgroup>
                      <option value="Something else">Something else / not sure</option>
                    </select>
                  </label>
                </div>
                <label>
                  Estimated quantity
                  <input type="text" name="quantity" placeholder="e.g. 500, 1000, 1 vehicle wrap" />
                </label>
                <label>
                  Tell us about your project *
                  <textarea name="message" required rows={4} placeholder="Size, materials, deadlines, questions..." />
                </label>
              </div>

              <button type="submit" className={styles.submit}>
                <span>Send enquiry</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
