import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      name: 'AI Query Hub',
      description: 'Intelligent productivity platform',
      metric: 'Starter/Pro/Business',
      detail: 'React + Supabase + AI',
      tech: ['Document Management', 'AI Analysis', 'Task Planning', 'Team Collaboration']
    },
    {
      name: 'News Spark Editor',
      description: 'AI-native broadcast news production',
      metric: 'Multi-model AI',
      detail: 'Text-to-video pipeline',
      tech: ['OpenAI Whisper', 'Gemini 1.5 Pro', 'Claude Opus 4.6', 'FFmpeg']
    },
    {
      name: 'Unimog Community Hub',
      description: 'Vehicle enthusiast platform',
      metric: '95% accuracy',
      detail: '60+ database tables',
      tech: ['Barry AI Mechanic', 'Two-Pass RAG', 'Trip Planning', 'Marketplace']
    },
    {
      name: 'AIBoostCampaign',
      description: 'Marketing automation platform',
      metric: '50+ Python agents',
      detail: '10,083 lines of code',
      tech: ['18 Edge Functions', 'Multi-model AI', 'Campaign Logic', 'SEO Automation']
    },
    {
      name: 'Wheels & Wins',
      description: 'AI assistant platform',
      metric: 'PAM System',
      detail: 'Supabase + RapidAPI',
      tech: ['WebSocket Streaming', 'Calendar Integration', 'Voice Detection', 'Personal AI']
    }
  ];

  return (
    <section id="portfolio" className="section-spacing bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline-section mb-8">
            Production systems.{' '}
            <span className="accent-text">Real impact.</span>
          </h2>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            From AI-powered productivity platforms to broadcast news automation,
            each system demonstrates our commitment to shipping production-ready solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="space-y-6">
                <div>
                  <h3 className="headline-card mb-3">{project.name}</h3>
                  <p className="body-base text-text-secondary mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-color pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-bold text-accent">
                      {project.metric}
                    </div>
                    <div className="body-small text-text-secondary">
                      {project.detail}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="body-small text-text-secondary">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 text-center">
          <div className="card-simple">
            <div className="text-2xl font-bold text-accent mb-2">5</div>
            <div className="body-small text-text-secondary">Production Systems</div>
          </div>
          <div className="card-simple">
            <div className="text-2xl font-bold text-accent mb-2">60+</div>
            <div className="body-small text-text-secondary">Database Tables (Unimog Hub)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;