"use client";

import { useState } from "react";

const ContactMeModal = ({ openModal, setModal }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleModal = () => {
        setModal(!openModal);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted", { name, email, message });
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white backdrop-filter rounded-lg p-8 rounded shadow-md w-full max-w-md">
                <div className="grid">
                    <button
                        onClick={handleModal}
                        type="button"
                        class="flex justify-self-end text-gray-800 bg-transparent hover:bg-white hover:text-gray-200 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-900"
                        data-modal-hide="default-modal"
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl mb-7 text-gray-800 text-center">
                    Contact me!
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleSubmit}
                            class="flex items-center w-full justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-green-700 to-green-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transition duration-300 ease-in-out"
                        >
                            <span class="px-5 w-full py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Send
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMeModal;
