"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SiReact, SiRubyonrails, SiSupabase, SiTailwindcss, SiAmazon, SiTypescript } from "react-icons/si"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-blue-lilac">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl font-bold mb-4"
          >
            Ana Gomes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-6 text-white/90"
          >
            Full-Stack Engineer | Ruby on Rails · React · AI Systems
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/80 leading-relaxed"
          >
            Building scalable, AI-integrated web platforms that combine performance, design, and real-world impact.
            <br />
            Based in Brazil · Available for remote work 🌎
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-white text-purple-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all"
            >
              View My Work →
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm shadow-lg"
            >
              {"Let's Build Together 🚀"}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-6 justify-center items-center"
          >
            <SiReact className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
            <SiRubyonrails className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
            <SiSupabase className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
            <SiTailwindcss className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
            <SiAmazon className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
            <SiTypescript className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}