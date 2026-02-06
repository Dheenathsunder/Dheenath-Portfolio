'use client'

import { useState } from 'react'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { NavHeader } from '@/components/nav-header'
import { ProjectsModal } from '@/components/projects-modal'
import { BlogsModal } from '@/components/blogs-modal'

export default function Home() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isBlogsOpen, setIsBlogsOpen] = useState(false)

  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full z-50">
        <NavHeader
          onProjectsClick={() => setIsProjectsOpen(true)}
          onBlogsClick={() => setIsBlogsOpen(true)}
        />
      </div>

      <BackgroundPaths title="Dheenath Sundararajan" />

      <ProjectsModal
        isOpen={isProjectsOpen}
        onClose={() => setIsProjectsOpen(false)}
      />
      <BlogsModal
        isOpen={isBlogsOpen}
        onClose={() => setIsBlogsOpen(false)}
      />
    </main>
  )
}
