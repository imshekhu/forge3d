import Link from "next/link";
import { Header, Logo } from "@/components/header";
import { HeroVisual } from "@/components/hero-visual";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cube,
  Gift,
  MapPin,
  Plus,
  Printer,
  Spark,
  Upload,
} from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import {
  concepts,
  faqs,
  processSteps,
  services,
  type Service,
} from "@/data/content";

const serviceIcons: Record<Service["icon"], React.ReactNode> = {
  spark: <Spark />,
  gift: <Gift />,
  part: <Cube />,
  upload: <Upload />,
};

function ConceptVisual({
  visual,
}: {
  visual: "figure" | "mechanical" | "decor";
}) {
  if (visual === "figure") {
    return (
      <div className="concept-art figure-art" aria-hidden="true">
        <div className="figure-head" />
        <div className="figure-body" />
        <div className="figure-arm arm-left" />
        <div className="figure-arm arm-right" />
        <div className="figure-base" />
      </div>
    );
  }

  if (visual === "mechanical") {
    return (
      <div className="concept-art mechanical-art" aria-hidden="true">
        <div className="gear gear-large" />
        <div className="gear gear-small" />
        <div className="bracket" />
      </div>
    );
  }

  return (
    <div className="concept-art decor-art" aria-hidden="true">
      <div className="vase vase-back" />
      <div className="vase vase-front" />
      <div className="decor-ring" />
    </div>
  );
}

export default function Home() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Forge3D",
    description:
      "AI-assisted custom 3D design and local 3D printing for customers across the Greater Toronto Area.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Toronto Area",
    },
    priceRange: "$$",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://forge3d.ca",
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="shell hero-inner">
            <div className="hero-copy">
              <div className="availability">
                <span />
                Now taking projects across the GTA
              </div>
              <h1>
                Your idea,
                <br />
                <em>made real.</em>
              </h1>
              <p className="hero-lead">
                Custom 3D design and precision printing—from a rough idea,
                reference image, or ready-to-print file.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#quote">
                  Start your project
                  <ArrowRight />
                </a>
                <a className="button button-ghost" href="#work">
                  Explore possibilities
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <span>01</span>
                  <p><b>AI-assisted</b><br />model creation</p>
                </div>
                <div>
                  <span>02</span>
                  <p><b>Precision</b><br />FDM printing</p>
                </div>
                <div>
                  <span>03</span>
                  <p><b>Local</b><br />GTA service</p>
                </div>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <div>
              <span>CONCEPT</span><i /><span>MODEL</span><i />
              <span>PRINT</span><i /><span>CREATE</span><i />
              <span>CONCEPT</span><i /><span>MODEL</span><i />
              <span>PRINT</span><i /><span>CREATE</span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Capabilities / 01</p>
                <h2>From digital spark<br />to physical object.</h2>
              </div>
              <p className="section-intro">
                You don&apos;t need to know 3D software. Bring the problem, the
                file, or simply the idea—we&apos;ll help define the next step.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon">{serviceIcons[service.icon]}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}><Check width={15} height={15} />{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="shell">
            <div className="section-heading work-heading">
              <div>
                <p className="eyebrow">Possibilities / 02</p>
                <h2>What can we forge?</h2>
              </div>
              <p className="section-intro">
                A few directions for your next project. Every job starts with a
                feasibility review and a quote built around your requirements.
              </p>
            </div>

            <div className="concept-grid">
              {concepts.map((concept, index) => (
                <article
                  className="concept-card"
                  key={concept.title}
                  style={{ "--accent": concept.accent } as React.CSSProperties}
                >
                  <div className="concept-visual">
                    <span className="concept-index">0{index + 1}</span>
                    <span className="concept-label">CONCEPT DIRECTION</span>
                    <ConceptVisual visual={concept.visual} />
                    <div className="visual-floor" />
                  </div>
                  <div className="concept-content">
                    <p>{concept.category}</p>
                    <h3>{concept.title}</h3>
                    <span>{concept.description}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="honesty-note">
              <Spark width={19} height={19} />
              <p>
                <b>A note on the visuals:</b> These are concept illustrations,
                not claimed client projects. Real Forge3D work will be added as
                the portfolio grows.
              </p>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="shell process-shell">
            <div className="process-copy">
              <p className="eyebrow">Workflow / 03</p>
              <h2>One clear path from “what if?” to “here it is.”</h2>
              <p>
                No mystery pricing and no printing before you approve the plan.
                We make the process understandable at every stage.
              </p>
              <a className="text-button" href="#quote">
                Discuss your project <ArrowRight width={18} height={18} />
              </a>
            </div>

            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                  <ArrowUpRight width={22} height={22} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section capabilities-section">
          <div className="shell">
            <div className="capability-panel">
              <div className="capability-copy">
                <p className="eyebrow">The workshop / 04</p>
                <h2>Built for precise, dependable output.</h2>
                <p>
                  Projects are prepared and produced on a Bambu Lab P2S,
                  combining enclosed high-speed printing with careful file
                  review and hands-on quality checks.
                </p>
                <div className="material-tags" aria-label="Common materials">
                  <span>PLA</span><span>PETG</span><span>TPU*</span><span>Specialty*</span>
                </div>
                <small>*Material availability and suitability are confirmed per project.</small>
              </div>
              <div className="capability-specs">
                <div><Printer /><span>Build volume</span><b>256 × 256 × 256 mm</b></div>
                <div><Cube /><span>Layer detail</span><b>Project dependent</b></div>
                <div><Spark /><span>Model source</span><b>Idea, image, or 3D file</b></div>
              </div>
              <div className="capability-machine" aria-hidden="true">
                <span className="machine-line line-a" />
                <span className="machine-line line-b" />
                <span className="machine-line line-c" />
                <div className="machine-core"><span /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section local-section">
          <div className="shell local-grid">
            <div className="local-map" aria-hidden="true">
              <div className="map-grid" />
              <div className="map-ring ring-a" />
              <div className="map-ring ring-b" />
              <div className="map-pin"><MapPin width={30} height={30} /></div>
              <span className="map-city city-toronto">TORONTO</span>
              <span className="map-city city-mississauga">MISSISSAUGA</span>
              <span className="map-city city-vaughan">VAUGHAN</span>
              <span className="map-city city-markham">MARKHAM</span>
            </div>
            <div className="local-copy">
              <p className="eyebrow">Local by design / 05</p>
              <h2>Made here.<br />For the GTA.</h2>
              <p>
                Forge3D is focused on customers across the Greater Toronto
                Area. That means direct communication, practical local
                handoff, and no cross-border uncertainty.
              </p>
              <ul>
                <li><Check /> GTA pickup arranged per order</li>
                <li><Check /> Local delivery discussed at quote</li>
                <li><Check /> Clear timing before production</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="shell faq-grid">
            <div className="faq-heading">
              <p className="eyebrow">Questions / 06</p>
              <h2>Before we hit print.</h2>
              <p>
                Still unsure? Send the idea anyway. A quick feasibility check
                is the easiest place to start.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary>
                    <span>0{index + 1}</span>{faq.question}<Plus />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section" id="quote">
          <div className="quote-grid-bg" aria-hidden="true" />
          <div className="shell">
            <div className="quote-heading">
              <div>
                <p className="eyebrow">Project intake / 07</p>
                <h2>Ready to make it real?</h2>
              </div>
              <p>
                Tell us what you&apos;re imagining. We&apos;ll review the
                details and respond with the best next step—not an automated guess.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <div>
              <Logo />
              <p>Custom ideas, intelligently modelled<br />and locally printed in the GTA.</p>
            </div>
            <div className="footer-links">
              <div>
                <p>Navigate</p>
                <a href="#services">Services</a>
                <a href="#work">Possibilities</a>
                <a href="#process">Process</a>
                <a href="#quote">Request a quote</a>
              </div>
              <div>
                <p>Information</p>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms & policies</Link>
                <a href="#faq">FAQ</a>
              </div>
              <div>
                <p>Service area</p>
                <span>Greater Toronto Area</span>
                <span>Ontario, Canada</span>
                <a href="#quote">Local enquiries</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Forge3D. All rights reserved.</p>
            <p>AI-assisted design · Precision 3D printing</p>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>

      <a className="mobile-quote-cta" href="#quote">
        Request a quote <ArrowRight width={19} height={19} />
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  );
}
