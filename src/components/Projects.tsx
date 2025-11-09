"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "🧠 Content Path",
    description:
      "Canvas-based SaaS for AI content creation. Reduced API calls by 95% and token usage by 80% with cost optimization and caching.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind", "OpenAI/Claude/Gemini", "Zustand"],
    image: "/ai-content-creation-canvas-interface-dashboard.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "📚 Trilha Clara",
    description:
      "Academic writing assistant that automates ABNT formatting. Validated MVP through user interviews before development.",
    stack: ["Next.js", "OpenAI API", "Supabase", "Tailwind"],
    image: "/academic-writing-assistant-interface-clean-design.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "💰 Cofrinho",
    description:
      "Financial planner built with Ruby on Rails, Next.js, and Supabase. Authentication, dashboards, and goal tracking with PostgreSQL backend.",
    stack: ["Ruby on Rails", "Next.js", "Supabase", "PostgreSQL"],
    image: "/financial-planning-dashboard-modern-interface.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-linear-to-br from-blue-900 via-purple-900 to-pink-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                className={`overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl hover:bg-white/15 transition-all ${
                  index % 2 === 0 ? "lg:grid lg:grid-cols-2" : "lg:grid lg:grid-cols-2"
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">{project.name}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}