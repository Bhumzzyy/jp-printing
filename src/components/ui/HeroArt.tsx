/**
 * Bespoke hero illustration — a small "printing press" composition built from
 * CMYK sheets, registration marks and halftone texture. No external images.
 */
export default function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 460"
      role="img"
      aria-label="Illustration of printed sheets in cyan, magenta, yellow and black"
      className={className}
    >
      <defs>
        <pattern id="ha-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#111" opacity="0.07" />
        </pattern>
        <linearGradient id="ha-sheet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f4f7f9" />
        </linearGradient>
      </defs>

      {/* backdrop */}
      <circle cx="260" cy="230" r="200" fill="#f5fbfd" />
      <circle cx="260" cy="230" r="200" fill="url(#ha-dots)" />

      {/* stacked CMYK sheets */}
      <g transform="rotate(-16 260 250)">
        <rect x="150" y="150" width="210" height="260" rx="8" fill="#F5D800" stroke="#141414" strokeWidth="3" />
      </g>
      <g transform="rotate(-8 260 250)">
        <rect x="155" y="145" width="210" height="260" rx="8" fill="#EC008C" stroke="#141414" strokeWidth="3" />
      </g>
      <g transform="rotate(-2 260 250)">
        <rect x="160" y="140" width="210" height="260" rx="8" fill="#00A9E0" stroke="#141414" strokeWidth="3" />
      </g>

      {/* front white sheet with design */}
      <g transform="rotate(4 260 250)">
        <rect x="168" y="132" width="210" height="262" rx="8" fill="url(#ha-sheet)" stroke="#141414" strokeWidth="3" />
        {/* header block */}
        <rect x="190" y="158" width="120" height="26" rx="5" fill="#141414" />
        <rect x="190" y="158" width="60" height="26" rx="5" fill="#EC008C" />
        {/* image placeholder */}
        <rect x="190" y="198" width="166" height="90" rx="5" fill="#00A9E0" opacity="0.14" />
        <circle cx="240" cy="243" r="20" fill="#00A9E0" opacity="0.5" />
        <path d="M270 268 l24 -30 l30 40 l14 -16 l18 22 Z" fill="#EC008C" opacity="0.5" />
        {/* text lines */}
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x="190"
            y={306 + i * 18}
            width={i === 3 ? 90 : 166}
            height="9"
            rx="4"
            fill={i === 0 ? "#141414" : "#e2e6e9"}
            opacity={i === 0 ? 1 : 1}
          />
        ))}
        {/* CMYK dots row */}
        {["#00A9E0", "#EC008C", "#F5D800", "#141414"].map((c, i) => (
          <circle key={c} cx={196 + i * 20} cy={392} r="6" fill={c} />
        ))}
      </g>

      {/* floating registration + colour marks */}
      <g opacity="0.9">
        <circle cx="74" cy="96" r="26" fill="#00A9E0" />
        <text x="74" y="103" textAnchor="middle" fontFamily="Arial" fontWeight="800" fontSize="20" fill="#fff">C</text>
        <circle cx="452" cy="132" r="26" fill="#EC008C" />
        <text x="452" y="139" textAnchor="middle" fontFamily="Arial" fontWeight="800" fontSize="20" fill="#fff">M</text>
        <circle cx="86" cy="372" r="26" fill="#F5D800" />
        <text x="86" y="379" textAnchor="middle" fontFamily="Arial" fontWeight="800" fontSize="20" fill="#141414">Y</text>
        <circle cx="446" cy="392" r="26" fill="#141414" />
        <text x="446" y="399" textAnchor="middle" fontFamily="Arial" fontWeight="800" fontSize="20" fill="#fff">K</text>
      </g>

      {/* registration crosshair */}
      <g opacity="0.35" stroke="#141414" strokeWidth="1.5">
        <line x1="42" y1="230" x2="70" y2="230" />
        <line x1="56" y1="216" x2="56" y2="244" />
        <circle cx="56" cy="230" r="9" fill="none" />
      </g>
    </svg>
  );
}
