const MeComponent = () => {
    return (
        <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
                Diana Budova (Fullstack Developer)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8">
                <div className="col-span-1 flex justify-center sm:justify-start">
                    <img
                        src="images/Me.png"
                        alt="Me"
                        className="rounded-lg w-3/4 sm:w-full shadow-md object-cover"
                    />
                </div>
                <div className="col-span-2">
                    <p className="text-lg sm:text-xl text-zinc-200 my-5 mb-7 sm:mt-0">
                        Young, fast-learning, and communicative professional
                        with experience in CRM and CMS. Dedicated to continuous
                        learning and committed to writing clean, efficient code.
                        Maintain numerous repositories on GitHub, showcasing a
                        wide range of projects and technical skills.
                    </p>
                    <div className="mt-5 mb-7">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-7">
                            Experience
                        </h2>
                        <div>
                            <div className="bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4">
                                <h3 className="text-xl sm:text-2xl md:text-3xl mb-3">
                                    SWIT SITE WEB IT
                                </h3>
                                <p className="text-lg sm:text-xl md:text-xl text-zinc-300">
                                    TERNOPIL, UKRAINE
                                </p>
                                <p className="text-lg sm:text-xl md:text-xl text-zinc-100">
                                    MAR. 2024 – NOWADAYS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-7">
                            Education
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4">
                                <h3 className="text-xl sm:text-2xl md:text-3xl mb-3">
                                    SOFTWARE ENGINEERING BACHELOR DEGREE
                                </h3>
                                <p className="text-lg sm:text-xl md:text-xl text-zinc-300">
                                    NATIONAL AVIATION UNIVERSITY, KYIV, UKRAINE
                                </p>
                                <p className="text-lg sm:text-xl md:text-xl text-zinc-100">
                                    SEPT. 2023 – JUN. 2027
                                </p>
                            </div>
                            <div className="flex flex-col bg-black bg-opacity-20 backdrop-filter rounded-lg shadow-md p-4">
                                <h3 className="text-xl sm:text-2xl md:text-3xl mb-3">
                                    IT STEP ACADEMY
                                </h3>
                                <p className="text-lg sm:text-xl md:text-xl text-zinc-100">
                                    DEC. 2021 – JUN. 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MeComponent;
