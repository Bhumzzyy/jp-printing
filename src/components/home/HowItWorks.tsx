
const steps = [
  { number: "01", title: "Tell us your idea", text: "Share your product, size, quantity and vision." },
  { number: "02", title: "Discuss the details", text: "Explore materials, options and your quote." },
  { number: "03", title: "Bring it to life", text: "Move your print or signage project forward." },
];

export default function HowItWorks() {
  return (
    <section className="hiw-section">
      <div className="hiw-heading">
        <span>NO COMPLICATED STUFF</span>
        <h2>IDEA IN.<br />IMPACT OUT.</h2>
      </div>

      <div className="hiw-grid">
        {steps.map((step) => (
          <article className="hiw-card" key={step.number}>
            <span className="hiw-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>

      <style>{`
        .hiw-section { padding: 100px 8%; background: #f5f5f5; color: #171717; }
        .hiw-heading > span { color: #707070; font-size: 10px; letter-spacing: 2px; }
        .hiw-heading h2 { margin: 18px 0 45px; font-size: clamp(48px, 6vw, 80px); line-height: .9; letter-spacing: -2px; }
        .hiw-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid #d8d8d8; }
        .hiw-card { padding: 28px 25px 20px 0; }
        .hiw-card + .hiw-card { padding-left: 25px; border-left: 1px solid #d8d8d8; }
        .hiw-number { font-size: 38px; font-weight: 900; color: #00a9c7; }
        .hiw-card:nth-child(2) .hiw-number { color: #e5007d; }
        .hiw-card:nth-child(3) .hiw-number { color: #9b8700; }
        .hiw-card h3 { margin: 22px 0 10px; font-size: 19px; }
        .hiw-card p { max-width: 270px; color: #707070; font-size: 14px; line-height: 1.8; }
        @media(max-width: 700px) { .hiw-section { padding: 70px 22px; } .hiw-grid { grid-template-columns: 1fr; } .hiw-card, .hiw-card + .hiw-card { padding: 22px 0; border-left: 0; border-bottom: 1px solid #d8d8d8; } .hiw-heading h2 { letter-spacing: -1px; } }
      `}</style>
    </section>
  );
}
