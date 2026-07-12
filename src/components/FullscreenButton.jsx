import React, { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <button 
      onClick={toggleFullscreen}
      className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-[9999] bg-black/50 hover:bg-pink-600 text-white p-3 md:p-4 rounded-full backdrop-blur-sm border border-white/30 shadow-[0_0_15px_rgba(241,95,121,0.5)] transition-all transform hover:scale-110 active:scale-95"
      title={isFullscreen ? "Keluar Layar Penuh" : "Layar Penuh"}
    >
      {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
    </button>
  );
};

export default FullscreenButton;
