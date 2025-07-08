import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import Link from 'next/link';
import Image from 'next/image';
import { Award } from 'lucide-react';

const hackathons = {
    2025: {
        title: "2025 Վանաձոր",
        img: "/devhacks2025.jpg",
        participants: [
            { teamName: "🥇Infinite Loop", score: 181, names: ["Սուքիասյան Մհեր", "Վաչագան Գրիգորյան", "Կարեն Մալխասյան", "Դավիթ Մանուկյան", "Հայկ Պողոսյան"], link: "https://github.com/devopshayk/jarvis-ai", description: "Մեր թիմը մշակում է Jarvis խելացի օգնականը, որը թույլ է տալիս ձայնային հրահանգներով, շարժումներով և պատկերների ճանաչմամբ հեշտացնել օգտատիրոջ գործերը։ Լուծումը միավորում է մի քանի առաջատար տեխնոլոգիա՝ արագ ու ինտուիտիվ փորձ ապահովելու համար։" },
            { teamName: "🥈BALLISTiQ", score: 178, names: ["Արմեն Ասատրյան", "Գերասիմ Իսրայելյան", "Իշխան Գևորգյան"], link: "https://github.com/Gerasim1003/BALLiSTiQ-DevHack", description: "Ստեղծել ենք հավելված որը հնրավորություն է տալիս դիպուկահարներին առանց օգնականի օգնության, միայն հավելվածով կրակել թիրախներին և ստանալ ուղղումներ, ինչպես նաև հնարավորություն է տալիս աշխարհի տարբեր կետերում գտնվող երկու դիպուկահարներին օնլայն և իրական ժամանակում մրցել։" },
            { teamName: "🥉CAST static analysis", score: 176, names: ["Գառնիկ Խռոյան", "Մարիամ Հարությունյան", "Էդգար Խաչատրյան"], link: "https://github.com/mariamarutunian/DevHacks-CAST-static-analysis", description: "Մեր  նախագիծն է ծրագրերում խոցելիությունների հայտնաբերում` օգտագործելով մեքենայական ուսուցման մոտեցումներ։ Լուծումը ներառում է հայտնի խոցելիությունների (CVE) մասին տվյալների հավաքագրում (հիմնականում cve.org կայքից) և մշակում, մասնավորապես խոցելիություն պարունակող և ուղղած կոդի տարբերակների առանձնացում LLM-ին ուղղված թիրախավորված հարցումների միջոցով։ Այնուհետև, օգտագործելով ML մոդել (UniXcoder), հավաքագրված տվյալները և մուտքային ծրագրի նախնական կոդը թարգմանվում է թվային վեկտորի, ինչն էլ հնարավորություն է տալիս գտնել նմանատիպ կոդի հատվածներ մուտքային ծրագրում, պոտենցիալ խոցելիության մասին զեկուցելու համար։ Մեր մշակած գործիքի միջոցով կարողացել ենք հայտնաբերել չուղղած խոցելիություններ, որոնց մասին արդեն զեկուցել ենք՝ https://github.com/ccrma/chuck/issues/503, https://github.com/soveran/clac/issues/28" },
            { teamName: "GDS - Ghost Data Signal", score: 174, reward: true, names: ["Գրիգոր Մարտիրոսյան", "Սարգիս Մանուկյան", "Դավիթ Բոստանջյան"], link: "https://github.com/RafSet047/FimeHacks.git", description: "Մեր նախագիծը լազերային կապի համակարգ է անօդաչու թռչող սարքերի համար, որը նախատեսված է ռադիոկապը փոխարինելու ուղղորդված լազերային ազդանշանով։ Համակարգը ապահովում է տվյալների անվտանգ և կայուն փոխանցում՝ պաշտպանված խանգարումներից և գաղտնալսումից։ Նախատիպը ամբողջությամբ ստեղծվել է 48 ժամվա ընթացքում և հաջողությամբ աշխատում է։" },
            { teamName: "Nexus", score: 174, reward: true, names: ["Լևոն Մեժլումյան", "Նարեկ Խորենյան", "Սերգեյ Մեժլումյան", "Հովհաննես Խառազյան"], link: "https://github.com/kharaazyan/nexus.git", description: "Nexus is a cybersecurity and forensics framework designed to monitor, validate, and preserve system truth through immutable cryptographic logging and decentralized storage." },
            { teamName: "VortexRIDE", score: 172, reward: true, names: ["Էրիկա Գյոնջյան", "Հայկ Թադևոսյան", "Տիգրան Ավագյան", "Դավիթ Աբրահամյան", "Արամ Հակոբյան"], description: "Մեր թիմի նախագիծը շարժական աշխատանոց է, որը կարող է փոփոխվել և հարմարեցվել տարբեր խնդիրների լուծման համար։ Ամենագնացը կառուցված է այնպես, որ հնարավոր լինի հեշտությամբ միացնել և անջատել մոդուլներ՝ օրինակ՝ ռոբոտային ձեռքը, տեսախցիկ, ուժային բլոկ կամ սենսորային սարքեր՝ կախված առաքելության պահանջներից։ Առաջարկվող լուծումը նպատակ ունի լուծել շարժական ռոբոտների ճկունության և հարմարեցման խնդիրը։ Նախագծի յուրահատկությունը կայանում է նրանում, որ ցանկացած ոլորտում և իր տեխնոլոգիական լուծումներում նա կարող է գտնել իր տեղը և օգնել մարդու կողմից բարդ կատարվող խնդիրները։ Հիմնական առավելությունը դրա մոդուլայինությունն է՝ պարզ, արագ և գործնական կազմաձևման հնարավորությամբ։" },
            { teamName: "Tetra", score: 170, reward: true, names: ["Գագիկ Միրզոյան", "Երվանդ Տերտերյան", "Արամ Մադանցյան", "Անդրանիկ Ոսկանյան"], link: "https://github.com/GagMirz/TetraDevHacks2025", description: "Ուլտրաձայնային հաճախականությունների տրույթում աշխատող տվյալների փոխանցման ինովացիոն համակարգ" },
            { teamName: "8Byte", score: 166, names: ["Վանիկ Տիգրանյան", "Սարգիս Հովհաննիսյան"], description: "Տվյալ նախագիծը նպատակ ունի հեշտացնել տեսողական խնդիրներ ունեցող մարդկանց կյանքը հետեվելու իրենց առողջությանը։" },
            { teamName: "BuyBid", score: 164, names: ["Դավիթ Կարապետյան", "Հայկազ Կարապետյան", "Լևոն Նազինյան"], link: "https://github.com/DavKarapetyan/buybid.git", description: "BuyBid-ը նորարարական առցանց շուկա է, որը միավորում է գնորդներին և վաճառողներին՝ հնարավորություն տալով վաճառել, գնել կամ փոխանակել ապրանքներ ամենաժամանակակից տեխնոլոգիաների միջոցով։ Պլատֆորմը ներառում է բացահայտ աճուրդներ, ուղղակի վաճառք, ապրանքների փոխանակում, ինչպես նաև 3D մոդելներով և AR տեխնոլոգիայով ապրանքների դիտում՝ դարձնելով գնումների գործընթացը առավել գրավիչ և վստահելի։" },
            { teamName: "TINY", score: 163, names: ["Անի Ջանվելյան", "Նորիկ Բադալյան"], description: "Նախագծել ենք բժշկական սարք՝ նախատեսված հոդերի անկյունները, շեղումները չափելու համար: Այն նախատեսված է մարդու մարմնի հոդերի շարժման ու դիրքի ճշգրիտ վերլուծության համար: Սարքը կրում է օգտատերը՝ այն ամրացնելով, ոտքին, ձեռքին, գլխին  և այլ հատվածներին: Այն օգտագործում է IMU ճշգրիտ սենսորներ, որոնք հնարավորություն են տալիս գրանցել շարժումների անկյունային տվյալները, շեղումները և արագությունները իրական ժամանակում։ Նաև Ցույց է տալիս հոդերի անկյունների և շեղումների փոփոխությունը 3D միջավայրում՝ համակարգչի վրա։ Ինչպես նաև թույլ է տալիս գնահատել օրինակ՝ պարկինսոնի հիվանդությամբ տառապող անձանց մոտ դողի (տրեմորի) աստիճանը:" },
            { teamName: "LitArchive", score: 161, names: ["Անի Հովհաննիսյան", "Մուշեղ Մովսիսյան"], link: "https://github.com/MusheghMov/msv", description: "LitArchive-ը collaboration հարթակ է (կայքի տեսքով), որտեղ գրողներն ու նկարիչները կարող են համատեղ աշխատել վեբկոմիքսներ ստեղծելու վրա: Այն համատեղում է արհեստական ​​բանականության վրա հիմնված գործիքները (AI image generation), միաժամանակյա տեքստային և վիզուալ խմբագրում, և վիզուալ սկրիպտավորում՝ ստեղծագործական գործընթացը գաղափարից մինչև հրապարակում հեշտացնելու համար:" },
            { teamName: "RAY", score: 156, names: ["Արամ Քամալյան", "Ռոբերտ Այդինյան", "Յուրի Մկրտումյան"], description: "Մեր թիմի նախագիծը նպատակ ունի ստեղծել առաջին ձայնային արհեստական բանականության գործակալը (Voice AI Agent) հայերեն լեզվով, որը կկարողանա ինտեգրվել տարբեր կազմակերպությունների հետ։ Գործակալը հեռախոսային զանգերի միջոցով կշփվի հաճախորդների հետ, կպատասխանի տեղեկատվական հարցերին, կտրամադրի ծառայությունների կամ ապրանքների վերաբերյալ մանրամասներ, կկատարի ամրագրումներ և անհրաժեշտության դեպքում կփոխանցի զանգը իրական օպերատորին։ Լուծումը նպատակ ունի բարելավել հաճախորդների սպասարկումը, ավտոմատացնել զանգերի կենտրոնների աշխատանքը, նվազեցնել բեռը աշխատակազմի վրա և ապահովել հասանելիություն 24/7։" },
            { teamName: "Binary Bandits", score: 156, names: ["Սաշա Մանուկյան", "Լևոն Պետրոսյան", "Վահե Սահակյան", "Նարեկ Հովհաննիսյան", "Արթուր Առաքելյան"], description: "<<Խոսող Ձեռքերը>>՝ տեքստը հայերեն ժեստերի լեզվի թարգմանիչ ծրագիր է, որի նպատակն է կամուրջ կազմել լսող և խուլ համայնքների միջև, լրացնելով հաղորդակցման բացը՝ գրավոր հայերեն տեքստը փոխակերպելով հայերեն ժեստերի լեզվի: Համակարգը ապահովում է ժեստերի լեզվի տեսողական ներկայացում՝ անիմացնելով ժեստերը։ Ծրագիրը նպաստում է Հայաստանում ժեստերի լեզվի մատչելիության, ներառման և իրազեկվածության բարձրացմանը:" },
            { teamName: "FimeHacks", score: 156, names: ["Անի Թովմասյան", "Մարիամ Գալստյան", "Աննա Հարությունյան", "Լիլիթ Ասիլբեկյան", "Արսեն Հակոբյան"], link: "https://github.com/RafSet047/FimeHacks", description: "Մեր համակարգը նախագծված է կազմակերպությունների գործընթացները արագացնելու, պարզեցնելու և արտադրողականությունը բարձրացնելու համար: Տիրապետելով կազմակերպության տվյալներին՝ այն ճշգրիտ պատասխանում է աշխատակիցների հարցերին և արդյունավետ կառավարում է գործընթացները:" },
            { teamName: "Think Green", score: 148, names: ["Վարդան Շերմազանյան", "Ղազարյան Վահրամ", "Գևորգ Մանուկյան"], description: "ԲերքBot նախագիծը ոչ միայն տեխնոլոգիական հետաքրքիր նախաձեռնություն է, այլև գործնական լուծում՝ գյուղատնտեսության արդիականացման ուղղությամբ։ Այն մատչելի է, օպերատիվ և կարող է ընդլայնվել՝ ներառելով նոր տվիչներ, վերլուծական գործիքներ և նույնիսկ ինքնավար որոշումների կայացման մեխանիզմներ։ ԲերքBot-ը աշխատում է Arduino-ի հիմքով ստեղծված լաբորատոր սարքի օգնությամբ որի շնորհիվ բոտին փոխանցում է այդ պահին հողի տվյալներ և առաջարկում օպտիմալ մշակաբույս տարածքում ցանքս կատարելու և լավագույնս բերք ստանալու համար։ Նման լուծումները կարող են իրական ազդեցություն ունենալ գյուղատնտեսների արտադրողականության վրա և նպաստել կայուն, տվյալահեն գյուղատնտեսության ձևավորմանը Հայաստանում։" },
        ],
    },
};


export default function DevHighlights() {

    return (
        <div className="relative isolate py-24 sm:pb-16 lg:pb-32 lg:pt-32 sm:pt-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
                <div className="mx-auto max-w-2xl lg:text-center mb-10">
                    <p className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-4xl lg:text-6xl">
                        Դևի վերջին զարթոնքները
                    </p>
                </div>
                <div className="space-x-2 space-y-2 p-6 sm:p-10 h-full bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl max-w-2xl mx-auto lg:max-w-none w-full lg:col-span-5 mt-12">
                    {Object.entries(hackathons).map(([year, data]) => (
                        <div key={year} className="text-center space-y-4">
                            <h2 className="text-white text-3xl font-semibold">
                                {data.title}
                            </h2>
                            <div className="flex-shrink-0 mx-auto lg:mx-0 place-self-center py-4">
                                <Image
                                    src={data.img}
                                    alt={data.title}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-fit max-w- rounded-xl"
                                />
                            </div>
                            <div className="text-right mb-2">
                                <p className="text-xl sm:text-2xl text-primary">
                                    միավորներ
                                </p>
                                <p className="text-xs text-gray-400">մաքսիմում՝ 300</p>
                            </div>
                            <Accordion className='w-full' allowMultiple>
                                <ul className="space-y-2">
                                    {data.participants.map((participant, idx) => (
                                        <AccordionItem key={idx} className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                                            <li className="text-base lg:text-xl">
                                                <AccordionButton className='flex justify-between w-full items-center'>
                                                    <div className="flex  items-start space-x-1 min-w-0">
                                                        <span className="w-6 text-left text-gray-400">{idx + 1}</span>
                                                        <span className={`${idx < 7 ? "text-white" : "text-primary-text"} flex items-center gap-0.5`}>
                                                            {participant.reward && <Award className='h-5 w-5 text-primary' />}
                                                            <span className='truncate max-w-[160px] sm:max-w-none'>
                                                                {participant.teamName}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-4">

                                                        <span className="text-primary  text-right font-semibold ">{participant.score}</span>
                                                        <AccordionIcon className='!text-navy-900 dark:!text-white' />
                                                    </div>
                                                </AccordionButton>
                                            </li>
                                            <AccordionPanel className=''>
                                                <h4 className="text-lg font-semibold mb-2 text-primary text-start mt-4">Նկարագրություն</h4>
                                                <p className='text-left mt-2'>{participant.description}</p>
                                                {participant.names?.length > 0 && (
                                                    <div className="mt-4 text-left">
                                                        <h4 className="text-lg font-semibold mb-2 text-primary">Մասնակիցներ</h4>
                                                        <div className="text-base">
                                                            {participant.names.join(", ")}
                                                        </div>
                                                    </div>
                                                )}
                                                {participant.link &&
                                                    <div className='text-end mt-2'>
                                                        <Link
                                                            target="_blank"
                                                            href={participant.link}
                                                            key={idx}
                                                            className='inline-flex items-center  text-primary underline space-x-1 decoration-primary hover:no-underline'>
                                                            <Image src={"/github.png"} width={20} height={20} alt={"GitHub logo"} />
                                                        </Link>
                                                    </div>
                                                }
                                            </AccordionPanel>
                                        </AccordionItem>
                                    ))}
                                </ul>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


