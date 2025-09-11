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
      onComplete();
    }, 10000); // 18 seconds duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Large tropical leaves */}
      <div className="absolute inset-0">
        {/* Left side large leaf */}
        <div className="absolute left-0 top-0 w-1/3 h-full">
          <div 
            className="w-full h-full bg-green-600 opacity-80 animate-gentle-sway"
            style={{
              clipPath: 'polygon(0% 20%, 30% 0%, 80% 30%, 100% 80%, 70% 100%, 20% 70%)',
              transformOrigin: 'bottom right',
              animationDelay: '0s'
            }}
          />
        </div>
        
        {/* Right side large leaf */}
        <div className="absolute right-0 top-0 w-1/3 h-full">
          <div 
            className="w-full h-full bg-green-700 opacity-75 animate-gentle-sway"
            style={{
              clipPath: 'polygon(20% 0%, 70% 30%, 100% 20%, 80% 70%, 50% 100%, 0% 80%)',
              transformOrigin: 'bottom left',
              animationDelay: '1.5s'
            }}
          />
        </div>

        {/* Bottom left smaller leaf */}
        <div className="absolute bottom-0 left-1/4 w-64 h-80 opacity-60">
          <div 
            className="w-full h-full bg-green-800 animate-gentle-sway"
            style={{
              clipPath: 'ellipse(60% 80% at 50% 70%)',
              transformOrigin: 'top center',
              animationDelay: '3s'
            }}
          />
        </div>

        {/* Bottom right smaller leaf */}
        <div className="absolute bottom-0 right-1/4 w-56 h-72 opacity-65">
          <div 
            className="w-full h-full bg-green-600 animate-gentle-sway"
            style={{
              clipPath: 'ellipse(65% 75% at 50% 80%)',
              transformOrigin: 'top center',
              animationDelay: '2s'
            }}
          />
        </div>
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        {/* Orange leaf icon */}
        <div className="mb-12">
          <div className="w-12 h-8 mx-auto relative">
            <svg className="w-12 h-8 text-coral-orange" fill="currentColor" viewBox="0 0 24 16">
              <path d="M12 0c-6.627 0-12 3.582-12 8s5.373 8 12 8c1.5-2 2.5-4 2.5-8s-1-6-2.5-8z"/>
            </svg>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-light text-white mb-2 tracking-wide leading-tight">
          Créez votre rêve
        </h1>
        <h2 className="text-5xl md:text-7xl font-light text-white mb-16 tracking-wide leading-tight">
          studio IA
        </h2>

        {/* Tech quote */}
        <div className="mb-16 max-w-3xl mx-auto">
          <blockquote className="text-lg md:text-xl text-white/80 italic mb-4 leading-relaxed font-light">
            "{currentQuote.quote}"
          </blockquote>
          <cite className="text-base text-white/60 font-normal">
            — {currentQuote.author}
          </cite>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-coral-orange text-lg font-medium flex items-center justify-center gap-2">
            Gogogo Studio 
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </p>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-coral-orange rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
