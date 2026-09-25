import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeAre from './components/WhoWeAre';
import Projects from './components/Projects';
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
      </main>
      <Footer />
      <StructuredData />
    </div>
  );
}

export default App;
