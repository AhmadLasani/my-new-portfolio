/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070708] text-white flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Selected Projects */}
        <Projects />

        {/* Technical Skills */}
        <Skills />

        {/* Journey Section: Education, Certifications, and Achievements */}
        <div id="journey">
          <Education />
          <Certifications />
          <Achievements />
        </div>

        {/* Dedicated Resume Section linking directly to public Google Drive */}
        <Resume />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
