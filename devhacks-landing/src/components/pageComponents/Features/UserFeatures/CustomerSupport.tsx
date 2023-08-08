const CustomerSupport = () => {

    return (
        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-darkblue-800/30 px-6 py-6 ring-1 ring-white/10 rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none ">
            <div className='flex flex-col lg:block items-center text-center '>
                <h2 className="mt-8 text-4xl font-bold text-white">24/7 Customer support</h2>
                <p className="mt-4 text-lg font-normal text-primary-text">We'll handle your onboarding customer support, freeing your team to focus on platform-specific queries. </p>
            </div>
            <div className="relative w-full h-full bg-darkblue-800 rounded-xl overflow-hidden p-6 ring-1 ring-white/10">
                <div className="absolute inset-0">
                    <svg className="filter blur-3xl opacity-70" style={{ filter: 'blur(64px)' }} width="343" height="339" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M158.612 289.158C68.377 300.506 12.834 390.699.684 294.077-11.467 197.455 205.537 12.391 295.772 1.043c90.236-11.347 19.532 155.318 31.683 251.94 12.151 96.622-78.607 24.828-168.843 36.175Z" fill="url(#a)" />
                        <defs>
                            <linearGradient id="a" x1="335.877" y1="-4" x2="338.499" y2="338.656" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" style={{ stopColor: '#E42575' }} />
                                <stop offset="100%" style={{ stopColor: '#6e0040' }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <img className="relative w-full mx-auto" src="/images/customerSupport.png" alt="Customer Support" />
            </div>
        </div>
    )
}

export default CustomerSupport