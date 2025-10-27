"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import LanguageToggle from "@/components/ui/language-toggle"
import { useLanguage } from "@/contexts/LanguageContext"

const navLinkClasses = "text-white hover:text-white focus:text-white transition-all duration-300 font-medium bg-transparent hover:bg-purple-400/10 focus:bg-purple-400/10 border-2 border-transparent hover:border-purple-400/60 focus:border-purple-400/60 px-4 py-2 rounded-full"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { translations, isEnglish, toggleLanguage } = useLanguage()

  const navItems = [
    { href: "#about", label: translations.nav.about },
    { href: "#projects", label: translations.nav.projects },
    { href: "#skills", label: translations.nav.skills },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-20">
      {/* Desktop Navigation */}
      <motion.div
        className="hidden md:flex justify-center items-center p-6 md:p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute left-6 md:left-8 text-white text-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-caveat text-2xl font-semibold">Nina Messaoudi</span>
        </motion.div>
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavigationMenuLink href={item.href} className={navLinkClasses}>
                    {item.label}
                  </NavigationMenuLink>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <motion.div
          className="absolute right-6 md:right-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <LanguageToggle isEnglish={isEnglish} onToggle={toggleLanguage} />
        </motion.div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center p-4">
          <motion.div
            className="text-white text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-caveat text-xl font-semibold">Nina Messaoudi</span>
          </motion.div>
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {isMobileMenuOpen && (
            <motion.div
              className="bg-black/90 backdrop-blur-md border-t border-white/10"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`block ${navLinkClasses}`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="w-full mt-4 flex justify-center">
                  <LanguageToggle isEnglish={isEnglish} onToggle={toggleLanguage} />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </nav>
  )
}
