"use client";

import { useState, useEffect } from "react";
import skillsJSON from "../../../public/skills.json";

const SkillsComponent = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(skillsJSON);
    }, []);

    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold">
                Skills
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((category, index) => {
                    const categoryName = Object.keys(category)[0];
                    return (
                        <div
                            key={index}
                            className="bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4 transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-4">
                                {categoryName}
                            </h3>
                            <ul className="space-y-2">
                                {category[categoryName].map((skill, idx) => (
                                    <li
                                        key={idx}
                                        className="flex justify-between p-1"
                                    >
                                        <span className="font-medium text-zinc-200">
                                            {skill.name}
                                        </span>
                                        <div className="flex space-x-1">
                                            {Array.from(
                                                { length: skill.level },
                                                (_, index) => (
                                                    <img
                                                        key={index}
                                                        src="images/star.svg"
                                                        alt="star"
                                                        className="w-4 h-4 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SkillsComponent;
