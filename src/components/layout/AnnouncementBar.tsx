import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p>
        FULL-COLOUR PRINTING & CUSTOM SIGNAGE
        <span className="announcement-bar__divider">•</span>
        Serving Mississauga & the GTA
      </p>
      <div className="announcement-bar__right">
        <a href="tel:+19059191181">
          <Phone size={12} /> 905 919 1181
        </a>
        <Link href="/contact" aria-label="Contact us about a print project">
          Get a Quote <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}
