import Layout from "@/components/pageComponents/Layout"

const Company = () => {

    const stats = [
        { label: 'Business was founded', value: '2021' },
        { label: 'People on the team', value: '12' },
        { label: 'Projects integrated', value: '100+' },
        { label: 'Users onboarded', value: '1M' },
        { label: 'Transaction volume', value: '$100M' },
    ]

    const timeline = [
        {
            name: 'CEX <-> CEX Transfers',
            description:
                'The initial product, Bransfer, was designed to facilitate asset transfers between centralized exchanges (CEXs) like Coinbase and Binance. By using the internal ledger of CEXes, we were able to provide instant and no-fee CEX to CEX transfers. Despite the unique one-of-a-kind solution, the problem was not big enough to continue pursuing it.',
            date: 'Feb 2021',
            dateTime: '2021-02',
        },
        {
            name: 'Crypto Payments',
            description:
                'Next, we expanded to Crypto Payments, leveraging our CEX integrations to enable quick, cost-free transfers for merchants and payers. However, this iteration also fell short of attracting sufficient customer interest.',
            date: 'Jul 2021',
            dateTime: '2021-07',
        },
        {
            name: 'CEX API',
            description:
                'In the third phase, we simplified our offering into a unified API across all CEXs. While this version was successful, we failed to see a plan leading to the “next big thing.”',
            date: 'Dec 2021',
            dateTime: '2022-12',
        },
        {
            name: 'CEX <-> L2',
            description:
                'The breakthrough came when we experienced first-hand the complexity of transferring funds to new L2s. Recognizing this issue as a significant challenge in the market, we utilized our existing CEX infrastructure to create Layerswap, simplifying transfers to L2s from CEXes.',
            date: 'Mar 2022',
            dateTime: '2022-03',
        },
    ]

    return (
        <Layout>
            <div className="isolate">

                <div className="my-20 mt-16 xl:mx-auto xl:max-w-6xl xl:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center px-6">
                        Meet Layerswap
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-primary-text sm:max-w-md mx-auto text-center px-6">
                        Established in 2021 Layerswap is a blockchain solution that provides a seamless platform for bridging assets
                    </p>
                    <img
                        src="/images/company/fifth.jpg"
                        alt="Founders"
                        className="aspect-[3/2] xl:max-w-4xl mx-auto object-cover xl:rounded-3xl mt-16"
                    />
                </div>

                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-white/10 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-darkblue-700">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
                    </svg>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-darkblue-200 to-darkblue-500 opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>

                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-6xl px-6 pb-32 pt-0 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                        About Layerswap
                                    </h1>
                                    <p className="relative mt-6 text-lg leading-8 text-primary-text sm:max-w-md lg:max-w-none">
                                        Established in 2021 Layerswap is a blockchain solution that provides a seamless platform for bridging assets across Centralized Exchanges, blockchains, and wallets. Our product is designed to facilitate frictionless transfers of tokens like ETH, USDC, and LRC from 17 exchanges to 16 networks, cross-chain transfers, and off-ramping from 9 networks to CEXes. We are also integrated into several wallets and dApps running on Layer 2 to facilitate the onboarding of new users.
                                    </p>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                src="/images/company/first.jpg"
                                                alt="Max and Aren"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                src="/images/company/fourth.jpg"
                                                alt="Bosses"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src="/images/company/third.jpg"
                                                alt="Babken"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                src="/images/company/sixth.jpg"
                                                alt="Aren"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src="/images/company/second.jpg"
                                                alt="Hopar"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto lg:mt-24 mb-32 max-w-6xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Story</h2>
                    <p className="max-w-xl my-5 text-primary-text">Layerswap's development story had several pivotal shifts as we sought to deliver a product that met a significant need in the market.</p>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 mt-6">
                        {timeline.map((item) => (
                            <div key={item.name}>
                                <time
                                    dateTime={item.dateTime}
                                    className="flex items-center text-sm font-semibold leading-6 text-primary-600"
                                >
                                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx={2} cy={2} r={2} fill="currentColor" />
                                    </svg>
                                    {item.date}
                                    <div
                                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-white/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                        aria-hidden="true"
                                    />
                                </time>
                                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{item.name}</p>
                                <p className="mt-1 text-base leading-7 text-primary-text">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto my-12 max-w-6xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Mission statement</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-xl leading-8 text-primary-text">
                                    At Layerswap, our mission is to make the decentralized web ecosystem more accessible, efficient, and convenient for all users, and we are dedicated to pushing the boundaries of innovation in the blockchain industry. We provide a seamless and user-friendly platform for bridging assets across Centralized Exchanges, blockchains, and wallets, enabling anyone to access and utilize the decentralized web with ease.
                                </p>
                                <div className="mt-10 max-w-xl text-base leading-7 text-primary-text/70">
                                    <p>
                                        Through cutting-edge technology, strategic partnerships, and a user-centric approach, we strive to provide an efficient, secure, and user-friendly solution for asset transfer that can empower individuals and businesses to thrive in the new decentralized world. We are committed to empowering our users to move their assets freely and effortlessly across different platforms, without any unnecessary obstacles or delays. We facilitate instant transfers with minimal fees, enable transfers to and from networks that are not available elsewhere and offer exceptional customer support.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className=" grid xl:grid-rows-4 xl:grid-cols-2 gap-8">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                            <dt className="text-base leading-7 text-primary-text">{stat.label}</dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image section */}

            </div>
        </Layout>
    )
}

export default Company