'use client'

import React from 'react'

interface ProjectsModalProps {
  isOpen: boolean
  onClose: () => void
}

const projects = [
  {
    title: 'Intel Unnati Industrial Training',
    subtitle: 'GenAI Model Finetuning',
    description:
      'Advanced fine-tuning techniques using LoRA and bfloat16 precision with Hugging Face transformers, optimizing LLMs for production inference.',
    tech: ['LoRA', 'bfloat16', 'Hugging Face', 'PyTorch'],
    color: 'from-google-blue to-blue-600',
  },
  {
    title: 'MCP-Integrated Customer Support Agents',
    subtitle: 'Production LLM Systems',
    description:
      'Built sophisticated customer support agents using LangChain, FastAPI, and Model Context Protocol for structured tool invocation and reliable escalations.',
    tech: ['LangChain', 'FastAPI', 'MCP', 'LLMs'],
    color: 'from-google-red to-red-600',
  },
  {
    title: 'AI Sales Bot',
    subtitle: 'RAG Pipeline with DeepSeek',
    description:
      'Production-grade RAG pipeline leveraging DeepSeek models and Ollama for local inference, deployed with FastAPI for low-latency sales automation.',
    tech: ['DeepSeek', 'Ollama', 'FastAPI', 'Vector DB'],
    color: 'from-google-yellow to-yellow-600',
  },
  {
    title: 'SafeSpeak',
    subtitle: 'Real-time Toxicity Detection',
    description:
      'Low-latency toxicity detection system built with Mixtral-based models, enabling real-time content moderation for production applications.',
    tech: ['Mixtral', 'Real-time', 'Safety', 'Deployment'],
    color: 'from-google-green to-green-600',
  },
]

export function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
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
        <div className="w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light text-white">Featured Projects</h2>
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

          {/* Professional Experience Section */}
          <div className="mb-10 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <h3 className="text-lg font-light text-white mb-2">
              Current Role
            </h3>
            <p className="text-gray-300 mb-2">
              <span className="font-light">Agentic AI Engineer at R Systems</span>
            </p>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Building production-grade agentic systems with YOLO computer vision integration and RAG-based recruitment assistants. Focus on reliability, scalability, and optimal performance in enterprise environments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/8 backdrop-blur-sm"
              >
                {/* Project color accent */}
                <div
                  className={`absolute -top-1 -left-1 w-1 h-12 bg-gradient-to-b ${project.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Title */}
                <h4 className="text-base font-light text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-xs text-blue-400 mb-3 font-light">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-400 text-xs mb-4 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white/10 text-gray-300 px-2.5 py-1 rounded-full border border-white/10 hover:border-white/20 transition-colors duration-300 font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
