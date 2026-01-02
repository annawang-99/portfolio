"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Tech() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const stack = [
        {
            category: "Frontend",
            items: ["React", "Next.js", "Vue.js", "JavaScript / TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
            category: "Backend",
            items: ["Java", "Python", "PostgreSQL", "Node.js", "REST APIs"]
        },
        {
            category: "Core / Tools",
            items: ["Git", "Docker", "AWS", "CI/CD", "Agile"]
        }
    ];

    return (
        <div className="pointer-events-auto w-full lg:max-w-5xl 2xl:max-w-[80%] flex flex-col cursor-pointer">
            <p className="text-zinc-500 text-lg max-w-[500px] leading-relaxed mb-12">
                The tech and tools I use most often to build digital products.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stack.map((group, index) => (
            <div key={index} className="space-y-8">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-zinc-600">0{index + 1}</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
                        {group.category}
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                </div>
                
                <ul className="space-y-4">
                    {group.items.map((skill) => (
                    <li key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}>
                        <span className="group/skill relative inline-block">
                            <motion.span 
                                animate={{ 
                                    color: hoveredSkill === skill ? "#ffffff" : "#71717a",
                                    x: hoveredSkill === skill ? 6 : 0
                                }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="text-sm tracking-widest font-bold block">
                                {skill}
                            </motion.span>
                            {skill === "Next.js" && (
                                <span className="absolute left-full ml-4 top-0 opacity-0
                                    group-hover/skill:opacity-100 transition-opacity text-orange-300 text-sm whitespace-nowrap">
                                    (*bouncing excitedly*my favorite!!)
                                </span>
                            )}
                            {skill === "Java" && (
                                <span className="absolute left-full ml-4 top-0 opacity-0
                                    group-hover/skill:opacity-100 transition-opacity text-orange-300 text-sm whitespace-nowrap">
                                    (i know this one best*wink wink*)
                                </span>
                            )}
                        </span>
                    </li>
                    ))}
                </ul>
            </div>
            ))}
            </div>
        </div>
    );
}