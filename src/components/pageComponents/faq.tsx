import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
const FAQ = () => {
    return (
        <div className="overflow-hidden pb-12 flex flex-col justify-center items-center px-6 lg:px-8" id="faq">
            <div className="mx-auto max-w-6xl px-6 flex flex-col text-center w-full lg:px-8 2xl:pt-0 2xl:pb-0 bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl">
                <div className="mx-auto max-w-2xl lg:text-center pb-6">
                    <p className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl pt-6">
                        Հաճախ Տրվող Հարցեր
                    </p>
                </div>
                <Accordion className='w-full' allowMultiple>
                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left font-bold text-lg sm:text-xl text-navy-900 dark:text-white' >
                                    Ի՞նչ ոլորտի նախագծեր կարող են մասնակցել
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Ցանկացած։ AI, web3/crypto, տիեզերք, fintech, aggrotech և այլն: Ինչքան որ Ձեր երևակայությունը ու գիտելիքները կներեն։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
                        <h2>
                            <AccordionButton className="flex justify-between">
                                <span
                                    className="text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white"
                                >
                                    Կարո՞ղ ենք մինչ մրցույթը նախապատրաստվել
                                </span>
                                <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            className="text-medium mt-2 text-left text-base sm:text-lg text-darkblue-100"
                            pb={4}
                        >
                            Թույլատրվում է միայն պլանավորել՝ օրինակ՝ ինչ եք անելու, ինչպես եք անելու, ինչ ռեսուրսներ են պետք։ Իսկ նախագիծը պետք է ամբողջությամբ իրականացվի այդ 48 ժամվա ընթացքում։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ովքե՞ր և ինչպե՞ս են գնահատելու նախագծերը
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Նախապես ընտրված` 3-6 հոգանոց հանձնաժողովը գնահատելու է նախագծերը հայտարարված չափանիշներով` տեխնիկական բարդություն, նախագծի ամբողջականություն, օգտագործման հարմարավետություն, կատարման իրատեսականություն։ Հանձնաժողովի անդամները կազմված կլինեն տարբեր ոլորտների մասնագետներից։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ո՞րն է հավելյալ $5000 մրցանակ ստանալու կարգը
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Առաջին տեղը զբաղեցրած թիմն առանց նախապայմանի հաղթելու է $5000, որից հետո հանձնաժողովն առանձին քվեարկությամբ որոշում է կայացնելու հավելյալ $5000 շնորհելու մասով։ Քվեարկության ժամանակ շեշտը դրվելու է նախագծի իրագործման իրատեսականության վրա։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Կարո՞ղ ենք աշխատել արդեն իսկ գոյություն ունեցող նախագծի վրա
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Ոչ, նախագիծը պետք է ամբողջությամբ իրականացվի հեքըթոնի ընթացքում՝ սկսած գաղափարի ձևավորումից մինչև նախատիպի կամ աշխատող MVP-ի ստեղծումը:
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ինչպե՞ս է կազմակերպվելու հանգիստը այդ 48 ժամվա ընթացքում
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Հանգստի համար նախատեսված զոնա չի լինելու։ Մասնակիցները կարող են լքել մրցույթի անցկացման վայրը, եթե կա հանգստանալու խիստ անհրաժեշտություն։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Տրանսպորտ տրամադրվելու՞ է
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Ոչ, մասնակիցներն իրենք պետք է կազմակերպեն իրենց տրանսպորտը։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ի՞նչ պետք է մեզ հետ ունենանք
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Ձեզ հետ բերեք այն ամենը, ինչ հարկավոր է նախագծի վրա աշխատելու համար՝ նոթբուքեր, լիցքավորիչներ, անհրաժեշտ ծրագրեր և այլն։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10 pb-6'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ունեմ այլ հարց, ու՞մ դիմեմ
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            <a href="https://t.me/+lDNpJpmaYRE2MmIy" className="text-primary">Միացեք մեր տելեգրամ համայնքին</a>, կազմակերպիչները արագ կպատասխանեն Ձեր ցանկացած հարցին։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-gray-200 py-[17px] dark:!border-white/10 pb-6'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ովքե՞ր և ինչպե՞ս են գնահատելու նախագծերը
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Նախապես ընտրված 5 հոգանոց հանձնաժողովը գնահատելու է նախագծերը հայտարարված չափանիշներով` տեխնիկական բարդություն, նախագծի ամբողջականություն, կատարման իրատեսականություն, գաղափարի և լուծման նորարություն, խնդրի լուծման կարևորություն և ազդեցություն։ Հանձնաժողովի անդամները կազմված կլինեն տարբեր ոլորտների մասնագետներից։
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ;