"use client";
import { useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import ScrollAnimation from './components/scroll';

const sections = [
    {
        id: 'about',
        num: '01',
        title: 'About Me',
        textColor: '#f8fafc',
    },
    {
        id: 'projects',
        num: '02',
        title: 'My Work',
        textColor: '#e0e7ff',
    },
    {
        id: 'contact',
        num: '03',
        title: 'Contact Me',
        textColor: '#fef2f2',
    },
];

export default function App() {
    const containerRef = useRef(null);
    const [isStarted, setIsStarted] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isBooting, setIsBooting] = useState(false);
    
    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    const handleComplete = () => {
        setIsStarted(true);
        setTimeout(() => setShowContent(true), 100);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !isBooting) {
        setIsBooting(true);
        setTimeout(handleComplete, 400);
        }
    };

  return (
    <div className="relative font-sans antialiased bg-black selection:bg-white selection:text-black w-full h-screen overflow-hidden text-white">
        <AnimatePresence mode="wait">
            {!isStarted && (
            <motion.div key="landing" initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)", 
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}}
                className="fixed inset-0 z-[500] bg-black flex items-start justify-start font-mono p-8 md:p-12 select-none cursor-default focus:outline-none"
                onKeyDown={handleKeyDown} tabIndex={0} autoFocus>
                <div className="w-full relative">
                <motion.div animate={isBooting ? { x: 10, opacity: 0 } : { x: 0, opacity: 1 }}
                    className="flex flex-wrap items-center text-lg md:text-xl gap-x-3">
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
                    <motion.div initial={{ opacity: 0 }}
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
            )}
        </AnimatePresence>

      <div className="fixed inset-0 bg-black z-0" />
      
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#0a0a0a_0%,_black_100%)] z-10 pointer-events-none" />
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

        <footer className="fixed bottom-0 left-0 w-full h-24 flex items-center justify-end px-12 z-[200] pointer-events-none">
            <div className="pointer-events-auto opacity-30 text-[10px] font-mono tracking-widest uppercase">
                EST. 1999 // 40.7479° N, 73.9867° W
            </div>
        </footer>

        <main ref={containerRef} className={`relative z-[100] h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth 
            ${!showContent ? 'pointer-events-none overflow-hidden' : ''}`}>
            <div className="h-screen w-full snap-start shrink-0" />
            <div className="h-screen w-full snap-start shrink-0" />
            <div className="h-screen w-full snap-start shrink-0" />
        </main>

        <AnimatePresence>
            {showContent && sections.map((section, index) => (
            <ScrollAnimation key={section.id} section={section} index={index} 
                total={sections.length} scrollYProgress={scrollYProgress}/>
            ))}
        </AnimatePresence>

        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white/10 origin-left z-[200] pointer-events-none"
            style={{ scaleX: scrollYProgress }}/>

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