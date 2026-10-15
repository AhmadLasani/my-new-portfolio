import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      const sections = ['hero', 'about', 'projects', 'skills', 'journey', 'resume', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Hairline Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-white z-50 origin-left pointer-events-none transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070708]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl shadow-black/40'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Mark with Square Icon Indicator */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white group"
            aria-label="Ahmad Lasani Portfolio Home"
          >
            <span className="w-2.5 h-2.5 bg-white inline-block transition-transform group-hover:scale-125" aria-hidden="true" />
            <span className="font-editorial text-sm sm:text-base font-bold tracking-tight text-white">
              AHMAD LASANI
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 ${
                    isActive ? 'text-white font-semibold' : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons: Direct Drive Resume link */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1HWI53NE6IwK0YyxLzbWAW3-2j7r0V3OV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm border border-white bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
              title="Open Resume in Google Drive"
            >
              <span>Resume</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white border border-white/15 rounded-sm"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden bg-[#070708] border-b border-white/10 px-4 pt-4 pb-6 space-y-3"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs font-mono tracking-widest uppercase text-neutral-300 hover:text-white hover:bg-[#141416] rounded-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex gap-3">
                <a
                  href="https://drive.google.com/drive/folders/1meaK_4Vw3d6Jih8z0dtT_igJK-83JeXN"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5"
                >
                  <span>Open Resume (Drive)</span>
                  <FiArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
