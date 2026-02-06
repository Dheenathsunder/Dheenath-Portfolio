import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dheenath Sundararajan | AI Engineer & Data Scientist',
  description: 'Portfolio of Dheenath Sundararajan - Data Scientist, AI Engineer, and Agentic Systems specialist. Building production-grade AI systems with LLMs, RAG, and computer vision.',
  generator: 'v0.app',
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-black">{children}</body>
    </html>
  )
}
