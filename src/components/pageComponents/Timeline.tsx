const Timeline = () => {
    return (
        <section id="wazaa" className="py-12 sm:pb-16 lg:pb-32" >
            <div className="mx-auto max-w-sm sm:max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                        Ժամանակացույց
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row sm:items-stretch gap-5 w-full mt-8 sm:mt-16">
                    <div className="p-8 rounded-xl border border-primary w-full bg-slate-900">
                        <p className="text-base ">
                            Մրցման տեղը
                        </p>
                        <p className="text-primary text-3xl font-bold">
                            Վանաձոր <span className="text-white">VTC</span>
                        </p>
                        <p className="text-primary text-3xl font-bold">
                            <span className="text-white">Շինարարներ</span> 12
                        </p>
                    </div>
                    <div className="p-8 rounded-xl border border-primary w-full bg-slate-900">
                        <p className="text-base ">
                            Սկիզբ
                        </p>
                        <p className="text-primary text-3xl font-bold">
                            10:00 <span className="text-white">AM</span>
                        </p>
                        <p className="text-primary text-3xl font-bold">
                            <span className="text-white">Սեպտեմբեր</span> 29
                        </p>
                    </div>
                    <div className="p-8 rounded-xl border border-primary w-full bg-slate-900">
                        <p className="text-base ">
                            Վերջ
                        </p>
                        <p className="text-primary text-3xl font-bold">
                            19:00 <span className="text-white">PM</span>
                        </p>
                        <p className="text-primary text-3xl font-bold">
                            <span className="text-white">Սեպտեմբեր</span> 30
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Timeline