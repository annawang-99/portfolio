"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const sections = [
  {
    id: 'about',
    title: 'About Me',
    textColor: '#f8fafc',
    content: "I am a full-stack developer focused on building immersive digital experiences with clean code and high-impact design.",
    isAbout: true
  },
  {
    id: 'projects',
    title: 'My Work',
    textColor: '#e0e7ff',
    projects: [
      {
        title: "HUEY",
        subtitle: "Restaurant Waitlist System Full-Stack Website",
        description: "(hugh - eey) A unified waitlist platform that allows customers to join queues at different restaurants through a centralized interface.",
        techStack: ["Next.js", "PrismaSQL", "NextAuth", "Framer", "shadcn UI"],
        siteUrl: "https://nextjs-hack.vercel.app/",
        repoUrl: "https://github.com/annaw-99/nextjs-hackathon",
      },
      {
        title: "Aura Stream",
        subtitle: "Immersive Audio Experience",
        description: "A spatial audio platform designed for high-fidelity ambient soundscapes, utilizing 3D audio processing for complete user immersion.",
        techStack: ["React", "Web Audio API", "Three.js", "Tailwind CSS"],
        siteUrl: "#",
        repoUrl: "#",
      },
      {
        title: "Quantum Core",
        subtitle: "Distributed Computing Dashboard",
        description: "Real-time monitoring and management for decentralized processing units. Visualizes global node status and computational throughput.",
        techStack: ["TypeScript", "Rust", "WebAssembly", "D3.js"],
        siteUrl: "#",
        repoUrl: "#",
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact Me',
    textColor: '#fef2f2',
    content: "Let's build something together. Reach out via email or social channels."
  },
];


const TerminalLanding = ({ onComplete }) => {
  const [isBooting, setIsBooting] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isBooting) {
      setIsBooting(true);
      setTimeout(onComplete, 400);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: "blur(8px)",
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[500] bg-black flex items-start justify-start font-mono p-8 md:p-12 select-none cursor-default focus:outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      autoFocus
    >
      <div className="w-full relative">
        <motion.div 
          animate={isBooting ? { x: 10, opacity: 0 } : { x: 0, opacity: 1 }}
          className="flex flex-wrap items-center text-lg md:text-xl gap-x-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-green-400">anna@macbookpro</span>
            <span className="text-white">portfolio %</span>
          </div>
          <div className="flex items-center">
            <span className="text-indigo-400">npm run dev</span>
            {!isBooting && (
              <motion.span 
                animate={{ opacity: [0, 1] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2.5 h-6 bg-white ml-2 translate-y-0.5"
              />
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {!isBooting && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="text-zinc-500 text-sm mt-4"
            >
              Press [ENTER]
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const SectionLayer = ({ section, index, total, scrollYProgress, isVisible }) => {
  const [expandedProject, setExpandedProject] = useState(null);
  const step = 1 / (total - 1);
  const targetPos = index * step;
  const startReveal = targetPos - step;
  const endReveal = targetPos + step;

  // Clip Path Logic
  const clipPath = useTransform(
    scrollYProgress,
    [startReveal, targetPos, endReveal],
    [
      "inset(100% 0% 0% 0%)", 
      "inset(0% 0% 0% 0%)",   
      "inset(0% 0% 100% 0%)"  
    ]
  );

  // Y-Parallax
  const y = useTransform(
    scrollYProgress,
    [startReveal, targetPos, endReveal],
    [40, 0, -40]
  );

  const opacity = useTransform(
    scrollYProgress,
    [startReveal + (step * 0.2), targetPos, endReveal - (step * 0.2)],
    [0, 1, 0]
  );

  return (
    <div 
      className="fixed inset-0 p-10 md:p-20 pointer-events-none" 
      style={{ zIndex: index + 150 }}
    >
      <motion.div
        style={{ clipPath, opacity, y }}
        className="w-full h-full flex flex-col items-start justify-start overflow-y-auto custom-scrollbar"
      >
        <h2 style={{ color: section.textColor }} className="text-6xl xl:text-8xl font-black uppercase mb-6">
          {section.title}
        </h2>

        {/* Custom About Links Section */}
        {section.isAbout && (
          <div className="pointer-events-auto w-full max-w-5xl flex flex-col">
              <div>
                <h3 className="text-white text-4xl lg:text-6xl font-extralight">I'm Anna.</h3>
                <h3 className="text-zinc-500 text-4xl lg:text-6xl font-extralight">Software Developer & Digital Crafter</h3>
              </div>

              <div className="my-12">
                <p className="relative text-zinc-500 text-lg leading-relaxed max-w-[500px]">
                    Check out my&nbsp;
                    <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer"
                    className="hover:text-white">Github</a>
                    , find me on&nbsp;
                    <a href="https://www.linkedin.com/in/tungyen-wang" target="_blank" rel="noopener noreferrer"
                    className="hover:text-white">LinkedIn</a>
                    , or send me an&nbsp;
                    <a href="mailto:annawang9909@gmail.com" target="_blank" rel="noopener noreferrer"
                    className="hover:text-white">email</a>
                    &nbsp;to say&nbsp;
                    <span className="group cursor-pointer">'hi'
                        <span className="absolute left-0 top-full mt-2 opacity-0 
                        group-hover:opacity-100 transition-opacity text-orange-300 text-sm">
                        (*waves👋*)
                        </span>
                    </span>
                    , or <span className="underline">scroll down</span> to see some of my work.
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-x-12">
                <div className="space-y-2">
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Connect</span>
                  <div className="flex gap-6">
                    <a href="https://github.com/annaw-99" target="_blank" className="text-sm hover:text-emerald-500 transition-colors uppercase tracking-widest font-bold">Github</a>
                    <a href="https://www.linkedin.com/in/tungyen-wang" target="_blank" className="text-sm hover:text-emerald-500 transition-colors uppercase tracking-widest font-bold">LinkedIn</a>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Contact</span>
                  <a href="mailto:annawang9909@gmail.com" className="text-sm hover:text-emerald-500 transition-colors uppercase tracking-widest font-bold">Email</a>
                </div>
                <div className="space-y-2">
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Location</span>
                  <span className="text-sm uppercase tracking-widest font-bold text-white">NYC / Remote</span>
                </div>
              </div>
          </div>
        )}

        {section.projects && (
          <div className="space-y-6 w-full max-w-5xl">
            {section.projects.map((proj, i) => {
              const isExpanded = expandedProject === i;
              return (
                <div key={i} className="border-b border-white/10 pb-6 last:border-0">
                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : i)}
                    style={{ color: section.textColor }}
                    className="group flex items-baseline gap-6 w-full text-left focus:outline-none pointer-events-auto"
                  >
                    <span className="xl:text-6xl font-extralight tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                      {proj.title}
                    </span>
                    <span className="text-md opacity-40 group-hover:opacity-100 transition-opacity">
                      {isExpanded ? "—" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 pb-4 grid md:grid-cols-3 gap-8 pointer-events-auto">
                          <div className="md:col-span-2">
                            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-bold mb-2">
                              {proj.subtitle}
                            </p>
                            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
                              {proj.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {proj.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 justify-end">
                             <a href={proj.siteUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors text-sm font-bold uppercase tracking-widest">Live Site ↗</a>
                             <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors text-sm font-bold uppercase tracking-widest">Repository ↗</a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const [isStarted, setIsStarted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  const handleComplete = () => {
    setIsStarted(true);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="relative font-sans antialiased bg-black selection:bg-white selection:text-black w-full h-screen overflow-hidden text-white">
      <AnimatePresence mode="wait">
        {!isStarted && (
          <TerminalLanding key="landing" onComplete={handleComplete} />
        )}
      </AnimatePresence>

      <div className="fixed inset-0 bg-black z-0" />
      
      {/* Background patterns */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#0a0a0a_0%,_black_100%)] z-10 pointer-events-none" />
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <footer className="fixed bottom-0 left-0 w-full h-24 flex items-center justify-end px-12 z-[200] pointer-events-none">
        <div className={`flex gap-4 items-center pointer-events-auto transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#" className="group relative px-6 py-2 transition-all hover:border-white/30">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-white/70 group-hover:text-white transition-colors">Github</span>
            </a>
            <p className='text-white/30'>•</p>
            <a href="#" className="group relative px-6 py-2 transition-all ">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-white/70 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
        </div>
      </footer>

      <main 
        ref={containerRef}
        className={`relative z-[100] h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth ${!showContent ? 'pointer-events-none overflow-hidden' : ''}`}
      >
        <div className="h-screen w-full snap-start shrink-0" />
        <div className="h-screen w-full snap-start shrink-0" />
        <div className="h-screen w-full snap-start shrink-0" />
      </main>

      <AnimatePresence>
        {showContent && sections.map((section, index) => (
          <SectionLayer 
            key={section.id} 
            section={section} 
            index={index} 
            total={sections.length}
            scrollYProgress={scrollYProgress}
            isVisible={showContent}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white/10 origin-left z-[200] pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      <style>{`
        main::-webkit-scrollbar { display: none; }
        main { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
}