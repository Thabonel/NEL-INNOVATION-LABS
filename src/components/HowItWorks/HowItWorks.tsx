import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: '30-minute call to understand your challenges, constraints, and goals'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Technical assessment and detailed project plan with fixed pricing'
    },
    {
      number: '03',
      title: 'Deploy',
      description: 'Working AI system in your production environment'
    }
  ];

  return (
    <section className="section-spacing bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline-section mb-8">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-border z-0 transform -translate-y-1/2"></div>
              )}

              <div className="card-simple text-center relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-bg-primary rounded-full font-mono font-bold text-xl mb-6">
                  {step.number}
                </div>

                <h3 className="headline-card mb-4">{step.title}</h3>

                <p className="body-base text-text-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;