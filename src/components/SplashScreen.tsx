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
  // Nouvel état pour gérer l'ouverture des portes
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // La durée totale du splash screen
    const splashDuration = 1000; // 1 second

    // Déclencher la transition après la durée du splash screen
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      // Appeler onComplete après la fin de l'animation de transition (e.g., 500ms après)
      setTimeout(() => {
        onComplete();
      }, 500);
    }, splashDuration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Contenu du splash screen */}
      <div className={`fixed inset-0 bg-tropical-gradient flex items-center justify-center overflow-hidden transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {/* Animated tropical flower background */}
        <div className="absolute inset-0 tropical-flower-animation">
          {/* Bird of Paradise flower - main */}
          <div className="absolute left-1/4 top-1/3 w-80 h-96 animate-tropical-bloom" style={{ animationDelay: '0s' }}>
            <div className="relative w-full h-full">
              {/* Orange petals */}
              <div className="absolute inset-0 bird-petal-orange transform rotate-12 animate-petal-sway" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-0 bird-petal-orange transform rotate-24 animate-petal-sway" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-0 bird-petal-orange transform rotate-36 animate-petal-sway" style={{ animationDelay: '1.5s' }} />
              
              {/* Purple/Pink petals */}
              <div className="absolute inset-0 bird-petal-purple transform -rotate-12 animate-petal-sway" style={{ animationDelay: '2s' }} />
              <div className="absolute inset-0 bird-petal-pink transform -rotate-24 animate-petal-sway" style={{ animationDelay: '2.5s' }} />
              
              {/* Green leaves */}
              <div className="absolute bottom-0 left-1/2 bird-leaf-green transform -translate-x-1/2 animate-leaf-sway" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Second flower - right side */}
          <div className="absolute right-1/3 bottom-1/4 w-64 h-80 animate-tropical-bloom" style={{ animationDelay: '3s' }}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bird-petal-pink transform rotate-45 animate-petal-sway" style={{ animationDelay: '3.5s' }} />
              <div className="absolute inset-0 bird-petal-orange transform rotate-60 animate-petal-sway" style={{ animationDelay: '4s' }} />
              <div className="absolute inset-0 bird-petal-purple transform rotate-75 animate-petal-sway" style={{ animationDelay: '4.5s' }} />
              <div className="absolute bottom-0 right-1/2 bird-leaf-green transform translate-x-1/2 animate-leaf-sway" style={{ animationDelay: '3s' }} />
            </div>
          </div>

          {/* Floating petals */}
          <div className="absolute top-1/4 left-1/2 w-8 h-12 bird-floating-petal animate-petal-float" style={{ animationDelay: '6s' }} />
          <div className="absolute top-2/3 right-1/4 w-6 h-10 bird-floating-petal-pink animate-petal-float" style={{ animationDelay: '8s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-10 h-14 bird-floating-petal-purple animate-petal-float" style={{ animationDelay: '10s' }} />
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

      {/* Les "portes" qui s'ouvrent */}
      <div 
        className={`fixed top-0 left-0 w-1/2 h-full bg-white z-50 transform transition-transform ease-out duration-700 ${isTransitioning ? '-translate-x-full' : 'translate-x-0'}`}
      ></div>
      <div 
        className={`fixed top-0 right-0 w-1/2 h-full bg-white z-50 transform transition-transform ease-out duration-700 ${isTransitioning ? 'translate-x-full' : 'translate-x-0'}`}
      ></div>
    </div>
  );
};

export default SplashScreen;
