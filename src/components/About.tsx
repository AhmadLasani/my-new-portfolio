import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/10 bg-[#070708] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#9CA3AF] tracking-widest uppercase mb-6">
          <span className="w-2 h-2 bg-white inline-block" aria-hidden="true" />
          <span>Background &amp; Philosophy</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-editorial text-3xl sm:text-5xl font-black text-white tracking-tight mb-8">
            Meet the Developer
          </h2>

          <div className="relative border-l-2 border-white/20 pl-6 sm:pl-8 space-y-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            <p>
              Hi, I’m Ahmad Lasani, a passionate Software Developer currently pursuing my MCA at Lovely Professional University (LPU). I enjoy creating responsive, user-friendly projects and working across both front-end and back-end development. My skills allowing me to build clean interfaces and functional software applications. I’m always exploring new technologies, improving my coding practices, and taking on projects that help me grow. I love turning ideas into practical digital solutions and aim to develop projects that are efficient, visually appealing, and meaningful for users. As I continue learning, my goal is to strengthen my expertise and contribute to impactful softwares .
            </p>
            {/* <p>
              My focus spans frontend and full-stack development—crafting accessible, high-performance user interfaces and building dependable backend services. From architecting domain vulnerability analysis tools to engineering relational database systems and launching client platforms on Firebase, I value clean architecture, solid computer science fundamentals, and continuous learning.
            </p> */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
