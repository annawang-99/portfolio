"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, User, Layers } from 'lucide-react';

import About from './pages/about';
import Tech from './pages/tech';
import Projects from './pages/projects';

const sections = [
    { id: 'about', num: '01', title: 'About Me', icon: User, component: About },
    { id: 'tech', num: '02', title: 'Tech Stack', icon: Cpu, component: Tech },
    { id: 'projects', num: '03', title: 'My Work', icon: Layers, component: Projects },
];

export default function App() {
    const [activeTab, setActiveTab] = useState('about');
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsStarted(true), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(timer);
    }, []);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
    <div className="relative h-screen w-full bg-black overflow-hidden font-sans text-white selection:bg-white selection:text-black">
            
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_#0a0a0a_0%,_black_100%)]" />
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        {/* Loading Animation */}
        <AnimatePresence>
            {!isStarted && (
                <motion.div exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <svg className="w-32 h-32 transform -rotate-90">
                            <circle cx="64" cy="64" r={radius} stroke="currentColor" strokeWidth="1" fill="transparent" className="text-zinc-900"/>
                            <motion.circle cx="64" cy="64" r={radius} stroke="currentColor" strokeWidth="1" fill="transparent" strokeDasharray={circumference} animate={{ strokeDashoffset }} className="text-white" />
                        </svg>
                        <span className="absolute font-mono text-[10px] tracking-widest text-white">{progress}%</span>
                    </div>
                    <motion.div 
                        className="mt-8 text-[12px] tracking-[0.4em] text-white/80 font-semibold">
                        Tip: Hover around the site
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        <nav className="fixed top-12 right-12 z-[500] flex items-center pointer-events-auto border-b border-white/5 pb-2">
            {sections.map((section, idx) => (
            <React.Fragment key={section.id}>
                <button onClick={() => setActiveTab(section.id)}
                className="group relative flex flex-col items-end px-6 cursor-pointer">
                <div className="flex items-center gap-2">
                    <span className={`text-[8px] font-mono transition-colors duration-300 ${activeTab === section.id ? 'text-zinc-400' : 'text-zinc-700'}`}>
                        (0{idx + 1})
                    </span>
                    <span className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${
                        activeTab === section.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
                        {section.id}
                    </span>
                </div>
                
                {activeTab === section.id && (
                    <motion.div layoutId="nav-underline"
                    className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-white z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}/>
                )}
                </button>
                {idx < sections.length - 1 && (
                    <div className="h-4 w-[1px] bg-white/10" />
                )}
            </React.Fragment>
            ))}
        </nav>

        <div className="fixed bottom-12 right-12 z-[500] flex items-center gap-8 pointer-events-none">
            <div className="hidden lg:block opacity-30 text-[10px] 2xl:text-[12px] font-mono tracking-[0.2em] uppercase whitespace-nowrap">
                EST. 1999 // 40.7479° N, 73.9867° W
            </div>
        </div>

        <main className="relative z-[100] h-full w-full flex justify-center md:p-20">
            <AnimatePresence mode="popLayout">
                {sections.map((section) => (
                activeTab === section.id && (
                    <motion.div key={section.id} initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 40 }} 
                    animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, y: 0 }} 
                    exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0, y: -40 }} 
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
                    className="w-full flex flex-col items-start">
                        <div className='flex items-center text-zinc-600 space-x-4 lg:mb-4 2xl:mb-10'>
                            <p className='tracking-[0.3em] text-[10px] font-mono'>({ section.num }) &nbsp;//&nbsp;</p>
                            <div className="w-10 h-[1px] bg-zinc-700" />
                        </div>
                        
                        <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black uppercase mb-10 tracking-tighter leading-none">
                            {section.title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 === 0 ? "text-white" : "text-white/50"}>{word}{' '}</span>
                            ))}
                        </h1>

                        <div className="w-full max-h-[60vh] overflow-y-auto custom-scrollbar pr-6 pointer-events-auto">
                            <section.component setActiveTab={setActiveTab} />
                        </div>
                    </motion.div>
                )
                ))}
            </AnimatePresence>
        </main>

        <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 3px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
            .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.05) transparent; }
        `}</style>
    </div>
    );
}