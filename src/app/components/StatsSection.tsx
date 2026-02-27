import { motion } from 'motion/react';
import { Heart, MessageCircle, Camera, MapPin, Coffee, Smile } from 'lucide-react';

const stats = [
  { icon: Heart, value: '∞', label: 'Love Given', color: 'from-pink-500 to-rose-500' },
  { icon: MessageCircle, value: '10K+', label: 'Messages', color: 'from-purple-500 to-pink-500' },
  { icon: Camera, value: '500+', label: 'Photos Together', color: 'from-blue-500 to-cyan-500' },
  { icon: MapPin, value: '25+', label: 'Places Visited', color: 'from-green-500 to-emerald-500' },
  { icon: Coffee, value: '100+', label: 'Coffee Dates', color: 'from-amber-500 to-orange-500' },
  { icon: Smile, value: 'Every Day', label: 'Smiles Shared', color: 'from-yellow-500 to-amber-500' }
];

export function StatsSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
            Our Numbers
          </h2>
          <p className="text-purple-300 text-lg">Stats that tell our story</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}
              />

              <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-white/10 to-white/5"
                >
                  <stat.icon className={`w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                </div>

                <motion.div
                  className={`text-4xl md:text-5xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.div>

                <p className="text-purple-300 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
