import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation principale */}
      <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 border border-black rounded-full shadow-2xl backdrop-blur-lg transition-all duration-500 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] xl:w-[60%] max-w-5xl">
        <div className="flex items-center justify-between lg:justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-3">
          
          {/* GAUCHE : Menu Hamburger + Logo Desktop */}
          <div className="flex items-center space-x-2">
            {/* Menu Hamburger Mobile - MAINTENANT À GAUCHE */}
            <button 
              className="lg:hidden p-2 text-white hover:text-[#e76f51] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Logo Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <a href="/">
                <img 
                  src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/logo%20blanc.svg" 
                  className="h-5 sm:h-6 md:h-7 lg:h-8" 
                  alt="Logo GoGoGo Studio" 
                />
              </a>
            </div>
          </div>
          
          {/* Logo centré en responsive */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:hidden">
              <a href="/">
            <img 
              src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/logo%20blanc.svg" 
              className="h-5 sm:h-6 md:h-7" 
              alt="Logo GoGoGo Studio" 
            />
                </a>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-1 bg-white/10 rounded-full px-4 py-1 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#e76f51] font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20">
              Services
              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#e76f51] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
<Link 
  to="/blog" 
  className="text-white hover:text-[#e76f51] font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20 inline-block"
>
  Blog
  <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#e76f51] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
</Link>
            <button onClick={() => scrollToSection('consultation')} className="text-white hover:text-[#e76f51] font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20">
              Prendre rendez-vous
              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#e76f51] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
          </div>

          {/* DROITE : Seulement le bouton Contact */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hidden lg:block bg-[#e76f51] text-white rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 font-bold hover:bg-white hover:text-[#e76f51] hover:scale-110 transition-all duration-300 shadow-lg border border-[#e76f51] hover:shadow-[#e76f51]/50 text-xs transform"
            >
              <span>CONTACT</span>
            </button>
            {/* Espace vide en mobile pour équilibrer */}
            <div className="lg:hidden w-8"></div>
          </div>
        </div>
      </nav>

      {/* Overlay du menu mobile - avec z-index plus élevé */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Fond semi-transparent */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu mobile - positionné juste en dessous de la navbar */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] max-w-5xl bg-black/95 border border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#e76f51] font-bold py-4 px-6 rounded-xl hover:bg-white/10 transition-all duration-300 text-center text-lg"
              >
                Services
              </button>
<Link 
  to="/blog" 
  className="text-white hover:text-[#e76f51] font-bold py-4 px-6 rounded-xl hover:bg-white/10 transition-all duration-300 text-center text-lg inline-block"
>
  Blog
</Link>
              <button 
                onClick={() => scrollToSection('consultation')}
                className="text-white hover:text-[#e76f51] font-bold py-4 px-6 rounded-xl hover:bg-white/10 transition-all duration-300 text-center text-lg"
              >
                Prendre rendez-vous
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#e76f51] text-white font-bold py-4 px-6 rounded-xl hover:bg-white hover:text-[#e76f51] transition-all duration-300 text-center mt-4 text-lg"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
