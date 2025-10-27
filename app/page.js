"use client"

import AnimatedBackground from "@/components/ui/animated-background"
import Navigation from "@/components/sections/Navigation"
import Hero from "@/components/sections/Hero"
import Separator from "@/components/ui/separator"
import About from "@/components/sections/about"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Education from "@/components/sections/Education"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/ui/Footer"
import { LanguageProvider } from "@/contexts/LanguageContext"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="font-sans relative min-h-screen overflow-hidden">
        <AnimatedBackground />

        <Navigation />

      <Hero />

      <Separator />
      <div className="relative bg-primary-foreground">
        <About />
      </div>

      <Separator />
      <div className="relative">
        <Projects />
      </div>

      <Separator />
      <div className="relative">
        <Skills />
      </div>

      <Separator />
      <div className="relative">
        <Experience />
      </div>
      <Separator />
      <div className="relative">
        <Education />
      </div>
      <Separator />
      <div className="relative">
        <Contact />
      </div>

      <div className="relative">
        <Footer />
      </div>
      </div>
    </LanguageProvider>
  );
}
