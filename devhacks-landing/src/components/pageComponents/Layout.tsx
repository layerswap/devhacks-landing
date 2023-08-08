import { FC, useContext } from "react"
import Header from '@/components/pageComponents/Header'
import Head from 'next/head'
import Footer from '@/components/pageComponents/Footer'
import { useRouter } from "next/router";

type Props = {
    children?: React.ReactNode
};

const Layout: FC<Props> = ({ children }) => {
    const router = useRouter()


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
            <div className="bg-darkblue-950">

                <Header />

                {children}

                <Footer />

            </div>
        </>
    )
}

export default Layout