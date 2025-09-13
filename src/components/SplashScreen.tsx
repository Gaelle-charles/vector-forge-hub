import { useState, useEffect } from 'react';

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
  const [isOpenEffect, setIsOpenEffect] = useState(false);

  useEffect(() => {
    // Timeout pour l'effet d'ouverture (déclenché avant la fin)
    const openTimer = setTimeout(() => {
      setIsOpenEffect(true);
    }, 17000); // Déclenche l'ouverture après 17 secondes (1 sec avant la fin)

    // Timeout pour la fin de l'écran de chargement
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 18000); // Durée totale de 18 secondes

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <>
      <style jsx>{`
        /* --- Animations de l'effet de porte --- */
        .door {
          position: fixed;
          top: 0;
          height: 100vh;
          width: 50vw;
          background: #000;
          transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1);
          z-index: 100;
        }

        .left-door {
          left: 0;
          transform-origin: top left;
          transform: translateX(0);
        }

        .right-door {
          right: 0;
          transform-origin: top right;
          transform: translateX(0);
        }

        .door-open .left-door {
          transform: translateX(-100%) skewX(-20deg);
        }

        .door-open .right-door {
          transform: translateX(100%) skewX(20deg);
        }

        /* --- Autres styles (inchangés) --- */
        .bg-tropical-gradient {
            background: linear-gradient(135deg, #FF6B6B 0%, #FFD700 50%, #4ECDC4 100%);
        }
        .tropical-flower-animation {
            opacity: 1;
            transition: opacity 1s ease-out;
        }
        .door-open .tropical-flower-animation {
            opacity: 0;
        }
        .animate-progress {
            animation: progress 18s linear forwards;
        }
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
      
      <div className={`fixed inset-0 bg-tropical-gradient flex items-center justify-center overflow-hidden ${isOpenEffect ? 'door-open' : ''}`}>
        {/* Contenu central */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* ... (votre contenu central existant) ... */}
          <div className="mb-12">
            <div className="w-12 h-8 mx-auto relative">
              <svg className="w-12 h-8 text-coral-orange" fill="currentColor" viewBox="0 0 24 16">
                <path d="M12 0c-6.627 0-12 3.582-12 8s5.373 8 12 8c1.5-2 2.5-4 2.5-8s-1-6-2.5-8z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-2 tracking-wide leading-tight">
            Créez votre rêve
          </h1>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-16 tracking-wide leading-tight">
            studio IA
          </h2>
          <div className="mb-16 max-w-3xl mx-auto">
            <blockquote className="text-lg md:text-xl text-white/80 italic mb-4 leading-relaxed font-light">
              "{currentQuote.quote}"
            </blockquote>
            <cite className="text-base text-white/60 font-normal">
              — {currentQuote.author}
            </cite>
          </div>
          <div className="mt-12">
            <p className="text-coral-orange text-lg font-medium flex items-center justify-center gap-2">
              Gogogo Studio 
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </p>
          </div>
        </div>

        {/* Portes qui s'ouvrent */}
        <div className={`door left-door`} />
        <div className={`door right-door`} />

      </div>
    </>
  );
};

export default SplashScreen;
