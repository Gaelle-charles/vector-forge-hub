import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUpRight, Download, Globe, Smartphone, Video, Bot, Code, CheckCircle, Send, ExternalLink, Camera, Zap, Wand2, Coffee, Rocket } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const videoRefs = useRef([useRef(null), useRef(null), useRef(null)]);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Animation au scroll avancée avec effet de glissement
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scroll-animate {
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .scroll-animate.animate-section-reveal {
        transform: translateY(0);
        opacity: 1;
      }
      
      .stagger-child {
        transform: translateY(60px);
        opacity: 0;
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .stagger-child.animate-gentle-fade-up {
        transform: translateY(0);
        opacity: 1;
      }
      
      .section-slide-up {
        transform: translateY(80px);
        opacity: 0;
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      .section-slide-up.visible {
        transform: translateY(0);
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Si l'élément est visible, on ajoute les classes d'animation
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add('animate-section-reveal');
          element.classList.add('visible');

          const children = element.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-gentle-fade-up');
            }, index * 150 + 200);
          });
        } else {
          // Si l'élément n'est plus visible, on retire les classes d'animation pour le réanimer lors du prochain scroll
          const element = entry.target;
          element.classList.remove('animate-section-reveal');
          element.classList.remove('visible');

          const children = element.querySelectorAll('.stagger-child');
          children.forEach(child => {
            child.classList.remove('animate-gentle-fade-up');
          });
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate, .section-slide-up');
    elements.forEach(element => observer.observe(element));
    
    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  // Effet pour la rotation des vidéos et la gestion du survol
  useEffect(() => {
    if (isHovering) return;

    const startInterval = () => {
      const interval = setInterval(() => {
        setActiveVideo(prev => {
          const nextVideo = (prev + 1) % videoRefs.current.length;
          videoRefs.current.forEach(ref => ref.current?.pause());
          videoRefs.current[nextVideo].current?.play().catch(e => console.log("Autoplay prevented:", e));
          return nextVideo;
        });
      }, 4000);
      return interval;
    };

    let rotationInterval = startInterval();
    videoRefs.current[0].current?.play().catch(e => console.log("Autoplay prevented:", e));

    return () => {
      clearInterval(rotationInterval);
    };
  }, [isHovering]);

  // Gestion du survol des vidéos
  const handleVideoHover = (index) => {
    setActiveVideo(index);
    setIsHovering(true);
    
    videoRefs.current.forEach(ref => ref.current?.pause());
    videoRefs.current[index].current?.play().catch(e => console.log("Autoplay prevented:", e));
  };

  const handleVideoLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 border border-black rounded-full shadow-2xl backdrop-blur-lg transition-all duration-500 hover:bg-black hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-1 hover:-translate-x-1/2 w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] max-w-5xl">
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3">
          <div className="flex items-center space-x-2">
            <img src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Group%209.svg" className="h-5 sm:h-6 md:h-8" alt="Logo GoGoGo Studio" />
          </div>
          
          <div className="hidden lg:flex items-center space-x-1 bg-white/10 rounded-full px-4 py-1 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#e76f51] font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20 hover:-translate-y-0.5"
            >
              Services
              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#e76f51] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-white hover:text-[#e76f51] font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20 hover:-translate-y-0.5"
            >
              Blog
              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#e76f51] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#e76f51] font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20 hover:-translate-y-0.5"
            >
              Prendre rendez-vous
              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#e76f51] group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#e76f51] text-white rounded-full px-3 sm:px-5 py-1.5 sm:py-2 font-bold hover:bg-white hover:text-[#e76f51] hover:scale-110 transition-all duration-300 shadow-lg border border-[#e76f51] hover:shadow-[#e76f51]/50 text-xs transform hover:-translate-y-1 hover:rotate-2"
            >
              CONTACT
            </Button>
          </div>
        </div>
      </nav>

      {/* Video Header Section */}
      <section className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 drop-shadow-2xl opacity-80">
              L'IA pour vous servir
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium drop-shadow-lg opacity-60">
              Découvrez comment booster votre entreprise avec l'IA
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 h-[60vh] sm:h-[80vh] lg:h-[100vh] border-white">
          <div
            className="relative bg-black border-r border-white md:border-r-2 overflow-hidden"
            onMouseEnter={() => handleVideoHover(0)}
            onMouseLeave={handleVideoLeave}
          >
            <video
              ref={videoRefs.current[0]}
              loop
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-500 ${activeVideo === 0 ? 'opacity-100' : 'opacity-20'}`}
            >
              <source src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Videos/Pixar_animated_short_202509131714_l40d4.mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div
            className="relative bg-black border-r border-white md:border-r-2 overflow-hidden"
            onMouseEnter={() => handleVideoHover(1)}
            onMouseLeave={handleVideoLeave}
          >
            <video
              ref={videoRefs.current[1]}
              loop
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-500 ${activeVideo === 1 ? 'opacity-100' : 'opacity-20'}`}
            >
              <source src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Videos/A_sequence_of_202509122027_jfiaz.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div
            className="relative bg-black overflow-hidden"
            onMouseEnter={() => handleVideoHover(2)}
            onMouseLeave={handleVideoLeave}
          >
            <video
              ref={videoRefs.current[2]}
              loop
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-500 ${activeVideo === 2 ? 'opacity-100' : 'opacity-20'}`}
            >
              <source src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Videos/A_rapid_fluid_202509131718_pqdeo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 lg:py-40 bg-black section-slide-up rounded-t-[4rem] -mt-16 z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 stagger-child opacity-0">
              Nos Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto stagger-child opacity-0">
              Nous fournissons des solutions digitales complètes pour les entreprises modernes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {/* Réalisation d'apps web/mobile */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-black transition-colors mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
              <div className="relative z-10 mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                  Réalisation d'apps web/mobile
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                  On vous accompagne pour que votre projet soit une véritable success story. Une UX pensée par l'humain, optimisée par l'IA.
                </p>
              </div>
            </div>

            {/* Génération de vidéo/photo avec l'IA */}
            <div className="bg-[#e76f51] rounded-3xl p-6 sm:p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-black/60 group-hover:text-black transition-colors mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
              <div className="relative z-10 mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Génération de vidéo/photo avec l'IA
                </h3>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                  Nos outils IA génèrent des visuels uniques et sur-mesure pour votre marque. Des photos de produits ultra-réalistes aux vidéos promotionnelles.
                </p>
              </div>
            </div>
            
            {/* Automatisation du process */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-black transition-colors mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
              <div className="relative z-10 mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                  Automatisation du process
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                  Laissez l'IA gérer les tâches fastidieuses. De l'automatisation du service client à la gestion des données, on met en place des flux de travail optimisiés.
                </p>
              </div>
            </div>
            
            {/* Réalisation d'agents IA */}
            <div className="bg-[#e76f51] rounded-3xl p-6 sm:p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-white/60 group-hover:text-white transition-colors mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
              <div className="relative z-10 mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Réalisation d'agents IA
                </h3>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                  Nous concevons des agents IA sur mesure, capables de dialoguer, d'assister ou de prendre des décisions. Que ce soit un chatbot intelligent pour vos clients ou un assistant pour votre équipe interne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-40 bg-white section-slide-up rounded-t-[4rem] -mt-16 z-30 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-black mb-6 tracking-tight stagger-child opacity-0">
              Derniers Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed stagger-child opacity-0">
              Insights et mises à jour de notre équipe sur la technologie et l'innovation
            </p>
          </div>

          <div className="space-y-12">
            {/* Article Principal (Most Recent) */}
            <div className="bg-[#e76f51] from-emerald-700 to-emerald-800 rounded-3xl p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-32 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-bl from-pink-400/30 to-purple-400/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              

              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-black text-white hover:bg-purple-700 border-0 px-4 py-2 rounded-full font-medium">
                    Article
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-pink-600 border-0 px-4 py-2 rounded-full font-medium">
                    Entrepreneuriat
                  </Badge>
                  <span className="text-white/80 text-sm font-medium">10/02/2025</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Pharmacie : Fonds ou Titres ?
                </h3>
                
                <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
                  Se lancer dans l'acquisition de sa pharmacie passe par plusieurs étapes, dont une : Est-ce que j'achète un fonds de commerce ou une société (via ses parts ou ses actions) ?
                </p>
                
                <Button 
                  className="bg-white/20 text-white border border-white/30 hover:bg-white hover:text-emerald-800 rounded-full px-8 py-3 font-medium transition-all duration-300"
                  onClick={() => window.location.href = '/blog'}
                >
                  Lire l'article
                </Button>
              </div>
            </div>

            {/* Articles Secondaires */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Article 1 */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group stagger-child opacity-0 overflow-hidden border border-gray-100">
                <div className="flex">
                  <div className="w-1/3 h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.415-3.414l5-5A2 2 0 008 10.172V5L8 4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-[#e76f51] text-white hover:bg-purple-700 border-0 px-3 py-1 rounded-full text-xs font-medium">
                        Article
                      </Badge>
                      <Badge className="bg-[#e76f51] text-white hover:bg-pink-600 border-0 px-3 py-1 rounded-full text-xs font-medium">
                        Juridique
                      </Badge>
                      <span className="text-gray-500 text-xs">15/10/2024</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      Pharmacie et bail commercial
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Le bail commercial constitue l'un des contrats essentiels à l'exploitation d'une pharmacie puisqu'il organise les conditions d'occupation des locaux et les relations avec le...
                    </p>
                    
                    <Button 
                      variant="ghost"
                      className="text-[#e76f51] hover:text-pink-600 hover:bg-pink-50 p-0 h-auto font-medium text-sm"
                      onClick={() => window.location.href = '/blog'}
                    >
                      Lire l'article
                    </Button>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group stagger-child opacity-0 overflow-hidden border border-gray-100">
                <div className="flex">
                  <div className="w-1/3 h-48 bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 flex items-center justify-center relative">
                    <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-4 right-4 text-black/60">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-[#e76f51] text-white hover:bg-purple-700 border-0 px-3 py-1 rounded-full text-xs font-medium">
                        Article
                      </Badge>
                      <Badge className="bg-[#e76f51] text-white hover:bg-pink-600 border-0 px-3 py-1 rounded-full text-xs font-medium">
                        Entrepreneuriat
                      </Badge>
                      <span className="text-gray-500 text-xs">03/12/2024</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      Pharmacien entrepreneur, un acteur majeur de la santé
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Pour exceller dans ce métier exigeant et atteindre votre plein potentiel, il est essentiel de développer cinq domaines clés : vos relations, vos finances, votre santé, votre...
                    </p>
                    
                    <Button 
                      variant="ghost"
                      className="text-[#e76f51] hover:text-pink-600 hover:bg-pink-50 p-0 h-auto font-medium text-sm"
                      onClick={() => window.location.href = '/blog'}
                    >
                      Lire l'article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 lg:py-40 bg-black section-slide-up rounded-t-[4rem] -mt-16 z-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight stagger-child opacity-0">
              Contactez-nous
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto stagger-child opacity-0">
              Prêt à démarrer votre prochain projet ? Discutons de la façon dont nous pouvons donner vie à vos idées.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Card Principal de Contact */}
            <div className="bg-[#e76f51] rounded-3xl p-6 sm:p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-16 sm:w-64 sm:h-32 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 right-0 w-32 h-16 sm:w-64 sm:h-32 bg-gradient-to-bl from-pink-400/30 to-purple-400/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 max-w-full lg:max-w-4xl">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Badge className="bg-black text-white hover:bg-purple-700 border-0 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium text-xs sm:text-sm">
                    Contact
                  </Badge>
                  <Badge className="bg-black text-white hover:bg-pink-600 border-0 px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium text-xs sm:text-sm">
                    Collaboration
                  </Badge>
                  <span className="text-white/80 text-xs sm:text-sm font-medium">Réponse sous 24h</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Envoyez-nous un message
                </h3>
                
                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-full lg:max-w-2xl">
                  Nous vous répondrons dans les 24 heures pour discuter de votre projet et voir comment nous pouvons vous aider.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <Input placeholder="Prénom" className="border-2 border-white/20 text-black bg-white placeholder:text-gray-500 rounded-xl py-2 sm:py-3" />
                  <Input placeholder="Nom" className="border-2 border-white/20 text-black bg-white placeholder:text-gray-500 rounded-xl py-2 sm:py-3" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <Input placeholder="Adresse email" type="email" className="border-2 border-white/20 text-black bg-white placeholder:text-gray-500 rounded-xl py-2 sm:py-3" />
                  <Input placeholder="Entreprise (optionnel)" className="border-2 border-white/20 text-black bg-white placeholder:text-gray-500 rounded-xl py-2 sm:py-3" />
                </div>
                <Textarea placeholder="Parlez-nous de votre projet..." rows={4} className="border-2 border-white/20 text-black bg-white placeholder:text-gray-500 rounded-xl mb-4 sm:mb-6" />
                
                <Button 
                  className="bg-black text-white hover:bg-white hover:text-black border-2 border-black hover:border-black rounded-full px-6 sm:px-8 py-2 sm:py-3 font-medium text-base sm:text-lg transition-all duration-300"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Envoyer le Message
                </Button>
              </div>
            </div>

            {/* Card de Consultation */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                    <Badge className="bg-black text-white hover:bg-purple-700 border-0 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                      Gratuit
                    </Badge>
                    <Badge className="bg-black text-white hover:bg-pink-600 border-0 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                      30 minutes
                    </Badge>
                    <span className="text-gray-500 text-xs">Sans engagement</span>
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                    Consulting 30min offert
                  </h4>
                  
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Discutons ensemble de vos besoins. C'est simple, rapide et sans engagement. L'occasion de découvrir comment l'IA peut transformer votre entreprise.
                  </p>
                  
                  <Button 
                    className="bg-black text-white hover:bg-black hover:text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300"
                    onClick={() => window.location.href = 'URL_DE_VOTRE_CALENDLY_OU_AUTRE_SERVICE'}
                  >
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Prendre un rendez-vous
                  </Button>
                </div>
              </div>
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-white rounded-t-[4rem] -mt-16 z-50 relative">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Group%209.png" />
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 GoGoGo Studio. Innovation digitale et solutions créatives.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
