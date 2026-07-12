import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const Panduan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-black"
      style={{
        backgroundImage: "url('/background/2.png')", 
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

      <div className="z-10 flex-1 flex flex-col items-center justify-center p-4 w-full mt-8 md:mt-12 relative">
        {/* Panduan Container */}
        <div className="bg-[#2A0845]/80 backdrop-blur-md border-4 border-purple-500 rounded-3xl p-4 md:p-6 w-fit max-w-full shadow-[0_0_40px_rgba(100,65,165,0.8)] z-30 relative flex items-center justify-center mx-auto">
          
          {/* Prev Button */}
          <button 
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`absolute left-0 md:-left-8 z-40 p-2 md:p-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-[0_0_15px_#F15F79] transition-all transform -translate-x-1/2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="rounded-xl border-4 border-pink-400 overflow-hidden relative shadow-[0_0_20px_#F15F79] bg-transparent">
            <img 
              src={`/panduan/${currentPage}.png`} 
              alt={`Panduan ${currentPage}`} 
              className="w-auto max-w-full max-h-[65vh] md:max-h-[75vh] object-contain"
            />
            {/* Page Indicator */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full font-bold border border-white/30 backdrop-blur-sm">
              Halaman {currentPage} / {totalPages}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`absolute right-0 md:-right-8 z-40 p-2 md:p-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-[0_0_15px_#F15F79] transition-all transform translate-x-1/2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'}`}
          >
            <ChevronRight size={40} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Panduan;
