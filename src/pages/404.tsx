import Layout from "@/components/pageComponents/Layout";
import Link from "next/link";

export default function Custom404() {
    return (
        <Layout>
            <div className="flex flex-col h-screen justify-between">
                <main className="h-screen flex flex-col justify-center">
                    <div className="text-center">
                        <p className="text-base font-semibold text-primary-600">404</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                        <p className="mt-6 text-base leading-7 max-w-xs sm:max-w-none mx-auto text-darkblue-100">Sorry, we couldn’t find the page you’re looking for.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/"
                                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 outline-none duartion-200 transition-all"
                            >
                                Go back home
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}
