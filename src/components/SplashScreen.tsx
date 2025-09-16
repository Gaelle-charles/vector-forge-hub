import { useState, useEffect } from 'react';
import React from 'react';

const techQuotes = [
  {
    quote: "L'intelligence artificielle est probablement notre plus grande opportunité existentielle.",
    author: "Demis Hassabis, DeepMind"
  },
  {
    quote: "L'IA ne remplacera pas les humains, mais les humains avec l'IA remplaceront les humains sans l'IA.",
    author: "Kai-Fu Lee"
  },
  {
    quote: "La technologie n'est rien. L'important, c'est d'avoir confiance en les gens.",
    author: "Steve Jobs"
  },
  {
    quote: "Le futur appartient aux organisations qui peuvent transformer les données en insights, et les insights en actions.",
    author: "Shantanu Narayen, Adobe"
  },
  {
    quote: "L'intelligence artificielle sera soit la meilleure, soit la pire chose qui soit jamais arrivée à l'humanité.",
    author: "Stephen Hawking"
  },
  {
    quote: "Nous sommes sur le point de vivre la plus grande révolution technologique de l'histoire humaine.",
    author: "Sundar Pichai, Google"
  }
];

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [currentQuote] = useState(() => 
    techQuotes[Math.floor(Math.random() * techQuotes.length)]
  );
  const [isVisible, setIsVisible] = useState(true);

  // Ajout des styles de transition
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .splash-fade-in {
        animation: splashFadeIn 0.8s ease-out forwards;
      }
      
      .splash-fade-out {
        animation: splashFadeOut 0.6s ease-in forwards;
      }
      
      @keyframes splashFadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes splashFadeOut {
        from {
          opacity: 1;
          transform: scale(1);
        }
        to {
          opacity: 0;
          transform: scale(1.05);
        }
      }
      
      .loader {
        width: 65px;
        aspect-ratio: 1;
        position: relative;
      }
      .loader:before,
      .loader:after {
        content: "";
        position: absolute;
        border-radius: 50px;
        box-shadow: 0 0 0 3px inset #e76f51;
        animation: l5 2.5s infinite;
      }
      .loader:after {
        animation-delay: -1.25s;
        border-radius: 0;
      }
      @keyframes l5{
        0%    {inset:0    35px 35px 0   }
        12.5% {inset:0    35px 0    0   }
        25%   {inset:35px 35px 0    0   }
        37.5% {inset:35px 0    0    0   }
        50%   {inset:35px 0    0    35px}
        62.5% {inset:0    0    0    35px}
        75%   {inset:0    0    35px 35px}
        87.5% {inset:0    0    35px 0   }
        100%  {inset:0    35px 35px 0   }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 600);
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div className={`splash-screen fixed inset-0 bg-black flex items-center justify-center overflow-hidden ${isVisible ? 'splash-fade-in' : 'splash-fade-out'}`}>
      
      {/* Conteneur principal centré */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto">
        
        {/* Main heading */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-light text-white mb-2 tracking-wide leading-tight">
         Notre studio vous aide à penser 
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-white mb-8 sm:mb-16 tracking-wide leading-tight">
          votre business autrement
        </h2>

        {/* Tech quote */}
        <div className="mb-8 sm:mb-16 max-w-3xl mx-auto">
          <blockquote className="text-base sm:text-lg md:text-xl text-white/80 italic mb-4 leading-relaxed font-light">
            "{currentQuote.quote}"
          </blockquote>
          <cite className="text-sm sm:text-base text-white/60 font-normal">
            — {currentQuote.author}
          </cite>
        </div>

        {/* Loading animation - centré avec le contenu */}
        <div className="mt-8 mb-8">
          <div className="loader mx-auto"></div>
        </div>
      </div>

      {/* Skip button */}
      <button 
        onClick={handleSkip}
        className="absolute top-4 right-4 text-white/60 hover:text-white text-sm transition-colors duration-300"
      >
        Passer →
      </button>
    </div>
  );
};

export default SplashScreen;
