import React from 'react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      title: 'Consultant Theatre',
      description: 'Beautiful slides, zero working code'
    },
    {
      title: 'Tool Overwhelm',
      description: '1000+ AI tools, no clear ROI path'
    },
    {
      title: 'Implementation Gap',
      description: 'Great strategy meetings, nothing ships'
    }
  ];

  const solutions = [
    'Ship working software',
    'Battle-tested patterns',
    'No-BS metrics'
  ];

  return (
    <section className="section-spacing bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <div className="label-text mb-4">THE CHALLENGE</div>
          <h2 className="headline-section mb-8">
            85% of AI projects fail.{' '}
            <span className="accent-text">We built a track record</span>{' '}
            of making them work.
          </h2>
        </div>

        <div className="content-grid">
          {/* Problem Column */}
          <div className="space-y-8">
            <h3 className="headline-card text-red-400 mb-8">The Problem</h3>

            {problems.map((problem, index) => (
              <div key={index} className="card-simple border-l-4 border-red-400">
                <h4 className="font-semibold text-lg mb-2">{problem.title}</h4>
                <p className="text-text-secondary">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Solution Column */}
          <div className="space-y-8">
            <div className="label-text">THE NEL APPROACH</div>
            <h3 className="headline-card mb-8">
              Code first.{' '}
              <span className="accent-text">Results always.</span>
            </h3>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="body-large font-medium">{solution}</span>
                </div>
              ))}
            </div>

            <div className="card bg-accent/10 border-accent/30 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">94%</div>
                <div className="body-small text-text-secondary">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;