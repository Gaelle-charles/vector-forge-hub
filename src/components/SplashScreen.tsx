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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Le compte à rebours pour le contenu de la page
    const contentTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 18000); // Déclenche la transition de la page après 18 secondes

    // Le compte à rebours pour la transition des portes
    const transitionTimer = setTimeout(() => {
      onComplete();
    }, 19000); // 1 seconde de plus pour laisser le temps à l'animation de portes

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(transitionTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Contenu principal du splash screen */}
      <div className={`fixed inset-0 bg-tropical-gradient flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
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
