import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Camera, Mail, MapPin, Phone } from "lucide-react";
import CurrentYear from "@/components/ui/CurrentYear";
import { printingServices, signsServices } from "@/data/services";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link
              href="/"
              className="brand brand--footer"
              aria-label="JP Printing and Signs home"
            >
              <Image
                src="/jp_logo1.png"
                alt=""
                width={2000}
                height={1024}
                className="brand__logo"
              />
            </Link>
            <p>
              Professional printing and signage for businesses, events and
              everyday moments — quality work that makes an impression.
            </p>
            <a
              className="footer-social"
              href="https://www.instagram.com/jpprintingandsigns/"
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={17} /> Follow us on Instagram
              <ArrowUpRight size={15} />
            </a>

            <div className="footer-contact">
              <a href="mailto:jpprint13@gmail.com">
                <Mail size={16} /> jpprint13@gmail.com
              </a>
              <a href="tel:+19059191181">
                <Phone size={16} /> 905 919 1181
              </a>
              <p>
                <MapPin size={16} /> Serving Mississauga & the GTA
              </p>
            </div>
          </div>

          <div className="footer-col">
            <h3>Explore</h3>
            {pageLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h3>Printing</h3>
            {printingServices.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h3>Signs</h3>
            {signsServices.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © <CurrentYear /> JP PRINTING & SIGNS. All rights
            reserved.
          </p>
          <p>Made to make an impression.</p>
        </div>
      </div>
    </footer>
  );
}
