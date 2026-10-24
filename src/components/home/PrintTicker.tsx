
export default function PrintTicker() {
  return (
    <section className="pt-section" aria-label="Print it. Brand it. Make it matter.">
      <div className="pt-track" aria-hidden="true">
        {[0, 1, 2, 3].map((item) => (
          <span className="pt-phrase" key={item}>
            <span><span className="pt-print-initial">P</span>RINT IT.</span>{" "}
            <span><span className="pt-brand-initial">B</span>RAND IT.</span>{" "}
            <span><span className="pt-make-initial">M</span>AKE IT MATTER.</span> ✳
          </span>
        ))}
      </div>

      <style>{`
        .pt-section { overflow: hidden; padding: 25px 0; background: #171717; color: #fff; }
        .pt-track { display: flex; width: max-content; animation: pt-scroll 28s linear infinite; }
        .pt-phrase { flex-shrink: 0; padding-right: 40px; font-family: var(--font-montserrat), sans-serif; font-size: clamp(27px, 4vw, 52px); font-weight: 900; letter-spacing: -.5px; white-space: nowrap; }
        .pt-print-initial { color: #00b9d6; }
        .pt-brand-initial { color: #e5007d; }
        .pt-make-initial { color: #f5d800; }
        .pt-section:hover .pt-track { animation-play-state: paused; }
        @keyframes pt-scroll { to { transform: translateX(-50%); } }
        @media(prefers-reduced-motion: reduce) { .pt-track { animation: none; } }
      `}</style>
    </section>
  );
}
