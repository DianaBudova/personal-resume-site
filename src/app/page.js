"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import ContactMeModal from "./modals/contact-me/modal";
import MeComponent from "./me/page";
import SkillsComponent from "./skills/page";
import ProjectsComponent from "./projects/page.js";

const inter = Inter({ subsets: ["latin"] });

export default function BodyPage() {
    const [openModal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!openModal);
    };

    return (
        <>
            <body className={inter.className}>
                <nav className="sticky top-0 text-md sm:text-lg md:text-xl p-4 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm shadow-xl">
                    <ul className="px-7 sm:px-10 md:px-14 flex justify-between">
                        <li className="flex items-center">
                            <Link href="/" className="link-animation">
                                <span className="cursor-pointer text-white">
                                    Diana Budova
                                </span>
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleModal}
                                className="flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-zinc-900 rounded-lg group bg-gradient-to-br from-green-700 to-green-400 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transition duration-300 ease-in-out"
                            >
                                <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-md group-hover:bg-opacity-0">
                                    Contact Me
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="px-7 sm:px-10 md:px-14 py-7">
                    <ContactMeModal openModal={openModal} setModal={setModal} />
                    <MeComponent />
                    <SkillsComponent />
                    <ProjectsComponent />
                </div>
            </body>
        </>
    );
}
