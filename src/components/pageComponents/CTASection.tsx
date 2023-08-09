
export default function CTASection() {

    return (
        <div className="relative isolate mt-20 mb-8">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    The Dev is waiting...
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-primary-text">
                    Seamlessly onboard users from exchanges, blockchains and wallets.
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-full bg-primary px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    )
}
