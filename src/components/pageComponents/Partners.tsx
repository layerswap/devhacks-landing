import Image from "next/image"

export default function Partners() {
    const partners = [
        {
            name: 'immutablex',
            url: 'https://www.immutable.com/'
        },
        {
            name: 'osmosis',
            url: 'https://app.osmosis.zone/'
        },
        {
            name: 'argent',
            url: 'https://www.argent.xyz/'
        },
        {
            name: 'imToken',
            url: 'https://token.im/'
        },
        {
            name: 'loopring',
            url: 'https://loopring.io/'
        },
        {
            name: 'optimism',
            url: 'https://app.optimism.io/bridge/deposit'
        },
        {
            name: 'zkSync',
            url: 'https://lite.zksync.io/'
        },
        {
            name: 'starknet',
            url: 'https://www.starknet.io/'
        },
        {
            name: 'synquote',
            url: 'https://www.synquote.com/'
        },
        {
            name: 'rhinofi',
            url: 'https://app.rhino.fi/portfolio'
        },
        {
            name: 'braavos',
            url: 'https://braavos.app/'
        },
        {
            name: 'perpExchange',
            url: 'https://perp.com/'
        },
        {
            name: 'polygon',
            url: 'https://polygon.technology/'
        },
        {
            name: 'synthetix',
            url: 'https://synthetix.io/'
        },
        {
            name: 'venom',
            url: 'https://venom.network/'
        },
        {
            name: 'fuse',
            url: 'https://www.fuse.io/'
        },
    ]

    return (
        <div className="mx-auto mt-8 max-w-3xl lg:max-w-6xl px-6 sm:mt-20 sm:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-white mb-6">
                Established partnerships with the major players in crypto
            </h2>
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl lg:grid-cols-6">
                {
                    partners.map(p => (
                        <a key={p.name} target="_blank" href={p.url} className="flex w-full justify-center bg-darkblue-800 p-8 sm:p-10 hover:bg-darkblue-600 active:bg-darkblue-700">
                            <Image
                                className="max-h-12 w-full max-w-[200px] object-contain"
                                src={`/images/partnerLogos/${p.name}.svg`}
                                alt={p.name}
                                width={158}
                                height={48}
                            />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
