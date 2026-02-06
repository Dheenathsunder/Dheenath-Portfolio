'use client'

import React from 'react'

interface BlogsModalProps {
  isOpen: boolean
  onClose: () => void
}

const blogs = [
  {
    title: 'MoR is Here: The Beginning of the End for Transformers?',
    date: 'Google DeepMind 2025',
    description:
      'Mixture-of-Recursions (MoR) introduces adaptive token-level computation with 2x faster inference, 50% lower memory usage, and stronger accuracy. A bold alternative to Transformers representing the evolution from traditional neural networks → Transformers → MoE/MoR → Adaptive AI.',
    tags: ['MoR', 'Transformers', 'Architecture', 'Efficiency'],
    color: 'from-google-red',
  },
  {
    title: 'Quick Talk, Deep Thought: The Secret Science of Faster LLMs',
    date: 'Medium Article',
    description:
      'Exploring techniques and methodologies for optimizing LLM inference speed and performance through quantization, distillation, and architectural improvements.',
    tags: ['LLM', 'Performance', 'Optimization'],
    color: 'from-google-green',
    link: 'https://medium.com/@dheenathsundararajan/quick-talk-deep-thought-the-secret-science-of-faster-llms-bca6e3c97c7b',
  },
  {
    title: 'Remember Infini-Attention? Revisiting the 2024 Paper',
    date: 'Medium Article',
    description:
      'Deep dive into Infini-Attention mechanism that gave AI infinite memory capabilities. Understanding how this 2024 breakthrough revolutionizes long-context understanding in language models.',
    tags: ['Infini-Attention', 'Memory', 'LLM', '2024'],
    color: 'from-google-yellow',
    link: 'https://medium.com/@dheenathsundararajan/remember-infini-attention-revisiting-the-2024-paper-that-gave-ai-infinite-memory-031d7051471c',
  },
  {
    title: 'The Learning Paradigm',
    date: 'Definition',
    description:
      'The process of learning has occurred in a system when providing it with a body of experience (E) leads to a measurable improvement in its performance (P) at executing a given task (T).',
    tags: ['Learning', 'Theory', 'AI Fundamentals'],
    color: 'from-google-blue',
  },
]

export function BlogsModal({ isOpen, onClose }: BlogsModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light text-white">Blog & Insights</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Introduction */}
          <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              In-depth articles and technical insights on AI, machine learning, and production systems. I share learnings from building scalable AI infrastructure and lessons learned from real-world deployments.
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="group relative bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/8 cursor-pointer backdrop-blur-sm">
                {/* Blog color accent with cycling colors */}
                <div
                  className={`absolute -top-1 -left-1 w-1 h-12 bg-gradient-to-b ${blog.color || 'from-google-blue'} ${
                    blog.color === 'from-google-red'
                      ? 'to-red-600'
                      : blog.color === 'from-google-green'
                        ? 'to-green-600'
                        : blog.color === 'from-google-yellow'
                          ? 'to-yellow-600'
                          : 'to-blue-600'
                  } rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Date indicator */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-light text-white group-hover:text-blue-300 transition-colors duration-300 flex-1">
                    {blog.title}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4 font-light">
                    {blog.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs mb-4 leading-relaxed font-light">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full border border-white/10 hover:border-white/20 transition-colors duration-300 font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {blog.link && (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block px-4 py-1.5 bg-white/20 text-white font-light text-xs rounded hover:bg-white/30 transition-colors duration-300 mt-3"
                  >
                    Read on Medium →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-sm">
            <p className="text-gray-400 text-xs mb-4 font-light">
              More content coming soon. Follow for updates on AI systems, LLMs, and production engineering.
            </p>
            <a
              href="https://github.com/Dheenathsunder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white text-black font-light text-sm rounded-lg hover:bg-gray-200 transition-colors duration-300 active:scale-95"
            >
              Follow on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
