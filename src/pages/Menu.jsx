import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Menu = () => {
  return (
    <div 
      className="min-h-screen w-full relative bg-black"
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
        className="absolute top-4 left-4 z-50 bg-black/40 hover:bg-black/70 text-white font-bold py-2 px-4 rounded-xl backdrop-blur-sm border border-white/30 flex items-center shadow-lg transition-colors"
      >
        <ArrowLeft className="mr-2" /> Kembali
      </Link>

      {/* Invisible Video Menu Area */}
      <Link 
        to="/video"
        className="absolute top-[10%] left-[10%] w-[80%] h-[25%] cursor-pointer z-40 hover:bg-white/10 rounded-3xl transition-colors"
        title="Menu Video"
      />

      {/* Invisible Panduan Menu Area */}
      <Link 
        to="/panduan"
        className="absolute top-[38%] left-[10%] w-[80%] h-[25%] cursor-pointer z-40 hover:bg-white/10 rounded-3xl transition-colors"
        title="Menu Panduan"
      />

      {/* Invisible Game Menu Area */}
      <Link 
        to="/game"
        className="absolute top-[65%] left-[10%] w-[80%] h-[25%] cursor-pointer z-40 hover:bg-white/10 rounded-3xl transition-colors"
        title="Menu Game"
      />
    </div>
  );
};

export default Menu;
