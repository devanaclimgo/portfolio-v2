import Hero from "@/components/Hero"
import { ThemeToggle } from "@/components/ThemeToggle"
import TechStack from "@/components/TechStack"

export default function Home() {
  return (
    <main className="relative">
      <ThemeToggle />
      <Hero />
      <TechStack />
    </main>
  )
}
