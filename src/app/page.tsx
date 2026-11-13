import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "A voice in the outcome",
    description:
      "ADR can give the people involved more opportunity to shape a practical way forward.",
  },
  {
    number: "02",
    title: "A process that fits",
    description:
      "Different disputes call for different approaches. The right process depends on the people and the issue.",
  },
  {
    number: "03",
    title: "Focus on moving forward",
    description:
      "Constructive dialogue can help clarify what matters and where common ground may exist.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand the dispute",
    description:
      "Clarify the issues, the people involved, and what a useful outcome might look like.",
  },
  {
    number: "02",
    title: "Explore your options",
    description:
      "Learn about possible processes and consider which approach may suit your situation.",
  },
  {
    number: "03",
    title: "Choose a way forward",
    description:
      "With the right support, take an informed next step toward resolving the disagreement.",
  },
];

const methods = [
  {
    number: "01",
    title: "Negotiation",
    description:
      "The people in a dispute communicate directly, or through their representatives, to see whether they can reach an agreement.",
  },
  {
    number: "02",
    title: "Mediation",
    description:
      "An impartial mediator helps the participants have a structured conversation. The participants decide whether to agree.",
  },
  {
    number: "03",
    title: "Conciliation",
    description:
      "A conciliator helps the participants explore settlement. Depending on the process, the conciliator may also suggest possible terms.",
  },
  {
    number: "04",
    title: "Arbitration",
    description:
      "The parties present their positions to an arbitrator, who gives a decision. Its effect depends on the agreement and applicable law.",
  },
  {
    number: "05",
    title: "Neutral evaluation",
    description:
      "A neutral person gives an initial assessment of the issues or likely strengths of a case to help inform next steps.",
  },
  {
    number: "06",
    title: "Expert determination",
    description:
      "An independent specialist considers a defined technical or professional question. The parties’ agreement sets the process and effect.",
  },
  {
    number: "07",
    title: "Med-Arb",
    description:
      "A combined process that begins with mediation and may move to arbitration if issues remain unresolved, subject to agreed safeguards.",
  },
  {
    number: "08",
    title: "Online dispute resolution",
    description:
      "Technology supports some or all of a dispute-resolution process, such as exchanging proposals or meeting remotely.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="JTR ADR organization home">
          <span className="brand-mark">JTR</span>
          <span className="brand-name">
            <strong>JTR ADR organization</strong>
            <span>Practical dispute resolution</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About ADR</a>
          <a href="#methods">ADR methods</a>
          <a href="#why-adr">Why ADR</a>
          <a href="#process">How it works</a>
          <a href="/activities">Activities</a>
        </nav>

        <a className="header-cta" href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              A more constructive way forward
            </p>
            <h1>
              Every dispute deserves a <em>way forward.</em>
            </h1>
            <p className="hero-description">
              Alternative dispute resolution offers practical ways to address
              disagreements beyond a courtroom. Understand your options, find
              space for dialogue, and take an informed next step.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">
                Discover ADR <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#contact">
                Talk to our team <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-dot" />
              Clear information. Thoughtful conversations. Practical options.
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <Image
                src="/images/adr%202.jpg"
                alt="A workspace with a note about alternative dispute resolution"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 48vw"
                className="hero-image"
              />
            </div>
            <div className="image-caption">
              <span className="caption-icon" aria-hidden="true">
                ↗
              </span>
              <span>
                <strong>Start with understanding</strong>
                <span>Explore a different path to resolution.</span>
              </span>
            </div>
            <span className="hero-decoration" aria-hidden="true">
              ADR
            </span>
          </div>
        </section>

        <section className="principles" aria-label="Our approach">
          <div className="principles-inner">
            <p>Resolution begins with a better conversation.</p>
            <span>Dialogue first</span>
            <span>People heard</span>
            <span>Options explored</span>
          </div>
        </section>

        <section className="about section-wrap section-spacing" id="about">
          <div className="about-visual">
            <div className="about-image-frame">
              <Image
                src="/images/adr%205.jpg"
                alt="Illustration of two people reaching an agreement"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                className="about-image"
              />
            </div>
            <div className="image-index">
              <span>01</span> / A shared path
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Understanding the basics
            </p>
            <h2>
              What is <em>ADR?</em>
            </h2>
            <p>
              Alternative dispute resolution (ADR) describes ways of resolving
              disagreements without relying only on a court trial. Depending on
              the situation, people may use a neutral third party, structured
              discussion, or another process to work through the issues.
            </p>
            <p>
              ADR is not one single method—and it is not right for every
              dispute. Understanding the choices is a useful first step toward
              deciding what may work for you.
            </p>
            <a className="text-link" href="#process">
              See a typical path <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="methods-section" id="methods">
          <div className="section-wrap">
            <div className="methods-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-line" />
                  Explore the possibilities
                </p>
                <h2>
                  Different disputes.
                  <br />
                  Different <em>approaches.</em>
                </h2>
                <p className="methods-intro">
                  ADR includes a range of processes. Here are some commonly
                  used approaches; the right option depends on the dispute,
                  participants, and applicable rules.
                </p>
              </div>
              <div className="methods-image">
                <Image
                  src="/images/adr%204.jpg"
                  alt="A speaker presenting at an ADR and peacebuilding event"
                  fill
                  sizes="(max-width: 680px) 100vw, 36vw"
                  className="methods-photo"
                />
                <span>Learning, dialogue &amp; practical resolution</span>
              </div>
            </div>

            <div className="methods-grid">
              {methods.map((method) => (
                <article className="method-card" key={method.number}>
                  <span className="method-number">{method.number}</span>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </article>
              ))}
            </div>

            <p className="methods-note">
              Processes, terminology, and legal effect can vary by location and
              agreement. This overview is general information, not legal advice.
            </p>
          </div>
        </section>

        <section className="why-section" id="why-adr">
          <div className="section-wrap why-inner">
            <div className="why-heading">
              <div>
                <p className="eyebrow eyebrow-light">
                  <span className="eyebrow-line" />
                  A different approach
                </p>
                <h2>
                  Why consider <em>ADR?</em>
                </h2>
              </div>
              <p>
                Court proceedings are important in many circumstances. ADR can
                offer another route to consider—one that may better fit the
                people, priorities, and needs involved.
              </p>
            </div>

            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <article className="benefit-card" key={benefit.number}>
                  <span className="benefit-number">{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <span className="benefit-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>

            <div className="courtroom-note">
              <div className="courtroom-image">
                <Image
                  src="/images/adr%203.jpg"
                  alt="A gavel beside a document about a court hearing"
                  fill
                  sizes="(max-width: 760px) 100vw, 28vw"
                  className="courtroom-photo"
                />
              </div>
              <p>
                <strong>ADR is an option to explore, not a one-size-fits-all
                answer.</strong>{" "}
                Some disputes need a court decision or urgent legal action.
                Consider qualified legal advice about your specific situation.
              </p>
            </div>
          </div>
        </section>

        <section className="process section-wrap section-spacing" id="process">
          <div className="process-heading">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              From conflict to clarity
            </p>
            <h2>
              A thoughtful first step
              <br />
              can change the <em>conversation.</em>
            </h2>
            <p>
              Every matter is different, but a clearer understanding of the
              dispute and available options can help you decide what comes next.
            </p>
          </div>
          <div className="steps-list">
            {steps.map((step) => (
              <article className="step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="step-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-wrap">
            <div>
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-line" />
                Your next step
              </p>
              <h2>
                Let’s find a more
                <br />
                constructive <em>way forward.</em>
              </h2>
            </div>
            <div className="contact-card">
              <span className="contact-card-mark" aria-hidden="true">
                ↗
              </span>
              <h3>Start a conversation</h3>
              <p>
                Our contact details are being prepared. They will be added here
                so you can reach out about your dispute.
              </p>
              <p className="privacy-note">
                Please don’t share confidential or sensitive case details on
                this website.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#home">
          <span className="brand-mark">ADR</span>
          <span className="brand-name">
            <strong>JTR ADR organization</strong>
            <span>Practical dispute resolution</span>
          </span>
        </a>
        <p>Clearer conversations. Constructive possibilities.</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
