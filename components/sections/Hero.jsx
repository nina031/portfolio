"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Hero() {
  const { translations } = useLanguage()
  return (
    <div className="relative z-10 min-h-screen bg-black/30">
      <main className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:ml-[10%] lg:px-8 py-20 sm:py-24 md:py-20">
        <motion.div
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight md:whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {translations.hero.greeting} <span className="bg-gradient-to-r from-purple-500 to-orange-400/70 bg-clip-text text-transparent">{translations.hero.name}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {translations.hero.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {translations.hero.description}
          </motion.p>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-purple-500/60 to-orange-400/60 hover:from-purple-600/70 hover:to-orange-500/70 backdrop-blur-sm text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg text-sm sm:text-base w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.hero.contactButton}
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-purple-400/30 hover:border-purple-400/60 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:bg-purple-400/10 backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.hero.projectsButton}
            </motion.a>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
