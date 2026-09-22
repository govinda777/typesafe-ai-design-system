import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TerminalBlock from './components/TerminalBlock';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TerminalBlock />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
