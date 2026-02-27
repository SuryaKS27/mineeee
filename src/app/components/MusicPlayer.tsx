import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.7);

  // Set up audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      console.log('Audio playing');
      setIsPlaying(true);
    };

    const handlePause = () => {
      console.log('Audio paused');
      setIsPlaying(false);
    };

    const handleEnded = () => {
      console.log('Audio ended');
      setIsPlaying(false);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    // Auto-start playing on component mount
    const attemptAutoplay = () => {
      audio.muted = true;
      audio.volume = 0.7;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Autoplay started successfully');
          // Unmute after a short delay
          setTimeout(() => {
            audio.muted = false;
            setIsPlaying(true);
          }, 100);
        }).catch(err => {
          console.log('Autoplay failed, setting up click listener:', err);
          // Fall back to user interaction
          const handleUserInteraction = () => {
            console.log('User interaction detected, attempting to play');
            audio.muted = false;
            audio.play().then(() => {
              console.log('Playback started after user interaction');
              setIsPlaying(true);
            }).catch(err2 => console.log('Play after user interaction failed:', err2));
            
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          };
          
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        });
      }
    };

    // Try playing immediately with longer delay
    const timer = setTimeout(() => {
      attemptAutoplay();
    }, 800);

    return () => {
      clearTimeout(timer);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Handle mute
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [isMuted, volume]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log('Play/Pause button clicked. Audio paused:', audio.paused, 'isPlaying state:', isPlaying);
    
    if (audio.paused) {
      audio.play().catch(err => console.error('Play failed:', err));
      setIsPlaying(true);
    } else {
      audio.pause();
      console.log('Pause called, audio.paused is now:', audio.paused);
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    console.log('Mute button clicked');
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        autoPlay
        loop
        crossOrigin="anonymous"
        preload="auto"
      >
        <source src={`${import.meta.env.BASE_URL}Kannukulla – Sai Abhyankkar _ Jonita Gandhi Ringtone Download - MobCup.Com.Co.mp3`} type="audio/mpeg" />
      </audio>

      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.div
          className="relative"
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-full right-0 mb-4 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-lg rounded-2xl p-4 shadow-2xl w-48"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-white text-sm whitespace-nowrap mb-2">Our Song</p>
                <p className="text-purple-200 text-xs mb-4">Now playing 🎵</p>
                
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-white" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-2 bg-purple-400 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  />
                </div>
                <p className="text-purple-200 text-xs mt-2 text-center">{Math.round(volume * 100)}%</p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className="relative w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-2xl flex items-center justify-center cursor-pointer border-0"
            onClick={handlePlayPause}
            type="button"
            style={{ outline: 'none' }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 pointer-events-none"
              animate={{
                opacity: isPlaying ? [0.4, 0.8, 0.4] : 1,
              }}
              transition={{
                duration: 3,
                repeat: isPlaying ? Infinity : 0,
              }}
            />
            
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 4, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              className="relative"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" fill="white" />
              ) : (
                <Play className="w-6 h-6 text-white" fill="white" />
              )}
            </motion.div>
          </button>

          <button
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 shadow-lg flex items-center justify-center cursor-pointer border-0"
            onClick={handleMute}
            type="button"
            style={{ outline: 'none' }}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white" />
            ) : (
              <Volume2 className="w-4 h-4 text-white" />
            )}
          </button>

          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple-400 pointer-events-none"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
