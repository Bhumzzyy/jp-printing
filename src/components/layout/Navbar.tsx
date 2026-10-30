"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change and ensure top of page
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Clean up any pending dropdown timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Utility Contact Bar — scrolls away naturally with the page */}
      <div className={styles.utilityBar}>
        <div className={`container ${styles.utilityContainer}`}>
          <div className={styles.utilityLeft}>
            <span>Ontario, Canada · Commercial Printing &amp; Architectural Signage</span>
          </div>
          <div className={styles.utilityRight}>
            <a href="mailto:jpprint13@gmail.com" className={styles.utilityLink}>
              <Mail size={13} aria-hidden="true" />
              <span>jpprint13@gmail.com</span>
            </a>
            <span className={styles.utilityDivider}>|</span>
            <a href="tel:9059191181" className={styles.utilityLink}>
              <Phone size={13} aria-hidden="true" />
              <span>905 919 1181</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Header — stays pinned at top: 0 during scrolling */}
      <header className={styles.stickyHeader}>
        {/* Brand-Colour Separator Line */}
        <div className={styles.brandSeparator} aria-hidden="true">
          <span className={styles.sepCyan} />
          <span className={styles.sepMagenta} />
          <span className={styles.sepYellow} />
        </div>

        {/* Main Navigation Bar */}
        <div className={styles.mainNav}>
        <div className={`container ${styles.navContainer}`}>
            {/* Logo */}
            <Link href="/" className={styles.logoLink} aria-label="JP Printing & Signs Home">
              <Image
                src="/image/logo/jp_logo.webp"
                alt="JP Printing & Signs Logo"
                width={180}
                height={55}
                priority
                className={styles.logoImage}
              />
            </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <Link
              href="/"
              className={`${styles.navLink} ${isActive("/") ? styles.activeLink : ""}`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`${styles.navLink} ${isActive("/about") ? styles.activeLink : ""}`}
            >
              About Us
            </Link>

            {/* Services with Mega Dropdown */}
            <div
              className={styles.dropdownTriggerWrapper}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <Link
                href="/services"
                className={`${styles.navLink} ${styles.hasDropdown} ${
                  isActive("/services") ? styles.activeLink : ""
                }`}
                aria-expanded={servicesDropdownOpen}
                onFocus={() => setServicesDropdownOpen(true)}
              >
                Services
                <ChevronDown size={14} className={`${styles.chevron} ${servicesDropdownOpen ? styles.chevronOpen : ""}`} />
              </Link>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  className={styles.megaDropdown}
                  role="region"
                  aria-label="Services Menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.megaContainer}>
                    <div className={styles.megaHeader}>
                      <span className="eyebrow">Our Primary Offerings</span>
                      <h4 className={styles.megaTitle}>Explore Commercial Printing & Custom Signage</h4>
                    </div>

                    <div className={styles.megaGrid}>
                      {serviceCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/services/${cat.slug}`}
                          className={styles.megaCard}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <div className={styles.megaThumbWrap}>
                            <Image
                              src={cat.heroImage}
                              alt={cat.title}
                              width={80}
                              height={55}
                              className={styles.megaThumb}
                            />
                          </div>
                          <div className={styles.megaCardContent}>
                            <div className={styles.megaCardTitleRow}>
                              <span className={styles.megaCardTitle}>{cat.title}</span>
                              <ArrowRight size={13} className={styles.megaCardArrow} />
                            </div>
                            <p className={styles.megaCardDesc}>{cat.tagline}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className={styles.megaFooter}>
                      <span>Need help deciding on materials or dimensions?</span>
                      <Link href="/services" className={styles.megaViewAll}>
                        View All Services & Specifications →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className={`${styles.navLink} ${isActive("/products") ? styles.activeLink : ""}`}
            >
              Products
            </Link>

            <Link
              href="/projects"
              className={`${styles.navLink} ${isActive("/projects") ? styles.activeLink : ""}`}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className={`${styles.navLink} ${isActive("/contact") ? styles.activeLink : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className={styles.headerActions}>
            <Link href="/contact" className="btn btn-primary">
              Get a Quote
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer} role="dialog" aria-modal="true">
          <div className={styles.mobileDrawerInner}>
            <nav className={styles.mobileNav}>
              <Link href="/" className={styles.mobileNavLink}>
                Home
              </Link>
              <Link href="/about" className={styles.mobileNavLink}>
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div className={styles.mobileAccordion}>
                <button
                  className={styles.mobileAccordionTrigger}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`${styles.mobileChevron} ${
                      mobileServicesOpen ? styles.mobileChevronOpen : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className={styles.mobileAccordionContent}>
                    <Link
                      href="/services"
                      className={styles.mobileCategoryLinkHighlight}
                    >
                      All Services Overview →
                    </Link>
                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/services/${cat.slug}`}
                        className={styles.mobileCategoryLink}
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/products" className={styles.mobileNavLink}>
                Products
              </Link>
              <Link href="/projects" className={styles.mobileNavLink}>
                Projects
              </Link>
              <Link href="/contact" className={styles.mobileNavLink}>
                Contact
              </Link>
            </nav>

            <div className={styles.mobileUtility}>
              <div className={styles.mobileContactItem}>
                <Phone size={16} />
                <a href="tel:9059191181">905 919 1181</a>
              </div>
              <div className={styles.mobileContactItem}>
                <Mail size={16} />
                <a href="mailto:jpprint13@gmail.com">jpprint13@gmail.com</a>
              </div>
              <Link href="/contact" className={`btn btn-primary ${styles.mobileCta}`}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
