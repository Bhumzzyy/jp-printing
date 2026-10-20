
"use client";

import { useState } from "react";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  ArrowUpRight,
  Camera,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    number: "01",
    title: "Email us",
    description:
      "Share your ideas, quantities, artwork, and printing requirements.",
    label: "jpprint13@gmail.com",
    href: "mailto:jpprint13@gmail.com",
  },
  {
    icon: Phone,
    number: "02",
    title: "Give us a call",
    description:
      "Let's discuss your project and find the right printing solution.",
    label: "905 919 1181",
    href: "tel:+19059191181",
  },
  {
    icon: Camera,
    number: "03",
    title: "Follow our work",
    description:
      "Explore our work and connect with JP PRINTING & SIGNS on Instagram.",
    label: "Visit Instagram",
    href: "https://www.instagram.com/jpprintingandsigns/",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

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
        `Project Details:\n${message}`
    );

    setSubmitted(true);

    window.location.href =
      `mailto:jpprint13@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="contact-page">
        {/* Contact Hero */}
        <section className="contact-hero">
          <div className="container contact-hero__grid">
            <div className="contact-hero__content">
              <span className="contact-eyebrow">
                <span className="contact-eyebrow__dot" />
                LET'S TALK PRINT
              </span>

              <h1>
                Got a big idea?
                <br />
                <span>Let's make it print.</span>
              </h1>

              <p className="contact-hero__description">
                From business cards and brochures to eye-catching signs,
                we're here to help bring your ideas to life. Tell us what
                you're planning, and let's make something great together.
              </p>
            </div>

            <div className="contact-hero__visual">
              <div className="contact-gradient-orb" />

              <div className="contact-visual-card">
                <span className="contact-visual-card__label">
                  YOUR NEXT PROJECT STARTS HERE
                </span>

                <div className="contact-visual-card__headline">
                  Ideas in.
                  <br />
                  <span>Impressions out.</span>
                </div>

                <div className="contact-visual-card__line" />

                <div className="contact-visual-card__footer">
                  <span>JP PRINTING & SIGNS</span>
                  <ArrowUpRight size={22} />
                </div>

                <span className="contact-visual-card__cmyk">
                  C <i /> M <i /> Y <i /> K <i />
                </span>
              </div>

              <div className="contact-floating-tag contact-floating-tag--top">
                <span className="contact-floating-tag__dot contact-floating-tag__dot--cyan" />
                Made to stand out
              </div>

              <div className="contact-floating-tag contact-floating-tag--bottom">
                <span className="contact-floating-tag__dot contact-floating-tag__dot--magenta" />
                Print your way
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="contact-options">
          <div className="container">
            <div className="contact-options__heading">
              <div>
                <span className="contact-eyebrow">GET IN TOUCH</span>
                <h2>Pick your way to connect.</h2>
              </div>

              <p>
                Have a question or a project in mind? We're just a message
                or call away.
              </p>
            </div>

            <div className="contact-options__grid">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                const isExternal = option.href.startsWith("https://");

                return (
                  <article
                    className="contact-option-card"
                    key={option.number}
                  >
                    <div className="contact-option-card__top">
                      <span className="contact-option-card__icon">
                        <Icon size={23} />
                      </span>

                      <span className="contact-option-card__number">
                        {option.number}
                      </span>
                    </div>

                    <h3>{option.title}</h3>
                    <p>{option.description}</p>

                    <a
                      href={option.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="contact-option-card__link"
                    >
                      {option.label}
                      <ArrowUpRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Enquiry Form */}
        <section className="contact-form-section">
          <div className="container contact-form-layout">
            <div className="contact-form-intro">
              <span className="contact-eyebrow">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's make
                <br />
                <span>something memorable.</span>
              </h2>

              <p>
                Tell us a little about your project. Whether you need
                business cards, flyers, brochures, or custom signage,
                we'd love to hear what you're planning.
              </p>

              <div className="contact-form-detail">
                <span className="contact-form-detail__icon">
                  <Mail size={19} />
                </span>

                <div>
                  <strong>Prefer email?</strong>
                  <a href="mailto:jpprint13@gmail.com">
                    jpprint13@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-form-detail">
                <span className="contact-form-detail__icon">
                  <Phone size={19} />
                </span>

                <div>
                  <strong>Let's talk directly</strong>
                  <a href="tel:+19059191181">905 919 1181</a>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-form-success">
                  <span className="contact-form-detail__icon">
                    <Send size={24} />
                  </span>

                  <h3>Your email is ready!</h3>

                  <p>
                    Your default email app should open with your project
                    details filled in. Send the email to complete your enquiry.
                  </p>

                  <button
                    type="button"
                    className="button button--dark"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another enquiry
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-form-card__heading">
                    <span>PROJECT ENQUIRY</span>
                    <h3>Tell us about it.</h3>
                    <p>
                      Fill in the details below and let's get started.
                    </p>
                  </div>

                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-form-row">
                      <label>
                        Your name *
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          autoComplete="name"
                          required
                        />
                      </label>

                      <label>
                        Email address *
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                        />
                      </label>
                    </div>

                    <div className="contact-form-row">
                      <label>
                        Phone number
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your contact number"
                          autoComplete="tel"
                        />
                      </label>

                      <label>
                        What do you need? *
                        <select
                          name="service"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="Business Cards">
                            Business cards
                          </option>
                          <option value="Flyers and Brochures">
                            Flyers & brochures
                          </option>
                          <option value="Custom Signs">
                            Custom signs
                          </option>
                          <option value="Marketing Materials">
                            Marketing materials
                          </option>
                          <option value="Other Printing">
                            Other printing
                          </option>
                        </select>
                      </label>
                    </div>

                    <label>
                      Estimated quantity
                      <input
                        type="text"
                        name="quantity"
                        placeholder="e.g. 500 business cards"
                      />
                    </label>

                    <label>
                      Tell us about your project *
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Share your ideas, sizes, finishes, deadlines, or other requirements..."
                        required
                      />
                    </label>

                    <button
                      type="submit"
                      className="button button--dark contact-form-submit"
                    >
                      Send your enquiry
                      <Send size={16} />
                    </button>

                    <p className="contact-form-disclaimer">
                      This opens your default email app with your enquiry
                      filled in. Your enquiry is not sent automatically.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
