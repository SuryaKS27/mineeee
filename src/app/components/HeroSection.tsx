import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

const photos = [
  {
    url: `${BASE_URL}IMG-20250228-WA0078.jpg`,
    alt: "Photo 1"
  },
  {
    url: `${BASE_URL}IMG-20250331-WA0005.jpg`,
    alt: "Photo 2"
  },
  {
    url: `${BASE_URL}IMG-20250331-WA0010.jpg`,
    alt: "Photo 3"
  },
  {
    url: `${BASE_URL}IMG-20250331-WA0012.jpg`,
    alt: "Photo 4"
  },
  {
    url: `${BASE_URL}WhatsApp Image 2026-02-25 at 18.43.54.jpeg`,
    alt: "Photo 5"
  }
];

export function HeroSection() {
  const handleExploreClick = () => {
    // Scroll to the journey section (Our Journey Together)
    const journeySection = document.getElementById('journey-section');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px]"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-[100px]"
          style={{ willChange: 'transform' }}
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles - reduced for performance */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform'
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating photos grid */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-7xl w-full">
          
          {/* Central content */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Happy Birthday - Large and Dynamic */}
            <motion.div
              className="mb-8 px-4"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 flex-wrap">
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-purple-400 flex-shrink-0" />
                </motion.div>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent tracking-wider" style={{ fontFamily: 'var(--font-family-stylish)' }}>
                  Happy Birthday
                </span>
                <motion.div
                  animate={{ rotate: [0, -180, -360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-purple-400 flex-shrink-0" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Main heading with dynamic effects */}
            <motion.h1
              className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 font-bold px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.1, 1],
                y: [0, -15, 0],
                rotateZ: [-2, 2, -2],
              }}
              transition={{ 
                duration: 1, 
                delay: 0.7,
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                fontSize: '14px',
                background: 'linear-gradient(90deg, #a78bfa, #ec4899, #60a5fa, #a78bfa)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 30px rgba(236, 72, 153, 0.6))',
                animation: 'gradient 6s ease infinite',
              }}
            >
              எனக்கு பிடிச்சவளே! என் நெஞ்சில் தீயை விதைச்சவளே!
            </motion.h1>
            
            <style>{`
              @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              @keyframes glow {
                0%, 100% { filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 30px rgba(236, 72, 153, 0.6)); }
                50% { filter: drop-shadow(0 0 30px rgba(168, 85, 247, 1)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.8)); }
              }
            `}</style>
            
            {/* Subtitle with floating animation */}
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 font-light"
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: 1, 
                x: 0,
                y: [0, 5, 0],
              }}
              transition={{ 
                duration: 1, 
                delay: 1,
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              }}
              style={{
                background: 'linear-gradient(90deg, #c084fc, #f472b6, #60a5fa, #c084fc)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 15px rgba(192, 132, 252, 0.6)) drop-shadow(0 0 25px rgba(244, 114, 182, 0.4))',
                animation: 'gradient 8s ease infinite',
              }}
            >
              Whispers of moments etched in starlight, each memory a constellation of joy. In the dance of time and heart, we've woven threads of laughter, love, and endless tomorrows. Forever begins with these cherished echoes.
            </motion.p>
          </motion.div>

          {/* Floating cinematic photos */}
          <div className="relative h-[600px]">
            
            {/* Photo 1 - Center large */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateZ: 0,
                y: [0, -15, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.2 },
                scale: { duration: 0.8, delay: 1.2 },
                rotateZ: { duration: 0.8, delay: 1.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
              }}
              whileHover={{ scale: 1.05, rotateZ: 2, transition: { duration: 0.3 } }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={photos[0].url}
                    alt={photos[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Photo 2 - Top left */}
            <motion.div
              className="absolute left-[5%] top-[10%] z-10 hidden md:block"
              initial={{ opacity: 0, scale: 0.5, rotateZ: 15 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateZ: -8,
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.4 },
                scale: { duration: 0.8, delay: 1.4 },
                rotateZ: { duration: 0.8, delay: 1.4 },
              }}
              whileHover={{ scale: 1.1, rotateZ: 0, zIndex: 30, transition: { duration: 0.3 } }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative w-[220px] h-[280px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <ImageWithFallback
                    src={photos[1].url}
                    alt={photos[1].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Photo 3 - Top right */}
            <motion.div
              className="absolute right-[5%] top-[15%] z-10 hidden md:block"
              initial={{ opacity: 0, scale: 0.5, rotateZ: -15 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateZ: 10,
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.6 },
                scale: { duration: 0.8, delay: 1.6 },
                rotateZ: { duration: 0.8, delay: 1.6 },
              }}
              whileHover={{ scale: 1.1, rotateZ: 0, zIndex: 30, transition: { duration: 0.3 } }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative w-[200px] h-[260px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <ImageWithFallback
                    src={photos[2].url}
                    alt={photos[2].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Photo 4 - Bottom left */}
            <motion.div
              className="absolute left-[10%] bottom-[5%] z-15 hidden lg:block"
              initial={{ opacity: 0, scale: 0.5, rotateZ: -20 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateZ: 5,
                y: [0, 12, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.8 },
                scale: { duration: 0.8, delay: 1.8 },
                rotateZ: { duration: 0.8, delay: 1.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
              }}
              whileHover={{ scale: 1.1, rotateZ: 0, zIndex: 30, transition: { duration: 0.3 } }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative w-[180px] h-[240px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <ImageWithFallback
                    src={photos[3].url}
                    alt={photos[3].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Photo 5 - Bottom right */}
            <motion.div
              className="absolute right-[8%] bottom-[8%] z-15 hidden lg:block"
              initial={{ opacity: 0, scale: 0.5, rotateZ: 18 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateZ: -6,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 2 },
                scale: { duration: 0.8, delay: 2 },
                rotateZ: { duration: 0.8, delay: 2 },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 },
              }}
              whileHover={{ scale: 1.1, rotateZ: 0, zIndex: 30, transition: { duration: 0.3 } }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative w-[190px] h-[250px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <ImageWithFallback
                    src={photos[4].url}
                    alt={photos[4].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full shadow-lg backdrop-blur-sm cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreClick}
            >
              Explore More Memories
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Grid overlay for futuristic effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 pointer-events-none"></div>
    </div>
  );
}
