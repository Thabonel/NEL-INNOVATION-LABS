import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const footerLinks = {
    'Getting Started': [
      { name: 'Start Project', action: () => scrollToSection('contact') },
      { name: 'Get Demo', action: () => scrollToSection('portfolio') }
    ],
    'Services': [
      { name: 'Custom Development', action: () => scrollToSection('services') },
      { name: 'AI Strategy', action: () => scrollToSection('services') },
      { name: 'Product Development', action: () => scrollToSection('services') }
    ],
    'Company': [
      { name: 'About', action: () => scrollToSection('about') },
      { name: 'Portfolio', action: () => scrollToSection('portfolio') },
      { name: 'Contact', action: () => scrollToSection('contact') }
    ]
  };

  return (
    <footer className="bg-bg-primary border-t border-color">
      <div className="container">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo and Contact */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="font-bold text-xl">NEL</div>
                <div className="bg-accent text-bg-primary px-3 py-1 rounded-full text-xs font-semibold">
                  INNOVATION LABS
                </div>
              </div>

              <div className="space-y-3">
                <div className="body-small text-text-secondary">
                  <strong>Connect</strong>
                </div>
                <div className="body-small text-text-secondary">
                  hello@nelinnovationlabs.com
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-6">
                <h4 className="font-semibold">{category}</h4>
                <div className="space-y-3">
                  {links.map((link, index) => (
                    <button
                      key={index}
                      onClick={link.action}
                      className="block body-small text-text-secondary hover:text-accent transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-color">
          <div className="text-center">
            <p className="body-small text-text-secondary">
              © 2026 NEL Innovation Labs Pty Ltd — Built in Australia, delivered globally
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;