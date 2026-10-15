import { FiArrowUp, FiLinkedin } from 'react-icons/fi';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050506] border-t border-white/10 py-16 text-neutral-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand lockup */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-white inline-block" aria-hidden="true" />
              <span className="font-editorial text-base font-bold text-white tracking-tight">
                AHMAD LASANI
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              Software Developer
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 uppercase tracking-wider text-[11px]" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/15 hover:border-white text-neutral-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/15 hover:border-white text-neutral-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white/15 hover:border-white text-neutral-300 hover:text-white transition-colors"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 border border-white/15 hover:border-white text-neutral-300 hover:text-white transition-colors ml-2"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 text-center sm:text-left text-neutral-500 text-[11px]">
          © {currentYear} Ahmad Lasani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
