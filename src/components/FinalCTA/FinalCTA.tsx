import React from 'react';

const FinalCTA: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="headline-section">
              Ready to build something{' '}
              <span className="accent-text">that works?</span>
            </h2>

            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Every great AI system starts with understanding your specific challenges. Let's talk.
            </p>

            <div className="pt-4">
              <button
                onClick={() => scrollToSection('contact-form')}
                className="btn-primary text-lg px-12 py-4"
              >
                Start Your Project
              </button>
            </div>

            <p className="body-small text-text-secondary">
              We respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;