type ServiceArtProps = {
  variant: string;
  className?: string;
};

/**
 * Bespoke SVG illustrations for every service.
 * Rendered on a soft CMYK-tinted card with a halftone texture + registration
 * mark so the whole set feels like one printing-press family.
 */
export default function ServiceArt({ variant, className }: ServiceArtProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sa-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7fbfd" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <pattern id="sa-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="#111" opacity="0.06" />
        </pattern>
      </defs>

      {/* Card background */}
      <rect width="400" height="300" fill="url(#sa-bg)" />
      <rect width="400" height="300" fill="url(#sa-dots)" />
      {/* Soft CMYK corner glows */}
      <circle cx="40" cy="36" r="90" fill="#00A9E0" opacity="0.06" />
      <circle cx="366" cy="30" r="70" fill="#EC008C" opacity="0.05" />
      <circle cx="330" cy="278" r="80" fill="#F5D800" opacity="0.07" />
      {/* Registration mark */}
      <g opacity="0.18" stroke="#111" strokeWidth="1">
        <line x1="24" y1="272" x2="24" y2="288" />
        <line x1="16" y1="280" x2="32" y2="280" />
        <circle cx="24" cy="280" r="6" fill="none" />
      </g>

      <g>{renderArt(variant)}</g>
    </svg>
  );
}

const C = "#00A9E0";
const M = "#EC008C";
const Y = "#F5D800";
const K = "#141414";

function renderArt(variant: string) {
  switch (variant) {
    /* ---------------------------- PRINTING ---------------------------- */
    case "calendar":
      return (
        <g>
          <rect x="96" y="58" width="208" height="188" rx="6" fill="#fff" stroke={K} strokeWidth="3" />
          <rect x="96" y="58" width="208" height="40" rx="6" fill={M} />
          <rect x="96" y="86" width="208" height="12" fill={M} />
          {[122, 150, 178, 206].map((x) => (
            <g key={x}>
              <circle cx={x} cy="52" r="6" fill="#fff" stroke={K} strokeWidth="3" />
              <line x1={x} y1="58" x2={x} y2="74" stroke={K} strokeWidth="3" />
            </g>
          ))}
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={110 + c * 38}
                y={112 + r * 30}
                width="28"
                height="20"
                rx="2"
                fill={r === 1 && c === 2 ? C : "#f1f1f1"}
                opacity={r === 1 && c === 2 ? 1 : 0.9}
              />
            ))
          )}
        </g>
      );
    case "flyers":
      return (
        <g>
          <rect x="80" y="70" width="150" height="180" rx="5" fill="#fff" stroke={K} strokeWidth="3" transform="rotate(-8 155 160)" />
          <rect x="150" y="60" width="160" height="190" rx="5" fill="#fff" stroke={K} strokeWidth="3" />
          <rect x="150" y="60" width="160" height="70" fill={C} />
          <rect x="168" y="150" width="124" height="10" rx="3" fill="#eee" />
          <rect x="168" y="170" width="124" height="10" rx="3" fill="#eee" />
          <rect x="168" y="190" width="80" height="10" rx="3" fill={M} />
          <path d="M230 60 L310 60 L310 130 Z" fill={Y} opacity="0.9" />
          <circle cx="185" cy="95" r="16" fill="#fff" />
        </g>
      );
    case "menu":
      return (
        <g>
          <rect x="110" y="50" width="180" height="200" rx="8" fill="#fff" stroke={K} strokeWidth="3" />
          <rect x="110" y="50" width="180" height="200" rx="8" fill={C} opacity="0.06" />
          <rect x="130" y="72" width="140" height="18" rx="4" fill={K} />
          <circle cx="200" cy="128" r="24" fill="none" stroke={M} strokeWidth="3" />
          <path d="M188 128 h24 M200 116 v24" stroke={M} strokeWidth="3" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="140" y={168 + i * 18} width={i === 2 ? 80 : 120} height="8" rx="3" fill="#e8e8e8" />
          ))}
          {/* gloss streak */}
          <path d="M250 50 L300 50 L210 250 L160 250 Z" fill="#fff" opacity="0.5" />
          <rect x="110" y="50" width="180" height="200" rx="8" fill="none" stroke={K} strokeWidth="3" />
        </g>
      );
    case "lawn-sign":
      return (
        <g>
          {/* feather flag */}
          <path d="M320 40 q30 60 0 200" fill="none" stroke={K} strokeWidth="4" />
          <path d="M320 46 q26 60 0 188 q-40 -10 -46 -94 q6 -84 46 -94 Z" fill={M} />
          <line x1="320" y1="40" x2="320" y2="250" stroke={K} strokeWidth="4" />
          {/* coroplast sign */}
          <rect x="60" y="90" width="170" height="115" rx="4" fill="#fff" stroke={K} strokeWidth="3" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={i} x1={74 + i * 26} y1="92" x2={74 + i * 26} y2="203" stroke="#eee" strokeWidth="2" />
          ))}
          <rect x="76" y="112" width="120" height="20" rx="3" fill={C} />
          <rect x="76" y="142" width="90" height="12" rx="3" fill={K} />
          <rect x="76" y="162" width="110" height="10" rx="3" fill="#ddd" />
          {/* H-stake */}
          <path d="M120 205 v45 M170 205 v45 M120 228 h50" stroke={K} strokeWidth="4" fill="none" />
        </g>
      );
    case "business-cards":
      return (
        <g>
          <g transform="rotate(-10 140 190)">
            <rect x="70" y="150" width="180" height="105" rx="6" fill="#fff" stroke={K} strokeWidth="3" />
          </g>
          <g transform="rotate(-4 160 170)">
            <rect x="90" y="120" width="180" height="105" rx="6" fill="#fff" stroke={K} strokeWidth="3" />
          </g>
          <rect x="130" y="80" width="190" height="112" rx="6" fill={K} />
          <rect x="130" y="80" width="190" height="112" rx="6" fill="none" stroke={K} strokeWidth="3" />
          <rect x="150" y="102" width="30" height="30" rx="4" fill={M} />
          <rect x="150" y="150" width="90" height="9" rx="3" fill="#fff" />
          <rect x="150" y="166" width="130" height="7" rx="3" fill="#888" />
          <circle cx="285" cy="118" r="10" fill={C} />
          <rect x="150" y="120" width="60" height="6" rx="3" fill={Y} />
        </g>
      );
    case "stickers":
      return (
        <g>
          <g>
            <circle cx="150" cy="140" r="62" fill={C} stroke={K} strokeWidth="3" />
            <circle cx="150" cy="140" r="46" fill="#fff" />
            <path d="M132 140 l12 12 l24 -26" stroke={M} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* kiss-cut sheet corner */}
          <rect x="228" y="80" width="120" height="150" rx="8" fill="#fff" stroke={K} strokeWidth="3" strokeDasharray="7 6" />
          <rect x="246" y="100" width="84" height="84" rx="10" fill={Y} opacity="0.85" stroke={K} strokeWidth="2" />
          <circle cx="288" cy="142" r="18" fill={M} />
          <rect x="246" y="196" width="84" height="10" rx="3" fill="#e5e5e5" />
        </g>
      );
    case "folder":
      return (
        <g>
          {/* back sheet */}
          <rect x="120" y="70" width="150" height="120" rx="4" fill="#fff" stroke={K} strokeWidth="2" transform="rotate(-6 195 130)" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="132" y={86 + i * 14} width="110" height="6" rx="3" fill="#e0e0e0" transform="rotate(-6 195 130)" />
          ))}
          {/* folder body */}
          <path d="M70 120 h70 l16 -18 h154 v128 h-240 Z" fill={C} stroke={K} strokeWidth="3" strokeLinejoin="round" />
          <path d="M70 120 h240 v128 h-240 Z" fill="#fff" stroke={K} strokeWidth="3" />
          <path d="M70 120 h240 v128 h-240 Z" fill={M} opacity="0.06" />
          {/* pocket */}
          <path d="M70 172 l120 34 l120 -34 v76 h-240 Z" fill="#fff" stroke={K} strokeWidth="3" strokeLinejoin="round" />
          <rect x="96" y="186" width="46" height="26" rx="3" fill={K} />
          <rect x="96" y="186" width="46" height="26" rx="3" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3 3" />
        </g>
      );
    case "ncr":
      return (
        <g>
          {/* envelope behind */}
          <rect x="180" y="70" width="150" height="105" rx="4" fill="#fff" stroke={K} strokeWidth="3" />
          <path d="M180 70 l75 58 l75 -58" fill="none" stroke={K} strokeWidth="3" />
          {/* multipart set */}
          <rect x="70" y="110" width="140" height="150" rx="4" fill={Y} stroke={K} strokeWidth="3" />
          <rect x="80" y="120" width="140" height="150" rx="4" fill={M} stroke={K} strokeWidth="3" opacity="0.9" />
          <rect x="90" y="130" width="140" height="150" rx="4" fill="#fff" stroke={K} strokeWidth="3" />
          <rect x="104" y="146" width="60" height="10" rx="3" fill={K} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="104" y={168 + i * 18} width={i % 2 ? 90 : 112} height="8" rx="3" fill="#e8e8e8" />
          ))}
          <rect x="104" y="252" width="112" height="6" rx="3" fill={C} />
        </g>
      );
    case "ticket":
      return (
        <g>
          {/* ticket */}
          <rect x="70" y="110" width="220" height="90" rx="8" fill={M} stroke={K} strokeWidth="3" />
          <line x1="230" y1="110" x2="230" y2="200" stroke="#fff" strokeWidth="3" strokeDasharray="8 7" />
          <circle cx="230" cy="110" r="8" fill="#fff" />
          <circle cx="230" cy="200" r="8" fill="#fff" />
          <rect x="90" y="132" width="100" height="14" rx="4" fill="#fff" />
          <rect x="90" y="156" width="70" height="9" rx="3" fill="#ffffffaa" />
          <text x="240" y="162" fill="#fff" fontSize="16" fontWeight="800" fontFamily="Arial">ADMIT</text>
          {/* bookmark */}
          <rect x="300" y="70" width="46" height="150" rx="4" fill={Y} stroke={K} strokeWidth="3" />
          <path d="M300 220 l23 -26 l23 26 Z" fill="#fff" stroke={K} strokeWidth="3" strokeLinejoin="round" />
          <circle cx="323" cy="96" r="9" fill={K} />
          <rect x="310" y="120" width="26" height="6" rx="3" fill={K} opacity="0.4" />
          <rect x="310" y="134" width="26" height="6" rx="3" fill={K} opacity="0.4" />
        </g>
      );
    case "booklet":
      return (
        <g>
          {/* open booklet */}
          <path d="M60 100 q70 -20 140 8 q70 -28 140 -8 v120 q-70 -18 -140 8 q-70 -26 -140 -8 Z" fill="#fff" stroke={K} strokeWidth="3" strokeLinejoin="round" />
          <line x1="200" y1="108" x2="200" y2="228" stroke={K} strokeWidth="3" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={`l${i}`} x="80" y={126 + i * 20} width={i % 2 ? 80 : 100} height="7" rx="3" fill="#e4e4e4" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <rect key={`r${i}`} x="220" y={126 + i * 20} width={i % 2 ? 100 : 80} height="7" rx="3" fill="#e4e4e4" />
          ))}
          <rect x="220" y="126" width="60" height="7" rx="3" fill={M} />
          <rect x="80" y="126" width="60" height="7" rx="3" fill={C} />
        </g>
      );
    case "door-hanger":
      return (
        <g>
          {/* door hanger */}
          <rect x="80" y="50" width="90" height="200" rx="16" fill={C} stroke={K} strokeWidth="3" />
          <circle cx="125" cy="96" r="26" fill="#fff" stroke={K} strokeWidth="3" />
          <circle cx="125" cy="96" r="10" fill="#fff" stroke={K} strokeWidth="3" />
          <rect x="96" y="150" width="58" height="12" rx="4" fill="#fff" />
          <rect x="96" y="172" width="58" height="8" rx="3" fill="#ffffffaa" />
          <rect x="96" y="188" width="40" height="8" rx="3" fill={Y} />
          {/* car magnet */}
          <path d="M210 210 l14 -44 q3 -10 16 -10 h96 q13 0 18 12 l14 42 Z" fill={M} stroke={K} strokeWidth="3" strokeLinejoin="round" />
          <rect x="210" y="210" width="172" height="34" rx="6" fill="#fff" stroke={K} strokeWidth="3" />
          <circle cx="244" cy="244" r="14" fill={K} />
          <circle cx="348" cy="244" r="14" fill={K} />
          <path d="M240 168 h30 l-6 30 h-38 Z M286 168 h30 l12 30 h-38 Z" fill="#d8ecf7" stroke={K} strokeWidth="2" />
        </g>
      );
    case "card":
      return (
        <g>
          {/* envelope back */}
          <rect x="150" y="120" width="180" height="120" rx="5" fill="#fff" stroke={K} strokeWidth="3" />
          <path d="M150 120 l90 66 l90 -66" fill="none" stroke={K} strokeWidth="3" />
          {/* folded card */}
          <rect x="70" y="70" width="120" height="150" rx="5" fill="#fff" stroke={K} strokeWidth="3" />
          <line x1="130" y1="70" x2="130" y2="220" stroke={K} strokeWidth="2" strokeDasharray="4 4" />
          <path d="M150 120 c-10 -14 -30 -6 -24 8 c4 10 24 22 24 22 s20 -12 24 -22 c6 -14 -14 -22 -24 -8 Z" fill={M} />
          <rect x="196" y="150" width="90" height="8" rx="3" fill="#e0e0e0" />
          <rect x="196" y="168" width="60" height="8" rx="3" fill={Y} />
          <circle cx="130" cy="196" r="12" fill={C} />
        </g>
      );

    /* ------------------------------ SIGNS ------------------------------ */
    case "window":
      return (
        <g>
          <rect x="70" y="55" width="260" height="190" rx="6" fill="#eaf6fb" stroke={K} strokeWidth="3" />
          <line x1="200" y1="55" x2="200" y2="245" stroke={K} strokeWidth="3" />
          <line x1="70" y1="150" x2="330" y2="150" stroke={K} strokeWidth="3" />
          {/* frosted panel */}
          <rect x="72" y="57" width="126" height="92" fill="#fff" opacity="0.7" />
          {/* perforated graphic */}
          <rect x="202" y="57" width="126" height="92" fill={C} opacity="0.75" />
          <circle cx="265" cy="103" r="26" fill="#fff" opacity="0.85" />
          {/* vinyl lettering on lower panes */}
          <rect x="92" y="182" width="86" height="14" rx="4" fill={K} />
          <rect x="92" y="204" width="60" height="9" rx="3" fill="#555" />
          <path d="M230 180 h64 v40 h-64 Z" fill={M} opacity="0.8" />
        </g>
      );
    case "wall":
      return (
        <g>
          <rect x="50" y="50" width="300" height="200" rx="4" fill="#fff" stroke={K} strokeWidth="3" />
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="50" y1={50 + i * 50} x2="350" y2={50 + i * 50} stroke="#eee" strokeWidth="2" />
          ))}
          <circle cx="140" cy="130" r="46" fill={C} opacity="0.85" />
          <path d="M210 190 l50 -80 l44 80 Z" fill={M} opacity="0.85" />
          <rect x="196" y="70" width="120" height="30" rx="6" fill={Y} opacity="0.9" />
          <path d="M70 210 q40 -50 90 -20 q50 30 90 -10" fill="none" stroke={K} strokeWidth="4" strokeLinecap="round" />
          <circle cx="300" cy="120" r="16" fill={K} opacity="0.85" />
        </g>
      );
    case "lettering":
      return (
        <g>
          <rect x="60" y="70" width="280" height="150" rx="6" fill="#eaf6fb" stroke={K} strokeWidth="3" />
          <text x="200" y="145" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="52" fill={K} letterSpacing="2">
            OPEN
          </text>
          <text x="200" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" fill={M} letterSpacing="6">
            9–5 MON–FRI
          </text>
          <line x1="60" y1="230" x2="340" y2="230" stroke={K} strokeWidth="4" />
        </g>
      );
    case "banner":
      return (
        <g>
          {/* grommets + rope */}
          <line x1="60" y1="60" x2="340" y2="60" stroke={K} strokeWidth="2" strokeDasharray="6 6" />
          <rect x="70" y="70" width="260" height="120" rx="4" fill={C} stroke={K} strokeWidth="3" />
          <circle cx="86" cy="86" r="6" fill="#fff" stroke={K} strokeWidth="2" />
          <circle cx="314" cy="86" r="6" fill="#fff" stroke={K} strokeWidth="2" />
          <circle cx="86" cy="174" r="6" fill="#fff" stroke={K} strokeWidth="2" />
          <circle cx="314" cy="174" r="6" fill="#fff" stroke={K} strokeWidth="2" />
          <rect x="104" y="106" width="192" height="20" rx="5" fill="#fff" />
          <rect x="124" y="140" width="152" height="12" rx="4" fill="#ffffffcc" />
          {/* retractable stand */}
          <rect x="130" y="220" width="140" height="12" rx="4" fill={K} />
          <path d="M150 220 v-14 h100 v14" fill="none" stroke={K} strokeWidth="3" />
        </g>
      );
    case "sign":
      return (
        <g>
          <rect x="80" y="60" width="240" height="140" rx="6" fill="#fff" stroke={K} strokeWidth="3" />
          <rect x="80" y="60" width="240" height="52" rx="6" fill={K} />
          <rect x="80" y="96" width="240" height="16" fill={K} />
          <rect x="100" y="76" width="120" height="18" rx="4" fill={Y} />
          <circle cx="290" cy="86" r="14" fill={M} />
          <rect x="104" y="132" width="140" height="12" rx="4" fill={C} />
          <rect x="104" y="156" width="180" height="10" rx="4" fill="#e5e5e5" />
          <rect x="104" y="174" width="120" height="10" rx="4" fill="#e5e5e5" />
          {/* posts */}
          <rect x="120" y="200" width="14" height="50" fill={K} />
          <rect x="266" y="200" width="14" height="50" fill={K} />
        </g>
      );
    case "exterior":
      return (
        <g>
          {/* building */}
          <rect x="70" y="90" width="200" height="160" fill="#fff" stroke={K} strokeWidth="3" />
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}${c}`} x={90 + c * 60} y={110 + r * 44} width="40" height="30" fill="#dceef7" stroke={K} strokeWidth="1.5" />
            ))
          )}
          {/* fascia sign */}
          <rect x="60" y="60" width="220" height="42" rx="4" fill={M} stroke={K} strokeWidth="3" />
          <rect x="78" y="74" width="120" height="14" rx="4" fill="#fff" />
          <circle cx="256" cy="81" r="12" fill={Y} />
          {/* pole sign */}
          <rect x="296" y="120" width="54" height="90" rx="4" fill={C} stroke={K} strokeWidth="3" />
          <rect x="318" y="210" width="10" height="40" fill={K} />
          <rect x="304" y="140" width="38" height="10" rx="3" fill="#fff" />
          <rect x="304" y="158" width="30" height="8" rx="3" fill="#ffffffbb" />
        </g>
      );
    case "interior":
      return (
        <g>
          {/* wall + reception desk */}
          <rect x="50" y="50" width="300" height="140" fill="#fff" stroke={K} strokeWidth="2" />
          <rect x="70" y="200" width="260" height="50" rx="4" fill={C} stroke={K} strokeWidth="3" />
          {/* logo sign on wall */}
          <rect x="120" y="80" width="160" height="50" rx="6" fill={K} />
          <circle cx="150" cy="105" r="14" fill={M} />
          <rect x="174" y="96" width="86" height="16" rx="4" fill="#fff" />
          <rect x="174" y="116" width="60" height="8" rx="3" fill={Y} />
          {/* wall decor panels */}
          <rect x="70" y="150" width="40" height="30" fill={Y} opacity="0.7" stroke={K} strokeWidth="1.5" />
          <rect x="290" y="150" width="40" height="30" fill={M} opacity="0.6" stroke={K} strokeWidth="1.5" />
          <circle cx="200" cy="225" r="10" fill="#fff" />
        </g>
      );
    case "popup":
      return (
        <g>
          {/* pop-up frame */}
          <path d="M80 80 h240 v150 h-240 Z" fill="#fff" stroke={K} strokeWidth="3" />
          {[0, 1, 2].map((i) => (
            <line key={i} x1={80 + i * 120} y1="80" x2={80 + i * 120} y2="230" stroke="#eee" strokeWidth="2" />
          ))}
          <rect x="80" y="80" width="240" height="70" fill={C} opacity="0.85" />
          <rect x="104" y="104" width="150" height="20" rx="4" fill="#fff" />
          <rect x="104" y="170" width="180" height="12" rx="4" fill={K} />
          <rect x="104" y="192" width="120" height="10" rx="4" fill="#e0e0e0" />
          {/* feather accent */}
          <path d="M336 70 q22 60 0 160" fill="none" stroke={M} strokeWidth="6" strokeLinecap="round" />
          <rect x="120" y="230" width="160" height="12" rx="4" fill={K} />
        </g>
      );
    case "led":
      return (
        <g>
          <rect x="70" y="60" width="260" height="130" rx="8" fill={K} stroke={K} strokeWidth="3" />
          <rect x="82" y="72" width="236" height="106" rx="4" fill="#0a2a33" />
          <text x="200" y="135" textAnchor="middle" fontFamily="Arial" fontWeight="800" fontSize="40" fill="#3fe0ff" letterSpacing="4">
            OPEN
          </text>
          {/* glow */}
          <rect x="82" y="72" width="236" height="106" rx="4" fill="#3fe0ff" opacity="0.12" />
          {/* light rays */}
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={110 + i * 60} y1="196" x2={90 + i * 70} y2="236" stroke={Y} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          ))}
          <circle cx="200" cy="222" r="10" fill={Y} />
          <rect x="150" y="190" width="100" height="10" rx="4" fill={K} />
        </g>
      );
    case "channel":
      return (
        <g>
          <rect x="60" y="80" width="280" height="120" rx="6" fill="#fff" stroke={K} strokeWidth="3" />
          {/* 3D letters */}
          {["J", "P", "S"].map((ch, i) => (
            <g key={ch}>
              <text x={120 + i * 80} y="165" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="64" fill={K} opacity="0.35" transform={`translate(4,4)`}>
                {ch}
              </text>
              <text x={120 + i * 80} y="165" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="64" fill={i === 1 ? M : C}>
                {ch}
              </text>
            </g>
          ))}
          <line x1="60" y1="200" x2="340" y2="200" stroke={K} strokeWidth="3" />
          <rect x="150" y="212" width="100" height="10" rx="4" fill="#e0e0e0" />
        </g>
      );
    case "acrylic":
      return (
        <g>
          {/* standoffs */}
          {[
            [92, 92],
            [300, 92],
            [92, 200],
            [300, 200],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="9" fill={K} />
          ))}
          {/* frosted acrylic panel */}
          <rect x="80" y="80" width="240" height="132" rx="6" fill="#e9f6fb" opacity="0.9" />
          <rect x="80" y="80" width="240" height="132" rx="6" fill="none" stroke={K} strokeWidth="3" />
          <rect x="110" y="118" width="120" height="20" rx="4" fill={K} />
          <rect x="110" y="150" width="180" height="10" rx="4" fill={C} />
          <rect x="110" y="170" width="140" height="10" rx="4" fill="#c9dbe4" />
          <path d="M100 80 L140 212 L120 212 L80 80 Z" fill="#fff" opacity="0.5" />
        </g>
      );
    case "vehicle":
      return (
        <g>
          {/* van body */}
          <path d="M50 210 v-60 q0 -22 22 -22 h150 l40 -46 q8 -8 20 -8 h68 q16 0 16 16 v120 Z" fill="#fff" stroke={K} strokeWidth="3" strokeLinejoin="round" />
          {/* windows */}
          <path d="M232 128 l30 -34 h44 v34 Z" fill="#dceef7" stroke={K} strokeWidth="2" />
          <rect x="80" y="140" width="70" height="40" rx="4" fill="#dceef7" stroke={K} strokeWidth="2" />
          {/* wrap graphics */}
          <path d="M50 176 q80 -30 160 0 q80 30 146 -6 v40 h-306 Z" fill={C} opacity="0.85" />
          <circle cx="150" cy="196" r="16" fill={M} />
          <rect x="180" y="186" width="90" height="14" rx="4" fill="#fff" />
          {/* wheels */}
          <circle cx="120" cy="212" r="24" fill={K} />
          <circle cx="120" cy="212" r="10" fill="#fff" />
          <circle cx="300" cy="212" r="24" fill={K} />
          <circle cx="300" cy="212" r="10" fill="#fff" />
        </g>
      );
    default:
      return (
        <g>
          <rect x="90" y="70" width="220" height="160" rx="6" fill="#fff" stroke={K} strokeWidth="3" />
          <rect x="120" y="110" width="160" height="20" rx="4" fill={C} />
          <rect x="120" y="144" width="160" height="12" rx="4" fill="#e0e0e0" />
          <rect x="120" y="168" width="110" height="12" rx="4" fill={M} />
        </g>
      );
  }
}
