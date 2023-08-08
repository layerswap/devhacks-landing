import Footer from "@/components/pageComponents/Footer";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Layerswap</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="favicon/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#111827" />
                <meta name="description" content="Move crypto across exchanges, blockchains, and wallets." />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://www.layerswap.io/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Layerswap" />
                <meta property="og:description" content="Move crypto across exchanges, blockchains, and wallets." />
                <meta property="og:image" content="https://layerswap.io/opengraph.jpg?v=2" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="layerswap.io" />
                <meta property="twitter:url" content="https://www.layerswap.io/" />
                <meta name="twitter:title" content="Layerswap" />
                <meta name="twitter:description" content="Move crypto across exchanges, blockchains, and wallets." />
                <meta name="twitter:image" content="https://layerswap.io/opengraphtw.jpg" />
            </Head>
            <div className={"bg-darkblue-950 flex flex-col h-screen justify-between "}>
                <main className="h-screen flex flex-col justify-center">
                    <div className="text-center">
                        <p className="text-base font-semibold text-primary-600">404</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                        <p className="mt-6 text-base leading-7 max-w-xs sm:max-w-none mx-auto text-primary-text">Sorry, we couldn’t find the page you’re looking for.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/"
                                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 outline-none duartion-200 transition-all"
                            >
                                Go back home
                            </Link>
                            <Link href="https://discord.gg/layerswap" target="_blank" className="text-sm font-semibold text-white hover:opacity-70 duartion-200 transition-all">
                                Contact support <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
