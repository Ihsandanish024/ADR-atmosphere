export default function ActivitiesPage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="JTR ADR organization home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-logo-jtr">JTR</span>
            <span className="brand-logo-adr">ADR</span>
          </span>
          <span className="brand-name">
            <strong>JTR ADR organization</strong>
            <span>Practical dispute resolution</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="/#about">About ADR</a>
          <a href="/#methods">ADR methods</a>
          <a href="/#why-adr">Why ADR</a>
          <a href="/#process">How it works</a>
          <a href="/activities">Activities</a>
        </nav>

        <a className="header-cta" href="/">
          Back home <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main style={{ padding: "64px 0 120px" }}>
        <section
          style={{
            width: "min(100% - 96px, 1100px)",
            margin: "0 auto",
            padding: "48px 32px",
            background: "#f5f2eb",
            border: "1px solid #deddd7",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "18px" }}>
            <span className="eyebrow-line" />
            Our work
          </p>

          <h1 style={{ marginBottom: "18px", fontSize: "clamp(42px, 5vw, 68px)" }}>
            Activities
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 0 32px",
              color: "#666d75",
              fontSize: "14px",
              lineHeight: 1.9,
            }}
          >
            This page is ready for your upcoming content. Add details about your
            ADR activities, programmes, services, workshops, or engagement work
            here.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "Mediation support",
              "Negotiation coaching",
              "Training and workshops",
              "Community engagement",
            ].map((item) => (
              <div
                key={item}
                style={{
                  minHeight: "150px",
                  padding: "24px",
                  border: "1px solid #deddd7",
                  background: "#fffefa",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: "18px",
                    color: "#8d3442",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Activity
                </span>
                <h2
                  style={{
                    margin: 0,
                    color: "#202b3b",
                    fontSize: "24px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
