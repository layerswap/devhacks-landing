import Link from "next/link"
import DevhacksLogo from "./DevhacksLogo"
import { Calendar, MapPin } from "lucide-react"

const Hero = () => {
    const tags = [
        { name: '#ԻՆՉ_ԿԱ', url: '/#wazaa' },
        { name: '#ՓՈՂ_ԿԱ', url: '/#money' },
        { name: '#STAAP_AAA', url: '/#apply_now' }
    ]

    return (
        <div className="relative isolate overflow-hidden xl:h-[calc(100vh-65px)] xl:flex xl:flex-col xl:justify-center xl:items-center">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-primary-700/70 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-black/20">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
            </svg>
            <div className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32 flex flex-col text-center space-y-10 pt-20 lg:px-8 lg:pt-44 2xl:pt-0 2xl:pb-0 w-full">
                <DevhacksLogo className="h-20 sm:h-32 w-auto text-primary" />
                <div>
                    <p className="text-xl sm:text-4xl text-white font-bold">
                        Տարվա ամենաԴԱԺԱՆ մրցույթը
                    </p>
                    <p className="text-sm sm:text-lg text-primary-text max-w-md mx-auto mt-3 inline-flex items-center gap-1">
                        <Link target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MWV1M2VjZmVtMGg4aXVmazM0ajZuZ3BsM2ggYXJhbUBicmFuc2Zlci5pbw&amp;tmsrc=aram%40bransfer.io" className="underline hover:no-underline inline-flex items-center gap-1"><Calendar className="h-4 w-auto" /> Սեպտեմբերի 29 10:00 AM</Link> | <Link href="https://goo.gl/maps/zUBaeyTY6pxjjfe98" target="_blank" className="underline hover:no-underline inline-flex items-center gap-1"><MapPin className="h-4 w-auto" /> Վանաձոր VTC</Link>
                    </p>
                    <div className="text-xs text-white max-w-md mx-auto mt-5">
                        {
                            tags.map((t, index) => (
                                <Link key={index} className="px-2 py-1 rounded-full border-primary/70 border bg-primary/40 mx-1" href={t.url}>
                                    {t.name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="mt-10">
                        <Link
                            href='https://layerswap.typeform.com/devhacks'
                            className="rounded-full w-fit mx-auto bg-primary px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Դիմիր հիմա
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero