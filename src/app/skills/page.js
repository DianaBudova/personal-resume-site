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
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-7 mt-14">
                Skills
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4"
                    >
                        <div className="mb-5">
                            <h2 className="text-2xl font-black text-center text-zinc-200 mb-2">
                                {skill.name}
                            </h2>
                            <p className="text-zinc-250">
                                {skill.level}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SkillsComponent;
