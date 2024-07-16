"use client";

import projectsJSON from "../../../public/projects.json";

const HomePage = () => {
    const projects = projectsJSON || [];

    return (
        <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-7">
                Resume!
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between bg-white bg-opacity-15 backdrop-filter rounded-lg shadow-md p-4"
                    >
                        <div className="mb-5">
                            <h2 className="text-2xl font-black text-center text-gray-200 mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-250">
                                {project.description}
                            </p>
                            <p>
                                <a
                                    href={project.url}
                                    className="link-animation text-green-500 font-bold after:border-green-600"
                                >
                                    GitHub
                                </a>
                            </p>
                        </div>
                        <div className="">
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

export default HomePage;
