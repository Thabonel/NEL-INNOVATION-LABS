import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Menu, X, ArrowRight, Play, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/60 backdrop-blur-xl border border-moss/20 shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        borderRadius: 'var(--border-radius)',
        padding: '0.75rem 1.5rem',
        minWidth: '320px',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="font-heading text-xl font-bold text-moss">
          NEL Labs
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#hero" className="link-hover text-moss font-medium">Home</a>
          <a href="#features" className="link-hover text-moss font-medium">Features</a>
          <a href="#protocol" className="link-hover text-moss font-medium">Process</a>
          <a href="#contact" className="link-hover text-moss font-medium">Contact</a>
          <button className="btn-primary text-sm">
            Start Your Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-moss"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-cream/90 backdrop-blur-xl border border-moss/20 rounded-3xl p-4">
          <div className="flex flex-col space-y-3">
            <a href="#hero" className="link-hover text-moss font-medium py-2">Home</a>
            <a href="#features" className="link-hover text-moss font-medium py-2">Features</a>
            <a href="#protocol" className="link-hover text-moss font-medium py-2">Process</a>
            <a href="#contact" className="link-hover text-moss font-medium py-2">Contact</a>
            <button className="btn-primary mt-2">
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.hero-label', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from('.hero-main', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=0.6')
      .from('.hero-drama', {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.hero-description', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-end pb-20"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(26, 26, 26, 0.8), rgba(46, 64, 54, 0.3)), url('https://images.unsplash.com/photo-1574263867128-fcd9785ce1ca?q=80&w=2940&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div ref={contentRef} className="max-w-4xl">
          <div className="hero-label font-mono text-sm uppercase tracking-wider text-clay mb-6">
            AI Development Studio
          </div>

          <h1 className="mb-8">
            <div className="hero-main font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4 leading-tight">
              Production AI is the
            </div>
            <div className="hero-drama font-drama text-6xl md:text-8xl lg:text-9xl text-clay leading-none">
              standard.
            </div>
          </h1>

          <p className="hero-description text-cream/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            We're builders, not consultants. NEL ships production-ready AI systems — from custom development to full product launches — with measurable business impact.
          </p>

          <div className="hero-cta">
            <button className="btn-primary text-lg px-8 py-4">
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Diagnostic Shuffler Component
const DiagnosticShuffler = () => {
  const [cards] = useState([
    'Production-Grade Systems',
    'Multi-Model Integration',
    'Real-World Deployment'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const shufflerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  useEffect(() => {
    if (shufflerRef.current) {
      gsap.fromTo('.diagnostic-card-active',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
      );
    }
  }, [currentIndex]);

  return (
    <div ref={shufflerRef} className="diagnostic-cards">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`diagnostic-card ${index === currentIndex ? 'diagnostic-card-active' : ''}`}
          style={{
            top: `${index * 20}px`,
            zIndex: index === currentIndex ? 3 : 2 - index,
            opacity: index === currentIndex ? 1 : 0.6 - (index * 0.2),
            transform: `scale(${index === currentIndex ? 1 : 0.95 - (index * 0.05)})`,
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

// Telemetry Typewriter Component
const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const messages = [
    'Multi-model AI pipeline active...',
    'Barry AI diagnostic: 95% accuracy',
    'News Spark Editor: Processing video...',
    'Pattern Scribe AI: 100+ components ready',
    'Personal AI Manager: 6 agents online',
    'System status: All production ready'
  ];

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          setText('');
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentMessageIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="telemetry-feed">
      <div className="flex items-center mb-4">
        <div className="status-dot mr-2"></div>
        <span className="text-xs uppercase tracking-wide">Live Feed</span>
      </div>
      <div className="font-mono text-sm">
        {text}
        <span className={`text-clay ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
      </div>
    </div>
  );
};

// Cursor Protocol Scheduler Component
const CursorScheduler = () => {
  const [activeDay, setActiveDay] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const runAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const randomDay = Math.floor(Math.random() * 7);

    // Animate cursor to day
    gsap.to(cursorRef.current, {
      x: (randomDay * 40) + 20,
      y: 60,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        // Click animation
        gsap.to(cursorRef.current, {
          scale: 0.8,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            setActiveDay(randomDay);
            // Move to save button
            gsap.to(cursorRef.current, {
              x: 140,
              y: 120,
              duration: 0.8,
              ease: 'power2.inOut',
              onComplete: () => {
                // Click save
                gsap.to(cursorRef.current, {
                  scale: 0.8,
                  duration: 0.1,
                  yoyo: true,
                  repeat: 1,
                  onComplete: () => {
                    // Fade out
                    gsap.to(cursorRef.current, {
                      opacity: 0,
                      duration: 0.5,
                      onComplete: () => {
                        setIsAnimating(false);
                        setActiveDay(null);
                        gsap.set(cursorRef.current, { x: 0, y: 0, opacity: 1, scale: 1 });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(runAnimation, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="relative p-4">
      <div className="text-xs font-mono text-moss mb-2 uppercase tracking-wide">
        Project Schedule
      </div>
      <div className="week-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`day-cell ${activeDay === index ? 'active' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
      <button className="btn-secondary text-xs mt-4 px-4 py-2">
        Save Schedule
      </button>

      {/* Animated Cursor */}
      <svg
        ref={cursorRef}
        className="absolute top-4 left-4 w-4 h-4 cursor-animation pointer-events-none"
        style={{ zIndex: 10 }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 22L10.91 9.74L2 9L10.91 8.26L12 2Z" />
      </svg>
    </div>
  );
};

// Features Section
const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        }
      });
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={featuresRef} className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-moss mb-6">
            Production-Ready AI Systems
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Every system we build is battle-tested in real production environments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Card 1 - Diagnostic Shuffler */}
          <div className="feature-card card cursor-organic">
            <h3 className="font-heading text-xl font-bold text-moss mb-4">
              Production-Grade
            </h3>
            <DiagnosticShuffler />
            <p className="text-charcoal/70 text-sm mt-4">
              Every system runs in real production environments. News Spark Editor processes broadcast news, Barry AI manages vehicle diagnostics.
            </p>
          </div>

          {/* Feature Card 2 - Telemetry Typewriter */}
          <div className="feature-card card cursor-organic">
            <h3 className="font-heading text-xl font-bold text-moss mb-4">
              Multi-Model AI
            </h3>
            <TelemetryTypewriter />
            <p className="text-charcoal/70 text-sm mt-4">
              We integrate the best models for each task. Two-Pass RAG with 95% accuracy, combining Whisper, Gemini, and Claude.
            </p>
          </div>

          {/* Feature Card 3 - Cursor Protocol Scheduler */}
          <div className="feature-card card cursor-organic">
            <h3 className="font-heading text-xl font-bold text-moss mb-4">
              Enterprise-Proven
            </h3>
            <CursorScheduler />
            <p className="text-charcoal/70 text-sm mt-4">
              Personal AI Manager orchestrates 6 specialized agents. Pattern Scribe AI serves enterprise fashion manufacturers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Philosophy Section
const Philosophy = () => {
  const philosophyRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philosophy-line', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: 'top 70%',
        }
      });
    }, philosophyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={philosophyRef}
      className="section bg-charcoal relative overflow-hidden"
    >
      <div
        className="absolute inset-0 organic-texture opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2940&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center" ref={textRef}>
          <div className="philosophy-line text-cream/70 text-lg md:text-xl mb-8">
            Most AI development focuses on: <span className="text-cream">demos and prototypes.</span>
          </div>
          <div className="philosophy-line">
            <span className="text-cream text-xl md:text-2xl">We focus on: </span>
            <span className="font-drama text-4xl md:text-6xl lg:text-7xl text-clay">
              systems that ship.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Protocol Cards Components
const ProtocolCard = ({ number, title, description, children, isActive }) => (
  <div className={`protocol-card ${isActive ? 'z-10' : ''}`}>
    <div className="protocol-animation">
      {children}
    </div>
    <div className="protocol-content">
      <div className="font-mono text-clay text-sm mb-4 uppercase tracking-wider">
        Step {number}
      </div>
      <h3 className="font-heading text-3xl md:text-4xl font-bold text-moss mb-6">
        {title}
      </h3>
      <p className="text-charcoal/70 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const RotatingHelix = () => (
  <svg className="rotating-helix w-40 h-40" viewBox="0 0 200 200">
    <g stroke="#CC5833" fill="none" strokeWidth="2" opacity="0.6">
      <ellipse cx="100" cy="60" rx="60" ry="20" />
      <ellipse cx="100" cy="100" rx="40" ry="15" />
      <ellipse cx="100" cy="140" rx="60" ry="20" />
      <path d="M40 60 Q100 80 160 60 Q100 120 40 140" />
    </g>
  </svg>
);

const ScanningGrid = () => (
  <svg className="w-40 h-40" viewBox="0 0 200 200">
    <g stroke="#2E4036" fill="none" strokeWidth="1" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={i} x1={i * 25 + 25} y1="25" x2={i * 25 + 25} y2="175" />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <line key={i} x1="25" y1={i * 25 + 25} x2="175" y2={i * 25 + 25} />
      ))}
    </g>
    <line
      className="scanning-line"
      x1="25"
      y1="100"
      x2="175"
      y2="100"
      stroke="#CC5833"
      strokeWidth="2"
    />
  </svg>
);

const PulseWaveform = () => (
  <svg className="pulse-wave w-40 h-40" viewBox="0 0 200 200">
    <path
      d="M20 100 L40 100 L50 60 L60 140 L70 40 L80 160 L90 80 L100 120 L110 70 L120 130 L130 90 L140 110 L150 100 L180 100"
      stroke="#CC5833"
      fill="none"
      strokeWidth="2"
    />
  </svg>
);

// Protocol Section
const Protocol = () => {
  const protocolRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          pin: true,
          pinSpacing: false,
          onEnter: () => setActiveCard(index),
          onUpdate: (self) => {
            const progress = self.progress;
            const nextCard = cards[index + 1];

            if (nextCard && progress > 0.5) {
              gsap.to(card, {
                scale: 0.9,
                filter: 'blur(20px)',
                opacity: 0.5,
                duration: 0.5,
                ease: 'power2.out'
              });
            } else {
              gsap.to(card, {
                scale: 1,
                filter: 'blur(0px)',
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out'
              });
            }
          }
        });
      });
    }, protocolRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={protocolRef}>
      <ProtocolCard
        number="01"
        title="System Analysis"
        description="We analyze your existing infrastructure and identify the optimal AI integration points. Every system is designed for your specific production environment."
        isActive={activeCard === 0}
      >
        <RotatingHelix />
      </ProtocolCard>

      <ProtocolCard
        number="02"
        title="Multi-Model Architecture"
        description="We architect solutions using the best AI models for each task. Claude for reasoning, Whisper for audio, Gemini for complex processing - integrated seamlessly."
        isActive={activeCard === 1}
      >
        <ScanningGrid />
      </ProtocolCard>

      <ProtocolCard
        number="03"
        title="Production Deployment"
        description="We don't ship prototypes. Every system is battle-tested, monitored, and optimized for real-world production workloads with measurable performance metrics."
        isActive={activeCard === 2}
      >
        <PulseWaveform />
      </ProtocolCard>
    </section>
  );
};

// Get Started Section
const GetStarted = () => {
  const startedRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.started-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: startedRef.current,
          start: 'top 80%',
        }
      });
    }, startedRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={startedRef} className="section bg-cream">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center started-content">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-moss mb-6">
            Ready to build production AI?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Join companies shipping AI systems that actually work. From custom development to full product launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Our Work
            </button>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-drama text-3xl text-clay mb-2">8+</div>
              <div className="text-sm text-charcoal/70 font-mono uppercase tracking-wide">Production Systems</div>
            </div>
            <div className="text-center">
              <div className="font-drama text-3xl text-clay mb-2">95%</div>
              <div className="text-sm text-charcoal/70 font-mono uppercase tracking-wide">AI Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="font-drama text-3xl text-clay mb-2">50+</div>
              <div className="text-sm text-charcoal/70 font-mono uppercase tracking-wide">AI Agents Deployed</div>
            </div>
            <div className="text-center">
              <div className="font-drama text-3xl text-clay mb-2">10K+</div>
              <div className="text-sm text-charcoal/70 font-mono uppercase tracking-wide">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer-dark py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-heading text-xl font-bold text-cream mb-4">
              NEL Innovation Labs
            </div>
            <p className="text-cream/70 text-sm">
              AI systems that actually work in production.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-cream mb-4">Services</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li>Custom AI Development</li>
              <li>AI Strategy & Architecture</li>
              <li>Product Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-cream mb-4">Portfolio</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li>AI Query Hub</li>
              <li>Pattern Scribe AI</li>
              <li>Personal AI Manager</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-cream mb-4">Contact</h4>
            <div className="status-indicator text-cream/70 mb-4">
              <div className="status-dot"></div>
              System Operational
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-cream/70 text-sm">
            © 2024 NEL Innovation Labs. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-cream/70 hover:text-cream transition-colors text-sm">Privacy</a>
            <a href="#" className="text-cream/70 hover:text-cream transition-colors text-sm">Terms</a>
            <a href="#" className="text-cream/70 hover:text-cream transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  useEffect(() => {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;