"use client";

export default function Error({ error, reset }) {
    return (
        <>
            An error occured: {error.message}
            <button onClick={() => reset()}>Try again</button>
        </>
    );
}