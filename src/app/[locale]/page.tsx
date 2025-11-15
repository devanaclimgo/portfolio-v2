import Hero from "@/components/Hero"
import { LanguageToggle } from "@/components/LanguageToggle"
import TechStack from "@/components/TechStack"
import About from "@/components/About"
import { Projects } from "@/components/Projects"
import { Experience } from "@/components/Experience"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main className="relative">
      <LanguageToggle />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Experience />
      <CTA />
    </main>
  )
}

