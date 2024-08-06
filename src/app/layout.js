import "./globals.css";
import Head from "next/head";

export const metadata = {
    title: "Diana Budova's CV",
    description: "Diana Budova's CV with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <html lang="en">{children}</html>
        </>
    );
}
