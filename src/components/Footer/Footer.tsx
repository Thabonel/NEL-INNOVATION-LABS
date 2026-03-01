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

            {/* Removed footer navigation links */}
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