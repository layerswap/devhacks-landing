import Link from "next/link"
import Image from "next/image"

const Timeline = () => {

    const cards = [
        {
            heading: <>Մրցման տեղը</>,
            name: <>Վանաձոր <span className="text-white">VTC</span></>,
            description: <Link href='https://goo.gl/maps/zUBaeyTY6pxjjfe98' target="_blank" className="hover:underline"><span className="text-white">Շինարարներ</span> 12</Link>
        },
        {
            heading: <>Սկիզբ</>,
            name: <>11:00 <span className="text-white">AM</span></>,
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
            <div className="mx-auto max-w-none sm:max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                        Ժամանակացույց
                    </p>
                </div>
                <Image src={"/TechWeekBanner.png"} width={1000} height={100} alt={""} className="rounded-lg w-1/2 my-8 sm:my-16 mx-auto" />
                <div className="flex flex-col lg:flex-row sm:items-stretch gap-5 w-full">
                    {
                        cards.map((c, index) => (
                            <div key={index} className="p-8 rounded-xl border border-primary w-full bg-darkblue-900">
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