import Link from "next/link";
import { ArrowUpRight, Mail, Phone,Camera } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand brand--footer">
              <span className="brand__mark">JP<span>.</span></span>
              <span className="brand__text">
                PRINTING <b>&</b> SIGNS
                <small>PRINT THAT MAKES AN IMPRESSION</small>
              </span>
            </Link>
            <p>
              Turning ideas into print, and print into something worth
              remembering.
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
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-column footer-contact">
            <h3>Get in touch</h3>
            <a href="mailto:jpprint13@gmail.com">
              <Mail size={16} /> jpprint13@gmail.com
            </a>
            <a href="tel:+19059191181">
              <Phone size={16} /> 905 919 1181
            </a>
            <p>Jot Panag & Deepi Panag</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} JP PRINTING & SIGNS. All rights reserved.</p>
          <p>Made to make an impression.</p>
        </div>
      </div>
    </footer>
  );
}