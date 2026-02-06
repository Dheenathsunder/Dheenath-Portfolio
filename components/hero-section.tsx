'use client'

import React from 'react'

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 h-full">
      {/* Main title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-3 tracking-tight leading-tight">
        Dheenath Sundararajan
      </h1>

      {/* Subtitle with roles */}
      <h2 className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 font-light tracking-wide">
        <span className="bg-gradient-to-r from-google-blue via-google-red to-google-green bg-clip-text text-transparent">
          Data Scientist · AI Engineer · Agentic Systems
        </span>
      </h2>

      {/* Bio paragraph */}
      <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed max-w-2xl">
        Production-grade AI systems. LLM fine-tuning (LoRA, PEFT, RLAIF/RLVR), RAG architectures, computer vision. Agentic orchestration. Cloud-native, reliability-focused.
      </p>
    </div>
  )
}
