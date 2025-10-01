"use client"

import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="font-sans relative min-h-screen overflow-hidden">
      {/* Sophisticated Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        {/* Main gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f172a 100%)',
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute inset-0">
          <div 
            className="floating-orb absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #8b5cf6 0%, #a855f7 50%, transparent 70%)',
              top: '10%',
              left: '5%',
              animation: 'float1 8s ease-in-out infinite'
            }}
          />
          <div 
            className="floating-orb absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #3b82f6 0%, #6366f1 50%, transparent 70%)',
              top: '60%',
              right: '5%',
              animation: 'float2 10s ease-in-out infinite reverse'
            }}
          />
          <div 
            className="floating-orb absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full opacity-10 blur-2xl"
            style={{
              background: 'radial-gradient(circle, #ec4899 0%, #f97316 50%, transparent 70%)',
              bottom: '20%',
              left: '10%',
              animation: 'float3 12s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Moving gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'moveGradient 15s ease infinite'
          }}
        />
        
        <style jsx>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(min(120px, 8vw), min(-80px, -5vh)) scale(1.2); }
            50% { transform: translate(min(-100px, -6vw), min(60px, 4vh)) scale(0.7); }
            75% { transform: translate(min(150px, 10vw), min(100px, 6vh)) scale(1.5); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
            20% { transform: translate(min(-120px, -8vw), min(-60px, -4vh)) scale(1.3) rotate(72deg); }
            40% { transform: translate(min(80px, 5vw), min(-120px, -8vh)) scale(0.6) rotate(144deg); }
            60% { transform: translate(min(140px, 9vw), min(80px, 5vh)) scale(1.2) rotate(216deg); }
            80% { transform: translate(min(-80px, -5vw), min(120px, 8vh)) scale(0.8) rotate(288deg); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(min(100px, 6vw), min(-50px, -3vh)) scale(1.4); }
            40% { transform: translate(min(-120px, -8vw), min(-100px, -6vh)) scale(0.7); }
            60% { transform: translate(min(80px, 5vw), min(120px, 8vh)) scale(1.1); }
            80% { transform: translate(min(-60px, -4vw), min(80px, 5vh)) scale(0.9); }
          }
          
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center p-6 md:p-8">
          <div className="absolute left-6 md:left-8 text-white font-light text-xl tracking-wide">
            <span style={{ fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif', fontWeight: '300' }}>Nina Messaoudi</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink href="#apropos" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium bg-transparent">
                  À propos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projets" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium bg-transparent">
                  Projets
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#competences" className="text-white hover:text-blue-400 transition-colors duration-300 font-medium bg-transparent">
                  Compétences
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <button className="absolute right-6 md:right-8 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-orange-400/60 hover:from-blue-600/70 hover:via-purple-600/70 hover:to-orange-500/70 backdrop-blur-sm text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Me contacter
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-between items-center p-4">
            <div className="text-white font-light text-lg tracking-wide">
              <span style={{ fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif', fontWeight: '300' }}>Nina Messaoudi</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="bg-black/90 backdrop-blur-md border-t border-white/10">
              <div className="px-4 py-6 space-y-4">
                <a href="#apropos" className="block text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2">
                  À propos
                </a>
                <a href="#projets" className="block text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2">
                  Projets
                </a>
                <a href="#competences" className="block text-white hover:text-blue-400 transition-colors duration-300 font-medium py-2">
                  Compétences
                </a>
                <button className="w-full mt-4 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-orange-400/60 hover:from-blue-600/70 hover:via-purple-600/70 hover:to-orange-500/70 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                  Me contacter
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-black/30">
        <main className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:ml-[10%] lg:px-8 py-20 sm:py-24 md:py-20">
          <div className="space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight md:whitespace-nowrap">
              Bonjour, je suis <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400/70 bg-clip-text text-transparent">Nina Messaoudi</span>
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200">
              Data Scientist & Machine Learning Engineer
            </h2>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Transforming complex data into actionable insights using advanced analytics, 
              machine learning, and AI to drive business innovation and strategic decision-making.
            </p>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
              <button className="bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-orange-400/60 hover:from-blue-600/70 hover:via-purple-600/70 hover:to-orange-500/70 backdrop-blur-sm text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto">
                Me contacter
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base w-full sm:w-auto">
                Voir mes projets
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
