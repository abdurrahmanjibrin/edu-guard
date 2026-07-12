import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';

const GameEdu = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const levels = [
    { 
      image: '3.png', 
      correctAnswer: 'tidak_boleh', 
      messageCorrect: 'Benar! Bagian bokong tertutup pakaian dalam dan tidak boleh dipegang orang lain.', 
      messageWrong: 'Salah! Bagian bokong tertutup pakaian dalam dan tidak boleh dipegang orang lain.' 
    },
    { 
      image: '4.png', 
      correctAnswer: 'boleh', 
      messageCorrect: 'Benar! Lengan tangan boleh disentuh, misalnya untuk bersalaman dengan wajar.', 
      messageWrong: 'Salah! Lengan tangan boleh disentuh, misalnya saat kita bersalaman.' 
    },
    { 
      image: '5.png', 
      correctAnswer: 'boleh', 
      messageCorrect: 'Benar! Sentuhan penuh kasih sayang dari keluarga seperti orang tua itu wajar dan boleh.', 
      messageWrong: 'Salah! Pelukan sayang dari ayah atau ibu kandung kita itu sangat wajar kok.' 
    },
    { 
      image: '6.png', 
      correctAnswer: 'tidak_boleh', 
      messageCorrect: 'Benar! Mulut adalah area pribadi yang tidak boleh disentuh sembarangan oleh orang lain.', 
      messageWrong: 'Salah! Mulut adalah area pribadi yang tidak boleh disentuh sembarangan.' 
    },
    { 
      image: '7.png', 
      correctAnswer: 'tidak_boleh', 
      messageCorrect: 'Benar! Kita harus selalu waspada dan tidak boleh membiarkan orang asing menyentuh kita.', 
      messageWrong: 'Salah! Kita tidak boleh sembarangan membiarkan orang asing tak dikenal menyentuh kita.' 
    },
    { 
      image: '8.png', 
      correctAnswer: 'tidak_boleh', 
      messageCorrect: 'Benar! Bagian dada tertutup pakaian dalam dan sama sekali tidak boleh disentuh orang lain.', 
      messageWrong: 'Salah! Bagian dada tertutup pakaian dalam dan tidak boleh disentuh oleh siapapun.' 
    },
    { 
      image: '9.png', 
      correctAnswer: 'boleh', 
      messageCorrect: 'Benar! Kepala boleh disentuh sebagai bentuk usapan kasih sayang yang wajar dari orang terdekat.', 
      messageWrong: 'Salah! Kepala boleh disentuh secara wajar, misalnya usapan sayang dari orang tua.' 
    },
    { 
      image: '10.png', 
      correctAnswer: 'boleh', 
      messageCorrect: 'Benar! Dokter boleh menyentuh kita untuk memeriksa kesehatan, asalkan didampingi orang tua.', 
      messageWrong: 'Salah! Dokter boleh memeriksa tubuh kita, asalkan ditemani oleh ayah atau ibu.' 
    },
    { 
      image: '11.png', 
      correctAnswer: 'boleh', 
      messageCorrect: 'Benar! Kaki bukan area tertutup, jadi boleh disentuh misalnya saat dibantu memakai sepatu.', 
      messageWrong: 'Salah! Kaki bukan area privat, jadi boleh disentuh asalkan dalam batas wajar.' 
    },
    { 
      image: '12.png', 
      correctAnswer: 'tidak_boleh', 
      messageCorrect: 'Benar! Area tubuh yang privat sama sekali tidak boleh disentuh oleh orang lain tanpa izin.', 
      messageWrong: 'Salah! Area privat pada tubuh kita tidak boleh disentuh oleh siapapun.' 
    }
  ];

  const isCompleted = currentLevel > levels.length;
  const levelData = isCompleted ? { image: '13.png' } : levels[currentLevel - 1];

  const handleAnswer = (answer) => {
    if (isCompleted) return;
    let correct = answer === levelData.correctAnswer;
    setIsCorrect(correct);
    setFeedbackMessage(correct ? levelData.messageCorrect : levelData.messageWrong);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setCurrentLevel(currentLevel + 1);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      <div 
        className="relative w-full max-w-[177.78vh] aspect-video bg-black shadow-2xl"
        style={{
          backgroundImage: `url('/contoh/${levelData.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Back Button */}
        <Link 
          to="/menu" 
          className="absolute top-[5%] left-[5%] z-50 bg-black/40 hover:bg-black/70 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-xl backdrop-blur-sm border border-white/30 flex items-center shadow-lg transition-colors text-sm md:text-base"
        >
          <ArrowLeft className="mr-2 w-4 h-4 md:w-6 md:h-6" /> Kembali
        </Link>

        {!isCompleted && (
          <>
            {/* Invisible Boleh Button */}
            <button 
              onClick={() => handleAnswer('boleh')}
              className="absolute top-[75%] md:top-[78%] left-[10%] md:left-[12%] w-[38%] md:w-[35%] h-[18%] md:h-[18%] cursor-pointer z-40 hover:bg-white/20 rounded-[3rem] transition-colors outline-none"
              title="Boleh"
              disabled={showFeedback}
            />

            {/* Invisible Tidak Boleh Button */}
            <button 
              onClick={() => handleAnswer('tidak_boleh')}
              className="absolute top-[75%] md:top-[78%] right-[10%] md:right-[12%] w-[38%] md:w-[35%] h-[18%] md:h-[18%] cursor-pointer z-40 hover:bg-white/20 rounded-[3rem] transition-colors outline-none"
              title="Tidak Boleh"
              disabled={showFeedback}
            />
          </>
        )}

        {/* Feedback Modal Overlay */}
        {showFeedback && !isCompleted && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm md:max-w-lg w-full flex flex-col items-center shadow-[0_0_40px_rgba(255,255,255,0.3)] transform scale-100 animate-in zoom-in duration-300">
              {isCorrect ? (
                <CheckCircle size={80} className="text-green-500 mb-4 animate-bounce" />
              ) : (
                <XCircle size={80} className="text-red-500 mb-4 animate-pulse" />
              )}
              
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? 'Hebat!' : 'Oops!'}
              </h3>
              
              <p className="text-lg md:text-xl text-center text-gray-800 mb-6 md:mb-8 font-medium">
                {feedbackMessage}
              </p>
              
              <button 
                onClick={handleNext}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg md:text-xl font-bold py-2 md:py-3 px-8 md:px-10 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                Lanjutkan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameEdu;
