
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function AboutPreview() {
  return (
    <section className="ap-section">
      <div className="ap-image">
        <ImagePlaceholder
          className="ap-placeholder"
          label="Printed samples and creative print work"
          imagePath="/images/printing-studio.jpg"
          artVariant="business-cards"
        />
        <span>MADE WITH ATTENTION TO DETAIL.</span>
      </div>

      <div className="ap-copy">
        <span>A LITTLE ABOUT US</span>
        <h2>GOOD IDEAS<br />DESERVE<br /><em>GOOD PRINT.</em></h2>
        <p>
          We help businesses bring their ideas to life through professional
          printing, custom signs and graphics. Work directly with Jot Panag
          and Deepi Panag to shape your next project.
        </p>
        <Link href="/about">MEET JP PRINTING & SIGNS ↗</Link>
      </div>

      <style>{`
        .ap-section { display: grid; grid-template-columns: 1fr .9fr; align-items: center; gap: 9%; padding: 110px 8%; background: #f7f7f7; color: #171717; }
        .ap-image { position: relative; min-width: 0; }
        .ap-image .ap-placeholder { aspect-ratio: .85; min-height: 0; }
        .ap-image > span { position: absolute; left: 16px; bottom: 16px; padding: 12px 14px; background: white; font-size: 9px; letter-spacing: 1px; }
        .ap-copy > span { color: #707070; font-size: 10px; letter-spacing: 2px; }
        .ap-copy h2 { margin: 22px 0; font-size: clamp(40px, 5vw, 68px); line-height: .95; letter-spacing: -1.5px; }
        .ap-copy h2 em { color: #e5007d; font-style: normal; }
        .ap-copy p { max-width: 430px; color: #707070; font-size: 14px; line-height: 1.9; }
        .ap-copy a { display: inline-block; margin-top: 18px; padding-bottom: 7px; color: #171717; border-bottom: 1px solid #171717; text-decoration: none; font-size: 11px; }
        @media(max-width: 760px) { .ap-section { grid-template-columns: 1fr; gap: 35px; padding: 70px 22px; } .ap-image .ap-placeholder { aspect-ratio: 1; } .ap-copy h2 { letter-spacing: -1px; } }
      `}</style>
    </section>
  );
}
