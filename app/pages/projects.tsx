export default function Projects() {
  return (
      <div className="flex min-h-screen bg-black p-8 xl:p-[100px] 2xl:p-[150px] justify-between">
  
        {/* Projects Section */}
        <div className="flex flex-col items-start justify-between space-y-6">
            <div className="">
                <h3 className="text-white font-semibold text-[56px] mb-6">My Work.</h3>
                <p className="text-white text-lg leading-relaxed max-w-[300px]">
                    Visit Github Repos to explore the tech stack, architectural decisions, 
                    and full project documentation.
                </p>
            </div>

            <div className="border border-white px-6 py-2 cursor-pointer">
                <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer" 
                className="text-white">Github</a>
            </div>
        </div>

        <div className="flex flex-col items-start justify-between space-y-6">
            <h3 className="text-white">Projects</h3>
        </div>

        
      </div>
  );
}