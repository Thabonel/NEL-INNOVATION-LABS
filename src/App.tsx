// Import all new components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import LogoBar from './components/LogoBar/LogoBar';
import ValueProps from './components/ValueProps/ValueProps';
import ProblemSolution from './components/ProblemSolution/ProblemSolution';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import SocialProof from './components/SocialProof/SocialProof';
import Portfolio from './components/Portfolio/Portfolio';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LogoBar />
      <ValueProps />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <SocialProof />
      <Portfolio />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;