"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code, Rocket } from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    title: "Marketing Student",
    description: "Validated first idea with user research",
  },
  {
    icon: Code,
    title: "Self-Taught Developer",
    description: "Learned React, Rails & Supabase",
  },
  {
    icon: Rocket,
    title: "Full-Stack Engineer",
    description: "Building scalable SaaS & AI platforms",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-purple-50/50 dark:bg-purple-950/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I started coding during my marketing degree, when I built a website to help students format academic
                papers automatically. Before writing a single line of code, I shared the idea with classmates and
                friends from other majors — testing if {"they'd"} use it, what {"they'd"} pay for, and what features
                would really help.
              </p>
              <p>
                That validation process taught me how to build with a user-first mindset — and {"I've"} carried that
                through every project since.
              </p>
              <p>
                Today, I specialize in full-stack development and AI integration, building scalable applications with
                React, Ruby on Rails, and Supabase. My background in marketing and design helps me create systems that
                are not only powerful — but intuitive and beautiful.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <img src="/female-developer-silhouette-coding-illustration-pu.jpg" alt="Ana Gomes - Developer" className="rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-8 h-8 mb-3 text-purple-600 dark:text-purple-400" />
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}