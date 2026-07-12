import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Menu = () => {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      <div 
        className="relative w-full max-w-[177.78vh] aspect-video bg-black shadow-2xl"
        style={{
          backgroundImage: "url('/contoh/2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Back Button */}
        <Link 
          to="/" 
          className="absolute top-[5%] left-[5%] z-50 bg-white/20 hover:bg-white/40 text-white font-bold py-2 px-4 rounded-xl backdrop-blur-sm border-2 border-white/50 flex items-center shadow-lg transition-colors"
        >
          <ArrowLeft className="mr-2" /> Kembali
        </Link>

        {/* Video Button */}
        <Link 
          to="/video"
          className="absolute top-[10%] left-[10%] w-[80%] h-[25%] cursor-pointer z-40 hover:bg-white/10 rounded-3xl transition-colors"
          title="Menu Video"
        />

        {/* Panduan Button */}
        <Link 
          to="/panduan"
          className="absolute top-[38%] left-[10%] w-[80%] h-[25%] cursor-pointer z-40 hover:bg-white/10 rounded-3xl transition-colors"
          title="Menu Panduan"
        />

        {/* Game Button */}
        <Link 
          to="/game"
          className="absolute top-[65%] left-[10%] w-[80%] h-[25%] cursor-pointer z-40 hover:bg-white/10 rounded-3xl transition-colors"
          title="Menu Game"
        />
      </div>
    </div>
  );
};

export default Menu;
