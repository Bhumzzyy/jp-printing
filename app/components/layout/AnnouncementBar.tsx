import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p>
        YOUR NEXT GREAT PRINT STARTS HERE
        <span className="announcement-bar__divider">•</span>
        Let&apos;s bring your ideas to life.
      </p>
      <Link href="/contact" aria-label="Contact us about a print project">
        Let&apos;s talk <ArrowUpRight size={13} />
      </Link>
    </div>
  );
}