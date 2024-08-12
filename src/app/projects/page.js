"use client";

import {useState, useEffect} from "react";
import projectsJSON from "../../../public/projects.json";
import ImageSlider from "../slider.js";

const ProjectsComponent = () => {
    const [projects] = useState(projectsJSON || []);

    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold">
                Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4"
                    >
                        <div className="mb-5">
                            <h2 className="text-2xl font-black text-center mb-2">
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        className="link-animation text-zinc-200 animate-pulse hover:animate-none"
                                    >
                                        {project.title}
                                    </a>
                                ) || (
                                    <span className="text-zinc-200">
                                        {project.title}
                                    </span>
                                )}
                            </h2>
                            <p className="text-zinc-250">
                                {project.description}
                            </p>
                        </div>
                        <div>
                            <ImageSlider images={project.images}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectsComponent;
