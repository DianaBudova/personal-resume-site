const MeComponent = () => {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-7">
                Diana Budova
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8">
                <div className="col-span-1 flex justify-center">
                    <img
                        src="images/Me.png"
                        alt="Me"
                        className="rounded-lg shadow-md object-cover"
                    />
                </div>
                <div className="col-span-2">
                    <p className="text-lg sm:text-xl text-zinc-200 my-5 sm:mt-0">
                        Young, fast-learning, and communicative professional
                        with experience in CRM and CMS. Dedicated to continuous
                        learning and committed to writing clean, efficient code.
                        Maintain numerous repositories on GitHub, showcasing a
                        wide range of projects and technical skills.
                    </p>
                    <div className="mt-7">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-7">
                            Connect with me
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-center">
                            <div className="flex flex-col items-center bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4">
                                <h3 className="text-xl sm:text-2xl md:text-3xl mb-3">
                                    Email
                                </h3>
                                <p className="text-lg sm:text-xl md:text-xl text-zinc-200">
                                    budovadiana@gmail.com
                                </p>
                            </div>
                            <div className="flex flex-col items-center bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4">
                                <h3 className="text-xl sm:text-2xl md:text-3xl mb-3">
                                    Phone
                                </h3>
                                <p className="text-lg sm:text-xl md:text-xl text-zinc-200">
                                    +38 096 936 07 81
                                </p>
                            </div>
                            <div className="flex flex-col items-center bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-lg p-6 space-y-4">
                                <form
                                    action="https://www.linkedin.com/in/diana-budova-2690472b7/"
                                    target="_blank"
                                >
                                    <button
                                        type="submit"
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:scale-105"
                                    >
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="mr-1"
                                                src="images/social-media/linkedin.svg"
                                                alt="LinkedIn"
                                            />
                                            <span>LinkedIn</span>
                                        </div>
                                    </button>
                                </form>
                            </div>
                            <div className="flex flex-col items-center bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-lg p-6 space-y-4">
                                <form
                                    action="https://github.com/DianaBudova"
                                    target="_blank"
                                >
                                    <button
                                        type="submit"
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-transform hover:scale-105"
                                    >
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="mr-1"
                                                src="images/social-media/github.svg"
                                                alt="GitHub"
                                            />
                                            <span>GitHub</span>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MeComponent;
