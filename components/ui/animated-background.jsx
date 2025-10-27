export default function AnimatedBackground() {
  return (
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
  )
}
