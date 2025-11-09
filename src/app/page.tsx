import Hero from "@/components/Hero"
import { ThemeToggle } from "@/components/ThemeToggle"
import TechStack from "@/components/TechStack"
import About from "@/components/About"
import { Projects } from "@/components/Projects"
import { Experience } from "@/components/Experience"

export default function Home() {
  return (
    <main className="relative">
      <ThemeToggle />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Experience />
    </main>
  )
}
