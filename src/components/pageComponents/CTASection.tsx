import { minidenticon } from 'minidenticons'
import { FC, useMemo } from 'react'


const PARTICIPANTS = [
    "The Eleventh Hour",
    "TINY",
    "Arctic Monkeys",
    "BALLISTiQ",
    "Evrika",
    "CAIberpunk",
    "Advanced Engineering Team",
    'Code Crusaders',
    "LinXy",
    "QuadLogic",
    "AgroVerde",
    "GDS - Ghost Data Signal",
    "Nexus",
    "Pycodex",
    "Llama Zone",
    "Binary Bandits",
    "Turbo Rangers",
    "Solo coder",
    "BuyBid",
    "Kirovakan1Love",
    "Qvant",
    "Arvion",
    "Clique Crew",
    "DRONIUM",
    "NeuroBotics",
    "Random Team",
    "MetaTeam",
    "Tetra",
    "Overbyte",
    "Կաթով Java",
    "Debug Divas",
    "Powered by Love",
    "Արագ Օգնություն",
    "CAST static analysis",
    "DeveHopers",
    "Untitled",
    "VortexRIDE",
    "Think green",
    "TWM",
    "Docbyte AI",
    "LitArchive",
    "Infinite Loop",
    "VindexFy",
    "Glow Berries",
    "MBook",
    "RAY",
    "42",
    "Cyber friends",
    "Ցէ 2 գումարած",
    "Áva",
    "25 dram",
    "Green team",
    "RapByte",
    "Iris",
    "IJEVAN",
    "Exception",
    "Կոլեկտիվ",
    "8Byte",
    "Digital Spartans",
    "BeyondLockշ",
    "FimeHacks",
    "On The Road",
    "Gents",
    "Smart House",
    "Lorinnovators",
    "Alpha Strike",
    "NullHash",
    "SmartArmTech",
    "Cleverits",
    "Code & Capital",
]

export default function CTASection() {

    return (
        <div className="relative isolate py-24 sm:pb-16 lg:pb-32 lg:pt-32 sm:pt-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
                <div className="mx-auto max-w-2xl lg:text-center mb-10">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
                        Մասնակիցներ
                    </p>
                </div>
                <div id='participants' className="space-x-2 space-y-2 p-6 sm:p-10 h-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-5">
                    <div id='end' />
                    {
                        PARTICIPANTS.map(p => <div
                            key={p}
                            className="bg-primary/50 space-x-1 bg-opacity-50 text-lg inline-flex items-center font-bold leading-sm uppercase px-5 py-2 text-white rounded-full"
                        >
                            <MinidenticonImg username={p} />
                            <div>{p}</div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
type MinidenticonImgProps = {
    username: string
}
const MinidenticonImg: FC<MinidenticonImgProps> = ({ username }) => {
    const svgURI = useMemo(
        () => 'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(username)),
        [username]
    )
    return (<img className='w-8  h-8' src={svgURI} alt={username} />)
}


// export default function CTASection() {

//     return (
//         <div className="relative isolate py-24 sm:pb-16 lg:pb-32 lg:pt-32 sm:pt-16">
//             <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
//                 <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
//                     <span className="text-primary">Դևը</span> սպասում է քեզ...
//                 </h2>
//                 <p
//                     id="end"
//                     className="mt-4 text-primary">
//                     Գրանցումը փակ է
//                 </p>
//             </div>
//         </div>
//     )
// }
