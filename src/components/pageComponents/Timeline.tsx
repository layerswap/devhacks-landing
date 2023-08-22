import Link from "next/link"
import Image from "next/image"

const Timeline = () => {

    const cards = [
        {
            heading: <>Մրցման տեղը</>,
            name: <>Վանաձոր VTC</>,
            description: <Link href='https://goo.gl/maps/zUBaeyTY6pxjjfe98' target="_blank" className="underline hover:no-underline decoration-primary"><span className="text-white">Շինարարներ</span> 12</Link>
        },
        {
            heading: <>Սկիզբ</>,
            name: <>11:00 AM</>,
            description: <>Սեպտեմբեր 29</>
        },
        {
            heading: <>Վերջ</>,
            name: <>15:00 PM</>,
            description: <>Հոկտեմբեր 1</>
        }
    ]

    return (
        <section className="py-12 sm:pb-16 lg:pb-32 z-50" >
            <div className="mx-auto max-w-none sm:max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                        Ժամանակացույց
                    </p>
                </div>
                <div className="lg:w-1/4 my-8 sm:my-16 mx-auto">
                    <Link href={'https://techweek.am/'} target="_blank" className="hover:opacity-80">
                        <Image src={"/TechWeekBanner.png"} width={1600} height={700} alt={"teckWeekBanner"} />
                    </Link>
                </div>
                <div className="flex flex-col lg:flex-row sm:items-stretch gap-5 w-full">
                    {
                        cards.map((c, index) => (
                            <div key={index} className="p-8 rounded-xl w-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md ">
                                <p className="text-base mb-6 font-medium rounded-full px-2 py-1 bg-primary w-fit text-black">
                                    {c.heading}
                                </p>
                                <p className=" text-3xl font-bold">
                                    {c.name}
                                </p>
                                <p className=" text-3xl font-bold">
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