

export default function PrizePool() {
    return (
        <div id="prize-pool">
            <div className="mx-auto max-w-none sm:max-w-6xl px-6 lg:px-8 space-y-6">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-6xl">
                        Մրցանակներ
                    </p>
                    <p className="text-lg text-white mt-5">
                        Մրցման ամենախոստումնալից նախագծերը մրցանակներ կստանան, իրենց ստեղծած նախագիծը առաջ տանելու, և հաջորդ ՄԵԾ բանը ստեղծելու համար
                    </p>
                </div>
                <div className="mx-auto mt-12 max-w-2xl lg:max-w-6xl">
                    <div className="grid lg:grid-cols-3 lg:hidden">
                        <div className="h-full flex flex-col items-center gap-5">
                            <div className="px-3 py-1.5 text-xs font-bold rounded-full text-black bg-white">
                                Առաջին
                            </div>
                            <div className="text-5xl font-bold text-center space-y-1">
                                <p className="text-primary">
                                    $10000
                                </p>
                            </div>
                            <div />
                        </div>
                        <div className="h-full flex flex-col items-center gap-5">
                            <div className="px-3 py-1.5 text-xs font-bold rounded-full text-black bg-white">
                                Երկրորդ
                            </div>
                            <p className="text-primary text-5xl font-bold text-center space-y-1">
                                $2500
                            </p>
                            <div />
                        </div>
                        <div className="h-full flex flex-col items-center gap-5">
                            <div className="px-3 py-1.5 text-xs font-bold rounded-full text-black bg-white">
                                Երրորդ
                            </div>
                            <p className="text-primary text-5xl font-bold text-center space-y-1">
                                $1000
                            </p>
                            <div />
                        </div>
                    </div>

                    <div className="hidden lg:grid lg:grid-cols-3 place-content-end w-full h-[400px] divide-x divide-black">
                        <div className="from-primary/50 bg-gradient-to-t h-3/4 w-full place-self-end rounded-bl-lg flex flex-col justify-between items-center pb-5">
                            <p className="flex justify-center text-6xl font-bold">
                                $2,500
                            </p>
                            <div className="px-3 py-1.5 text-lg rounded-full text-black bg-white">
                                Երկրորդ
                            </div>
                        </div>
                        <div className="from-primary/50 bg-gradient-to-t h-[350px] w-full place-self-end flex flex-col justify-between items-center pb-5">
                            <p className="flex justify-center text-6xl font-bold">
                                $10,000<span className="text-primary">*</span>
                            </p>
                            <div className="px-3 py-1.5 text-2xl rounded-full text-black bg-white">
                                Առաջին
                            </div>
                        </div>
                        <div className="from-primary/50 bg-gradient-to-t h-1/2 w-full place-self-end rounded-br-lg flex flex-col justify-between items-center pb-5">
                            <p className="flex justify-center text-6xl font-bold">
                                $1,000
                            </p>
                            <div className="px-3 py-1.5 text-base rounded-full text-black bg-white">
                                Երրորդ
                            </div>
                        </div>
                    </div>
                    <p className="text-white text-base mt-3"><span className="text-primary">*</span> Առաջին տեղը զբաղեցնող թիմը կստանա $5000 մրցանակ, ինչպես նաև հնարավորություն առանձին քվեարկության միջոցով ստանալ հավելյալ  <strong className="text-primary">$5000</strong></p>
                </div>
            </div>
        </div>
    )
}
