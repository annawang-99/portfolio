"use client";
import projects from "../data/projects.json";
import { useState } from "react";
import Image from "next/image";

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
                <p className="relative text-white text-lg leading-relaxed max-w-[300px]">
                Visit Github Repos to explore the&nbsp;
                  <span className="group cursor-pointer">tech stack
                    <span className="absolute left-0 top-full mt-2 opacity-0 
                      group-hover:opacity-100 transition-opacity text-orange-300 text-sm">
                      (TODO)
                    </span>
                  </span>
                , architectural decisions, and full project documentation.
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
            className="border border-white px-6 2xl:w-[900px] cursor-pointer transition-all duration-200 
            hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-6px_6px_0_0_white]">
                <div className="flex justify-between items-center h-[150px]">
                    <div className="flex items-baseline space-x-6">
                        <h3 className="text-[80px] text-white font-bold">{project.id}.</h3>
                        <p className="text-[30px] text-white font-semibold">{project.title}</p>
                        <p className="text-[12px] text-orange-300">{project.subtitle}</p>
                    </div>
                </div>

                <div className={`grid transition-[grid-template-rows] duration-500 
                  ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
                    <p className="text-white text-[20px] mb-4 max-w-[700px]">{project.description}</p>
                    <p className="text-white text-[12px] font-bold">{project.techStack.join(", ")}</p>

                    {!!project.images?.length && (
                      <div className="mt-6 flex space-x-4 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
                        {project.images.map((src: string, idx: number) => (
                          <div key={idx} className="relative min-w-[220px] h-[140px] border border-white">
                            <Image src={src} alt={`${project.title}`} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex space-x-6 mt-6 mb-6">
                      {project.siteUrl && (
                        <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                          className="inline-block border border-white px-6 py-2 text-white transition-all duration-150 
                          hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0_0_white]">
                          View Site
                        </a>
                      )}

                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                        className="inline-block border border-white px-6 py-2 text-white transition-all duration-150 
                        hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0_0_white]">
                        View Repo
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}