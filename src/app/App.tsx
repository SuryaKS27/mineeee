import { useEffect, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { TimelineSection } from './components/TimelineSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveLetterSection } from './components/LoveLetterSection';
import { StatsSection } from './components/StatsSection';
import { SurpriseReveal } from './components/SurpriseReveal';
import { FloatingHearts } from './components/FloatingHearts';
import { MusicPlayer } from './components/MusicPlayer';
import { PasswordGate } from './components/PasswordGate';
import confetti from 'canvas-confetti';

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Welcome confetti
    const timer = setTimeout(() => {
      const duration = 3000;
      const animationEnd = Date.now() + duration;

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 3;

        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: randomInRange(0.1, 0.3),
            y: Math.random() - 0.2
          },
          colors: ['#a855f7', '#ec4899', '#3b82f6', '#8b5cf6']
        });
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: randomInRange(0.7, 0.9),
            y: Math.random() - 0.2
          },
          colors: ['#a855f7', '#ec4899', '#3b82f6', '#8b5cf6']
        });
      }, 100);

      setShowConfetti(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PasswordGate>
      <div className="min-h-screen bg-black overflow-x-hidden">
        <FloatingHearts />
        <MusicPlayer />
        <HeroSection />
        <CountdownSection />
        <TimelineSection />
        <PhotoGallery />
        <StatsSection />
        <LoveLetterSection />
        <SurpriseReveal />
      </div>
    </PasswordGate>
  );
}
