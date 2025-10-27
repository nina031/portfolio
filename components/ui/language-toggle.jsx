"use client"

import { motion } from "framer-motion"

export default function LanguageToggle({ isEnglish, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-1 py-1 transition-all duration-300 hover:bg-white/15"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex">
        <motion.span
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${!isEnglish ? 'bg-gradient-to-r from-purple-500 to-orange-400 text-white shadow-lg' : 'text-white/70 hover:text-white'}`}
          animate={{ scale: !isEnglish ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          FR
        </motion.span>
        <motion.span
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${isEnglish ? 'bg-gradient-to-r from-purple-500 to-orange-400 text-white shadow-lg' : 'text-white/70 hover:text-white'}`}
          animate={{ scale: isEnglish ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          EN
        </motion.span>
      </div>
    </motion.button>
  )
}
