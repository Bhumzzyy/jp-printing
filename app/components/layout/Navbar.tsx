"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link
          href="/"
          className="brand"
          aria-label="JP Printing and Signs home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand__mark">JP<span>.</span></span>
          <span className="brand__text">
            PRINTING <b>&</b> SIGNS
            <small>PRINT THAT MAKES AN IMPRESSION</small>
          </span>
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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button button--dark navbar__mobile-cta"
            onClick={() => setMenuOpen(false)}
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