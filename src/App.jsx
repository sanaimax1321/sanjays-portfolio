import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-slate-100 antialiased relative">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-28">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
