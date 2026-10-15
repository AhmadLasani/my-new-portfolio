import React from 'react';
import { motion } from 'motion/react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 md:py-32 border-b border-white/10 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#9CA3AF] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 bg-white inline-block" aria-hidden="true" />
              <span>Academic History</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Education &amp; Credentials
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9CA3AF] max-w-md leading-relaxed">
            {/* Academic foundation across postgraduate, undergraduate, and science curricula. */}
          </p>
        </div>

        {/* Minimalist Editorial Timeline */}
        <div className="relative border-l border-white/20 ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline Node Marker */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-2 w-3.5 h-3.5 bg-black border-2 border-white flex items-center justify-center"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-sm bg-[#0C0C0E] border border-white/10 hover:border-white/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-editorial font-bold text-lg sm:text-xl text-white">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                    <FiCalendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 text-xs font-mono text-[#9CA3AF] mb-3">
                  <span className="text-white font-medium">{item.institution}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-3 h-3 text-neutral-400" />
                    <span>{item.location}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
