import React from 'react';

const LogoBar: React.FC = () => {
  const logos = [
    'AI Query Hub',
    'News Spark Editor',
    'Unimog Community Hub',
    'AIBoostCampaign',
    'Pattern Scribe AI',
    'Personal AI Manager',
    'Beyond RV'
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="text-center space-y-8">
          <p className="body-small text-text-secondary">
            Proven in production across industries
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium text-lg"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;