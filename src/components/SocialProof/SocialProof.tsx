import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="space-y-8">
              <div className="text-6xl text-accent mb-8 font-serif opacity-20">"</div>

              <blockquote className="headline-card text-text-primary leading-relaxed">
                Their AI system processes 50,000 documents daily with zero downtime.
                This isn't automation — it's business transformation.
              </blockquote>

              <div className="pt-8 border-t border-color">
                <div className="font-semibold text-lg">CTO</div>
                <div className="text-text-secondary body-base">Fortune 500 Manufacturing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;