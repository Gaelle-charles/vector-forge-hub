import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUpRight, Download, Globe, Smartphone, Video, Bot, Code, CheckCircle, Send, ExternalLink, Camera, Zap, Wand2, Coffee, Rocket } from 'lucide-react';
import BlogSectionHome from '@/components/BlogSectionHome';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
// === Formspree ===
import { useForm, ValidationError } from "@formspree/react";

const Home = () => {
  const scrollToSection = sectionId => {
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

  // === Formspree hook ===
  const [state, handleSubmit] = useForm("xqadrkjd");

  // Animation au scroll améliorée - REMPLACEZ votre useEffect par celui-ci
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scroll-animate {
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform, opacity;
      }
      
      .scroll-animate.animate-section-reveal {
        transform: translateY(0);
        opacity: 1;
      }
      
      .scroll-animate.animate-section-blur {
        transform: translateY(-50px);
        opacity: 0.3;
        filter: blur(8px);
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .stagger-child {
        transform: translateY(60px);
        opacity: 0;
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform, opacity;
      }
      
      .stagger-child.animate-gentle-fade-up {
        transform: translateY(0);
        opacity: 1;
      }
      
      .stagger-child.animate-fade-blur {
        transform: translateY(-30px);
        opacity: 0.2;
        filter: blur(4px);
      }
      
      .section-slide-up {
        transform: translateY(80px);
        opacity: 0;
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform, opacity;
      }
      
      .section-slide-up.visible {
        transform: translateY(0);
        opacity: 1;
      }
      
      .section-slide-up.blurred {
        transform: translateY(-40px);
        opacity: 0.4;
        filter: blur(6px);
      }
    `;
    document.head.appendChild(style);

    // Map pour tracker l'état de chaque élément et éviter les re-animations
    const animatedElements = new Map();
    let currentScrollDirection = 'down';
    let lastScrollY = window.scrollY;

    // Détection de la direction du scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      currentScrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      threshold: [0, 0.15, 0.5, 0.85],
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element = entry.target;
        const elementId = element.id || element.className;
        const isVisible = entry.isIntersecting;
        const visibilityRatio = entry.intersectionRatio;
        
        // Éviter les re-animations inutiles
        const currentState = animatedElements.get(elementId);
        
        if (isVisible && visibilityRatio >= 0.15) {
          // Section devient visible
          if (currentState !== 'visible') {
            animatedElements.set(elementId, 'visible');
            
            element.classList.remove('animate-section-blur', 'animate-fade-blur', 'blurred');
            element.classList.add('animate-section-reveal', 'visible');
            
            // Animation des enfants avec délai
            const children = element.querySelectorAll('.stagger-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.remove('animate-fade-blur');
                child.classList.add('animate-gentle-fade-up');
              }, index * 150 + 200);
            });
          }
          
        } else if (!isVisible && currentState === 'visible') {
          // Section sort de la vue
          animatedElements.set(elementId, 'hidden');
          
          if (currentScrollDirection === 'down') {
            // Scroll vers le bas : section précédente devient floutée
            element.classList.remove('animate-section-reveal', 'visible');
            element.classList.add('animate-section-blur', 'blurred');
            
            const children = element.querySelectorAll('.stagger-child');
            children.forEach(child => {
              child.classList.remove('animate-gentle-fade-up');
              child.classList.add('animate-fade-blur');
            });
            
          } else {
            // Scroll vers le haut : reset pour réanimation
            setTimeout(() => {
              element.classList.remove('animate-section-reveal', 'animate-section-blur', 'visible', 'blurred');
              const children = element.querySelectorAll('.stagger-child');
              children.forEach(child => {
                child.classList.remove('animate-gentle-fade-up', 'animate-fade-blur');
              });
            }, 100);
          }
        }
      });
    }, observerOptions);

    // Observer toutes les sections
    const elements = document.querySelectorAll('.scroll-animate, .section-slide-up');
    elements.forEach(element => {
      observer.observe(element);
      // Initialiser l'état de chaque élément
      const elementId = element.id || element.className;
      animatedElements.set(elementId, 'initial');
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Effet pour lancer la première vidéo et enchaîner automatiquement
  useEffect(() => {
    if (!videoRefs.current.length) return;

    // Démarre la première vidéo
    const firstVideo = videoRefs.current[0].current;
    if (firstVideo) {
      firstVideo.play().catch(e => console.log("Autoplay prevented:", e));
    }

    // Liste des handlers pour pouvoir les nettoyer après
    const handlers = [];
    videoRefs.current.forEach((ref, index) => {
      if (!ref.current) return;
      const handleEnded = () => {
        const nextVideoIndex = (index + 1) % videoRefs.current.length;
        setActiveVideo(nextVideoIndex);

        // Pause toutes les vidéos
        videoRefs.current.forEach(r => r.current?.pause());

        // Joue la suivante
        const nextVideo = videoRefs.current[nextVideoIndex].current;
        nextVideo?.play().catch(e => console.log("Autoplay prevented:", e));
      };
      ref.current.addEventListener("ended", handleEnded);
      handlers.push({
        ref: ref.current,
        handler: handleEnded
      });
    });

    // Nettoyage correct
    return () => {
      handlers.forEach(({
        ref,
        handler
      }) => {
        ref.removeEventListener("ended", handler);
      });
    };
  }, []);

  // Gestion du survol des vidéos
  const handleVideoHover = index => {
    setActiveVideo(index);
    setIsHovering(true);
    videoRefs.current.forEach(ref => ref.current?.pause());
    videoRefs.current[index].current?.play().catch(e => console.log("Autoplay prevented:", e));
  };
  const handleVideoLeave = () => {
    setIsHovering(false);
    // Reprendre la lecture séquentielle après le survol
    setTimeout(() => {
      if (!isHovering) {
        const currentVideo = videoRefs.current[activeVideo].current;
        if (currentVideo) {
          currentVideo.play().catch(e => console.log("Autoplay prevented:", e));
        }
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Video Header Section */}
      <section className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
            <h1 className="sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 drop-shadow-2xl opacity-80 text-3xl">
              L'IA pour vous servir
            </h1>
            <p className="sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium drop-shadow-lg opacity-60 text-base">
              Découvrez comment booster votre entreprise avec l'IA
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 h-screen border-white">
          <div className="relative bg-black border-r border-white md:border-r-2 overflow-hidden" onMouseEnter={() => handleVideoHover(0)} onMouseLeave={handleVideoLeave}>
            <video ref={videoRefs.current[0]} muted playsInline className={`w-full h-full object-cover transition-opacity duration-500 ${activeVideo === 0 ? 'opacity-100' : 'opacity-40'}`}>
              <source src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Videos/Pixar_animated_short_202509131714_l40d4.mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div className="relative bg-black border-r border-white md:border-r-2 overflow-hidden" onMouseEnter={() => handleVideoHover(1)} onMouseLeave={handleVideoLeave}>
            <video ref={videoRefs.current[1]} muted playsInline className={`w-full h-full object-cover transition-opacity duration-500 ${activeVideo === 1 ? 'opacity-100' : 'opacity-40'}`}>
              <source src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Videos/A_sequence_of_202509122027_jfiaz.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div className="relative bg-black overflow-hidden" onMouseEnter={() => handleVideoHover(2)} onMouseLeave={handleVideoLeave}>
            <video ref={videoRefs.current[2]} muted playsInline className={`w-full h-full object-cover transition-opacity duration-500 ${activeVideo === 2 ? 'opacity-100' : 'opacity-40'}`}>
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
                <Smartphone className="w-full h-full" />
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
                <Camera className="w-full h-full" />
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
                <Zap className="w-full h-full" />
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
                <Bot className="w-full h-full" />
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

      <BlogSectionHome />

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
            {/* Formulaire connecté à Formspree */}
            <form onSubmit={handleSubmit} className="bg-[#e76f51] rounded-3xl p-6 sm:p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-16 sm:w-64 sm:h-32 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 right-0 w-32 h-16 sm:w-64 sm:h-32 bg-gradient-to-bl from-pink-400/30 to-purple-400/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 max-w-full lg:max-w-4xl">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Badge className="bg-black text-white">Contact</Badge>
                  <Badge className="bg-black text-white">Collaboration</Badge>
                  <span className="text-white/80 text-xs sm:text-sm font-medium">Réponse sous 24h</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Envoyez-nous un message
                </h3>
                
                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-full lg:max-w-2xl">
                  Nous vous répondrons dans les 24 heures pour discuter de votre projet et voir comment nous pouvons vous aider.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <Input name="firstName" placeholder="Prénom" className="border-2 border-white/20 text-black bg-white" />
                  <Input name="lastName" placeholder="Nom" className="border-2 border-white/20 text-black bg-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <Input name="email" type="email" placeholder="Adresse email" required className="border-2 border-white/20 text-black bg-white" />
                  <Input name="company" placeholder="Entreprise (optionnel)" className="border-2 border-white/20 text-black bg-white" />
                </div>
                <Textarea name="message" placeholder="Parlez-nous de votre projet..." rows={4} required className="border-2 border-white/20 text-black bg-white mb-4 sm:mb-6" />
                
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mb-2" />

                {state.succeeded ? (
                  <p className="text-white font-medium">Merci pour votre message, nous vous répondrons vite !</p>
                ) : (
                  <Button type="submit" disabled={state.submitting} className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-6 sm:px-8 py-2 sm:py-3 font-medium text-base sm:text-lg">
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {state.submitting ? "Envoi..." : "Envoyer le Message"}
                  </Button>
                )}
              </div>
            </form>

            {/* Card de Consultation */}
            <div id="consultation" className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
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
                    Consulting de 30 minutes gratuit
                  </h4>
                  
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Discutons ensemble de vos besoins. C'est simple, rapide et sans engagement. L'occasion de découvrir comment l'IA peut transformer votre entreprise.
                  </p>
                  
                  <Button className="bg-black text-white hover:bg-black hover:text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300" onClick={() => window.location.href = 'https://calendly.com/g-charlesbel/30min'}>
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Prendre un rendez-vous
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
