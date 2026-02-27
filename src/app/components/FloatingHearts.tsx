import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-10%',
          }}
          animate={{
            y: [0, -1200],
            x: [0, Math.random() * 80 - 40],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        >
          <Heart 
            className="text-pink-500/30" 
            size={10 + Math.random() * 15}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}
