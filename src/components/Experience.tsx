"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Briefcase, Lightbulb, Heart } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    company: "Content Path",
    role: "Full Stack Engineer",
    type: "Part-time | Remote – London Area",
    description:
      "Building a SaaS content tool with AI-powered canvas UI. Integrated multi-model AI (OpenAI, Claude, Gemini) and Supabase Edge Functions.",
  },
  {
    icon: Lightbulb,
    company: "BCJ Labs",
    role: "Founder",
    type: "",
    description:
      "Building creative and scalable SaaS projects with real-world impact. Projects: Trilha Clara, Cofrinho.",
  },
  {
    icon: Heart,
    company: "Volunteer Projects",
    role: "Open Source Contributor",
    type: "",
    description: "React Native & React.js open-source contributions and mentorship.",
  },
]

export function Experience() {
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
          Experience & Collaboration
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all rounded-2xl">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">{exp.role}</p>
                    {exp.type && <p className="text-sm text-muted-foreground mb-3">{exp.type}</p>}
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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