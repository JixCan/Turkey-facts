import React from 'react';
import { TurkeyFact } from './components/TurkeyFact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Невероятные факты об индейках
          </h1>
          <p className="text-amber-700 text-lg">
            Узнайте то, чего вы точно не знали об индейках!
          </p>
        </header>
        
        <TurkeyFact />
        
        <footer className="text-center mt-12 text-amber-700 text-sm">
          <p>⚠️ Внимание: Все факты на этом сайте являются выдуманными</p>
        </footer>
      </div>
    </div>
  );
}

export default App;