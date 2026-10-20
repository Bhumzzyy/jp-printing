import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import GradientBlob from "../ui/GradientBlob";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <GradientBlob className="contact-cta__blob" />

      <div className="container contact-cta__inner">
        <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
        <h2>
          Let&apos;s put your
          <br />
          <span className="text-gradient">ideas in print.</span>
        </h2>
        <p>
          Tell us about your next project. We&apos;ll help you explore the
          printing options that make sense for your business.
        </p>

        <div className="contact-cta__actions">
          <Link href="/contact" className="button button--dark">
            Let&apos;s Get Started <ArrowUpRight size={17} />
          </Link>
          <a href="mailto:jpprint13@gmail.com" className="contact-cta__contact-link">
            <Mail size={17} /> jpprint13@gmail.com
          </a>
          <a href="tel:+19059191181" className="contact-cta__contact-link">
            <Phone size={17} /> 905 919 1181
          </a>
        </div>
      </div>
    </section>
  );
}