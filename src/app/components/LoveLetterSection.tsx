import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Heart, Sparkles } from 'lucide-react';

const loveLetters = [
  {
    title: 'To My Sunshine',
    message: 'Every day with you feels like a beautiful dream. Your smile lights up my world, and your laughter is the sweetest melody. I am so grateful for every moment we share together. You make everything better just by being you.',
    signature: 'Forever yours'
  },
  {
    title: 'My Dearest Love',
    message: 'Thank you for being my best friend, my partner, and my everything. Your kindness, your strength, and your beautiful heart inspire me every single day. I promise to cherish you, support you, and love you endlessly.',
    signature: 'With all my heart'
  },
  {
    title: 'To the Love of My Life',
    message: 'You are the reason I believe in magic. Every moment with you is a precious gift. Your presence makes the ordinary extraordinary. I look forward to creating a lifetime of beautiful memories with you.',
    signature: 'Eternally devoted'
  }
];

export function LoveLetterSection() {
  const [openedLetter, setOpenedLetter] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/20 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <Mail className="w-16 h-16 mx-auto mb-6 text-pink-400" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 bg-clip-text text-transparent">
            Love Letters
          </h2>
          <p className="text-purple-300 text-lg">Words from my heart to yours</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {loveLetters.map((letter, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <AnimatePresence mode="wait">
                {openedLetter !== index ? (
                  <motion.div
                    key="envelope"
                    className="cursor-pointer"
                    onClick={() => setOpenedLetter(index)}
                    whileHover={{ y: -10 }}
                    exit={{ rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-pink-500/30 aspect-[3/4] flex flex-col items-center justify-center">
                      <div>
                        <Heart className="w-16 h-16 text-pink-400 mb-4" fill="currentColor" />
                      </div>
                      <h3 className="text-white text-xl mb-2 text-center">{letter.title}</h3>
                      <p className="text-pink-300 text-sm text-center">Click to open</p>
                      
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-b-2xl opacity-70" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="letter"
                    className="cursor-pointer"
                    onClick={() => setOpenedLetter(null)}
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-300 aspect-[3/4] shadow-2xl">
                      <Sparkles className="w-6 h-6 text-amber-600 mb-4" />
                      <h3 className="text-2xl mb-6 text-gray-800 font-serif">{letter.title}</h3>
                      <p className="text-gray-700 leading-relaxed font-serif mb-6 text-sm">
                        {letter.message}
                      </p>
                      <p className="text-gray-600 italic font-serif text-sm">{letter.signature}</p>
                      
                      <div className="absolute top-4 right-4">
                        <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
                      </div>

                      <p className="absolute bottom-4 right-8 text-xs text-gray-400">Tap to close</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
