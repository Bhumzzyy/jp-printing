"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { printingServices, signsServices } from "@/data/services";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="JP Printing and Signs home"
          onClick={closeAll}
        >
          <Image
            src="/jp_logo1.png"
            alt=""
            width={2000}
            height={1024}
            className={styles.logo}
            priority
          />
        </Link>

        <button
          className={styles.toggle}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) =>
            link.dropdown ? (
              <div
                key={link.href}
                className={`${styles.item} ${styles.dropdown} ${
                  servicesOpen ? styles.isOpen : ""
                }`}
              >
                <div className={styles.trigger}>
                  <Link href={link.href} onClick={closeAll}>
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    className={styles.caret}
                    aria-label="Toggle services menu"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((open) => !open)}
                  >
                    <ChevronDown size={15} />
                  </button>
                </div>

                <div className={styles.mega}>
                  <div className={styles.megaGrid}>
                    <div className={styles.megaColumn}>
                      <span className={styles.megaTitle}>Printing</span>
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
                    <div className={styles.megaColumn}>
                      <span className={styles.megaTitle}>Signs</span>
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
                    <div className={`${styles.megaColumn} ${styles.megaCta}`}>
                      <span className={styles.megaTitle}>Not sure?</span>
                      <p>
                        Tell us what you&apos;re planning and we&apos;ll point
                        you in the right direction.
                      </p>
                      <Link
                        href="/contact"
                        className={styles.quote}
                        onClick={closeAll}
                      >
                        Contact Us <ArrowUpRight size={15} />
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
            className={`${styles.quote} ${styles.mobileCta}`}
            onClick={closeAll}
          >
            Contact Us <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link href="/contact" className={`${styles.quote} ${styles.desktopCta}`}>
          Contact Us <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
