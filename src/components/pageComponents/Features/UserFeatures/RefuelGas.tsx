import { Fuel } from "lucide-react"



const RefuelGas = () => (
    <div className="mx-auto grid lg:grid-cols-2  max-w-2xl gap-16 bg-darkblue-800/30 px-6 py-6 ring-1 ring-white/10 rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
        <div className="relative order-2 lg:order-1 w-full h-full max-h-96 rounded-xl ring-1 ring-white/10 bg-darkblue-800 overflow-hidden">
            <img className="relative mx-auto rounded-lg ring-white/10 p-5 pb-0 sm:p-10 sm:pb-0" src="/images/flow.png" alt="Refuel Flow" />
        </div>
        <div className='order-1 lg:order-2 flex flex-col h-full justify-between space-y-4 items-center lg:items-start text-center xl:text-left'>
            <Fuel className='h-16 w-auto border-2 border-darkblue-500 bg-darkblue-700 p-2 rounded-xl' />
            <h2 className=" text-4xl font-bold text-white lg:text-6xl ">Refuel gas</h2>
            <p className=" text-lg font-normal text-primary-text">Allow users to get gas paying tokens with the transfers to cover for on-chain activities. Remove friction from the onboarding process.</p>
            <div className=" flex items-center gap-x-6">
                <a
                    href="/app"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkblue-400 plausible-event-name=App+Launched"
                >
                    Launch App
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    </div>
)

export default RefuelGas