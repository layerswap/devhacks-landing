import Spotlight, { SpotlightCard } from "@/components/animationComponents/Spotlight";
import { Bot, Coffee, CupSoda, Github, Projector, Sandwich, Utensils } from "lucide-react";

const Conditions = () => {

    return (
        <section id="wazaa" className="py-12 sm:pb-16 lg:pb-32" >
            <div className="mx-auto max-w-sm sm:max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                        Պայմաններ
                    </p>
                </div>
                <div className="mt-10 sm:mt-12 sm:text-left">
                    <Spotlight className="grid gap-4 lg:grid-cols-7 lg:grid-rows-3 items-start group">
                        <SpotlightCard className="max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-2 ">
                            <div className="relative h-full bg-slate-900 p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="h-full flex flex-col justify-center">
                                    <div className="text-4xl font-bold text-center">
                                        <p className="text-5xl">
                                            3-5
                                        </p>
                                        <p className="text-primary">
                                            ԱՆԴԱՄ
                                        </p>
                                        <p className="text-xl">
                                            ամեն թմում
                                        </p>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className={`max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-5`}>
                            <div className="relative h-full bg-slate-900 p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="text-2xl sm:text-4xl font-bold text-center text-white h-full flex flex-col items-center justify-center">
                                    <p className="max-w-xl">
                                        Գաղափարը <span className="text-primary">ամբողջությամբ</span> պետք է իրագործվի տեղում
                                    </p>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className={`max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-3`}>
                            <div className="relative h-full bg-slate-900 p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="h-full flex flex-col items-center font-bold text-left gap-5">
                                    <p className="text-3xl text-primary text-center">
                                        Ներկայացման կարգ
                                    </p>
                                    <div className="text-xl text-white space-y-1">
                                        <div className="inline-flex gap-2 items-center">
                                            <Github />
                                            <p>
                                                Հղում պրոեկտի source կոդին
                                            </p>
                                        </div>
                                        <div className="inline-flex gap-2 items-center">
                                            <Bot />
                                            <p>
                                                Հղում աշխատող պրոտոտիպին
                                            </p>
                                        </div>
                                        <div className="inline-flex gap-2 items-center">
                                            <Projector />
                                            <p>
                                                5 րոպե դեմո բեմում
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-4 ">
                            <div className="relative h-full bg-slate-900 p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="font-bold text-white h-full flex flex-col items-center justify">
                                    <p className="text-3xl text-primary">
                                        Հաղթողների ընտրությունը
                                    </p>
                                    <ul className="grid lg:grid-cols-2 gap-4 text-xl mt-5 list-disc">
                                        <li>
                                            Տեխնիկական բարդույթուն
                                        </li>
                                        <li>
                                            Պրոեկտի ամբողջականություն
                                        </li>
                                        <li>
                                            Օգտագործման հարմարավետություն
                                        </li>
                                        <li>
                                            Կատարման իրատեսականություն
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className={`max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-7`}>
                            <div className="relative h-full bg-slate-900 p-6 sm:p-10 rounded-[inherit] z-20 overflow-hidden">
                                <div className="text-2xl font-bold text-center text-white h-full flex flex-col items-center gap-5">
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
                                                <Utensils />
                                                <p>
                                                    Նախաճաշ, Ճաշ, Ընթրիք
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
                        </SpotlightCard>
                    </Spotlight>
                </div>
            </div>
        </section>
    )
}

export default Conditions