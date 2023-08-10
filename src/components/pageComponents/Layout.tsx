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
                <meta property="og:image" content="/opengraph.jpg?v=2" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="devhacks.am" />
                <meta property="twitter:url" content="https://www.devhacks.am/" />
                <meta name="twitter:title" content="ԴևHacks" />
                <meta name="twitter:description" content="Տարվա ամենաԴԱԺԱՆ մրցույթը" />
                <meta name="twitter:image" content="/opengraphtw.jpg" />
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