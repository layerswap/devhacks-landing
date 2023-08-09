

export default function PrizePool() {
    return (
        <div className=" ">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 space-y-16">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Prize Pool
                    </p>
                </div>
                <div className="mx-auto mt-12 max-w-2xl lg:max-w-6xl">
                    <div className="grid lg:grid-cols-3">
                        <div className="h-full flex flex-col items-center gap-5">
                            <div className="px-3 py-1.5 text-xs font-bold rounded-full text-black bg-white">
                                1st Place
                            </div>
                            <div className="text-5xl font-bold text-center space-y-1">
                                <p className="text-primary">
                                    $5000
                                </p>
                                <p className="text-white text-lg">
                                    + $5000 Special Prize
                                </p>
                            </div>
                            <div />
                        </div>
                        <div className="h-full flex flex-col items-center gap-5">
                            <div className="px-3 py-1.5 text-xs font-bold rounded-full text-black bg-white">
                                2st Place
                            </div>
                            <p className="text-primary text-5xl font-bold text-center space-y-1">
                                $2500
                            </p>
                            <div />
                        </div>
                        <div className="h-full flex flex-col items-center gap-5">
                            <div className="px-3 py-1.5 text-xs font-bold rounded-full text-black bg-white">
                                2st Place
                            </div>
                            <p className="text-primary text-5xl font-bold text-center space-y-1">
                                $1000
                            </p>
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
