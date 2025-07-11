import Link from "next/link"
import Image from "next/image"
import RedirectButton from '../RedirectButton';
import { ArrowUpRight } from 'lucide-react';

const Timeline = () => {

    const cards = [
        {
            heading: <>Մրցման տեղը</>,
            name: <>Վանաձոր, ՎՏԿ</>,
            description: <Link href='https://goo.gl/maps/zUBaeyTY6pxjjfe98' target="_blank" className="underline hover:no-underline decoration-primary"><span className="text-white">Շինարարների</span> 12</Link>
        },
        {
            heading: <>Սկիզբ</>,
            name: <>10:00 AM</>,
            description: <>Հուլիս 4</>
        },
        {
            heading: <>Վերջ</>,
            name: <>05:00 PM</>,
            description: <>Հուլիս 6</>
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
                    <Link href={'https://www.facebook.com/techweekarmenia'} target="_blank" className="hover:opacity-80">
                        <Image src={"/TechWeekBanner.svg"} width={1600} height={700} alt={"teckWeekBanner"} />
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
                <span className="flex justify-center mt-6">
                    <RedirectButton
                        to="/agenda"
                        className="inline-flex my-4 text-xl font-medium rounded-lg hover:bg-primary-500text-white underline hover:no-underline"
                    >
                        Դեպի Օրակարգ
                        <ArrowUpRight className="w-5" />
                    </RedirectButton>
                </span>
            </div>
        </section>
    )
}

export default Timeline