import { motion } from 'framer-motion';
import { useState } from 'react';

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

export default function About( { setActiveTab }: AboutProps ) {
    const [isGlitching, setIsGlitching] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('annawang9909@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
    <div className="pointer-events-auto w-full lg:max-w-5xl 2xl:max-w-[80%] flex flex-col">
        <div>
            <h3 className="text-white text-4xl lg:text-6xl 2xl:text-[86px] font-extralight">I'm Anna.</h3>
            <h3 className="text-zinc-500 text-4xl lg:text-6xl 2xl:text-[86px] font-extralight">
                <span className="inline-block relative"
                    onMouseEnter={() => setIsGlitching(true)}
                    onMouseLeave={() => setIsGlitching(false)}>
                    <span className="relative z-10">Software Developer</span>
                    
                    <motion.span
                        className="absolute top-0 left-0 text-red-500 pointer-events-none"
                        animate={isGlitching ? { x: [-2, 2, -2, 2, 0], y: [2, -2, 2, -2, 0], opacity: [0, 0.7, 0, 0.7, 0] } : { opacity: 0 }}
                        transition={{ duration: 0.4, repeat: isGlitching ? Infinity : 0, repeatDelay: 0.1 }}>
                        Software Developer
                    </motion.span>

                    <motion.span
                        className="absolute top-0 left-0 text-emerald-500 pointer-events-none"
                        animate={isGlitching ? { x: [0, -2, 2, -2, 0], y: [0, 2, -2, 2, 0], opacity: [0.7, 0, 0.7, 0, 0.7] } : { opacity: 0 }}
                        transition={{ duration: 0.4, repeat: isGlitching ? Infinity : 0, repeatDelay: 0.15 }}>
                        Software Developer
                    </motion.span>

                    <motion.span
                        className="absolute top-0 left-0 text-blue-500 pointer-events-none"
                        animate={isGlitching ? { x: [2, -2, 2, -2, 0], y: [-2, 2, -2, 2, 0], opacity: [0.7, 0, 0.7, 0, 0] } : { opacity: 0 }}
                        transition={{ duration: 0.4, repeat: isGlitching ? Infinity : 0, repeatDelay: 0.2 }}>
                        Software Developer
                    </motion.span>
                </span>
                &nbsp;& Digital Crafter
            </h3>
        </div>

        <div className="my-12">
            <p className="relative text-zinc-400 text-lg leading-relaxed max-w-[500px]">
                Check out my&nbsp;
                <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out">Github</a>
                , find me on&nbsp;
                <a href="https://www.linkedin.com/in/tungyen-wang" target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out">LinkedIn</a>
                , or send me an&nbsp;
                <a href="mailto:annawang9909@gmail.com" target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:text-white transition-colors duration-300 ease-in-out">email</a>
                &nbsp;to say&nbsp;
                <span className="group hover:text-white transition-colors duration-300 ease-in-out">'hi'
                <span className="absolute left-0 top-full mt-2 opacity-0 
                    group-hover:opacity-100 transition-opacity text-orange-300 text-sm">
                    (*waves👋*)
                </span>
                </span>
                , or see&nbsp;
                <span onClick={() => setActiveTab('projects')} 
                    className="cursor-pointer hover:text-white transition-colors 
                    duration-300 underline decoration-white/30">
                    projects
                </span>&nbsp;to see some of my work.
            </p>
        </div>

        <div className="xl:mt-[30px] 2xl:mt-[80px] pt-8 border-t border-white/10 flex flex-wrap gap-x-12">
            <div className="space-y-2">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Connect</span>
                <div className="flex gap-6">
                <a href="https://github.com/annaw-99" target="_blank" className="cursor-pointer text-sm hover:text-zinc-500 transition-colors uppercase tracking-widest font-bold">Github</a>
                <a href="https://www.linkedin.com/in/tungyen-wang" target="_blank" className="cursor-pointer text-sm hover:text-zinc-500 transition-colors uppercase tracking-widest font-bold">LinkedIn</a>
                </div>
            </div>
            <div className="space-y-2">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Contact</span>
                <button onClick={handleCopyEmail}
                    className="cursor-pointer text-sm hover:text-zinc-500 transition-colors uppercase tracking-widest 
                    font-bold group/email relative">
                    Email
                    {copied && (
                        <span className="absolute left-0 bottom-full mb-2 
                            bg-black border border-white/10 px-3 py-1.5 rounded text-zinc-300 text-xs text-center">
                            Copied!
                        </span>
                    )}
                </button>
            </div>
            <div className="space-y-2">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Location</span>
                <span className="text-sm uppercase tracking-widest font-bold text-white">NYC / Remote / Anywhere in the US</span>
            </div>
        </div>
    </div>
  );
}