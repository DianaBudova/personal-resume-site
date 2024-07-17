const MeComponent = () => {
    return (
        <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-7">
                Me
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="col-span-1 flex justify-center">
                    <img
                        src="/images/Me.png"
                        alt="Me"
                        className="rounded-lg shadow-md w-64 h-76 object-cover"
                    />
                </div>
                <div className="col-span-2">
                    <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 mb-5">
                        Some description
                    </p>
                </div>
            </div>
        </>
    );
};

export default MeComponent;
