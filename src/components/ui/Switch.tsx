import { motion } from "framer-motion"
import { FC } from "react"

type Tab = {
    id: number,
    label: string,
    icon?: JSX.Element | JSX.Element[],
    content?: any,
    link?: string,
}

type HeaderProps = {
    tab: Tab,
    activeTabId: number | undefined,
    onCLick: (id: number) => void,
    layoutId?: string;
    className?: string
}

const Switch: FC<HeaderProps> = ({ tab, onCLick, activeTabId, layoutId, className }) => {
    return <button
        key={tab.id}
        onClick={() => onCLick(tab.id)}
        className={`${activeTabId === tab.id ? "text-white" : "text-primary-text/50 hover:text-primary-text/70"
            }  rounded-full text-center relative py-3 px-5 text-sm transition place-self-center ${className}`}
        style={{
            WebkitTapHighlightColor: "transparent",
        }}
    >
        {activeTabId === tab.id && (
            <motion.span
                layoutId={layoutId ?? "bubble"}
                className="absolute inset-0 z-10 bg-primary mix-blend-lighten border-2 border-white/10"
                style={{ borderRadius: '9999px' }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
            />
        )}
        <span>
            {tab.label}
        </span>
    </button>
}



export default Switch