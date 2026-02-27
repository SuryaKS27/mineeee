import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Star, Sparkles, Coffee, Plane } from 'lucide-react';

const timelineEvents = [
  {
    date: 'January 2023',
    title: 'First Meeting',
    description: 'The day our story began. I knew you were special from the very first moment.',
    image: '/first-meeting.jpg',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    date: 'March 2023',
    title: 'First Date',
    description: 'Dinner under the stars. Your smile made everything perfect.',
    image: '/first-date.jpg',
    icon: Star,
    color: 'from-purple-500 to-pink-500'
  },
  {
    date: 'June 2023',
    title: 'Beach Adventure',
    description: 'Sunset walks and endless conversations. Every moment was magical.',
    image: '/beach-adventure.jpg',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    date: 'September 2023',
    title: 'Coffee Mornings',
    description: 'Lazy Sunday mornings, warm coffee, and your beautiful laugh.',
    image: '/coffee-mornings.jpg',
    icon: Coffee,
    color: 'from-amber-500 to-orange-500'
  },
  {
    date: 'December 2023',
    title: 'Travel Dreams',
    description: 'Exploring new places together. Every adventure is better with you.',
    image: '/travel-dreams.jpeg',
    icon: Plane,
    color: 'from-indigo-500 to-purple-500'
  }
];

export function TimelineSection() {
  return (
    <section id="timeline-section" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/20 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-purple-300 text-lg">Moments that made us who we are</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r ${event.color} rounded-full`}>
                    <event.icon className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">{event.date}</span>
                  </div>
                  <h3 className="text-2xl text-white mb-3">{event.title}</h3>
                  <p className="text-purple-300">{event.description}</p>
                </motion.div>
              </div>

              {/* Center icon */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-2xl hidden md:flex z-10"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <event.icon className="w-8 h-8 text-white" />
              </motion.div>

              <div className="md:w-5/12 mt-6 md:mt-0">
                <motion.div
                  className="relative group overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Dynamic Glow Background */}
                  <motion.div
                    className={`absolute -inset-3 bg-gradient-to-r ${event.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-2xl -z-20 pointer-events-none`}
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Animated border glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-40 blur-lg group-hover:opacity-80 transition-opacity rounded-2xl`}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${event.color.includes('pink') ? 'rgba(236, 72, 153, 0.3)' : event.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                        `0 0 40px ${event.color.includes('pink') ? 'rgba(236, 72, 153, 0.6)' : event.color.includes('purple') ? 'rgba(168, 85, 247, 0.6)' : 'rgba(59, 130, 246, 0.6)'}`,
                        `0 0 20px ${event.color.includes('pink') ? 'rgba(236, 72, 153, 0.3)' : event.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white/20 group-hover:border-white/40 transition-colors shadow-2xl">
                    <motion.div
                      animate={{
                        boxShadow: [
                          `inset 0 0 30px ${event.color.includes('pink') ? 'rgba(236, 72, 153, 0.2)' : event.color.includes('purple') ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
                          `inset 0 0 50px ${event.color.includes('pink') ? 'rgba(236, 72, 153, 0.4)' : event.color.includes('purple') ? 'rgba(168, 85, 247, 0.4)' : 'rgba(59, 130, 246, 0.4)'}`,
                          `inset 0 0 30px ${event.color.includes('pink') ? 'rgba(236, 72, 153, 0.2)' : event.color.includes('purple') ? 'rgba(168, 85, 247, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
