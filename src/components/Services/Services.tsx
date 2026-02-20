import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom AI Development',
      description: 'Production-ready systems built from scratch. Like Barry AI in Unimog Hub with 95% accuracy processing vehicle diagnostics, or News Spark Editor\'s multi-model pipeline.',
      bullets: [
        'Multi-model AI integration (Claude, Gemini, OpenAI)',
        'Two-Pass RAG systems with 95% accuracy',
        'Real-time processing (Whisper + FFmpeg pipelines)'
      ],
      example: 'News Spark Editor, Barry AI'
    },
    {
      title: 'AI Strategy & Architecture',
      description: 'Complex system design based on battle-tested patterns. AIBoostCampaign\'s 50+ agent orchestration and scalable AI architectures.',
      bullets: [
        '50+ specialized Python agents (AIBoostCampaign)',
        'Multi-model AI orchestration systems',
        'Multi-platform integration strategies'
      ],
      example: 'AIBoostCampaign, Barry AI'
    },
    {
      title: 'Product Development',
      description: 'Full-stack AI platforms from concept to community. AI Query Hub serves multiple tiers, Unimog Hub manages 60+ database tables.',
      bullets: [
        'Supabase + React production architectures',
        '60+ table database design (Unimog Hub)',
        'Tiered SaaS models (Starter/Pro/Business)'
      ],
      example: 'AI Query Hub, Unimog Community Hub'
    }
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline-section mb-8">
            How we help you build{' '}
            <span className="accent-text">AI that works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="space-y-6">
                <h3 className="headline-card">{service.title}</h3>

                <p className="body-base text-text-secondary">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="body-small text-text-secondary">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-color">
                  <div className="body-small text-text-secondary mt-3">
                    <strong>Examples:</strong> {service.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;