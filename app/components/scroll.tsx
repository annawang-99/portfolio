import { motion, useTransform } from 'framer-motion';
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

const ScrollAnimation = ({ section, index, total, scrollYProgress }) => {
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

    const opacity = useTransform(
        scrollYProgress,
        [startReveal + (step * 0.2), targetPos, endReveal - (step * 0.2)],
        [0, 1, 0]
    );

  return (
    <div className="fixed inset-0 p-10 md:p-20 pointer-events-none" style={{ zIndex: index + 150 }}>
      <motion.div style={{ clipPath, opacity, y }}
        className="w-full h-full flex flex-col items-start justify-start overflow-y-auto custom-scrollbar">
        <div className='flex items-center text-zinc-500 space-x-6 lg:mb-4 2xl:mb-10'>
          <p className='tracking-[0.3em] '>{ section.num } &nbsp;//&nbsp;</p><hr className='w-[100px] opacity-50 ' />
        </div>
        <h2 style={{ color: section.textColor }} className="text-6xl lg:text-8xl 2xl:text-[128px] font-black uppercase mb-6">
            {section.title}
        </h2>
        
        {section.id === 'about' && <About />}
        {section.id === 'projects' && <Projects/>}
        {section.id === 'contact' && <Contact />}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;