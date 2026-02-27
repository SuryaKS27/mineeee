import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Heart } from 'lucide-react';

interface PasswordGateProps {
  children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // You can change this password to anything you want
  const CORRECT_PASSWORD = '1405';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError('');
      // Store in sessionStorage so it persists during the session
      sessionStorage.setItem('passwordGateUnlocked', 'true');
    } else {
      setError('Incorrect access code. Try again! 💕');
      setPassword('');
    }
  };

  // Check if already unlocked in this session
  if (isUnlocked || sessionStorage.getItem('passwordGateUnlocked')) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-purple-950/30 to-black flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Card */}
        <div className="relative">
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl opacity-75 blur-xl"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/20">
            {/* Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" fill="white" />
                </div>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent mb-2">
                Access Code Required
              </h2>
              <p className="text-purple-300 text-sm sm:text-base">
                This is a private moment for someone special 💕
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Lock className="absolute left-4 top-4 w-5 h-5 text-pink-400 pointer-events-none" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter access code..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:border-pink-500/50 focus:bg-white/15 transition-all"
                  autoFocus
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.p
                  className="text-pink-400 text-sm text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.p>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-bold py-3 rounded-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Unlock
              </motion.button>

              {/* Hint */}
              <p className="text-xs text-purple-300/60 text-center">
                Hint: Think of the special date 💕
              </p>
            </form>

            {/* Decorative elements */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-purple-400/60 text-center italic">
                "This special space was created with love, just for you"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
