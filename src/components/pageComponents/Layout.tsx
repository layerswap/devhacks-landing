import { FC } from "react"
import Head from 'next/head'
import Script from "next/script";
import AnimatedLogo from "./AnimatedLogo";

type Props = {
    children?: React.ReactNode
};

const Layout: FC<Props> = ({ children }) => {

    return (
        <>
            <Head>
                <title>ԴևHacks</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="favicon/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#111827" />
                <meta name="description" content="Տարվա ամենաԴԱԺԱՆ մրցույթը" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://www.devhacks.am/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ԴևHacks" />
                <meta property="og:description" content="Տարվա ամենաԴԱԺԱՆ մրցույթը" />
                <meta property="og:image" content="/opengraph.jpg" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="devhacks.am" />
                <meta property="twitter:url" content="https://www.devhacks.am/" />
                <meta name="twitter:title" content="ԴևHacks" />
                <meta name="twitter:description" content="Տարվա ամենաԴԱԺԱՆ մրցույթը" />
                <meta name="twitter:image" content="/opengraphtw.jpg" />

            </Head>
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
            <div className="relative isolate overflow-hidden ">

                {/* <AnimatedLogo /> */}

                <svg
                    className="absolute inset-0 -z-20 h-full w-full stroke-gray-700/70 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-black/20">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
                </svg>

                {children}

            </div>
        </>
    )
}

export default Layout