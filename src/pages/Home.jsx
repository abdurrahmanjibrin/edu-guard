import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      <div 
        className="relative w-full max-w-[177.78vh] aspect-video bg-black shadow-2xl"
        style={{
          backgroundImage: "url('/contoh/1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Invisible Play Button Overlay */}
        {/* Diperbesar agar menutupi seluruh segitiga Play */}
        <Link 
          to="/menu"
          className="absolute top-[58%] left-[40%] w-[20%] h-[35%] cursor-pointer z-50 hover:bg-white/20 rounded-3xl transition-colors"
          title="Play"
        />
      </div>
    </div>
  );
};

export default Home;
