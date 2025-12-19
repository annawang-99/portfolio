export default function About() {
  return (
      <div className="flex flex-col min-h-screen bg-black p-8 xl:p-[100px] 2xl:p-[150px]">
  
        {/* About Me Page */}
        <div className="flex-1 flex items-start">
            <div className="flex flex-col">
                <h3 className="text-white font-semibold text-[56px] mb-6">About Me.</h3>
                
                <p className="relative text-white text-lg leading-relaxed max-w-[300px]">
                    Check out my Github, find me on LinkedIn, or send me an email saying{" "}
                    <span className="group cursor-pointer">'hi'
                        <span className="absolute left-0 top-full mt-2 opacity-0 
                        group-hover:opacity-100 transition-opacity text-orange-300 text-sm">
                        ("waves")
                        </span>
                    </span>
                    , or scroll down to see some of my work.
                </p>
            </div>
        </div>

        <div className="flex justify-between items-end">
            <div className="flex gap-[30px]">
                <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer"
                className="inline-block border border-white px-6 py-2 text-white transition-all duration-150 
                hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0_0_white] 
                active:translate-x-0 active:translate-y-0 active:shadow-none">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/tungyen-wang" target="_blank" rel="noopener noreferrer"
                className="inline-block border border-white px-6 py-2 text-white transition-all duration-150 
                hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0_0_white] 
                active:translate-x-0 active:translate-y-0 active:shadow-none">
                    LinkedIn
                </a>
                <a href="mailto:annawang9909@gmail.com" target="_blank" rel="noopener noreferrer" 
                className="inline-block border border-white px-6 py-2 text-white transition-all duration-150 
                hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0_0_white] 
                active:translate-x-0 active:translate-y-0 active:shadow-none">
                    Email
                </a>
                


            </div>

            <div className="flex flex-col items-end">
                <h5 className="text-white text-[24px] font-light">New York.</h5>
                <h5 className="text-white text-[24px] font-light mb-10">Software Developer.</h5>
                <h1 className="text-white text-[168px] font-bold leading-[0.7]">Anna W.</h1>
            </div>
        </div>
      </div>
  );
}