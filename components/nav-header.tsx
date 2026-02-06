'use client'

import React, { useState } from 'react'

interface NavHeaderProps {
  onProjectsClick: () => void
  onBlogsClick: () => void
}

export function NavHeader({ onProjectsClick, onBlogsClick }: NavHeaderProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4">
      {/* Left side - Links */}
      <div className="flex gap-8">
        <button
          onClick={onProjectsClick}
          onMouseEnter={() => setHoveredLink('projects')}
          onMouseLeave={() => setHoveredLink(null)}
          className="relative text-white font-light text-sm transition-all duration-300"
        >
          {/* Glowing aura background */}
          {hoveredLink === 'projects' && (
            <div className="absolute -inset-2 bg-google-blue/15 rounded-lg blur-md animate-pulse" />
          )}
          <span className="relative">Projects</span>
        </button>

        <button
          onClick={onBlogsClick}
          onMouseEnter={() => setHoveredLink('blogs')}
          onMouseLeave={() => setHoveredLink(null)}
          className="relative text-white font-light text-sm transition-all duration-300"
        >
          {/* Glowing aura background */}
          {hoveredLink === 'blogs' && (
            <div className="absolute -inset-2 bg-google-red/15 rounded-lg blur-md animate-pulse" />
          )}
          <span className="relative">Blogs</span>
        </button>
      </div>

      {/* Right side - Social icons with animated rings */}
      <div className="flex gap-3">
        {/* Gmail icon */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dheenathsundararajan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-7 h-7 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 active:scale-95"
          title="Email"
        >
          <div className="absolute inset-0 rounded-full border border-google-blue/30 animate-spin" style={{ animationDuration: '4s' }} />
          <svg
            className="w-4 h-4 relative z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>

        {/* GitHub icon */}
        <a
          href="https://github.com/Dheenathsunder"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-7 h-7 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 active:scale-95"
          title="GitHub"
        >
          <div className="absolute inset-0 rounded-full border border-google-red/30 animate-spin" style={{ animationDuration: '6s' }} />
          <svg
            className="w-4 h-4 relative z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn icon */}
        <a
          href="https://www.linkedin.com/in/dheenath-sundararajan-33a591265/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-7 h-7 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 active:scale-95"
          title="LinkedIn"
        >
          <div className="absolute inset-0 rounded-full border border-google-green/30 animate-spin" style={{ animationDuration: '5s' }} />
          <svg
            className="w-4 h-4 relative z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
