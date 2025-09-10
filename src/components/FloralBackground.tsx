import { useEffect, useState } from 'react';
import floatingPetal from '@/assets/floating-petal.jpg';

const FloralBackground = () => {
  const [petals, setPetals] = useState<Array<{ id: number; x: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      size: 0.3 + Math.random() * 0.4,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="floral-overlay">
      {/* Gradient Orbs with Floral Colors */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-coral-orange/20 to-soft-pink/15 rounded-full blur-3xl floating-flora"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-deep-purple/15 to-tropical-green/10 rounded-full blur-3xl floating-flora" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sunset-yellow/8 to-coral-orange/12 rounded-full blur-3xl floating-flora" style={{ animationDelay: '6s' }}></div>

      {/* Floating Petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-20 animate-petal-fall"
          style={{
            left: `${petal.x}%`,
            animationDelay: `${petal.delay}s`,
            transform: `scale(${petal.size})`,
          }}
        >
          <img 
            src={floatingPetal} 
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
      ))}

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--coral-orange)) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, hsl(var(--soft-pink)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Organic Light Spots */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-coral-orange/5 rounded-full blur-2xl petal-glow"></div>
      <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-soft-pink/5 rounded-full blur-2xl petal-glow" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default FloralBackground;