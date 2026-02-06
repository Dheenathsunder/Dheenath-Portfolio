'use client'

import React, { useEffect, useRef } from 'react'

export function AnimatedBorder({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId: number
    let time = 0

    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']

    const drawWaves = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const waveHeight = 35
      const waveLength = 220
      const numWaves = 3

      for (let w = 0; w < numWaves; w++) {
        const yOffset = 100 + w * 120
        const colorIndex = w % colors.length
        const color = colors[colorIndex]

        // Create gradient path for entire width and height
        const gradient = ctx.createLinearGradient(0, yOffset - 80, 0, yOffset + 80)
        gradient.addColorStop(0, `${color}00`)
        gradient.addColorStop(0.3, color)
        gradient.addColorStop(0.7, color)
        gradient.addColorStop(1, `${color}00`)

        // Draw only outer blurry gradient layer
        ctx.strokeStyle = gradient
        ctx.lineWidth = 33
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.globalAlpha = 0.05

        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 8) {
          const y =
            yOffset +
            Math.sin((x + time) / waveLength) * waveHeight +
            Math.cos((x + time * 0.7) / (waveLength * 1.3)) * (waveHeight * 0.6)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      ctx.globalAlpha = 1

      time += 4.5
      animationFrameId = requestAnimationFrame(drawWaves)
    }

    drawWaves()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Canvas for animated waves */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content container */}
      <div className="relative w-full h-full flex items-center justify-center px-4">
        {children}
      </div>
    </div>
  )
}
