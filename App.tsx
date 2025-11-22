import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Brands />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;