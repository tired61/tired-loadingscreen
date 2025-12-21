import { useState, useEffect, useCallback } from 'react';
import { Config } from './config/config';
import BootSequence from './components/BootSequence/BootSequence';

import { useTranslation } from 'react-i18next';
export default function App() {
  const { t } = useTranslation();
  const [booting, setBooting] = useState(Config.enableBootSequence);

  // Memoize handler to prevent BootSequence re-renders/resets
  const handleBootComplete = useCallback(() => {
    setBooting(false);
  }, []);

  // Helper: Extract Video ID
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // NUI Event Listener for Progress (Simulated for now)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulation
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 1));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  if (booting) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">
      {/* Background Video */}
      {Config.background.type === 'video' && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            style={{ filter: `blur(${Config.background.blur}px)` }}
          >
            <source src={Config.background.url} type="video/webm" />
          </video>
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
          />
        </div>
      )}

      {/* Background: YouTube */}
      {Config.background.type === 'youtube' && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe
            className="w-full h-full object-cover scale-[1.3]" // Scale to hide controls/borders
            src={`https://www.youtube.com/embed/${getYoutubeId(Config.background.url)}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${getYoutubeId(Config.background.url)}`}
            title="YouTube Background"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ filter: `blur(${Config.background.blur}px)` }}
          />
          {/* Dark Overlay (Configurable) */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: Config.background.overlayOpacity }}
          />
        </div>
      )}



      {/* Main Center Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center animate-fade-in">

        {/* Logo */}
        <div className="mb-2 transform hover:scale-105 transition duration-500">
          {Config.serverLogo?.type === 'image' ? (
            <img
              src={Config.serverLogo.url}
              alt="Server Logo"
              className="w-48 h-48 object-contain drop-shadow-2xl animate-pulse-slow"
            />
          ) : (
            <h1 className="text-[12rem] leading-none font-gothic text-gold-gradient drop-shadow-2xl">
              {Config.serverLogo?.text || "G"}
            </h1>
          )}
        </div>



        {/* Progress Bar Container */}
        <div className="w-[400px] flex flex-col items-center gap-2">
          {/* Bordered Transparent Container */}
          <div className="w-full h-3 border border-white/50 rounded-full p-[2px] backdrop-blur-sm">
            {/* Glowing White Fill */}
            <div
              className="h-full bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.9)] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-gray-400 text-xs tracking-widest uppercase mt-4">
            {progress === 100 ? t('ready_to_play') : t('loading')}
          </p>



          <p className="text-[10px] text-gray-500 tracking-[0.2em] lowercase mt-4 opacity-60">
            {t('stop_music_hint')}
          </p>
        </div>

      </div>





    </div>
  );
}


