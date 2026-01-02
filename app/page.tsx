"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import ScrollAnimation from './components/scroll';
import { Pointer } from "@/components/ui/pointer"

const sections = [
    {
        id: 'about',
        num: '01',
        title: 'About Me',
        textColor: '#fef2f2',
    },
    {
        id: 'tech',
        num: '02',
        title: 'Tech Stack',
        textColor: '#fef2f2',
    },
    {
        id: 'projects',
        num: '03',
        title: 'My Work',
        textColor: '#fef2f2',
    },
];

export default function App() {
    const containerRef = useRef(null);
    const [isStarted, setIsStarted] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    const handleComplete = () => {
        setIsStarted(true);
        setTimeout(() => setShowContent(true), 100);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsStarted(true);
                        setTimeout(() => setShowContent(true), 100);
                    }, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);
        return () => clearInterval(timer);
    }, []);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative font-sans antialiased bg-black selection:bg-white selection:text-black w-full h-screen overflow-hidden text-white">
        <Pointer>
            <div className="text-2xl" >👆</div>
        </Pointer>

        <AnimatePresence mode="wait">
            {!isStarted && (
            <motion.div 
                key="landing" 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)", 
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}}
                className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center select-none"
            >
                <div className="relative flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                        <circle cx="64" cy="64" r={radius} stroke="currentColor" strokeWidth="2" fill="transparent"
                            className="text-zinc-800"/>
                        <motion.circle cx="64" cy="64" r={radius} stroke="currentColor" strokeWidth="2" fill="transparent"
                            strokeDasharray={circumference} animate={{ strokeDashoffset }}transition={{ ease: "linear" }}
                            className="text-white"/>
                    </svg>
                    <span className="absolute font-mono text-sm tracking-widest text-white">
                        {progress}%
                    </span>
                </div>
                
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.4, y: 0 }}
                    className="mt-8 font-mono text-[12px] tracking-[0.4em] text-white/90 font-semibold">
                    Tip: Hover around the site
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>

      <div className="fixed inset-0 bg-black z-0" />
      
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#0a0a0a_0%,_black_100%)] z-10 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

        <footer className="fixed bottom-0 left-0 w-full h-24 flex items-center justify-end px-12 z-[200] pointer-events-none">
            <div className="pointer-events-auto opacity-30 text-[10px] 2xl:text-[12px] font-mono tracking-widest uppercase">
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