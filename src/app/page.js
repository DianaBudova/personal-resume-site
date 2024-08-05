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
                <nav className="sticky top-0 text-md sm:text-lg md:text-xl p-4 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm shadow-xl space-y-3">
                    <ul className="px-7 sm:px-10 md:px-14 flex justify-between">
                        <li className="flex items-center">
                            <Link href="/" className="link-animation">
                                <span className="cursor-pointer text-lg text-zinc-50">
                                    Diana Budova
                                </span>
                            </Link>
                        </li>
                        <li className="flex items-center space-x-3">
                            <div className="hidden sm:flex flex-col items-center">
                                <span className="text-lg font-medium">+38 096 936 07 81</span>
                                <span className="text-sm">budovadiana@gmail.com</span>
                            </div>
                            <form
                                action="https://www.linkedin.com/in/diana-budova-2690472b7/"
                                target="_blank"
                            >
                                <button
                                    onClick={handleModal}
                                    className="flex items-center justify-center p-0.5 overflow-hidden text-zinc-900 rounded-lg group bg-gradient-to-br from-green-700 to-green-400 dark:text-zinc-50 transition duration-300 ease-in-out"
                                >
                                    <span className="px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-md group-hover:bg-opacity-0">
                                        <img
                                            src="images/social-media/linkedin.svg"
                                            alt="LinkedIn"
                                        />
                                    </span>
                                </button>
                            </form>
                            <form
                                action="https://github.com/DianaBudova"
                                target="_blank"
                            >
                                <button
                                    onClick={handleModal}
                                    className="flex items-center justify-center p-0.5 overflow-hidden text-zinc-900 rounded-lg group bg-gradient-to-br from-green-700 to-green-400 dark:text-zinc-50 transition duration-300 ease-in-out"
                                >
                                    <span className="px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-md group-hover:bg-opacity-0">
                                        <img
                                            src="images/social-media/github.svg"
                                            alt="GitHub"
                                        />
                                    </span>
                                </button>
                            </form>
                            <button
                                onClick={handleModal}
                                className="flex items-center justify-center p-0.5 overflow-hidden text-zinc-900 rounded-lg group bg-gradient-to-br from-green-700 to-green-400 dark:text-zinc-50 transition duration-300 ease-in-out"
                            >
                                <span className="hidden md:block px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-md group-hover:bg-opacity-0">
                                    Contact Me
                                </span>
                                <span className="block md:hidden px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-zinc-900 rounded-md group-hover:bg-opacity-0">
                                    <img
                                        src="images/telephone-call.svg"
                                        alt="Contact Me"
                                    />
                                </span>
                            </button>
                        </li>
                    </ul>
                    <ul className="flex sm:hidden items-center justify-between px-7 sm:px-10 md:px-14">
                        <li className="flex flex-col w-full items-end">
                            <span className="text-md">+38 096 936 07 81</span>
                            <span className="text-md">budovadiana@gmail.com</span>
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
