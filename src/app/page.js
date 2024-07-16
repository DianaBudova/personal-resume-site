"use client";

import ContactMeModal from "./modals/contact-me/modal";
import HomePage from "./home/page.js";
import Link from "next/link";
import { useState } from "react";

export default function BodyPage() {
    const [openModal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!openModal);
    };

    return (
        <>
            {/* <body className={inter.className}> */}
            <body className="source-code-pro">
                <nav className="text-md sm:text-lg md:text-xl p-4 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
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
                                className="flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-green-700 to-green-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transition duration-300 ease-in-out"
                            >
                                <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Contact Me
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="px-7 sm:px-10 md:px-14 py-7">
                    {openModal && (
                        <ContactMeModal openModal={openModal} setModal={setModal} />
                    )}
                    <HomePage />
                </div>
            </body>
        </>
    );
}
