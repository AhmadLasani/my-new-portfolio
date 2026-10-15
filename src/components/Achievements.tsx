import React from 'react';
import { motion } from 'motion/react';
import { FiAward, FiCalendar } from 'react-icons/fi';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-24 md:py-32 border-b border-white/10 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#9CA3AF] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 bg-white inline-block" aria-hidden="true" />
              <span>Competitive Recognition</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Achievements
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9CA3AF] max-w-md leading-relaxed">
            {/* Academic and hackathon honors awarded through technical problem-solving and software implementation. */}
          </p>
        </div>

        {/* 2-Column Minimalist Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-8 sm:p-10 rounded-sm bg-[#0C0C0E] border border-white/10 hover:border-white/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Large Editorial Numerals */}
                <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-editorial font-light text-5xl sm:text-7xl text-white tracking-tight tabular-nums">
                      {item.stat}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                      Rank
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF]">
                    <FiCalendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <FiAward className="w-4 h-4 text-white" />
                  <h3 className="font-editorial font-bold text-xl sm:text-2xl text-white group-hover:text-neutral-200 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-light">
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
