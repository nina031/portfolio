"use client"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Home() {
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
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #8b5cf6 0%, #a855f7 50%, transparent 70%)',
              top: '10%',
              left: '10%',
              animation: 'float1 8s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #3b82f6 0%, #6366f1 50%, transparent 70%)',
              top: '60%',
              right: '15%',
              animation: 'float2 10s ease-in-out infinite reverse'
            }}
          />
          <div 
            className="absolute w-72 h-72 rounded-full opacity-10 blur-2xl"
            style={{
              background: 'radial-gradient(circle, #ec4899 0%, #f97316 50%, transparent 70%)',
              bottom: '20%',
              left: '20%',
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
            25% { transform: translate(120px, -80px) scale(1.5); }
            50% { transform: translate(-100px, 60px) scale(0.5); }
            75% { transform: translate(150px, 100px) scale(1.8); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
            20% { transform: translate(-120px, -60px) scale(1.6) rotate(72deg); }
            40% { transform: translate(80px, -120px) scale(0.4) rotate(144deg); }
            60% { transform: translate(140px, 80px) scale(1.4) rotate(216deg); }
            80% { transform: translate(-80px, 120px) scale(0.7) rotate(288deg); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            20% { transform: translate(100px, -50px) scale(1.7); }
            40% { transform: translate(-120px, -100px) scale(0.6); }
            60% { transform: translate(80px, 120px) scale(1.3); }
            80% { transform: translate(-60px, 80px) scale(0.9); }
          }
          
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </div>
      
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center items-center p-6 md:p-8">
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

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-black/30">
        <main className="flex flex-col justify-center min-h-screen max-w-4xl ml-[10%] px-8 py-20">
          <div className="space-y-8">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-nowrap">
              Bonjour, je suis <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400/70 bg-clip-text text-transparent">Nina Messaoudi</span>
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200">
              Data Scientist & Machine Learning Engineer
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Transforming complex data into actionable insights using advanced analytics, 
              machine learning, and AI to drive business innovation and strategic decision-making.
            </p>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-orange-400/60 hover:from-blue-600/70 hover:via-purple-600/70 hover:to-orange-500/70 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Me contacter
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                Voir mes projets
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
