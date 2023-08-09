import Spotlight, { SpotlightCard } from "@/components/animationComponents/Spotlight";

const Conditions = () => {

    return (
        <section className="py-12 sm:py-16 lg:py-32" >
            <div className="mx-auto max-w-sm sm:max-w-6xl px-6 lg:px-8 hidden lg:block">
                <div className="mt-8 sm:mt-12 sm:text-left">
                    <Spotlight className="grid gap-4 lg:grid-cols-7 lg:grid-rows-2 items-start group">
                        <SpotlightCard className="max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-2 lg:row-span-2">
                            <div className="relative h-full bg-slate-900 p-10 rounded-[inherit] z-20 overflow-hidden">
                                {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                </div> */}
                                <div className="h-full flex flex-col items-center justify-between">
                                    <div className="px-3 py-1.5 text-xs font-bold rounded-full bg-primary">
                                        Teams
                                    </div>
                                    <div className="text-5xl font-bold text-center">
                                        <p className="text-primary">
                                            3-5
                                        </p>
                                        <p className="text-white">
                                            Members
                                        </p>
                                        <p className="text-xs text-primary-text font-medium  mt-5">
                                            All development should be done within the allocated 24 hours of the hackathon
                                        </p>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className={`max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-5`}>
                            <div className="relative h-full bg-slate-900 p-10 rounded-[inherit] z-20 overflow-hidden">
                                {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                </div> */}
                                <div className="h-full flex flex-col items-center gap-5">
                                    <div className="px-3 py-1.5 text-xs font-bold rounded-full bg-primary">
                                        You Submit
                                    </div>
                                    <div className="text-2xl font-bold text-center text-white">
                                        <p>
                                            URL to actual work in Github
                                        </p>
                                        <p>
                                            URL to working prototype
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className={`max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-5`}>
                            <div className="relative h-full bg-slate-900 p-10 rounded-[inherit] z-20 overflow-hidden">
                                {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                </div> */}
                                <div className="text-2xl font-bold text-center text-white h-full flex flex-col items-center justify-center">
                                    <p className="text-4xl text-primary">
                                        FREE UNLIMITED
                                    </p>
                                    <p>
                                        Free Meals, Fruits, Cofee/Tea and Soft Drinks
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className={`max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-7`}>
                            <div className="relative h-full bg-slate-900 p-16 rounded-[inherit] z-20 overflow-hidden">
                                {/* <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                </div> */}
                                <div className="font-bold text-center text-white h-full flex flex-col items-center justify-center">
                                    <p className="text-4xl text-primary">
                                        JUDGING
                                    </p>
                                    <p className="text-xs text-primary-text font-medium max-w-lg mt-5">
                                        All development should be done within the allocated 24 hours of the hackathon, A eu conque osum neque massa est. Tristique ut fringilla egestas cursus ouvinar interdu.
                                    </p>
                                    <div className="grid lg:grid-cols-4 gap-4 text-xl mt-16">
                                        <p>
                                            Techincal Difficulty
                                        </p>
                                        <p>
                                            Completeness
                                        </p>
                                        <p>
                                            UI/UX
                                        </p>
                                        <p>
                                            Viability for execution
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </Spotlight>
                </div>
            </div>
        </section>
    )
}

export default Conditions