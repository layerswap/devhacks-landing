import { AlignLeft, UserCheck } from 'lucide-react';
import { FC, useEffect, useState } from 'react'
import WalletIcon from '../../icons/WalletIcon';
import Switch from '@/components/ui/Switch';
import { AnimatePresence, motion } from 'framer-motion';
import RefuelGas from './UserFeatures/RefuelGas';

const Onboarding: FC = () => {

    const tabs = [
        {
            id: 0,
            label: "L2",
            icon: <WalletIcon className='stroke-2 w-6 h-6 -ml-0.5' />,
            content: <>
                <RefuelGas/>
            </>,
        },
        {
            id: 1,
            label: "Appchains",
            icon: <WalletIcon className='stroke-2 w-6 h-6 -ml-0.5' />,
            content: <>
                <RefuelGas/>
            </>,
        },
        {
            id: 2,
            label: "dApps",
            icon: <AlignLeft />,
            content: <RefuelGas/>,
        },
        {
            id: 3,
            label: "Wallets",
            icon: <AlignLeft />,
            content: <RefuelGas/>,
        },
        {
            id: 4,
            label: "Your Project",
            icon: <AlignLeft />,
            content: <RefuelGas/>,
        }
    ];

    const [activeTabId, setActiveTabId] = useState(tabs[0].id);
    const activeTab = tabs.find(t => t.id === activeTabId)

    return (
        <div className="w-full flex flex-col justify-between h-full text-primary-text max-w-6xl px-6 lg:px-8 mx-auto my-20 lg:my-32 2xl:mt-0">
            <div className="mx-auto max-w-2xl text-center mb-4">
                <h2 className="text-base font-semibold leading-7 text-primary">Solutions</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Layerswap for
                </p>
            </div>
            <div className='grid grid-cols-1 gap-4 space-y-4'>
                <div className="mt-4 flex flex-wrap flex-row gap-2 justify-center max-w-2xl mx-auto lg:max-w-3xl rounded-full p-1 bg-darkblue-800 w-fit">
                    {tabs.map((tab) => (
                        <Switch
                            activeTabId={activeTabId}
                            onCLick={setActiveTabId}
                            tab={tab}
                            key={tab.id}
                        />
                    ))}
                </div>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab ? activeTab.id : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {
                            activeTab?.content
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Onboarding