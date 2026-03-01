import React from 'react';

const ValueProps: React.FC = () => {
  const valueProps = [
    {
      title: 'Production-Grade',
      description: 'Every system we build runs in real production environments serving real users. News Spark Editor processes broadcast news, Unimog Hub manages 60+ database tables, AIBoostCampaign automates marketing workflows.'
    },
    {
      title: 'Multi-Model AI',
      description: 'We integrate the best models for each task. Barry AI uses Two-Pass RAG with 95% accuracy, News Spark Editor combines Whisper, Gemini 1.5 Pro, and Claude Opus 4.6.'
    },
    {
      title: 'Community-Proven',
      description: 'Barry AI processes vehicle diagnostics with 95% accuracy in production. Personal AI Manager orchestrates 6 specialized agents. Pattern Scribe AI serves enterprise fashion manufacturers.'
    }
  ];

  return (
    <section id="approach" className="section-spacing">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="card text-center">
              <h3 className="headline-card mb-4">{prop.title}</h3>
              <p className="body-base text-text-secondary">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;