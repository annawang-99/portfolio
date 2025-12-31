export default function Unused() {
  return (
    <div className="bg-black">
        {/* Button Style */}
        <a href="#" className="group relative px-6 py-2 bg-white/5 border border-white/10 rounded-lg overflow-hidden transition-all hover:border-white/30">
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">Github</span>
            <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </a>

        {/* Footer Element */}
        <div className="py-2">
            <p className="text-white/30 text-xs font-bold tracking-[0.4em] uppercase">
                Portfolio v3.0
            </p>
        </div>

        {/* Footer Element */}
        {/* <div className={`flex gap-4 items-center pointer-events-auto transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> */}
        <div className={`flex gap-4 items-center pointer-events-auto transition-all duration-700`}>
                <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-2 transition-all hover:border-white/30">
                    <span className="text-xs font-medium uppercase tracking-[0.4em] text-white/70 group-hover:text-white transition-colors">Github</span>
                </a>
                <p className='text-white/30'>•</p>
                <a href="https://www.linkedin.com/in/tungyen-wang" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-2 transition-all ">
                    <span className="text-xs font-medium uppercase tracking-[0.4em] text-white/70 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
        </div>
    </div>
  );
}
