
import Link from "next/link";

export default function Footer() {
  return (
    <section className="hc-section">
      <div className="hc-top">
        <span>HAVE SOMETHING IN MIND?</span>
        <Link href="/contact">LET'S MAKE IT HAPPEN ↗</Link>
      </div>

      <h2>
        <span className="hc-intro">LET'S PUT IT IN PRINT.</span>
        <br /> <span className="hc-cyan">JP</span>{" "}
        <span className="hc-pink">PRINTING</span> &amp;{" "}
        <span className="hc-yellow">SIGNS.</span>
      </h2>

      <div className="hc-bottom">
        <p>Good ideas deserve to be seen.</p>
        <Link href="/contact">GET A QUOTE ↗</Link>
      </div>

      <div className="hc-credit">
        <p>
          Developed by{" "}
          <a
            href="https://the3rdlayers.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit The 3rd Layers website"
          >
            <span className="hc-cyan">THE</span>{" "}
            <span className="hc-pink">THREE</span>{" "}
            <span className="hc-yellow">LAYERS</span>
          </a>
        </p>
      </div>

      <style>{`
        .hc-section { overflow: hidden; padding: 50px 7% 0; background: #171717; color: white; }
        .hc-top, .hc-bottom { position: relative; z-index: 1; display: flex; justify-content: space-between; align-items: center; gap: 20px; }
        .hc-top > span { color: #bbb; font-size: 10px; letter-spacing: 2px; }
        .hc-top a { color: white; text-decoration: none; font-size: 11px; }
        .hc-section h2 { position: relative; z-index: 1; margin: 100px 0 55px; font-size: clamp(50px, 10.5vw, 150px); line-height: .83; letter-spacing: -.045em; font-weight: 900; text-align: center; }
        .hc-intro { font-size: .62em; letter-spacing: -.025em; }
        .hc-cyan { color: #00b9d6; }
        .hc-pink { color: #e5007d; }
        .hc-yellow { color: #f5d800; }
        .hc-bottom { padding-bottom: 35px; border-bottom: 1px solid #444; }
        .hc-bottom p { color: #bbb; font-size: 13px; }
        .hc-bottom a { padding: 14px 20px; border-radius: 40px; background: #00b9d6; color: #171717; font-size: 11px; font-weight: 800; text-decoration: none; }
        .hc-credit { padding: 18px 0; text-align: right; }
        .hc-credit p { margin: 0; color: #bbb; font-size: 11px; letter-spacing: 1px; }
        .hc-credit a { color: inherit; text-decoration: none; }
        .hc-credit span { font-weight: 800; }
        .hc-wordmark { margin: -25px 0 -9%; text-align: center; font-size: clamp(200px, 37vw, 540px); line-height: .85; letter-spacing: -.07em; font-weight: 900; user-select: none; }
        @media(max-width: 600px) { .hc-section { padding: 35px 22px 0; } .hc-section h2 { margin: 80px 0 40px; letter-spacing: -.035em; } .hc-top, .hc-bottom { align-items: flex-start; flex-direction: column; } .hc-wordmark { font-size: 48vw; } }
      `}</style>
    </section>
  );
}
