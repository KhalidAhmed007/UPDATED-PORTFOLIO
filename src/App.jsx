import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ResumeSection } from './components/ResumeSection';
import { AIResearch } from './components/AIResearch';
import { DSA } from './components/DSA';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TravellingPhoto } from './components/ProfileScrollTransition';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        {/* Single travelling photo — mounted at root so it's always above everything */}
        <TravellingPhoto />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ResumeSection />
          <AIResearch />
          <DSA />
          <Education />
          <Certifications />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
