import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Palette,
  Printer,
  Signpost,
  Sparkles,
} from "lucide-react";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";

const services = [
  {
    number: "01",
    icon: Printer,
    title: "Professional Printing",
    description:
      "From business cards and flyers to brochures and marketing materials, create print pieces that represent your brand.",
  },
  {
    number: "02",
    icon: Signpost,
    title: "Signs & Displays",
    description:
      "Make your business easier to notice with signage and display solutions designed around your needs.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Custom Print Solutions",
    description:
      "Have a specific idea in mind? Let's explore the right materials, formats, and finishes for your project.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us your idea",
    description:
      "Share your requirements, design, quantity, and the purpose of your project.",
  },
  {
    number: "02",
    title: "Explore your options",
    description:
      "Discuss suitable printing methods, materials, and finishing options with our team.",
  },
  {
    number: "03",
    title: "Bring it to life",
    description:
      "Move forward with a print solution tailored to your project and brand.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="about-page">
        
<section className="about-page__hero">
  <div className="container about-page__hero-grid">
    <div className="about-page__hero-copy">
      <span className="eyebrow">
        ABOUT JP PRINTING & SIGNS
      </span>

      <h1>
        Your ideas.
        <br />
        Our print.
        <br />
        <span className="text-gradient">A lasting impression.</span>
      </h1>

      {/* <p className="about-page__hero-description">
        From everyday business essentials to eye-catching signs,
        we help turn your ideas into print that gets noticed.
        Great design deserves great printing — and we’re here
        to help bring it all together.
      </p> */}

      <div className="about-page__hero-actions">
        <Link href="/contact" className="button button--dark">
          Let's Talk <ArrowRight size={18} />
        </Link>

        <Link href="/products" className="button button--outline">
          Explore Our Services
        </Link>
      </div>

      <div className="about-page__hero-note">
        <Sparkles size={17} />
        <span>Ideas made tangible. Brands made memorable.</span>
      </div>
    </div>

    <div className="about-page__hero-visual">
      <div className="about-page__print-art">
        <div className="about-page__print-sheet about-page__print-sheet--cyan">
          <span>IDEAS</span>
        </div>

        <div className="about-page__print-sheet about-page__print-sheet--magenta">
          <span>CREATE</span>
        </div>

        <div className="about-page__print-sheet about-page__print-sheet--yellow">
          <span>PRINT</span>
        </div>

        <div className="about-page__print-center">
          <Printer size={48} strokeWidth={1.5} />
          <strong>MAKE IT</strong>
          <strong>STAND OUT.</strong>
        </div>
      </div>

      <div className="about-page__floating-tag">
        <span className="about-page__floating-dot" />
        Print your vision
      </div>
    </div>
  </div>
</section>


        <section className="about-page__story section">
          <div className="container about-page__story-grid">
            <div>
              <SectionHeading
                eyebrow="WHO WE ARE"
                title="Your ideas deserve to be seen."
                description="At JP Printing & Signs, we understand that every print project has a purpose. It might introduce your business, promote an offer, share important information, or make your space stand out."
              />
            </div>

            <div className="about-page__story-content">
              <p>
                That's why we focus on understanding what you need before
                helping you explore the right printing or signage options.
                Whether you're preparing everyday business stationery or
                planning a custom display, our goal is to help you make
                informed choices for your project.
              </p>

              <p>
                With Jot Panag and Deepi Panag as your points of contact,
                you can discuss your requirements directly and work towards
                a solution that fits your brand and objectives.
              </p>

              <div className="about-page__principle">
                <span className="about-page__principle-mark">JP.</span>
                <div>
                  <strong>Every detail has a purpose.</strong>
                  <p>
                    From the first conversation to the final print, your
                    project deserves thoughtful attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page__services section">
          <div className="container">
            <SectionHeading
              eyebrow="WHAT WE DO"
              title="Print solutions for your next big idea."
              description="Explore a range of printing and signage possibilities for your business, promotions, and everyday communication."
            />

            <div className="about-page__service-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="about-page__service-card"
                    key={service.number}
                  >
                    <div className="about-page__service-top">
                      <span>{service.number}</span>
                      <Icon size={24} strokeWidth={1.6} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link
                      href="/products"
                      className="about-page__service-link"
                    >
                      Explore possibilities <ArrowRight size={15} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-page__process section">
          <div className="container">
            <SectionHeading
              eyebrow="HOW WE WORK"
              title="From your first idea to the finished piece."
              description="A straightforward approach helps you understand your options and move your project forward."
            />

            <div className="about-page__steps">
              {steps.map((step) => (
                <article
                  className="about-page__step"
                  key={step.number}
                >
                  <span className="about-page__step-number">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__cta">
          <div className="container about-page__cta-inner">
            <span className="eyebrow">
              <span className="eyebrow__dot" />
              LET'S MAKE SOMETHING GREAT
            </span>

            <h2>
              Have an idea?
              <br />
              <span className="text-gradient">Let's put it in print.</span>
            </h2>

            <p>
              Tell us what you're planning. Connect with our team to discuss
              your printing, signage, or custom project requirements.
            </p>

            <Link href="/contact" className="button button--dark">
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
