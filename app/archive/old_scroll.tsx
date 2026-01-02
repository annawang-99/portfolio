import { motion, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import About from '../pages/about';
import Projects from '../pages/projects';
import Tech from '../pages/tech';

const ScrollAnimation = ({ section, index, total, scrollYProgress }) => {
    const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
    
    const step = 1 / (total - 1);
    const targetPos = index * step;
    const startReveal = targetPos - step;
    const endReveal = targetPos + step;

    const clipPath = useTransform(
        scrollYProgress,
        [startReveal, targetPos, endReveal],
        [
            "inset(100% 0% 0% 0%)", 
            "inset(0% 0% 0% 0%)",   
            "inset(0% 0% 100% 0%)"  
        ]
    );

    const y = useTransform(
        scrollYProgress,
        [startReveal, targetPos, endReveal],
        [40, 0, -40]
    );

    const scrollOpacity = useTransform(
        scrollYProgress,
        [startReveal + (step * 0.2), targetPos, endReveal - (step * 0.2)],
        [0, 1, 0]
    );

    useEffect(() => {
        const timer = setTimeout(() => setHasAnimatedIn(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div 
            className="fixed inset-0 md:px-20 md:py-15 2xl:p-20 pointer-events-none" 
            style={{ zIndex: index + 150 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1] 
            }}
        >
            <motion.div 
                style={{ 
                    clipPath, 
                    opacity: hasAnimatedIn ? scrollOpacity : 1,
                    y 
                }}
                className="w-full h-full flex flex-col items-start justify-start overflow-y-auto custom-scrollbar"
            >
                <div className='flex items-center text-zinc-500 space-x-6 lg:mb-4 2xl:mb-10'>
                    <p className='tracking-[0.3em] '>{ section.num } &nbsp;//&nbsp;</p>
                    <hr className='w-[100px] opacity-50 ' />
                </div>
                <h2 style={{ color: section.textColor }} className="text-6xl lg:text-8xl 2xl:text-[128px] font-black uppercase mb-6">
                    {section.title}
                </h2>
                
                {section.id === 'about' && <About />}
                {section.id === 'tech' && <Tech />}
                {section.id === 'projects' && <Projects/>}
            </motion.div>
        </motion.div>
    );
};

export default ScrollAnimation;