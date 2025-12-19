"use client";
import projects from "../data/projects.json";
import { useState } from "react";


export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex min-h-screen bg-black xl:p-[100px] 2xl:p-[150px] justify-between">
        <div className="flex flex-col items-start justify-between space-y-6">
            <div>
                <h3 className="text-white font-semibold text-[56px] mb-6">
                My Work.
                </h3>
                <p className="text-white text-lg leading-relaxed max-w-[300px]">
                Visit Github Repos to explore the tech stack, architectural
                decisions, and full project documentation.
                </p>
            </div>

            {/* <div className="border border-white px-6 py-2">
                <a href="https://github.com/annaw-99" target="_blank" rel="noopener noreferrer"
                className="text-white">Github</a>
            </div> */}
        </div>

      {/* Projects Section */}
      <div className="flex flex-col space-y-6">
        {projects.map((project) => {
          const isOpen = activeId === project.id;

          return (
            <div key={project.id} onClick={() => toggleProject(project.id)}
            className="border border-white px-6 2xl:w-[900px] cursor-pointer transition-all duration-300">

                <div className="flex justify-between items-center h-[150px]">
                    <div className="flex items-baseline space-x-6">
                        <h3 className="text-[80px] text-white font-bold">{project.id}.</h3>
                        <p className="text-[30px] text-white">{project.title}</p>
                    </div>

                    <div className="flex space-x-6">
                        {project.siteUrl && (
                        <a href={project.siteUrl} target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} className="text-white underline">
                            View Site
                        </a>
                        )}
                        <a href={project.repoUrl} target="_blank"rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} className="text-white underline">
                            View Repo
                        </a>
                    </div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] pb-6" : "max-h-0"}`}>
                    <p className="text-white text-[20px] mb-4 max-w-[700px]">
                        {project.description}
                    </p>

                    <p className="text-white text-[20px]">
                        {project.techStack.join(", ")}
                    </p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}