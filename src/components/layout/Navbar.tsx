"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Printing", href: "/services#printing" },
  { label: "Signs", href: "/services#signs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
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
            src="/jp_logo.png"
            alt=""
            width={3000}
            height={2000}
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
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeAll}>
              {link.label}
            </Link>
          ))}

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
