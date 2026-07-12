import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';

const VideoMateri = () => {
  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-black"
      style={{
        backgroundImage: "url('/background/2.png')", // Magical portal/book background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Back Button */}
      <Link 
        to="/menu" 
        className="absolute top-4 left-4 z-50 bg-white/20 hover:bg-white/40 text-white font-bold py-2 px-4 rounded-xl backdrop-blur-sm border-2 border-white/50 flex items-center shadow-lg transition-colors"
      >
        <ArrowLeft className="mr-2" /> Kembali
      </Link>

      <div className="z-10 flex-1 flex flex-col items-center justify-center p-4 w-full mt-12 relative">
        
        {/* Video Container - Placed as if on the book */}
        <div className="mt-8 md:mt-12 bg-[#2A0845]/80 backdrop-blur-md border-4 border-purple-500 rounded-3xl p-4 md:p-6 max-w-4xl w-full shadow-[0_0_40px_rgba(100,65,165,0.8)] z-30">
          
          <div className="aspect-video bg-black rounded-xl border-4 border-pink-400 overflow-hidden relative flex items-center justify-center shadow-[0_0_20px_#F15F79]">
            {/* Embed Video Google Drive */}
            <iframe 
              src="https://drive.google.com/file/d/1V4n0tJhpOzemDNVYNZ6UhPtct57e8Idm/preview" 
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Pembelajaran"
            ></iframe>
            
            {/* Label (Opsional, dihapus juga boleh kalau menutupi kontrol video) */}
            <p className="absolute bottom-4 left-4 text-white font-bold text-lg z-10 bg-black/50 px-3 py-1 rounded-lg pointer-events-none">
              Video Mengenal Area Privasi Tubuh
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VideoMateri;
