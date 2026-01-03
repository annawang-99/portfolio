import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects.json';

interface ProjectsProps {
  setActiveTab: (tab: string) => void;
}

export default function Projects({ setActiveTab }: ProjectsProps) {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const textColor = 'white';
  
    return (
    <div className="space-y-6 w-full lg:max-w-5xl 2xl:max-w-6xl">
        <p className="text-zinc-500 text-lg max-w-[500px] leading-relaxed mb-12">
            Several projects I've built in the past.
        </p>
        {projects.map((proj, i) => {
        const isExpanded = expandedProject === i;
        return (
            <div key={i} className="border-b border-white/10 pb-6 last:border-0">
            <button onClick={() => setExpandedProject(isExpanded ? null : i)} style={{ color: textColor }}
            className="group flex items-baseline gap-6 w-full text-left focus:outline-none pointer-events-auto cursor-pointer">
                <span className="xl:text-6xl font-extralight tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                    {proj.title}
                </span>
                <span className="text-sm uppercase tracking-[0.2em] font-bold mb-2">
                    {proj.subtitle}
                </span>
                <span className="text-md opacity-40 group-hover:opacity-100 transition-opacity">
                    {isExpanded ? "—" : "+"}
                </span>
            </button>

            <AnimatePresence>
                {isExpanded && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden">
                <div className="pt-8 pb-4 grid gap-8 pointer-events-auto">
                    <div>
                        <div className='mb-6'>
                            <p className="text-lg text-zinc-300 leading-relaxed">
                                {proj.description}
                            </p>
                            {proj.why && (
                                <p className="text-lg text-zinc-300 leading-relaxed">
                                    <span className='italic'>why?&nbsp;&nbsp;</span>{proj.why}
                                </p>
                            )}
                            {proj.notes && (
                                <p className="text-lg text-zinc-500 leading-relaxed">
                                    side note:&nbsp;{proj.notes}
                                </p>
                            )}
                        </div>
                        
                        {!!proj.images?.length && (
                            <div className="mb-6 flex space-x-4 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
                            {proj.images.map((src: string, idx: number) => (
                                <a key={idx} href={proj.siteUrl || proj.repoUrl} target="_blank" rel="noopener noreferrer"
                                    className="relative min-w-[220px] h-[140px] 2xl:min-w-[300px] 2xl:h-[220px] border border-white transition-colors cursor-pointer group/img">
                                    <Image src={src} alt={`${proj.title}`} fill className="object-cover group-hover/img:opacity-80 transition-opacity" />
                                </a>
                            ))}
                            </div>
                        )}
                        <div className="flex gap-2">
                            {proj.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider text-zinc-400">
                                    {tech}
                                </span>
                            ))}
                            <div className="flex items-center gap-4 justify-end ml-4">
                                {proj.siteUrl && (
                                    <a href={proj.siteUrl} target="_blank" rel="noopener noreferrer" 
                                    className="cursor-pointer text-white hover:text-zinc-500 transition-colors text-sm font-bold uppercase tracking-widest">Live Site ↗</a>
                                )}
                                <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" 
                                className="cursor-pointer text-white hover:text-zinc-500 transition-colors text-sm font-bold uppercase tracking-widest">Github Repo ↗</a>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
                )}
            </AnimatePresence>
            </div>
        );
        })}

        {/* Old Portfolios */}
        <div className="border-b border-white/10 pb-6 last:border-0">
            <button onClick={() => setExpandedProject(expandedProject === 999 ? null : 999)} style={{ color: textColor }}
            className="group flex items-baseline gap-6 w-full text-left focus:outline-none pointer-events-auto cursor-pointer">
                <span className="xl:text-6xl font-extralight tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                    Old Portfolio Sites
                </span>
                <span className="text-md opacity-40 group-hover:opacity-100 transition-opacity">
                    {expandedProject === 999 ? "—" : "+"}
                </span>
            </button>

            <AnimatePresence>
                {expandedProject === 999 && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden">
                <div className="pt-8 pb-4 grid gap-6 pointer-events-auto">
                    <p className="text-lg text-zinc-300 leading-relaxed mb-2">
                        My first portfolio was built with pure HTML/CSS, my second with React (Next.js) and Tailwind.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://annaw-99.github.io/web/" target="_blank" rel="noopener noreferrer" 
                        className="text-white hover:text-indigo-400 transition-colors duration-300 ease-in-out text-sm font-bold uppercase tracking-widest">v1.0 Site ↗</a>
                        <a href="https://annaw99.vercel.app/" target="_blank" rel="noopener noreferrer" 
                        className="text-white hover:text-indigo-400 transition-colors duration-300 ease-in-out text-sm font-bold uppercase tracking-widest">v2.0 Site ↗</a>
                    </div>
                </div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    </div>
  );
}