import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, ZoomIn } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

const photos = [
  { url: `${BASE_URL}gallery/IMG-20250228-WA0047.jpg`, title: 'Moment 1' },
  { url: `${BASE_URL}gallery/IMG-20250228-WA0075.jpg`, title: 'Moment 2' },
  { url: `${BASE_URL}gallery/Photo%20from%20Surya%20K%20S%20(1)%20(1).jpg`, title: 'Moment 3' },
  { url: `${BASE_URL}gallery/WhatsApp%20Image%202026-02-25%20at%2018.53.01.jpeg`, title: 'Moment 4' },
  { url: `${BASE_URL}gallery/WhatsApp%20Image%202026-02-25%20at%2018.53.02.jpeg`, title: 'Moment 5' },
  { url: `${BASE_URL}gallery/WhatsApp%20Image%202026-02-25%20at%2018.53.03.jpeg`, title: 'Moment 6' },
  { url: `${BASE_URL}gallery/WhatsApp%20Image%202026-02-25%20at%2018.53.04%20(1).jpeg`, title: 'Moment 7' },
  { url: `${BASE_URL}gallery/WhatsApp%20Image%202026-02-25%20at%2018.53.04.jpeg`, title: 'Moment 8' }
];

const PhotoItem = memo(({ photo, index, onClick }: { photo: typeof photos[0]; index: number; onClick: () => void }) => (
  <motion.div
    className="relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg"
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.08, y: -8, transition: { duration: 0.3 } }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    onClick={onClick}
  >
    {/* Dynamic Glow Effect */}
    <motion.div
      className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-60 blur-xl -z-20 pointer-events-none"
      animate={{
        opacity: [0, 0.4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Gradient Border Effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-pink-500/30 to-blue-500/50 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] -z-10 pointer-events-none"
      animate={{
        boxShadow: [
          '0 0 20px rgba(168, 85, 247, 0.3)',
          '0 0 40px rgba(236, 72, 153, 0.5)',
          '0 0 20px rgba(59, 130, 246, 0.3)',
          '0 0 20px rgba(168, 85, 247, 0.3)',
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-[2px] bg-black rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl"></div>
    </motion.div>

    {/* Glow background on hover */}
    <motion.div
      className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-40 blur-xl -z-20 pointer-events-none"
      transition={{ duration: 0.3 }}
    />

    {/* Dark overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

    <ImageWithFallback
      src={photo.url}
      alt={photo.title}
      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 bg-black/40"
    />

    {/* Zoom Icon */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
      initial={{ scale: 0.5 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-md rounded-full p-3 sm:p-4 md:p-5 shadow-2xl"
        whileHover={{ scale: 1.15 }}
      >
        <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
      </motion.div>
    </motion.div>

    {/* Title bar at bottom */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 sm:p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20"
      transition={{ duration: 0.2 }}
    >
      <p className="text-white font-bold text-xs sm:text-sm md:text-base tracking-wide">{photo.title}</p>
    </motion.div>

    {/* Corner accent */}
    <div className="absolute top-2 right-2 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-r-2 border-pink-500 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
    <div className="absolute bottom-2 left-2 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-l-2 border-purple-500 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
  </motion.div>
));

PhotoItem.displayName = 'PhotoItem';

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-0 overflow-hidden">
      {/* Animated bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      {/* Decorative orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-pink-500"></div>
            <p className="text-pink-400 text-xs sm:text-sm uppercase tracking-widest font-semibold">Gallery</p>
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-pink-500"></div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent font-bold">
            My Cutie Pie
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-purple-300 font-light tracking-wide">
            Capturing my Kutty's Cute moments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] sm:auto-rows-[320px] md:auto-rows-[350px] lg:auto-rows-[350px] gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {photos.map((photo, index) => (
            <PhotoItem key={index} photo={photo} index={index} onClick={() => setSelectedPhoto(index)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Decorative corners */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-purple-500 pointer-events-none"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-pink-500 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-blue-500 pointer-events-none"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-purple-500 pointer-events-none"></div>

            <motion.button
              className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-500 backdrop-blur-md rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 z-10 group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:rotate-180 transition-transform" />
            </motion.button>

            <motion.div
              className="w-full h-full flex items-center justify-center rounded-3xl overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative w-auto h-auto max-w-[90vw] max-h-[85vh] bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-2 sm:p-4 rounded-3xl border border-white/20 shadow-2xl"
                whileHover={{ boxShadow: "0 0 50px rgba(236, 72, 153, 0.4)" }}
              >
                <ImageWithFallback
                  src={photos[selectedPhoto].url}
                  alt={photos[selectedPhoto].title}
                  className="w-full h-full object-contain rounded-2xl"
                />
                
                {/* Image counter */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-purple-300 text-sm font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedPhoto + 1} of {photos.length}
                </motion.div>

                {/* Title */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {photos[selectedPhoto].title}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}