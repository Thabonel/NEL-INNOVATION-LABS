import React from 'react';

const Footer: React.FC = () => {
  // Simplified footer - just logo and contact info

  return (
    <footer className="bg-bg-primary border-t border-color">
      <div className="container">
        <div className="py-16">
          <div className="flex justify-center">
            {/* Logo and Contact */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="font-bold text-xl">Nel Innovation Labs</div>
              </div>

              <div className="space-y-3 text-center">
                <div className="space-y-2">
                  <a
                    href="mailto:info@nelinnovationlabs.com"
                    className="body-base text-text-secondary hover:text-accent transition-colors"
                  >
                    info@nelinnovationlabs.com
                  </a>
                  <div className="body-small text-text-secondary">
                    Sydney, Australia
                  </div>
                </div>
              </div>
            </div>

            {/* Removed footer navigation links */}
          </div>
        </div>

        <div className="py-8 border-t border-color">
          <div className="text-center">
            <p className="body-small text-text-secondary">
              © 2026 NEL Innovation Labs Pty Ltd — Built in Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;