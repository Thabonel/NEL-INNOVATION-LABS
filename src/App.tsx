import Contact from './components/Contact/Contact'

const Arrow = () => <span aria-hidden="true">↗</span>

function App() {
  return (
    <div className="site-shell">
      <header className="site-header page-width">
        <a className="brand" href="#top" aria-label="NEL Innovation Labs home">
          <span className="brand-mark">N</span>
          <span>NEL Innovation Labs</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#approach">Approach</a>
          <a href="#studio">Studio</a>
        </nav>
        <a className="header-cta" href="#contact">
          <span className="status-dot" /> Discuss a project <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-main">
            <div>
              <p className="eyebrow">Independent AI product studio · Australia / Worldwide</p>
              <h1>We build intelligence<br />into <em>real</em> business.</h1>
            </div>
            <div className="hero-bottom">
              <p className="hero-copy">NEL designs and ships ambitious AI products for businesses that need more than a prototype. Strategy, engineering and launch, handled by one senior studio.</p>
              <a className="line-link" href="#work"><span>Explore selected work</span><span>↓</span></a>
            </div>
          </div>
          <aside className="hero-signal" aria-label="Studio focus">
            <div>
              <span className="micro-label">Signal / 001</span>
              <div className="signal-orb" aria-hidden="true" />
            </div>
            <p className="signal-note"><span className="micro-label">Current focus</span><br /><br />Useful AI. Durable systems.<br />Clear commercial outcomes.</p>
          </aside>
        </section>

        <section className="proof-strip page-width" aria-label="Studio proof points">
          <span className="micro-label">Proof, not promises</span>
          <strong>9 systems shipped</strong>
          <strong>95% AI accuracy</strong>
          <strong>60+ tables in production</strong>
          <strong>Built in Australia</strong>
        </section>

        <section className="work-section page-width" id="work">
          <div className="section-heading">
            <span className="micro-label">Featured work / 2024–26</span>
            <div>
              <h2>Systems with<br />something at stake.</h2>
              <p>Not experiments. Working products used by communities, operators and growing businesses. Each project starts with the outcome and earns its complexity.</p>
            </div>
          </div>

          <article className="case-study">
            <div className="case-visual">
              <div className="case-meta"><span>Unimog Community Hub · Barry AI</span><span>01</span></div>
              <div className="radar-art" aria-hidden="true" />
              <h3>A mechanic that<br />knows the fleet.</h3>
              <div className="case-metric">95%<small>answer accuracy</small></div>
            </div>
            <div className="case-copy">
              <span className="micro-label">Community intelligence</span>
              <h4>Specialist knowledge, available at the moment it matters.</h4>
              <p>Barry AI turns a deep vehicle knowledge base into useful diagnostic guidance inside a live enthusiast platform. The system combines two-pass retrieval with the context of a production community and more than 60 connected database tables.</p>
              <dl>
                <div><dt>System</dt><dd>Two-pass RAG assistant</dd></div>
                <div><dt>Platform</dt><dd>React + Supabase</dd></div>
                <div><dt>Outcome</dt><dd>Fast, contextual vehicle support</dd></div>
              </dl>
            </div>
          </article>

          <div className="project-pair">
            <article className="project-card acid-card">
              <div className="case-meta"><span>News Spark · Production AI</span><span>02</span></div>
              <div className="grid-art" aria-hidden="true" />
              <div className="project-card-bottom"><h3>From source<br />to broadcast.</h3><div className="card-metric">24/7<small>automated pipeline</small></div></div>
            </article>
            <article className="project-card paper-card">
              <div className="case-meta"><span>AI Query Hub · Product platform</span><span>03</span></div>
              <div className="query-art" aria-hidden="true"><span>Ask</span><span>Find</span><span>Act</span></div>
              <div className="project-card-bottom"><h3>Complex data.<br />Plain language.</h3><div className="card-arrow"><Arrow /></div></div>
            </article>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="page-width approach-grid">
            <div className="approach-title">
              <span className="micro-label light-label">How we work / 003</span>
              <h2>Senior thinking.<br /><em>Working</em> software.</h2>
            </div>
            <div className="principles">
              <article><span>01</span><h3>Find the leverage</h3><p>We start with the business constraint, not the model. The right system is the smallest one capable of changing the outcome.</p></article>
              <article><span>02</span><h3>Build the real thing</h3><p>Architecture, product and interface develop together. You see working software early, tested against real operating conditions.</p></article>
              <article><span>03</span><h3>Own the outcome</h3><p>Deployment is not the finish line. We tune, measure and make sure the product earns its place in the business.</p></article>
            </div>
          </div>
        </section>

        <section className="studio-section page-width" id="studio">
          <div className="section-heading studio-heading">
            <span className="micro-label">The studio / Australia</span>
            <div><h2>One studio from<br />first question to launch.</h2><p>NEL combines product strategy, systems architecture, AI engineering and interface design. That continuity keeps decisions sharp and delivery accountable.</p></div>
          </div>
          <div className="capabilities">
            <div><span>01</span><strong>AI product strategy</strong></div>
            <div><span>02</span><strong>Custom AI systems</strong></div>
            <div><span>03</span><strong>Full-stack platforms</strong></div>
            <div><span>04</span><strong>Production integration</strong></div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="site-footer page-width">
        <div className="brand"><span className="brand-mark">N</span><span>NEL Innovation Labs</span></div>
        <a href="mailto:info@nelinnovationlabs.com">info@nelinnovationlabs.com</a>
        <span>© 2026 · Australia / Worldwide</span>
      </footer>
    </div>
  )
}

export default App
