'use client'

import { useState } from 'react'
import { AnimatedBorder } from '@/components/animated-border'
import { NavHeader } from '@/components/nav-header'
import { HeroSection } from '@/components/hero-section'
import { ProjectsModal } from '@/components/projects-modal'
import { BlogsModal } from '@/components/blogs-modal'

export default function Home() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isBlogsOpen, setIsBlogsOpen] = useState(false)

  return (
    <AnimatedBorder>
      <NavHeader
        onProjectsClick={() => setIsProjectsOpen(true)}
        onBlogsClick={() => setIsBlogsOpen(true)}
      />
      <HeroSection />
      <ProjectsModal
        isOpen={isProjectsOpen}
        onClose={() => setIsProjectsOpen(false)}
      />
      <BlogsModal
        isOpen={isBlogsOpen}
        onClose={() => setIsBlogsOpen(false)}
      />
    </AnimatedBorder>
  )
}
