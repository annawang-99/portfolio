import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects.json';

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const textColor = '#e0e7ff';
  
  return (
    <div className="space-y-6 w-full lg:max-w-5xl 2xl:max-w-6xl">
        {projects.map((proj, i) => {
        const isExpanded = expandedProject === i;
        return (
            <div key={i} className="border-b border-white/10 pb-6 last:border-0">
            <button onClick={() => setExpandedProject(isExpanded ? null : i)} style={{ color: textColor }}
            className="group flex items-baseline gap-6 w-full text-left focus:outline-none pointer-events-auto cursor-pointer">
                <span className="xl:text-6xl font-extralight tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                    {proj.title}
                </span>
                {/* text-indigo-400 */}
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
                        <p className="text-lg text-zinc-300 leading-relaxed">
                            {proj.description}
                        </p>
                        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                            <span className='italic'>why?&nbsp;&nbsp;</span>
                            <span className='text-zinc-500'>{proj.thoughts}</span>
                            &nbsp;{proj.why}
                        </p>
                        {!!proj.images?.length && (
                            <div className="mb-6 flex space-x-4 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
                            {proj.images.map((src: string, idx: number) => (
                                <div key={idx} className="relative min-w-[220px] h-[140px] border border-white">
                                <Image src={src} alt={`${proj.title}`} fill className="object-cover" />
                                </div>
                            ))}
                            </div>
                        )}
                        <div className="flex gap-2">
                            {proj.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                                    {tech}
                                </span>
                            ))}
                            <div className="flex items-center gap-4 justify-end ml-4">
                                {proj.siteUrl && (
                                    <a href={proj.siteUrl} target="_blank" rel="noopener noreferrer" 
                                    className="text-white hover:text-indigo-400 transition-colors text-sm font-bold uppercase tracking-widest">Live Site ↗</a>
                                )}
                                <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" 
                                className="text-white hover:text-indigo-400 transition-colors text-sm font-bold uppercase tracking-widest">Github Repo ↗</a>
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
    </div>
  );
}