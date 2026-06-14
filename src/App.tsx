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
          <strong>49 serverless functions</strong>
          <strong>16 products managed</strong>
          <strong>94 desktop Lighthouse</strong>
          <strong>#1–2 brand search position</strong>
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
              <img className="case-image" src="/beyond-rv-case-study.webp" alt="Beyond RV expedition camper featured on the rebuilt website" />
              <div className="case-image-overlay" aria-hidden="true" />
              <div className="case-meta"><span>Beyond RV · Digital platform</span><span>01</span></div>
              <h3>Built for where<br />roads end.</h3>
              <div className="case-metric">49<small>serverless functions</small></div>
            </div>
            <div className="case-copy">
              <span className="micro-label">Commerce · AI · Operations</span>
              <h4>A manufacturer’s website rebuilt as an intelligent business system.</h4>
              <p>NEL rebuilt Beyond RV from legacy WordPress into a fast Astro platform serving customers and the business owner. The result combines a 16-product catalogue, AI customer support, lead intelligence and an admin assistant that can safely manage site content and operations.</p>
              <dl>
                <div><dt>Platform</dt><dd>Astro + React + Netlify</dd></div>
                <div><dt>Intelligence</dt><dd>Customer chat, admin AI, owner copilot</dd></div>
                <div><dt>Outcome</dt><dd>#1–2 brand ranking and ChatGPT discovery</dd></div>
              </dl>
              <a className="case-link" href="https://beyondrv.com.au" target="_blank" rel="noreferrer">Visit live site <Arrow /></a>
            </div>
          </article>

          <article className="case-study">
            <div className="case-visual">
              <img className="case-image" src="/tradie-shield-case-study.jpg" alt="Tradies working on a construction site — the target users of Tradie Shield" />
              <div className="case-image-overlay" aria-hidden="true" />
              <div className="case-meta"><span>Tradie Shield · AI financial guardian</span><span>02</span></div>
              <h3>AI that texts tradies<br />before budgets blow.</h3>
              <div className="case-metric">55K<small>lines of TypeScript</small></div>
            </div>
            <div className="case-copy">
              <span className="micro-label">AI · SMS · Xero Integration</span>
              <h4>An AI that watches tradies' job costs and texts them before a budget blowout becomes a business failure.</h4>
              <p>NEL built Tradie Shield to solve the root cause of Australia's construction insolvency crisis — invisible job-level losses. The system connects to Xero and Tradify, monitors actual vs quoted costs across every active job, and proactively texts tradies when a job is heading over budget. No app required: the entire interface is SMS.</p>
              <dl>
                <div><dt>Platform</dt><dd>React + Fastify + Supabase</dd></div>
                <div><dt>Intelligence</dt><dd>OpenAI GPT-5.5, SMS intent parsing, Deal Guardian contract AI</dd></div>
                <div><dt>Outcome</dt><dd>Real-time job health monitoring with proactive SMS alerts</dd></div>
              </dl>
              <a className="case-link" href="https://tradieshield.com.au" target="_blank" rel="noreferrer">Visit live site <Arrow /></a>
            </div>
          </article>

          <div className="project-pair">
            <a className="project-card signal-card" href="https://unimogcommunityhub.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="case-meta"><span>Unimog Community Hub · Barry AI</span><span>03</span></div>
              <div className="radar-mini" aria-hidden="true" />
              <div className="project-card-bottom"><h3>A mechanic that<br />knows the fleet.</h3><div className="card-metric">95%<small>answer accuracy</small></div></div>
            </a>
            <article className="project-card paper-card">
              <div className="case-meta"><span>AI Query Hub · Product platform</span><span>04</span></div>
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
