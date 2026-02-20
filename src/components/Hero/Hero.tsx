import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="section-spacing mt-20">
      <div className="container">
        <div className="content-grid">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="label-text">AI DEVELOPMENT STUDIO</div>

            <h1 className="headline-hero">
              AI systems that{' '}
              <span className="accent-text">actually work</span>{' '}
              in production
            </h1>

            <p className="body-large text-text-secondary max-w-lg">
              We're builders, not consultants. NEL ships production-ready AI systems — from custom development to full product launches — with measurable business impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Start Your Project
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-secondary"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-surface border border-color rounded-lg p-8 overflow-hidden">
              {/* Code Window Mockup */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="font-mono text-sm space-y-2">
                  <div className="text-text-secondary"># Barry AI Deployment (Unimog Hub)</div>
                  <div>
                    <span className="text-accent">supabase</span>{' '}
                    <span className="text-text-primary">deploy --project-ref abc123</span>
                  </div>
                  <div className="text-text-secondary">→ Two-Pass RAG: Active</div>
                  <div className="text-text-secondary">→ Barry AI accuracy: 95%</div>
                  <div className="text-text-secondary">→ 60+ tables: Synced</div>
                  <div className="text-accent">→ Community platform: Live</div>
                </div>
              </div>

              {/* Geometric Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-accent opacity-20 rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-accent opacity-10 rounded-full"></div>
              <div className="absolute bottom-4 right-12 w-8 h-8 border border-accent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;