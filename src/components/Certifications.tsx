import React from 'react';
import { motion } from 'motion/react';
import { FiAward, FiCalendar, FiArrowUpRight } from 'react-icons/fi';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 md:py-32 border-b border-white/10 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#9CA3AF] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 bg-white inline-block" aria-hidden="true" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Certifications &amp; Training
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9CA3AF] max-w-md leading-relaxed">
            {/* Professional certifications from IBM, Anthropic, and Google Cloud. */}
          </p>
        </div>

        {/* Clean Editorial Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-6 rounded-sm bg-[#0C0C0E] border border-white/10 hover:border-white/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Issuer Header */}
                <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <FiAward className="w-4 h-4 text-white" />
                    <span className="font-mono text-xs text-white font-medium">{cert.issuer}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9CA3AF]">{cert.platform}</span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-editorial font-bold text-base sm:text-lg text-white mb-3 leading-snug group-hover:text-neutral-200 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF]">
                  <FiCalendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:underline transition-colors"
                >
                  <span>View Certificate</span>
                  <FiArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
