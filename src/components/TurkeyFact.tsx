import React, { useState } from 'react';
import { falseTurkeyFacts } from '../data/turkeyFacts';
import { Bird } from 'lucide-react';

export function TurkeyFact() {
  const [fact, setFact] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomFact = () => {
    setIsAnimating(true);
    const randomIndex = Math.floor(Math.random() * falseTurkeyFacts.length);
    setFact(falseTurkeyFacts[randomIndex]);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 max-w-xl mx-auto">
      <button
        onClick={getRandomFact}
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg 
                 shadow-lg transform transition-all duration-300 hover:scale-105 
                 flex items-center gap-2"
      >
        <Bird className="w-6 h-6" />
        Расскажи про индейку
      </button>
      
      {fact && (
        <div className={`bg-white p-6 rounded-lg shadow-xl w-full 
                      transform transition-all duration-500
                      ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
          <p className="text-gray-800 text-lg text-center">{fact}</p>
        </div>
      )}
    </div>
  );
}