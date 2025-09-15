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

  useEffect(() => {
    const timer = setTimeout(() => {
      // Transition fade out
      const element = document.querySelector('.splash-screen');
      if (element) {
        element.classList.add('animate-fade-out');
        setTimeout(() => {
          onComplete();
        }, 300);
      } else {
        onComplete();
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen fixed inset-0 bg-tropical-gradient flex items-center justify-center overflow-hidden animate-fade-in">

        {/* Main heading */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-light text-white mb-2 tracking-wide leading-tight">
          Créez votre rêve
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-light text-white mb-8 sm:mb-16 tracking-wide leading-tight">
          studio IA
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

        {/* CTA */}
        <div className="mt-8 sm:mt-12">
          <p className="text-[#e76f51] text-base sm:text-lg font-medium flex items-center justify-center gap-2">
            Gogogo Studio 
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </p>
        </div>

      {/* Loading animation */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="dot-animation-container">
<div class="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
