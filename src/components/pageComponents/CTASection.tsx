
export default function CTASection() {

    return (
        <div className="relative isolate mt-44 mb-8">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 text-center from-[#FF0093]/20 bg-gradient-to-t rounded-b-xl">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Everyone, On Board!
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-text">
                    Seamlessly onboard users from exchanges, blockchains and wallets.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
