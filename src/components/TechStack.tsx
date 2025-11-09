"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Server, Cloud, Sparkles, CheckCircle } from "lucide-react"

const techStack = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Ruby on Rails", "Node.js", "Supabase (Edge Functions)", "PostgreSQL"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    items: ["Docker", "AWS", "GitHub Actions", "CI/CD"],
  },
  {
    icon: Sparkles,
    title: "AI & Integrations",
    items: ["OpenAI", "Claude", "Gemini", "Whisper", "Apify"],
  },
  {
    icon: CheckCircle,
    title: "Practices",
    items: ["RESTful APIs", "GraphQL", "Clean Architecture", "Automated Testing"],
  },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Core Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-2xl">
                <tech.icon className="w-10 h-10 mb-4 text-purple-600 dark:text-purple-400" />
                <h3 className="font-heading text-xl font-bold mb-3">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}