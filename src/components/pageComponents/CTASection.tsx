import Link from "next/link";

export default function CTASection() {

    return (
        <div id="apply_now" className="relative isolate pb-44 pt-56">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Դևը սպասում է քեզ...
                </h2>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <Link
                        href='https://layerswap.typeform.com/devhacks'
                        className="rounded-full w-fit mx-auto bg-primary px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Դիմիր հիմա
                    </Link>
                </div>
            </div>
        </div>
    )
}