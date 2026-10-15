import React from 'react';
import { motion } from 'motion/react';
import { FiExternalLink, FiFileText } from 'react-icons/fi';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="resume" className="py-24 md:py-32 border-b border-white/10 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#9CA3AF] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 bg-white inline-block" aria-hidden="true" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Resume &amp; Credentials
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9CA3AF] max-w-md leading-relaxed">
            {/* Publicly accessible Google Drive document detailing academic coursework, technical stack, and software development projects. */}
          </p>
        </div>

        {/* Minimalist Editorial Resume Link Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
          className="p-8 sm:p-12 rounded-sm bg-[#0C0C0E] border border-white/15 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 group"
        >
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#151518] border border-white/15 flex items-center justify-center text-white">
                <FiFileText className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                Ahmad Lasani · CV
              </span>
            </div>

            <h3 className="font-editorial font-bold text-2xl sm:text-3xl text-white">
              Official Resume on Google Drive
            </h3>

            {/* <p className="text-sm text-neutral-300 leading-relaxed font-light">
            </p> */}
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={personal.links.resumeDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-lg"
              title="Open public Google Drive resume link"
            >
              <span>Open in Google Drive</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Crosshair accents */}
          <span className="absolute -top-1 -left-1 text-white/40 font-light text-xs select-none" aria-hidden="true">+</span>
          <span className="absolute -bottom-1 -right-1 text-white/40 font-light text-xs select-none" aria-hidden="true">+</span>
        </motion.div>

      </div>
    </section>
  );
};
