import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/data/services";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1D2123", color: "#E5E2DB", paddingTop: "60px", paddingBottom: "36px", borderTop: "1px solid #2F3538" }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Column 1: Brand & Intro */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "18px" }}>
              <div style={{ background: "#FFFFFF", padding: "6px 12px", borderRadius: "4px", display: "inline-block" }}>
                <Image
                  src="/image/logo/jp_logo.webp"
                  alt="JP Printing & Signs Logo"
                  width={150}
                  height={45}
                  style={{ objectFit: "contain", height: "auto" }}
                />
              </div>
            </Link>
            <p style={{ color: "#A8A7A0", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>
              Premier commercial printing, architectural exterior signage, vehicle fleet graphics, and custom marketing collateral for businesses throughout Ontario, Canada.
            </p>
            <p style={{ color: "#777873", fontSize: "13px" }}>
              Managed by Jot Panag & Deepi Panag
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: "600", marginBottom: "18px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
              <li>
                <Link href="/" style={{ color: "#A8A7A0" }}>Home</Link>
              </li>
              <li>
                <Link href="/about" style={{ color: "#A8A7A0" }}>About Us</Link>
              </li>
              <li>
                <Link href="/services" style={{ color: "#A8A7A0" }}>Our Services</Link>
              </li>
              <li>
                <Link href="/products" style={{ color: "#A8A7A0" }}>Products Directory</Link>
              </li>
              <li>
                <Link href="/projects" style={{ color: "#A8A7A0" }}>Visual Showcase</Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "#A8A7A0" }}>Contact & Quotes</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Categories */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: "600", marginBottom: "18px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Services Catalogue
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    style={{ color: "#A8A7A0", display: "inline-flex", alignItems: "center", gap: "4px" }}
                  >
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: "600", marginBottom: "18px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Contact & Hours
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "14px", color: "#A8A7A0" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Phone size={16} style={{ color: "#00B9D6", marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "12px", color: "#777873", textTransform: "uppercase" }}>Phone</div>
                  <a href="tel:9059191181" style={{ color: "#FFFFFF", fontWeight: "500" }}>905 919 1181</a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Mail size={16} style={{ color: "#E5007D", marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "12px", color: "#777873", textTransform: "uppercase" }}>Email</div>
                  <a href="mailto:jpprint13@gmail.com" style={{ color: "#FFFFFF", fontWeight: "500" }}>jpprint13@gmail.com</a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Clock size={16} style={{ color: "#F5D800", marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "12px", color: "#777873", textTransform: "uppercase" }}>Operating Hours</div>
                  <div>Mon–Fri: 9:00 AM – 6:00 PM</div>
                  <div>Sat: 10:00 AM – 3:00 PM</div>
                  <div style={{ color: "#777873", fontSize: "12px" }}>Sunday: Closed</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={16} style={{ color: "#A8B8B2", marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "12px", color: "#777873", textTransform: "uppercase" }}>Region</div>
                  <div>Ontario, Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Three-Part Responsive Layout */}
        <div className={styles.bottomBar}>
          {/* Left Section */}
          <div className={styles.bottomLeft}>
            © {currentYear} JP Printing & Signs. All rights reserved.
          </div>

          {/* Center Section */}
          <div className={styles.bottomCenter}>
            <span>Commercial Printing</span>
            <span className={styles.dotSeparator} aria-hidden="true">·</span>
            <span>Architectural Signage</span>
            <span className={styles.dotSeparator} aria-hidden="true">·</span>
            <span>Ontario, Canada</span>
          </div>

          {/* Right Section */}
          <div className={styles.bottomRight}>
            <span>Design &amp; Develop By</span>{" "}
            <a
              href="https://the3rdlayers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.agencyLink}
              aria-label="THE THREE LAYERS website"
            >
              <span className={styles.brandThe}>THE</span>{" "}
              <span className={styles.brandThree}>THREE</span>{" "}
              <span className={styles.brandLayers}>LAYERS</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
