import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentProject = projects[currentIndex] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-white/10 bg-[#070708] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Bar matching reference image */}
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10 text-xs text-[#9CA3AF] tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-white inline-block" aria-hidden="true" />
            <span className="text-white font-medium">About Project</span>
          </div>
          {/* <div className="hidden sm:block text-[#6B7280]">
            © {new Date().getFullYear()} Ahmad Lasani
          </div> */}
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">{currentProject.category || 'Engineering'}</span>
            <div className="flex flex-col gap-1 w-5" aria-hidden="true">
              <span className="h-[1.5px] bg-white w-full" />
              <span className="h-[1.5px] bg-white w-3/4" />
            </div>
          </div>
        </div>

        {/* Quick Project Switcher Pills / Numbers */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1.5 text-xs font-mono transition-all flex items-center gap-2 border ${
                currentIndex === idx
                  ? 'border-white bg-white text-black font-bold'
                  : 'border-white/10 bg-[#0E0E10] text-[#9CA3AF] hover:text-white hover:border-white/30'
              }`}
            >
              <span>{proj.number}</span>
              <span className="hidden sm:inline">{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Main Editorial Presentation Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[520px]"
          >

            {/* Left Column: Summary, Large Title, Rule with Crosshair, Number (col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
              
              {/* Short editorial lead paragraph */}
              <div className="max-w-lg">
                <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                  {currentProject.description}
                </p>
                <div className="mt-3 text-xs text-[#9CA3AF] font-mono">
                  {currentProject.technologies.join(' · ')}
                </div>
              </div>

              {/* Giant Editorial Title with Hairline & Crosshair */}
              <div className="relative pt-6">
                <h3 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
                  {currentProject.title}
                </h3>

                {/* Hairline extending across with Crosshair marker (+) */}
                <div className="relative border-b border-white/20 w-full my-6">
                  <span
                    className="absolute -right-2 top-1/2 -translate-y-1/2 text-white/60 font-light text-base select-none"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </div>

                {/* Bottom Left: Large Index Number and Direct Links */}
                <div className="flex items-center justify-between pt-2">
                  <div className="font-editorial text-3xl sm:text-5xl font-light text-white/80">
                    {currentProject.number}
                  </div>

                  <div className="flex items-center gap-3">
                    {currentProject.liveUrl ? (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-white bg-white text-black hover:bg-neutral-200 text-xs font-medium transition-colors"
                      >
                        <span>Visit Live Project</span>
                        <FiArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : currentProject.githubUrl ? (
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-white/20 bg-[#0E0E10] hover:border-white text-white text-xs font-medium transition-colors"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        <span>View on GitHub</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dashboard Photo Container with Hover Visit Overlay (col-span-6) */}
            <div className="lg:col-span-6 relative">
              {/* Header above photo: collection note + Read more */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs text-[#9CA3AF]">
                <div className="truncate max-w-[280px]">
                  {currentProject.tagline}
                </div>
                {currentProject.liveUrl ? (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white hover:underline text-xs"
                  >
                    <span>Visit project</span>
                    <FiArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white hover:underline text-xs"
                  >
                    <span>View GitHub</span>
                    <FiArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Main Photo / Dashboard Box */}
              <div
                className="relative group overflow-hidden rounded-sm border border-white/15 bg-[#0A0A0C] aspect-[16/10] shadow-2xl cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={currentProject.image || '/images/projects/security-scanner.svg'}
                  alt={`${currentProject.title} dashboard interface`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Mouse Hover Reveal Overlay */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="font-editorial text-xl font-bold text-white mb-2">
                    {currentProject.title}
                  </div>
                  <p className="text-xs text-neutral-300 max-w-sm mb-4 leading-relaxed line-clamp-2">
                    {currentProject.description}
                  </p>
                  
                  <div className="text-[11px] font-mono text-neutral-400 mb-5">
                    {currentProject.technologies.slice(0, 5).join(' · ')}
                  </div>

                  <div className="flex items-center justify-center">
                    {currentProject.liveUrl ? (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-lg"
                      >
                        <span>Visit Live Project</span>
                        <FiArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : currentProject.githubUrl ? (
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 border border-white/40 text-white font-medium text-xs tracking-wider uppercase hover:border-white hover:bg-white hover:text-black transition-all shadow-lg"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>View on GitHub</span>
                      </a>
                    ) : null}
                  </div>
                </motion.div>
              </div>

              {/* Navigation Arrows at bottom right matching reference image */}
              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all"
                >
                  <FiArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next project"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all"
                >
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
