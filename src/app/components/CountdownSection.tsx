import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, Star, Sparkles } from 'lucide-react';

export function CountdownSection() {
  const [stats, setStats] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate time since you met (example: Jan 1, 2023)
    const startDate = new Date('2023-01-01').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;

      setStats({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const counters = [
    { icon: Calendar, label: 'Days Together', value: stats.days, color: 'from-purple-500 to-pink-500' },
    { icon: Heart, label: 'Hours of Love', value: stats.hours, color: 'from-pink-500 to-rose-500' },
    { icon: Star, label: 'Minutes of Joy', value: stats.minutes, color: 'from-blue-500 to-purple-500' },
    { icon: Sparkles, label: 'Seconds of Magic', value: stats.seconds, color: 'from-cyan-500 to-blue-500' }
  ];

  return (
    <section id="journey-section" className="relative py-20 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
            Our Journey Together
          </h2>
          <p className="text-purple-300 text-lg">Every moment with you is precious</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${counter.color} rounded-2xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
              
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div
                  className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${counter.color} bg-clip-text text-transparent`}
                >
                  <counter.icon strokeWidth={1.5} className="w-12 h-12" />
                </div>
                
                <motion.div
                  className="text-5xl font-bold text-white mb-2 tabular-nums"
                  key={counter.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {counter.value.toString().padStart(2, '0')}
                </motion.div>
                
                <p className="text-purple-300 text-sm">{counter.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
