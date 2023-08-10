const Timeline = () => {

    const cards = [
        {
            heading: <>Մրցման տեղը</>,
            name: <>Վանաձոր <span className="text-white">VTC</span></>,
            description: <><span className="text-white">Շինարարներ</span> 12</>
        },
        {
            heading: <>Սկիզբ</>,
            name: <>10:00 <span className="text-white">AM</span></>,
            description: <><span className="text-white">Սեպտեմբեր</span> 29</>
        },
        {
            heading: <>Վերջ</>,
            name: <>19:00 <span className="text-white">PM</span></>,
            description: <><span className="text-white">Սեպտեմբեր</span> 30</>
        }
    ]

    return (
        <section className="py-12 sm:pb-16 lg:pb-32" >
            <div className="mx-auto max-w-sm sm:max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                        Ժամանակացույց
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row sm:items-stretch gap-5 w-full mt-8 sm:mt-16">
                    {
                        cards.map((c, index) => (
                            <div key={index} className="p-8 rounded-xl border border-primary w-full bg-slate-900">
                                <p className="text-base mb-6 font-semibold">
                                    {c.heading}
                                </p>
                                <p className="text-primary text-3xl font-bold">
                                    {c.name}
                                </p>
                                <p className="text-primary text-3xl font-bold">
                                    {c.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Timeline