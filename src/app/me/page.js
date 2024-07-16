const MeComponent = () => {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-7">
                Me
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-center sm:justify-start items-center">
                    <img
                        src="/images/Me.png"
                        alt="Me"
                        className="text-center rounded-lg shadow-md w-64 h-76 object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default MeComponent;
