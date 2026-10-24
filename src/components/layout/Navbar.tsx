"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { printingServices, signsServices } from "@/data/services";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link
          href="/"
          className="brand"
          aria-label="JP Printing and Signs home"
          onClick={closeAll}
        >
          <Image
            src="/jp_logo1.png"
            alt=""
            width={2000}
            height={1024}
            className="brand__logo"
            priority
          />
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) =>
            link.dropdown ? (
              <div
                key={link.href}
                className={`navbar__item navbar__item--dropdown ${
                  servicesOpen ? "is-open" : ""
                }`}
              >
                <div className="navbar__trigger">
                  <Link href={link.href} onClick={closeAll}>
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    className="navbar__caret"
                    aria-label="Toggle services menu"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((open) => !open)}
                  >
                    <ChevronDown size={15} />
                  </button>
                </div>

                <div className="navbar__mega">
                  <div className="navbar__mega-grid">
                    <div className="navbar__mega-col">
                      <span className="navbar__mega-title">Printing</span>
                      {printingServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={closeAll}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                    <div className="navbar__mega-col">
                      <span className="navbar__mega-title">Signs</span>
                      {signsServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={closeAll}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                    <div className="navbar__mega-col navbar__mega-col--cta">
                      <span className="navbar__mega-title">Not sure?</span>
                      <p>
                        Tell us what you&apos;re planning and we&apos;ll point
                        you in the right direction.
                      </p>
                      <Link
                        href="/contact"
                        className="button button--dark"
                        onClick={closeAll}
                      >
                        Get a Quote <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={closeAll}>
                {link.label}
              </Link>
            )
          )}

          <Link
            href="/contact"
            className="button button--dark navbar__mobile-cta"
            onClick={closeAll}
          >
            Get a Quote <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link href="/contact" className="button button--dark navbar__desktop-cta">
          Get a Quote <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
