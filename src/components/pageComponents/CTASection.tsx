// import { minidenticon } from 'minidenticons'
// import { FC, useMemo } from 'react'


// const PARTICIPANTS = [
//     "CodeCrafters",
//     "Aware Sec",
//     "CryptoAlwaysWin",
//     "AiGen",
//     "Tiny",
//     "UXploration Extravaganza",
//     "IRemember",
//     "MoodMap",
//     "Apex",
//     "IT OK",
//     "Մօկէ",
//     "Gambit",
//     "Masivic📿",
//     "SolveeTeam",
//     "Լավերով",
//     "Picsart Academy",
//     "iifay",
//     "Souls of Code",
//     "TechMind",
//     "ByteStorm",
//     "Tomorrow is now",
//     "Gazar",
//     "GOYATC",
//     "Bee Tee",
//     "գյուղապետարան",
//     "Coding_Academics",
//     "DevDivas",
//     "DebugDoctors",
//     "LandTech",
//     "nodevils",
//     "AGAH",
//     "արդար լոտո",
//     "Prismix",
//     "Fresh Minds",
//     "VON",
//     "Code Crusaders",
//     "Space Invaders",
//     "8Byte",
//     "#Ալեքսանդր#Արցախ",
//     "winners",
//     "Yummy Mommy",
//     "Byte Wizards",
//     "Team",
//     "Disciplina",
//     "ITT",
//     "W-BTS",
//     "Different",
//     "ArmTech",
//     "MedicineGPT",
//     "Չինգաչունգ",
//     "On the road", 
//     "GreenTime", 
//     "MedTech",
//     "IDS"
// ]

// export default function CTASection() {

//     return (
//         <div className="relative isolate py-24 sm:pb-16 lg:pb-32 lg:pt-32 sm:pt-16">
//             <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
//                 <div className="mx-auto max-w-2xl lg:text-center mb-10">
//                     <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
//                         Մասնակից թիմեր
//                     </p>
//                 </div>
//                 <div  className="space-x-2 space-y-2 p-6 sm:p-10 h-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-5">
//                     {
//                         PARTICIPANTS.map(p => <div
//                             key={p}
//                             className="bg-primary/50 space-x-1 bg-opacity-50 text-lg inline-flex items-center font-bold leading-sm uppercase px-5 py-2 text-white rounded-full"
//                         >
//                             <MinidenticonImg username={p} />
//                             <div>{p}</div>
//                         </div>)
//                     }
//                 </div>
//                 <div id="end"></div>
//             </div>
//         </div>
//     )
// }
// type MinidenticonImgProps = {
//     username: string
// }
// const MinidenticonImg: FC<MinidenticonImgProps> = ({ username }) => {
//     const svgURI = useMemo(
//         () => 'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(username)),
//         [username]
//     )
//     return (<img className='w-8  h-8' src={svgURI} alt={username} />)
// }


import Link from "next/link";

export default function CTASection() {

    return (
        <div className="relative isolate py-24 sm:pb-16 lg:pb-32 lg:pt-32 sm:pt-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    <span className="text-primary">Դևը</span> սպասում է քեզ...
                </h2>
                <p className="mt-4 text-darkblue-100">
                    Գրանցումը բաց է մինչև <span className="text-primary">Հունիսի 15-ը</span>
                </p>
                <div className="mt-5 flex items-center justify-center gap-x-6">
                    <Link
                        id="end"
                        href='https://techweekarmenia.typeform.com/devHacks'
                        className="rounded-full w-fit mx-auto bg-primary px-6 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Գրանցել թիմ
                    </Link>
                </div>
            </div>
        </div>
    )
}
