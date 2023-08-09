import DevhacksLogo from "./DevhacksLogo"

const Hero = () => {
    return (
        <div className="relative isolate overflow-hidden xl:h-[calc(100vh-65px)] xl:flex xl:flex-col xl:justify-center xl:items-center">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
                <svg x="50%" y={-1} className="overflow-visible fill-darkblue-800/20">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
            </svg>
            <div className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32 flex flex-col text-center space-y-10 lg:px-8 lg:pt-44 2xl:pt-0 2xl:pb-0 w-full">
                <DevhacksLogo className="h-32 w-auto" />
                <div className="space-y-3">
                    <p className="text-4xl text-white font-bold">
                        DevHacks - Sexiest Hackathon
                    </p>
                    <p className="text-base text-primary-text max-w-md mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis distinctio molestiae voluptatem similique
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero