import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Star, Sparkles, PartyPopper, Cake, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export function SurpriseReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  const romanticTexts = [
    'Kissing you',
    'Love you deeply',
    'Forever yours',
    'My precious',
    'You\'re my world',
    'Endless love',
    'My heartbeat',
    'Perfect moment',
    'Soul mate',
    'Always together',
    'Dream come true',
    'My everything'
  ];

  const handleReveal = () => {
    setIsRevealed(true);
    
    // Confetti explosion
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#a855f7', '#ec4899', '#3b82f6', '#8b5cf6', '#f472b6']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#a855f7', '#ec4899', '#3b82f6', '#8b5cf6', '#f472b6']
      });
    }, 250);
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/40 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="surprise"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Gift className="w-32 h-32 mx-auto mb-8 text-purple-400" />
              </motion.div>

              <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
                One More Thing...
              </h2>
              <p className="text-purple-300 text-xl mb-12">I have a special surprise for you!</p>

              <motion.button
                className="relative px-12 py-6 rounded-full text-white text-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReveal}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Click to Reveal
                  <Sparkles className="w-6 h-6" />
                </span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                className="mb-8"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2.5,
                }}
              >
                <Cake className="w-32 h-32 mx-auto text-pink-400" />
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Happy Birthday!
              </motion.h2>

              <motion.div
                className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-12 border border-white/10 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <PartyPopper className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
                <p className="text-2xl text-white mb-6 leading-relaxed">
                  You are the most amazing person I've ever met. Your birthday is just the beginning of another wonderful year filled with love, laughter, and endless adventures together.
                </p>
                <p className="text-xl text-purple-300 mb-4">
                  Thank you for being YOU. For your kindness, your love, and for making every day brighter.
                </p>
                <div
                  className="flex items-center justify-center gap-2 text-pink-400 text-lg"
                >
                  <Star className="w-5 h-5" fill="currentColor" />
                  <span>I love you more than words can say</span>
                  <Star className="w-5 h-5" fill="currentColor" />
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-4 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {romanticTexts.map((text, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-colors"
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.8 + i * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-3xl sm:text-4xl">{i % 2 === 0 ? '💋' : '😘'}</span>
                    <p className="text-xs text-pink-300 text-center leading-tight font-semibold">{text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}