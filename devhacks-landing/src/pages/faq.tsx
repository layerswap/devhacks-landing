import Layout from '@/components/pageComponents/Layout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/AccordionPrimitive'
import { MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function FAQ() {

    return (
        <Layout>
            <section className='py-8 sm:py-16'>
                <div className='px-6 mx-auto sm:px-6 lg:px-8 max-w-5xl'>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                        <p className="mt-4 text-base font-normal leading-7 text-primary-text lg:text-lg lg:mt-6 lg:leading-8">Ask everything you need to know about our products and services.</p>
                    </div>

                    <div className='max-w-5xl mx-auto mt-5'>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How to get started with the integration?</AccordionTrigger>
                                <AccordionContent>
                                    We’re providing multiple integration options tailored to suit your specific needs. The integration process varies depending on your requirements. We recommend exploring our Documentation, where you can deep dive into the technical details and select the option that best aligns with your objectives. If you’re not sure which option to choose or have any questions, feel free to contact our team.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>How does Layerswap work on the back-end?</AccordionTrigger>
                                <AccordionContent>
                                    Layerswap is a one-stop gateway that combines all parts of the asset transacting system, making the most of their strengths and overcoming any limitations.
                                    We leverage integrations with cross-chain bridges, fiat providers, CEX APIs and settlement networks, while employing in-house built solutions like our own bridge, liquidity and transaction pooling system.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Which exchanges, chains and tokens are supported?</AccordionTrigger>
                                <AccordionContent>
                                    You can access the list of supported CEXes, networks and assets <Link href={'https://docs.layerswap.io/user-docs/using-layerswap/supported-exchanges-networks-tokens'} target='_blank' className='text-primary underline decoration-primary hover:no-underline' >here</Link>. However, if you’re integrating with Layerswap, there are no limitations in this regard. We’ll enable any chain, token or exchange that you'd like in a matter of minutes.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Does Layerswap charge fees from end-users? What’s the fee structure?</AccordionTrigger>
                                <AccordionContent>
                                    Layerswap charges a fixed fee of $2 per transaction. On top of that, the end-users might need to pay network and/or exchange fees depending on the source and destination.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>How to know if Layerswap is a good fit for your project?</AccordionTrigger>
                                <AccordionContent>
                                    We aim to make the user onboarding experience for web3 projects as smooth and efficient as it can get. If the onboarding is a challenge for your project, we’d love to help you tackle it. We can deep dive into your objectives and come up with a customized solution.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>What kind of customizations can be implemented? (Can Layerswap be customized to match the theme of my dApp?)</AccordionTrigger>
                                <AccordionContent>
                                    We offer a wide range of customization options from adjusting UI to match the theme of your platform to adding new features, functionalities and integrations with the aim to make the user onboarding efficient for you.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>Is it possible to test the functionalities on Testnet?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! You can experience the current features of Layerswap on our live platform at layerswap.io, and explore our testnet environment at testnet.layerswap.io. In the integration process, we usually implement the required changes on the Testnet first, allowing you to try them out before going live.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger>How does Layerswap ensure security?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It's animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="max-w-5xl mx-auto mt-8 overflow-hidden text-center bg-darkblue-800 ring-1 ring-white/10 sm:mt-12 rounded-xl">
                        <div className="p-6 ">
                            <div className="max-w-sm mx-auto">
                                <MessageSquare className="relative z-30 inline-block w-8 h-8" />

                                <h3 className="mt-4 text-xl font-semibold text-white">Still have questions?</h3>
                                <p className="mt-2 text-sm font-normal text-primary-text">Can't find the answer you're looking for? Please chat with our friendly team.</p>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        title=""
                                        className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-200 bg-darkblue-500 border border-transparent rounded-full hover:bg-darkblue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue-700"
                                        role="button"
                                    >
                                        Start free trial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
