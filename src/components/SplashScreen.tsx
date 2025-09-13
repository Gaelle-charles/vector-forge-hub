// Fichier : src/components/SplashScreen.js

import React, { useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    // Déclencher l'animation des portes après un court délai
    const doorsTimer = setTimeout(() => {
      document.documentElement.classList.add('doors-open');
    }, 100);

    // Une fois l'animation terminée, appeler la fonction onComplete
    const transitionTimer = setTimeout(() => {
      onComplete();
    }, 1600); // 1.5s pour la transition + 100ms de délai initial

    return () => {
      clearTimeout(doorsTimer);
      clearTimeout(transitionTimer);
      document.documentElement.classList.remove('doors-open');
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <div className="fixed inset-0 bg-black door-left"></div>
      <div className="fixed inset-0 bg-black door-right"></div>
    </div>
  );
};

export default SplashScreen;
