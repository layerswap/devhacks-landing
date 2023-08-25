import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
const FAQ = () => {
    return (
        <div className="overflow-hidden pb-12 flex flex-col justify-center items-center px-6 lg:px-8" id="faq">
            <div className="mx-auto max-w-6xl px-6 flex flex-col text-center w-full lg:px-8 2xl:pt-0 2xl:pb-0 bg-darkblue-800 bg-opacity-50 backdrop-blur-md rounded-xl">
                <div className="mx-auto max-w-2xl lg:text-center pb-6">
                    <p className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-6xl pt-6">
                        Հաճախ Տրվող Հարցեր
                    </p>
                </div>
                <Accordion className='w-full' allowMultiple>
                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left font-bold text-lg sm:text-xl text-navy-900 dark:text-white' >
                                    Ի՞նչ ոլորտի նախագծեր կարող են մասկանցել
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
                            Թույլատրվում է միայն պլանավորել՝ օրինակ՝ ինչ եք անելու, ոնց եք անելու, ինչ ռեսուրսներ են պետք։ Իսկ փաստացի նախագծի իրականացումը պետք է ամբողջությամբ ստեղծվի այդ 48 ժամվա ընթացքում։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Կլինե՞ն մենթորներ օգնության համար
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Ոչ, մրցույթը ձեր ու ձեր թիմի մասին է՝ եկեք, ինքնուրույն տանջվենք ու ինքնուրույն փորձեք կորզել էն ինչ ձերն ա։ Չկարողացաք չկարողացաք՝ մենթորները ոչ մի բան չեն կարող անել։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ովքե՞ր և ո՞նց են գնահատելու նախագծերը
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Նախապես ընտրված` 6-10 հոգանոց հանձնաժողովը գնահատելու է նախագծերը հայտարարված կրիտերիաներով` տեխնիկական բարդությունը, նախագծի ամբողջականությունը, օգտագործման հարմարավետությունը, կատարման իրատեսականությունը։ Հանձնաժողովի անդամները կազմված կլինեն տարբեր ոլորտների մասնագետներից։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ո՞նց է լինելու հավելյալ $5000-ի մրցանակաբաշխությունը
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            Առաջին տեղ զբաղեցրած թիմը առանց նախապայմանի հաղթելու է $5000: Որից հետո հանձնաժողովը առանձին քվեարկություն է անելու՝ հավելյան $5000-ի համար։ Հիմնական ուշադրություն է դարձվելու նախագծի իրագործման իրատեսականության վրա։
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem className='border-gray-200 py-[17px] dark:!border-white/10 pb-6'>
                        <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left text-lg sm:text-xl font-bold text-navy-900 dark:text-white'>
                                    Ունեմ հարց, ու՞մ դիմեմ
                                </span>
                                <AccordionIcon className='text-left !text-navy-900 dark:!text-white' />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className='text-left text-medium text-base sm:text-lg mt-2 text-darkblue-100' pb={4}>
                            <a href="https://t.me/+lDNpJpmaYRE2MmIy" className="text-primary">Միացեք մեր տելեգրամ համայնքին</a>, կազմակերպիչները արագ կպատասխանեն Ձեր ցանկացած հարցին։
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ;