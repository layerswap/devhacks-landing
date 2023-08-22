import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import DevhacksLogo from "./DevhacksLogo"

const Hero = () => {

    return (
        <div className="overflow-hidden lg:h-[calc(100vh-65px)] lg:flex lg:flex-col lg:justify-center lg:items-center">
            <div className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32 flex flex-col text-center space-y-10 pt-20 lg:px-8 lg:pt-44 2xl:pt-0 2xl:pb-0 w-full">
                <div className="h-20 sm:h-32 w-auto" />
                <div>
                    <div id="start" />
                    <p className="text-xl sm:text-4xl text-white font-bold">
                        Տարվա ամենա<span className="underline decoration-primary">ԴԱԺԱՆ</span> մրցույթը
                    </p>
                    <p className="max-w-xl mx-auto mt-3 text-lg">
                        Հավաքի՛ր թիմ, մտածի՛ր նախագիծ, Սեպտեմբերի 29-ին արի՛ Վանաձոր։ Իրականացրու՛ նախագիծդ, ներկայացրու՛ այն և հաղթի՛ր $10,000։
                    </p>
                    <p className="text-xs sm:text-lg text-darkblue-100 max-w-md mx-auto mt-3 inline-flex items-center gap-1">
                        <Link target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MWV1M2VjZmVtMGg4aXVmazM0ajZuZ3BsM2ggYXJhbUBicmFuc2Zlci5pbw&amp;tmsrc=aram%40bransfer.io" className="underline hover:no-underline inline-flex items-center gap-1"><Calendar className="h-4 w-auto" /> Սեպտեմբերի 29 11:00 AM</Link> | <Link href="https://goo.gl/maps/zUBaeyTY6pxjjfe98" target="_blank" className="underline hover:no-underline inline-flex items-center gap-1"><MapPin className="h-4 w-auto" /> Վանաձոր VTC</Link>
                    </p>
                    <p className="mt-4 text-darkblue-100">
                        Գրանցումը բաց է մինչև <span className="text-primary">Սեպտեմբերի 15-ը</span>
                    </p>
                    <div className="mt-6">
                        <Link
                            href='https://layerswap.typeform.com/devhacks'
                            className="rounded-full w-fit mx-auto bg-primary px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Գրանցել թիմ
                        </Link>
                    </div>
                    <div className="left-[calc(50%-15px)] top-[90vh] absolute hidden lg:block">
                        <div className="scrolldown ">
                            <svg className="mx-auto" height="30" width="10">
                                <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
                                <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero