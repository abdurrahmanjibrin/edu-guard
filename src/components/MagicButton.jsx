import React from 'react';
import { Link } from 'react-router-dom';

const MagicButton = ({ to, onClick, children, variant = 'primary', className = '' }) => {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-4 font-bold text-2xl uppercase tracking-widest rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-xl box-glow";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white border-4 border-pink-300 hover:border-white",
    secondary: "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white border-4 border-indigo-300 hover:border-white",
    success: "bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 text-white border-4 border-green-200 hover:border-white"
  };

  const Component = to ? Link : 'button';

  return (
    <Component 
      to={to}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      <span className="text-glow z-10">{children}</span>
      {/* Sparkles effect container */}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
    </Component>
  );
};

export default MagicButton;
