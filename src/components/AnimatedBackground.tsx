import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '4s' }}></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float 8s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;