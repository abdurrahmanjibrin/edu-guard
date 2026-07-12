import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div 
      className="min-h-screen w-full relative bg-black"
      style={{
        backgroundImage: "url('/contoh/1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Invisible Play Button Overlay */}
      {/* Adjust the percentage to roughly cover the white play triangle in the center */}
      <Link 
        to="/menu"
        className="absolute top-[58%] left-[40%] w-[20%] h-[35%] cursor-pointer z-50 hover:bg-white/20 rounded-3xl transition-colors"
        title="Play"
      />
    </div>
  );
};

export default Home;
