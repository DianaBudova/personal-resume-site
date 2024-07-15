// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Diana Budova's Portfolio",
    description: "Diana Budova's portfolio with Next.js",
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
            <html lang="en">
                {/* <body className={inter.className}> */}
				<body className="source-code-pro">
                    <nav className="text-lg sm:text-xl p-4 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
                        <ul className="flex justify-around">
                            <li>
                                <Link href="/">
                                    <span className="text-white hover:underline">
                                        About Me
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <span className="text-white hover:underline">
                                        Projects
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-me">
                                    <span className="text-white hover:underline">
                                        Contact Me
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="px-7 sm:px-10 md:px-14 py-7">
                        {children}
                    </div>
                </body>
            </html>
        </>
    );
}
