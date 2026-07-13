"use client"

import { useMemo, memo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FlipFadeTextProps {
    text: string
    className?: string
    textClassName?: string
    letterDuration?: number
    staggerDelay?: number
}

// Memoized Letter component for performance
const Letter = memo(function Letter({
    char,
    letterDuration
}: {
    char: string
    letterDuration: number
}) {
    return (
        <motion.span
            style={{ transformStyle: "preserve-3d" }}
            variants={{
                initial: {
                    rotateX: 90,
                    y: 20,
                    opacity: 0,
                    filter: "blur(8px)",
                },
                animate: {
                    rotateX: 0,
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                        duration: letterDuration,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    },
                },
            }}
            className="inline-block"
        >
            {char}
        </motion.span>
    )
})

export function FlipFadeText({
    text,
    className,
    textClassName,
    letterDuration = 0.6,
    staggerDelay = 0.03, // Faster stagger for sentences
}: FlipFadeTextProps) {
    // Split by words to allow wrapping, preserving spaces by rendering gaps between spans
    const words = useMemo(() => text.split(" "), [text])

    return (
        <div className={cn("flex justify-center w-full", className)} style={{ perspective: "1000px" }}>
            <motion.h1
                className={cn(
                    "flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em]",
                    textClassName
                )}
                initial="initial"
                animate="animate"
                variants={{
                    initial: { opacity: 1 },
                    animate: {
                        opacity: 1,
                        transition: {
                            staggerChildren: staggerDelay,
                        },
                    },
                }}
            >
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {word.split("").map((char, charIndex) => (
                            <Letter
                                key={`${wordIndex}-${charIndex}`}
                                char={char}
                                letterDuration={letterDuration}
                            />
                        ))}
                    </span>
                ))}
            </motion.h1>
        </div>
    )
}

export default FlipFadeText
