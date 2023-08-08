import Spotlight, { SpotlightCard } from "@/components/animationComponents/Spotlight";
import ColorPicker from "@/components/ui/ColorPicker";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { BarChart4, Code, Gift, PaintBucket, UserCheck } from "lucide-react"
import { useState } from "react";

const PartnerFeatures = () => {

    const { width } = useWindowDimensions()

    const features = [
        {
            icon: <BarChart4 className='h-10 w-10 mx-auto sm:mx-0 text-primary-text' />,
            header: 'Dashboard & Insights',
            description: 'Keep track of the data that matters. Get insights on users’ transactions and derive action items.',
            style: 'lg:col-span-3'
        },
        {
            icon: <Gift className='h-10 w-10 mx-auto sm:mx-0 text-primary-text' />,
            header: 'Rewards system',
            description: 'Implement reward campaigns for acquiring users and building loyalty.',
            style: 'lg:col-span-3'
        },
        {
            icon: <UserCheck className='h-10 w-10 mx-auto sm:mx-0 text-primary-text' />,
            header: 'Human Interactions',
            description: 'Make it simple for your users to add funds. Eliminate complex interactions and convert more users into community members and customers.',
            style: 'lg:col-span-3 '
        },
        {
            icon: <Code className='h-10 w-10 mx-auto sm:mx-0 text-primary-text' />,
            header: 'Effortless Integration',
            description: 'Easily integrate Layerswap into your platform with our Onboarding SDK and give your users access to hassle-free deposits.',
            style: 'lg:col-span-4'
        }
    ]

    const themes = [
        { name: 'layerswap', primaryColor: 'bg-primary', secondaryColor: 'bg-darkblue-500' },
        { name: 'immutablex', primaryColor: 'bg-immutablex-primary', secondaryColor: 'bg-immutablex-secondary' },
        { name: 'synquote', primaryColor: 'bg-synquote-primary', secondaryColor: 'bg-synquote-secondary' },
    ]

    const [selectedTheme, setSelectedTheme] = useState(themes[0])

    return (
        <section className="py-12 sm:py-16 lg:py-32" >
            <div className="mx-auto max-w-sm sm:max-w-6xl px-6 lg:px-8 hidden lg:block">
                <div
                    className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl ">Take the next step without any hassle & get results fast</h2>
                </div>
                <div className="mt-8 sm:mt-12 sm:text-left">
                    <Spotlight className="grid gap-4 lg:grid-cols-7 lg:grid-rows-3 items-start group">
                        <SpotlightCard className="max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-4 lg:row-span-2">
                            <div className="relative h-full bg-slate-900 p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                </div>
                                <div className="h-full flex flex-col items-center lg:items-start md:w-[60%]">
                                    <PaintBucket className="h-10 w-10 mx-auto sm:mx-0 text-primary-text" />
                                    <p className="text-2xl lg:text-3xl mt-5 font-bold tracking-tight text-white text-center lg:text-left">
                                        Color customization
                                    </p>
                                    <p className="mt-3 text-base leading-7 text-gray-300 text-center lg:text-left">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum? Hic eveniet expedita iure vero natus a fugit dolore. Unde fugiat, officiis tempora asperiores iste porro ut magni vero suscipit!
                                    </p>
                                    {width > 1024 && <div className="mt-10">
                                        <ColorPicker themes={themes} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
                                    </div>}
                                </div>
                                <div className="absolute -top-[18%] -right-[35%] hidden md:block">
                                    <img className="max-w-md rounded-xl drop-shadow-xl ring-1 ring-slate-800" src={`/images/themes/${selectedTheme.name}.png`} alt={`${selectedTheme.name} theme`} />
                                </div>
                            </div>
                        </SpotlightCard>
                        {features.map((f, index) => (
                            <SpotlightCard key={index} className={`max-w-2xl mx-auto lg:max-w-none w-full ${f.style}`}>
                                <div className="relative h-full bg-slate-900 p-10 rounded-[inherit] z-20 overflow-hidden">
                                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                    </div>
                                    <div className="h-full flex flex-col items-center lg:items-start">
                                        {f.icon}
                                        <p className="text-2xl lg:text-3xl mt-5 font-bold tracking-tight text-white">
                                            {f.header}
                                        </p>
                                        <p className="mt-3 text-base leading-7 text-gray-300 text-center lg:text-left">
                                            {f.description}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </Spotlight>
                </div>
            </div>
            <div className="mx-auto max-w-sm sm:max-w-6xl px-6 lg:px-8 lg:hidden block">
                <div
                    className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl ">Take the next step without any hassle & get results fast</h2>
                </div>
                <div className="mt-8 sm:mt-12 sm:text-left">
                    <div className="grid gap-4 lg:grid-cols-7 lg:grid-rows-3 items-start group">
                        <div className="max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-4 lg:row-span-2 rounded-3xl ring-1 ring-white/10">
                            <div className="relative h-full bg-slate-900 p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                </div>
                                <div className="h-full flex flex-col items-center lg:items-start md:w-[60%]">
                                    <PaintBucket className="h-10 w-10 mx-auto sm:mx-0 text-primary-text" />
                                    <p className="text-2xl lg:text-3xl mt-5 font-bold tracking-tight text-white text-center lg:text-left">
                                        Color customization
                                    </p>
                                    <p className="mt-3 text-base leading-7 text-gray-300 text-center lg:text-left">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum? Hic eveniet expedita iure vero natus a fugit dolore. Unde fugiat, officiis tempora asperiores iste porro ut magni vero suscipit!
                                    </p>
                                    {width < 1024 && <div className="mt-10">
                                        <ColorPicker themes={themes} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
                                    </div>}
                                </div>
                                <div className="absolute -top-[14%] -right-[35%] hidden md:block">
                                    <img className="max-w-md rounded-xl drop-shadow-xl ring-1 ring-slate-800" src={`/images/themes/${selectedTheme.name}.png`} alt={`${selectedTheme.name} theme`} />
                                </div>
                            </div>
                        </div>
                        {features.map((f, index) => (
                            <div key={index} className={`max-w-2xl mx-auto lg:max-w-none w-full rounded-3xl ring-1 ring-white/10 ${f.style}`}>
                                <div className="relative h-full bg-slate-900 p-10 rounded-[inherit] z-20 overflow-hidden">
                                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                    </div>
                                    <div className="h-full flex flex-col items-center lg:items-start">
                                        {f.icon}
                                        <p className="text-2xl lg:text-3xl mt-5 font-bold tracking-tight text-white">
                                            {f.header}
                                        </p>
                                        <p className="mt-3 text-base leading-7 text-gray-300 text-center lg:text-left">
                                            {f.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-12 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Get started
                </a>
                {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                </a> */}
            </div>
        </section>
    )
}

export default PartnerFeatures