

export default function Testimonials() {
    return (
        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary-600">Words speak louder</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Testimonials
                    </p>
                    <p className="mt-6 text-lg leading-8 text-primary-text max-w-xl">
                        Experience the future of web3 onboarding with seamless connectivity to
                        exchanges and blockchains.
                    </p>
                </div>
                <div className="mx-auto mt-12 max-w-2xl lg:max-w-6xl">
                    <dl className="grid  grid-cols-1 gap-3 lg:max-w-none lg:grid-cols-2 lg:grid-rows-8 font-medium">
                        <dt className="row-span-2 bg-darkblue-900 rounded-xl ring-1 ring-[#1E293B] p-5 gap-3 flex flex-col justify-between">
                            <p>
                                In an ecosystem where so many stands, Layerswap delivers.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/images/testimonials/uri.png" alt="Uri" className="h-10 w-10 rounded-full" />
                                    <div>
                                        <p className="text-base font-medium">
                                            Uri
                                        </p>
                                        <p className="text-xs font-normal text-primary-text">
                                            Co-Founder & CEO StarkWareLtd
                                        </p>
                                    </div>
                                </div>
                                <img src="/images/testimonials/starkware.png" alt="Starkware" />
                            </div>
                        </dt>
                        <dt className="row-span-3 bg-darkblue-900 rounded-xl ring-1 ring-[#1E293B] p-5 gap-3 flex flex-col justify-between">
                            <p>
                                Layerswap has been a critical building block enabling 1M users to onboard onto Starknet. We’re planning to integrate LS as part of several new initiatives.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/images/testimonials/itamar.png" className="h-10 w-10 rounded-full" alt="Itamar" />
                                    <div>
                                        <p className="text-base font-medium">
                                            Itamar
                                        </p>
                                        <p className="text-xs font-normal text-primary-text">
                                            Co-Founder & CEO Argent
                                        </p>
                                    </div>
                                </div>
                                <img src="/images/testimonials/argent.png" alt="Argent" />
                            </div>
                        </dt>
                        <dt className="row-span-4 bg-darkblue-900 rounded-xl ring-1 ring-[#1E293B] p-5 gap-3 flex flex-col justify-between">
                            <p>
                                Layerswap has been amazing in helping users quickly and safely onboard to Polygon zkEVM. Apps throughout the Polygon ecosystem have been leveraging the instant connection to all of the top exchanges and chains to reduce friction when on-ramping, bridging, and off-ramping.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/images/testimonials/david.png" alt="David" className="h-10 w-10 rounded-full" />
                                    <div>
                                        <p className="text-base font-medium">
                                            David
                                        </p>
                                        <p className="text-xs font-normal text-primary-text">
                                            PM Polygon zkEVM
                                        </p>
                                    </div>
                                </div>
                                <img src="/images/testimonials/polygon.png" alt="Polygon" />

                            </div>
                        </dt>
                        <dt className="row-span-3 bg-darkblue-900 rounded-xl ring-1 ring-[#1E293B] p-5 gap-3 flex flex-col justify-between">
                            <p>
                                Layerswap has been instrumental in driving early-stage growth to the zkSync ecosystem by helping our users connect and transfer from and to all the top exchanges. I personally use it for on-ramping from US exchanges.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/images/testimonials/omar.png" alt="Omar" className="h-10 w-10 rounded-full" />
                                    <div>
                                        <p className="text-base font-medium">
                                            Omar
                                        </p>
                                        <p className="text-xs font-normal text-primary-text">
                                            Head of BD at Matter Labs (zkSync)
                                        </p>
                                    </div>
                                </div>
                                <img src="/images/testimonials/matterLabs.png" alt="Matter Labs" />
                            </div>
                        </dt>
                    </dl>
                </div>
            </div>
        </div>
    )
}
