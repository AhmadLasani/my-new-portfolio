import React, { useState, useEffect } from 'react';
import { FiArrowDown, FiExternalLink, FiMail, FiLinkedin, FiCamera } from 'react-icons/fi';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import profileImage from "./1.jpeg";

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [avatarSrc, setAvatarSrc] = useState<string>('/images/ahmad-lasani.jpg');

  useEffect(() => {
    const saved = localStorage.getItem('ahmad_lasani_avatar');
    if (saved) {
      setAvatarSrc(saved);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const res = event.target?.result as string;
        if (res) {
          setAvatarSrc(res);
          localStorage.setItem('ahmad_lasani_avatar', res);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10 bg-[#070708]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider mb-4">
              Software Developer &amp; Full-Stack Engineer
            </div>

            {/* High-Impact Editorial Name */}
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6">
              Ahmad<br />Lasani
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-xl mb-10">
              {personal.heroBio}
            </p>

            {/* Action Buttons: Clean Minimalist Monochrome */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <FiArrowDown className="w-3.5 h-3.5" />
              </a>

              {/* Get In Touch */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 bg-[#0E0E10] hover:border-white text-white text-xs tracking-wider uppercase transition-colors"
              >
                <FiMail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>

              {/* Single Official Resume Button pointing directly to Google Drive */}
              <a
                href={personal.links.resumeDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 bg-[#0E0E10] hover:border-white text-white text-xs tracking-wider uppercase transition-colors"
                title="Open Ahmad Lasani's Resume in Google Drive"
              >
                <span>Resume</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Developer Profiles: Clean React Icons */}
            <div className="flex items-center gap-5 pt-6 border-t border-white/10 text-neutral-400">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF]">Connect:</span>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Hairline frame surrounding photo */}
              <div className="relative p-2 border border-white/15 bg-[#0C0C0E] shadow-2xl">
                <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 group">
                 <img
  src={profileImage}
  alt="Ahmad Lasani"
  className="w-full h-full object-cover object-top transition-all duration-500"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle hover upload overlay */}
                  {/* <label className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white text-xs font-mono gap-2 p-4 text-center">
                    <FiCamera className="w-6 h-6" />
                    <span>Upload / Change Profile Picture</span>
                    <span className="text-[10px] text-neutral-400">(Supports IMG_0053 or any photo)</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoUpload}
                    />
                  </label> */}
                </div>

                {/* Caption bottom with explicit Photo update link */}
                <div className="flex items-center justify-between pt-3 px-1 text-[11px] font-mono text-[#9CA3AF]">
                  <span>AHMAD LASANI</span>
                 
                </div>
              </div>

              {/* Crosshair accents at outer corners */}
              <span className="absolute -top-2 -left-2 text-white/40 font-light select-none" aria-hidden="true">+</span>
              <span className="absolute -bottom-2 -right-2 text-white/40 font-light select-none" aria-hidden="true">+</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
