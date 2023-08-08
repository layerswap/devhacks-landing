import { cn } from "@/lib/utils";
import { Variants, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const FadeCard = ({ variants, className, children, ...props }: { variants?: Variants, className?: string, children: JSX.Element | JSX.Element[] }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div {...props}
            variants={variants}
            className={cn(className ?? "max-w-md rounded-3xl border border-white/10 bg-darkblue-800 px-8 py-8 shadow-2xl", 'group relative')}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                    radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(14, 165, 233, 0.15),
                    transparent 80%
                    )
                `,
                }}
            />
            {children}
        </motion.div>
    )
}

export default FadeCard