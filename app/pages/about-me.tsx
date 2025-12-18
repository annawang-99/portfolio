export default function About() {
  return (
      <div className="flex flex-col min-h-screen bg-black p-8 xl:p-[100px] 2xl:p-[150px]">
  
        {/* About Me Section */}
        <div className="flex-1 flex items-start">
            <div className="flex flex-col">
                <h3 className="text-white font-semibold text-[56px] mb-6">About Me.</h3>
                <p className="text-white text-lg leading-relaxed max-w-[300px]">
                    Check out my Github, find me on LinkedIn, send me an email saying 'hi', 
                    or scroll down to see some of my work.
                </p>
            </div>
        </div>

        <div className="flex justify-between items-end">
            {/* Links */}
            <div className="flex gap-[30px]">
                <div className="border border-white px-6 py-2 cursor-pointer">
                    <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer" 
                    className="text-white">Github</a>
                </div>
                    <div className="border border-white px-6 py-2 cursor-pointer">
                    <a href="https://www.linkedin.com/in/tungyen-wang" target="_blank" rel="noopener noreferrer" 
                    className="text-white">LinkedIn</a>
                </div>
                    <div className="border border-white px-6 py-2 cursor-pointer">
                    <a href="mailto:annawang9909@gmail.com" target="_blank" rel="noopener noreferrer" 
                    className="text-white">Email</a>
                </div>
            </div>

            {/* Titles */}
            <div className="flex flex-col items-end">
                <h5 className="text-white text-[24px] font-light">New York.</h5>
                <h5 className="text-white text-[24px] font-light mb-10">Software Developer.</h5>
                <h1 className="text-white text-[168px] font-bold leading-[0.7]">Anna W.</h1>
            </div>
        </div>
      </div>
  );
}