import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeAre from './components/WhoWeAre';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhoWeAre />
        <Projects />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StructuredData />
    </div>
  );
}

export default App;
