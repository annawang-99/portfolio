export default function Projects() {
  return (
      <div className="flex min-h-screen bg-black xl:p-[100px] 2xl:p-[150px] justify-between">
  
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

        <div className="flex flex-col space-y-6">
            {/* Project One */}
            <div className="border border-white px-6 2xl:w-[900px] h-[150px] flex items-center">
                <div className="flex w-full justify-between">
                    <div className="flex items-baseline space-x-6">
                        <h3 className="text-[80px] text-white font-bold">01.</h3>
                        <p className="text-[30px] text-white">E-Commerce Site</p>
                    </div>

                    <div className="flex items-end space-x-6">
                        <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer" 
                        className="text-white underline cursor-pointer">View Site</a>
                        <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer" 
                        className="text-white underline cursor-pointer">View Repo</a>
                    </div>
                </div>
            </div>

            {/* Project Two */}
            <div className="border border-white px-6 2xl:w-[900px] h-[150px] flex items-center">
                <div className="flex w-full justify-between">
                    <div className="flex items-baseline space-x-6">
                        <h3 className="text-[80px] text-white font-bold">02.</h3>
                        <p className="text-[30px] text-white">QR Code Generator</p>
                    </div>

                    <div className="flex items-end space-x-6">
                        <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer" 
                        className="text-white underline cursor-pointer">View Site</a>
                        <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer" 
                        className="text-white underline cursor-pointer">View Repo</a>
                    </div>
                </div>
            </div>

            {/* Project Three */}
            <div className="border border-white px-6 2xl:w-[900px] h-[320px] flex">
                <div className="flex flex-col w-full h-full">
                    <div className="flex items-baseline space-x-6 mt-2 mb-4">
                        <h3 className="text-[80px] text-white font-bold">03.</h3>
                        <p className="text-[30px] text-white">RAG Chatbot</p>
                    </div>

                    <div>
                        <p className="text-white text-[20px] mb-4 max-w-[700px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                            Lorem Ipsum is simply dummy text.
                        </p>

                        <p className="text-white text-[20px]">
                            [Tech Stack Here]
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer"
                        className="text-white underline cursor-pointer">View Repo</a>
                    </div>
                </div>
            </div>
        </div>

        
      </div>
  );
}