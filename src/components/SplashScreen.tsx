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
    }, 15000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated leaves */}
      <div className="absolute inset-0">
        {/* Left side leaves */}
        <div className="absolute left-0 top-1/4 w-80 h-96 opacity-80">
          <div className="w-full h-full bg-green-600 rounded-full transform -rotate-12 animate-gentle-sway" 
               style={{
                 clipPath: 'ellipse(40% 60% at 30% 50%)',
                 animationDelay: '0s',
                 filter: 'blur(0.5px)'
               }}>
          </div>
        </div>
        
        <div className="absolute left-10 top-1/2 w-64 h-80 opacity-70">
          <div className="w-full h-full bg-green-700 rounded-full transform rotate-6 animate-gentle-sway" 
               style={{
                 clipPath: 'ellipse(45% 65% at 40% 50%)',
                 animationDelay: '2s',
                 filter: 'blur(0.3px)'
               }}>
          </div>
        </div>

        {/* Right side leaves */}
        <div className="absolute right-0 top-1/3 w-72 h-88 opacity-75">
          <div className="w-full h-full bg-green-600 rounded-full transform rotate-12 animate-gentle-sway" 
               style={{
                 clipPath: 'ellipse(42% 62% at 60% 50%)',
                 animationDelay: '1s',
                 filter: 'blur(0.4px)'
               }}>
          </div>
        </div>

        <div className="absolute right-8 bottom-1/4 w-56 h-72 opacity-65">
          <div className="w-full h-full bg-green-700 rounded-full transform -rotate-8 animate-gentle-sway" 
               style={{
                 clipPath: 'ellipse(38% 58% at 70% 50%)',
                 animationDelay: '3s',
                 filter: 'blur(0.6px)'
               }}>
          </div>
        </div>

        {/* Bottom leaves */}
        <div className="absolute bottom-0 left-1/4 w-60 h-40 opacity-60">
          <div className="w-full h-full bg-green-800 rounded-full transform rotate-45 animate-gentle-sway" 
               style={{
                 clipPath: 'ellipse(50% 40% at 50% 80%)',
                 animationDelay: '1.5s',
                 filter: 'blur(0.8px)'
               }}>
          </div>
        </div>

        <div className="absolute bottom-0 right-1/3 w-48 h-36 opacity-55">
          <div className="w-full h-full bg-green-800 rounded-full transform -rotate-30 animate-gentle-sway" 
               style={{
                 clipPath: 'ellipse(45% 35% at 50% 85%)',
                 animationDelay: '2.5s',
                 filter: 'blur(1px)'
               }}>
          </div>
        </div>
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-coral-orange rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Créez votre rêve
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 tracking-tight">
          studio IA
        </h2>

        {/* Tech quote */}
        <div className="mb-8 max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl text-white/90 italic mb-4 leading-relaxed">
            "{currentQuote.quote}"
          </blockquote>
          <cite className="text-lg text-coral-orange font-medium">
            — {currentQuote.author}
          </cite>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-coral-orange text-lg font-medium">
            Gogogo Studio →
          </p>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-coral-orange rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;