import { WalletIcon } from "lucide-react"

const WalletInfrastructure = () => {

    return (
        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-darkblue-800/30 px-6 py-6 ring-1 ring-white/10 rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none ">
            <div className='flex flex-col lg:block items-center text-center '>
                <h2 className="mt-8 text-4xl font-bold text-white">Wallet infrastructure</h2>
                <p className="mt-4 text-lg font-normal text-primary-text">Integration with all popular wallets and protocols like WalletConnect, ArgentX, Bravoos, Phantom, Gamestop wallet, and more.</p>
            </div>
            <div className="relative w-full h-full bg-darkblue-800 rounded-xl overflow-hidden p-12 ring-1 ring-white/10">
                <img className="relative w-fit mx-auto" src="/images/walletInfra.svg" alt="Wallet illustartion" />
            </div>
        </div>
    )
}

export default WalletInfrastructure