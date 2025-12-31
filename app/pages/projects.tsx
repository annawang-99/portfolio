import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects.json';

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const textColor = '#e0e7ff';
  
  return (
    <div className="space-y-6 w-full max-w-5xl">
        {projects.map((proj, i) => {
        const isExpanded = expandedProject === i;
        return (
            <div key={i} className="border-b border-white/10 pb-6 last:border-0">
            <button onClick={() => setExpandedProject(isExpanded ? null : i)} style={{ color: textColor }}
            className="group flex items-baseline gap-6 w-full text-left focus:outline-none pointer-events-auto">
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
                    className="overflow-hidden">
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
  );
}