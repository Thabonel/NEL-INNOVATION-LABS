import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is NEL Innovation Labs?",
      answer: "NEL Innovation Labs is an AI development studio that builds production-ready AI systems for businesses. We specialize in custom AI development, strategy & architecture, and full-stack AI product development."
    },
    {
      question: "How much does NEL Innovation Labs cost?",
      answer: "NEL provides custom project pricing based on scope and technical requirements. Contact us for consultation and project scoping to get a tailored quote."
    },
    {
      question: "What does NEL Innovation Labs integrate with?",
      answer: "NEL integrates with Supabase, OpenAI, Claude, Gemini, React/Next.js, Laravel/Livewire, and other modern development frameworks for comprehensive AI solutions."
    },
    {
      question: "Who is NEL Innovation Labs for?",
      answer: "NEL serves businesses, startups, and enterprises requiring custom AI development, complex system architecture, or full-stack AI product development."
    },
    {
      question: "How does NEL Innovation Labs compare to other AI consultants?",
      answer: "NEL focuses on building and shipping production systems rather than consulting. We deliver demonstrated results like 95% accuracy systems and 50+ agent orchestrations."
    },
    {
      question: "Is NEL Innovation Labs available in Australia?",
      answer: "Yes, NEL is based in Sydney, Australia and serves Australian and international clients with production-ready AI systems."
    },
    {
      question: "What AI models does NEL Innovation Labs use?",
      answer: "NEL uses multiple AI models including OpenAI (GPT, Whisper), Claude (Opus 4.6), and Gemini (1.5 Pro) in integrated systems for optimal performance."
    },
    {
      question: "What industries has NEL Innovation Labs worked with?",
      answer: "NEL has delivered systems for media/broadcasting, automotive, fashion, trade services, education, and marketing industries."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-spacing bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline-section mb-8">
              Frequently asked{' '}
              <span className="accent-text">questions</span>
            </h2>
            <p className="body-large text-text-secondary">
              Common questions about NEL Innovation Labs' AI development services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center p-6"
                >
                  <h3 className="headline-card pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div className="text-accent text-xl font-bold">+</div>
                    </div>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-color pt-6">
                      <p className="body-base text-text-secondary">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;