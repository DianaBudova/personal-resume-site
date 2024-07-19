"use client";

import { useState, useEffect } from "react";
import projectsJSON from "../../../public/projects.json";

const ProjectsComponent = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsJSON);
    }, []);

    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-7 mt-14">
                Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4"
                    >
                        <div className="mb-5">
                            <h2 className="text-2xl font-black text-center text-zinc-200 mb-2">
                                {project.title}
                            </h2>
                            <p className="text-zinc-250">
                                {project.description}
                            </p>
                            <p>
                                <a
                                    href={project.url}
                                    className="link-animation text-lg text-green-500 after:border-green-500"
                                >
                                    <span>GitHub</span>
                                </a>
                            </p>
                        </div>
                        <div>
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectsComponent;
