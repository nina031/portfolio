import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <div className="font-sans relative min-h-screen overflow-hidden">
      {/* Animated Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        style={{
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <source src="/animated-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Navigation */}
      <div className="relative z-20 flex justify-center items-center p-6 md:p-8">
        <div className="absolute left-6 md:left-8 text-white font-semibold text-lg">
          Messaoudi Nina
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
        <button className="absolute right-6 md:right-8 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 hover:from-blue-700 hover:via-purple-700 hover:to-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Me contacter
        </button>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen bg-black/30 -mt-20">
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
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 hover:from-blue-700 hover:via-purple-700 hover:to-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
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
