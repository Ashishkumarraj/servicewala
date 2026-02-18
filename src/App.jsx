import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main Application Component
 * 
 * This is the root component of the ServiceWala website.
 * It serves as the main layout container, managing the global theme styles
 * and rendering all page sections in a vertical scroll layout.
 * 
 * Key Features:
 * - Global dark/light mode wrapper
 * - Sequential rendering of all website sections
 */
function App() {
  return (
    // Main container with global theme styles and smooth color transitions
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
