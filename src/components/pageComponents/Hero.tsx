import { useEffect, useState } from "react"
import DevLogo from "@/icons/DevLogo"

const Hero = () => {

    const [hide, setHide] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 20) {
            setHide(true)
        } else {
            setHide(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <div className="overflow-hidden h-[100svh] flex flex-col justify-center items-center">
            <div className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32 flex flex-col text-center space-y-6 pt-20 lg:px-8 lg:pt-44 2xl:pt-0 2xl:pb-0 w-full">
                <DevLogo className=" block w-72 sm:w-[400px] h-auto mx-auto" />
                <div>
                    <p className="text-xl sm:text-4xl text-white font-bold">
                        Դևը հիմա <span className="underline decoration-primary">ՔՆԱԾ</span> է
                    </p>
                    <div id="start" />
                    {/* <p className="text-xl sm:text-4xl text-white font-bold">
                        Տարվա ամենա<span className="underline decoration-primary">ԴԱԺԱՆ</span> մրցույթը
                    </p>
                    <p className="max-w-2xl mx-auto mt-3 xl:mt-6 text-base xl:text-2xl font-semibold text-darkblue-100">
                        Հավաքի՛ր թիմ, մտածի՛ր նախագիծ, Հուլիսի 4-ին <span className="text-white">արի՛ Վանաձոր</span>։ Իրականացրու՛ նախագիծդ, ներկայացրու՛ այն և <span className="text-white">հաղթի՛ր $10,000</span>։
                    </p>
                    <p className="text-xs sm:text-lg text-darkblue-100 max-w-md mx-auto mt-3 inline-flex items-center gap-1">
                        <Link
                            target="_blank"
                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250704T070000Z%2F20250706T160000Z&details=https%3A%2F%2Fdevhacks.am&location=Vanadzor%20Technological%20Center%2C%2012%20Shinararneri%20St%2C%20Vanadzor%202019%2C%20Armenia&text=DevHacks%20%D4%B1%D5%B4%D5%A5%D5%B6%D5%A1%D5%A4%D5%A1%D5%AA%20%D5%84%D6%80%D6%81%D5%B8%D6%82%D5%B5%D5%A9"
                            className="underline hover:no-underline inline-flex items-center gap-1">
                            <Calendar className="h-4 w-auto" /> Հուլիսի 4 10:00 AM</Link> | <Link href="https://goo.gl/maps/zUBaeyTY6pxjjfe98" target="_blank" className="underline hover:no-underline inline-flex items-center gap-1"><MapPin className="h-4 w-auto" /> Վանաձոր, ՎՏԿ
                        </Link>
                    </p> */}
                    <div className={`${hide && 'opacity-0'} left-[calc(50%-15px)] top-[90svh] m:top-[90vh] absolute transition-all duration-200`}>
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