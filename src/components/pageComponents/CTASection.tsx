import Link from "next/link";
import DevhacksLogoSymbol from "./LogoSymbol";

export default function CTASection() {

    return (
        <div id="apply_now" className="relative isolate pb-44 pt-56">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center gap-2">
                    <DevhacksLogoSymbol className="h-[72px] w-auto" />
                    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        սպասում է քեզ...
                    </h2>
                </div>

                <p className="mt-4 text-darkblue-100">
                    Գրանցվել մինչև <span className="text-primary">Սեպտեմբերի 15-ը</span>
                </p>
                <div className="mt-5 flex items-center justify-center gap-x-6">
                    <Link
                        href='https://layerswap.typeform.com/devhacks'
                        className="rounded-full w-fit mx-auto bg-primary px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Գրանցել թիմ
                    </Link>
                </div>
            </div>
        </div>
    )
}
