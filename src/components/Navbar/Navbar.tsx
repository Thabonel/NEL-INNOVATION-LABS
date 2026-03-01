import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/nel-logo.png"
              alt="Nel Innovation Labs"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('approach')}
              className="text-text-primary hover:text-accent transition-colors body-base font-medium"
            >
              Approach
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-text-primary hover:text-accent transition-colors body-base font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-text-primary hover:text-accent transition-colors body-base font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-text-primary hover:text-accent transition-colors body-base font-medium"
            >
              About
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="btn-secondary px-6 py-3 hidden sm:flex"
            >
              Get Demo
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-6 py-3"
            >
              Start Project
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;