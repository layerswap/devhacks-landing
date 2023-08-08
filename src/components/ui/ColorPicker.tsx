import { Dispatch, SetStateAction, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { motion } from 'framer-motion'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type Theme = {
    name: string,
    primaryColor: string,
    secondaryColor: string
}

type Props = {
    selectedTheme: Theme;
    setSelectedTheme?: Dispatch<SetStateAction<Theme>>,
    themes: Theme[]
}

export default function ColorPicker({ selectedTheme, setSelectedTheme, themes }: Props) {

    return (
        <RadioGroup value={selectedTheme} onChange={setSelectedTheme}>
            <RadioGroup.Label className="block text-sm font-medium leading-6 text-white">
                Choose a theme color
            </RadioGroup.Label>
            <div className="mt-4 flex items-center space-x-3">
                {themes.map((theme) => (
                    <RadioGroup.Option
                        key={theme.name}
                        value={theme}
                        className={'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'}
                    >
                        <RadioGroup.Label as="span" className="sr-only">
                            {theme.name}
                        </RadioGroup.Label>
                        {selectedTheme?.name === theme.name && (
                            <motion.span
                                layoutId={"colorPicker"}
                                className="absolute inset-0 z-10  mix-blend-lighten ring-2 ring-white"
                                style={{ borderRadius: '9999px' }}
                                transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
                            />
                        )}
                        <div className='flex'>
                            <span
                                aria-hidden="true"
                                className={classNames(theme.primaryColor, 'h-8 w-4 rounded-l-full border border-black border-opacity-10')}
                            />
                            <span
                                aria-hidden="true"
                                className={classNames(theme.secondaryColor, 'h-8 w-4 rounded-r-full border border-black border-opacity-10')}
                            />
                        </div>
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}
