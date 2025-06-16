import { Bot, Coffee, CupSoda, Github, Projector, Sandwich, Utensils } from "lucide-react";

const Conditions = () => {

    return (
        <section id="wazaa" className="py-12 sm:pb-16 lg:pb-32" >
            <div className="mx-auto max-w-none sm:max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                        Պայմաններ
                    </p>
                </div>
                <div className="mt-8 sm:mt-16 sm:text-left">
                    <div className="grid gap-4 lg:grid-cols-7 lg:grid-rows-3 items-start group">
                        <div className="h-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-2 -z-20">
                            <div className="relative h-full p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="h-full flex flex-col justify-center">
                                    <div className="text-4xl font-bold text-center">
                                        <p className="text-5xl">
                                            3-5
                                        </p>
                                        <p className="text-primary">
                                            ԱՆԴԱՄ
                                        </p>
                                        <p className="text-xl">
                                            ամեն թիմում
                                        </p>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                        <div className={`h-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-5`}>
                            <div className="relative h-full  p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="text-2xl sm:text-4xl font-bold text-center text-white h-full flex flex-col items-center justify-center">
                                    <p className="max-w-xl">
                                        Գաղափարն <span className="text-primary">ամբողջությամբ</span> պետք է իրագործվի տեղում` 48 ժամում
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`h-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-3`}>
                            <div className="relative h-full p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="h-full flex flex-col items-center font-bold gap-5">
                                    <p className="text-3xl text-primary text-center">
                                        Ներկայացման կարգ
                                    </p>
                                    <div className="text-xl text-white space-y-1 flex flex-col justify-center h-full">
                                        <div className="inline-flex gap-2 items-center">
                                            <Github />
                                            <p>
                                                Հղում նախագծի source կոդին
                                            </p>
                                        </div>
                                        <div className="inline-flex gap-2 items-center">
                                            <Bot />
                                            <p>
                                                Հղում աշխատող նախատիպին
                                            </p>
                                        </div>
                                        <div className="inline-flex gap-2 items-center">
                                            <Projector />
                                            <p>
                                                3 րոպե դեմո բեմում, 3 րոպե Q&A
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-4 -z-20">
                            <div className="relative h-full p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="font-bold text-white h-full flex flex-col items-center">
                                    <p className="text-3xl text-primary">
                                        Հաղթողների ընտրությունը
                                    </p>
                                    <ul className="grid md:grid-cols-2 gap-2 text-xl mt-5 text-center">
                                        <li className="bg-darkblue-800 p-1 w-full rounded-lg">
                                            Տեխնիկական
                                            <br />
                                            բարդություն
                                        </li>
                                        <li className="bg-darkblue-800 p-1 w-fit rounded-lg">
                                            Նախագծի ամբողջականություն
                                        </li>
                                        <li className="bg-darkblue-800 p-1 w-fit rounded-lg">
                                            Գաղափարի և լուծման նորարություն
                                        </li>
                                        <li className="bg-darkblue-800 p-1 w-fit rounded-lg">
                                            Կատարման իրատեսականություն
                                        </li>
                                        <li className="bg-darkblue-800 p-1  rounded-lg md:col-span-2">
                                            Խնդրի լուծման կարևորություն <br /> և ազդեցություն
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`h-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-7`}>
                            <div className="relative h-full p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="text-2xl font-bold text-center text-white h-full flex flex-col items-center justify-center gap-5 lg:gap-10">
                                    <p className="text-3xl">
                                        Ամբողջ մրցման ընթացքում՝ ԱՆՎՃԱՐ
                                    </p>
                                    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
                                        <p className="text-primary text-xl lg:text-5xl">
                                            ԱՆՍԱՀՄԱՆԱՓԱԿ
                                        </p>
                                        <div className="flex flex-col text-base lg:text-2xl">
                                            <div className="inline-flex gap-2 items-center">
                                                <Coffee />
                                                <p>
                                                    Սուրճ, Թեյ
                                                </p>
                                            </div>
                                            <div className="inline-flex gap-2 items-center">
                                                <CupSoda />
                                                <p>
                                                    Զովացուցիչ ըմպելիքներ
                                                </p>
                                            </div>
                                            <div className="inline-flex gap-2 items-center">
                                                <Sandwich />
                                                <p>
                                                    Սենդվիչներ
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conditions