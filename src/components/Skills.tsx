import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiOpenjdk,
  SiCplusplus,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiChakraui,
  SiBootstrap,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiNetlify,
  SiPostman,
  SiRender,
} from 'react-icons/si';
import {
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiCloud,
  FiZap,
  FiMessageSquare,
  FiUsers,
  FiTarget,
  FiAward,
  FiTrendingUp,
} from 'react-icons/fi';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Authentic developer icons from react-icons/si & react-icons/fi
const SkillIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'HTML5':
      return <SiHtml5 className="w-5 h-5 text-[#E34F26]" />;
    case 'CSS3':
      return <SiCss className="w-5 h-5 text-[#1572B6]" />;
    case 'JavaScript':
      return <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />;
    case 'Java':
      return <SiOpenjdk className="w-5 h-5 text-[#E76F00]" />;
    case 'C++':
      return <SiCplusplus className="w-5 h-5 text-[#00599C]" />;
    case 'PHP':
      return <SiPhp className="w-5 h-5 text-[#777BB4]" />;
    case 'ReactJS':
      return <SiReact className="w-5 h-5 text-[#61DAFB]" />;
    case 'Tailwind':
      return <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />;
    case 'Scss':
      return <SiSass className="w-5 h-5 text-[#CC6699]" />;
    case 'Chakra UI':
      return <SiChakraui className="w-5 h-5 text-[#319795]" />;
    case 'Bootstrap':
      return <SiBootstrap className="w-5 h-5 text-[#7952B3]" />;
    case 'Framer Motion':
      return <SiFramer className="w-5 h-5 text-[#FFFFFF]" />;
    case 'NodeJS':
      return <SiNodedotjs className="w-5 h-5 text-[#339933]" />;
    case 'ExpressJS':
      return <SiExpress className="w-5 h-5 text-[#FFFFFF]" />;
    case 'REST APIs':
      return <FiGlobe className="w-5 h-5 text-[#60A5FA]" />;
    case 'MongoDB':
      return <SiMongodb className="w-5 h-5 text-[#47A248]" />;
    case 'MySQL':
      return <SiMysql className="w-5 h-5 text-[#4479A1]" />;
    case 'Firebase':
      return <SiFirebase className="w-5 h-5 text-[#FFCA28]" />;
    case 'Git':
      return <SiGit className="w-5 h-5 text-[#F05032]" />;
    case 'GitHub':
      return <SiGithub className="w-5 h-5 text-[#FFFFFF]" />;
    case 'Netlify':
      return <SiNetlify className="w-5 h-5 text-[#00C7B7]" />;
    case 'Postman':
      return <SiPostman className="w-5 h-5 text-[#FF6C37]" />;
    case 'Thunder Client':
      return <FiZap className="w-5 h-5 text-[#A855F7]" />;
    case 'Render':
      return <SiRender className="w-5 h-5 text-[#46E3B7]" />;
    case 'DSA':
      return <FiCpu className="w-5 h-5 text-[#34D399]" />;
    case 'DBMS':
      return <FiDatabase className="w-5 h-5 text-[#60A5FA]" />;
    case 'Computer Networks':
      return <FiGlobe className="w-5 h-5 text-[#93C5FD]" />;
    case 'Operating Systems':
      return <FiCpu className="w-5 h-5 text-[#F59E0B]" />;
    case 'SDLC':
      return <FiLayers className="w-5 h-5 text-[#38BDF8]" />;
    case 'Cloud Computing':
      return <FiCloud className="w-5 h-5 text-[#818CF8]" />;
    default:
      return <FiLayers className="w-5 h-5 text-[#FFFFFF]" />;
  }
};

const SoftSkillIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  switch (iconName) {
    case 'MessageSquare':
      return <FiMessageSquare className="w-5 h-5 text-[#FFFFFF]" />;
    case 'Users':
      return <FiUsers className="w-5 h-5 text-[#FFFFFF]" />;
    case 'Brain':
      return <FiCpu className="w-5 h-5 text-[#FFFFFF]" />;
    case 'Target':
      return <FiTarget className="w-5 h-5 text-[#FFFFFF]" />;
    case 'Award':
      return <FiAward className="w-5 h-5 text-[#FFFFFF]" />;
    case 'LineChart':
      return <FiTrendingUp className="w-5 h-5 text-[#FFFFFF]" />;
    default:
      return <FiLayers className="w-5 h-5 text-[#FFFFFF]" />;
  }
};

export const Skills: React.FC = () => {
  const { technicalSkillsGrid, softSkillsList } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'language' | 'frontend' | 'backend' | 'database' | 'tool' | 'core'>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'language', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'tool', label: 'Tools & DevOps' },
    { id: 'core', label: 'Core CS' },
  ];

  const filteredSkills = technicalSkillsGrid.filter(
    (s) => filter === 'all' || s.category === filter
  );

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-white/10 bg-[#070708] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-xs text-[#9CA3AF] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 bg-white inline-block" aria-hidden="true" />
              <span>Technical Stack</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md leading-relaxed font-mono">
            {/* Languages, libraries, databases, and DevOps tooling actively utilized in engineering reliable web applications. */}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id as any)}
              className={`px-3 py-1.5 text-xs font-mono transition-all border ${
                filter === c.id
                  ? 'border-white bg-white text-black font-semibold'
                  : 'border-white/10 bg-[#0E0E10] text-[#9CA3AF] hover:text-white hover:border-white/30'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Technical Skills Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
              className="p-4 rounded-sm bg-[#0C0C0E] border border-white/10 hover:border-white/40 transition-all flex flex-col items-center justify-center text-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-sm bg-[#141416] border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                <SkillIcon name={skill.name} />
              </div>
              <span className="text-xs font-mono font-medium text-neutral-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section (Directly after Technical Skills) */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 bg-white inline-block" aria-hidden="true" />
              <span>Work Ethic &amp; Execution</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Soft Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkillsList.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="p-5 rounded-sm bg-[#0C0C0E] border border-white/10 hover:border-white/40 transition-all group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-sm bg-[#141416] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                  <SoftSkillIcon iconName={skill.iconName} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-editorial font-bold text-sm sm:text-base text-white group-hover:text-neutral-200 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                    {skill.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
