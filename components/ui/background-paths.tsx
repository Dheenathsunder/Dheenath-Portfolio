"use client";

import { motion } from "framer-motion";


function FloatingPaths({ position }: { position: number }) {
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
    const paths = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: colors[i % colors.length],
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={0.8}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.6, 1, 0.6],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 h-full">
                    {/* Main title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-950 dark:text-white mb-3 tracking-tight leading-tight">
                        Dheenath Sundararajan
                    </h1>

                    {/* Subtitle with roles */}
                    <h2 className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-gray-400 mb-6 font-light tracking-wide">
                        <span className="bg-gradient-to-r from-google-blue via-google-red to-google-green bg-clip-text text-transparent">
                            Data Scientist · AI Engineer · Agentic Systems
                        </span>
                    </h2>

                    {/* Bio paragraph */}
                    <p className="text-xs sm:text-sm md:text-base text-slate-950 dark:text-white leading-relaxed max-w-2xl">
                        Production-grade AI systems. LLM fine-tuning (LoRA, PEFT, RLAIF/RLVR), RAG architectures, computer vision. Agentic orchestration. Cloud-native, reliability-focused.
                    </p>
                </div>
            </div>
        </div>
    );
}
