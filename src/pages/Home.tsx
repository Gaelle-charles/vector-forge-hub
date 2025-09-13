import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUpRight, Download, Globe, Smartphone, Video, Bot, Code, CheckCircle, Send, ExternalLink } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Références pour les vidéos
  const videoRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Animation au scroll avancée avec effet de glissement
  React.useEffect(() => {
    // Ajouter les styles CSS pour les animations
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

      /* Styles pour le noir et blanc avec touches orange */
      .grayscale-mode {
        filter: grayscale(100%);
      }

      .orange-accent {
        color: #f34213 !important;
      }

      .orange-bg {
        background-color: #f34213 !important;
      }

      .orange-border {
        border-color: #f34213 !important;
      }

      .orange-hover:hover {
        color: #f34213 !important;
      }

      .orange-bg-hover:hover {
        background-color: #f34213 !important;
      }
    `;
    document.head.appendChild(style);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
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

  // Effet pour la rotation des vidéos
  useEffect(() => {
    if (isHovering) return; // Ne pas faire tourner les vidéos si une est survolée

    const interval = setInterval(() => {
      setActiveVideo(prev => {
        // Mettre en pause toutes les vidéos
        videoRefs.current.forEach(ref => {
          if (ref.current) {
            ref.current.pause();
          }
        });
        
        // Jouer la vidéo active
        const nextVideo = (prev + 1) % videoRefs.current.length;
        if (videoRefs.current[nextVideo].current) {
          videoRefs.current[nextVideo].current.play().catch(e => console.log("Autoplay prevented:", e));
        }
        
        return nextVideo;
      });
    }, 4000); // Changement toutes les 4 secondes

    // Jouer la première vidéo au chargement
    if (videoRefs.current[0].current) {
      videoRefs.current[0].current.play().catch(e => console.log("Autoplay prevented:", e));
    }

    return () => clearInterval(interval);
  }, [isHovering]);

  // Gestion du survol des vidéos
  const handleVideoHover = (index) => {
    setIsHovering(true);
    
    // Mettre en pause toutes les vidéos
    videoRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.pause();
      }
    });
    
    // Jouer la vidéo survolée
    if (videoRefs.current[index].current) {
      videoRefs.current[index].current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  const handleVideoLeave = () => {
    setIsHovering(false);
    
    // Mettre en pause toutes les vidéos
    videoRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.pause();
      }
    });
    
    // Rejouer la vidéo active dans la rotation
    if (videoRefs.current[activeVideo].current) {
      videoRefs.current[activeVideo].current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  return (
    <div className="min-h-screen bg-white grayscale-mode">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 border border-white/20 rounded-full shadow-2xl backdrop-blur-lg transition-all duration-500 hover:bg-black hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-1 hover:-translate-x-1/2 w-[50%] max-w-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:rotate-180 hover:scale-125 transition-all duration-500 hover:shadow-white/50">
              <Globe className="h-4 w-4 text-black" />
            </div>
            <span className="text-lg font-black text-white tracking-wider orange-hover transition-all duration-300 cursor-pointer hover:tracking-widest">
              GoGoGo Studio
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 bg-white/10 rounded-full px-4 py-1 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white orange-hover font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20 hover:-translate-y-0.5"
            >
              SERVICES
              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 orange-bg group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-white orange-hover font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20 hover:-translate-y-0.5"
            >
              BLOG
              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 orange-bg group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white orange-hover font-bold text-xs px-3 py-1.5 rounded-full transform hover:scale-110 transition-all duration-300 relative group hover:bg-white/20 hover:-translate-y-0.5"
            >
              CONTACT
              <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 orange-bg group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="orange-bg text-white rounded-full px-5 py-2 font-bold hover:bg-white orange-hover hover:scale-110 transition-all duration-300 shadow-lg border orange-border hover:shadow-orange-500/50 text-xs transform hover:-translate-y-1 hover:rotate-2"
            >
              CONTACT
            </Button>
          </div>
        </div>
      </nav>

      {/* Video Header Section */}
      <section className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl">
              Créativité Sans Limites
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium drop-shadow-lg">
              Découvrez notre univers en mouvement
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 h-[100vh] border-white">
          <div 
            className="relative bg-black border-r border-white md:border-r-2 overflow-hidden"
            onMouseEnter={() => handleVideoHover(0)}
            onMouseLeave={handleVideoLeave}
          >
            <video 
              ref={videoRefs.current[0]}
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-60 transition-opacity duration-500"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
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
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-60 transition-opacity duration-500"
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
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-60 transition-opacity duration-500"
            >
              <source src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Videos/A_succession_of_202509131243_9z8z6.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <main className="relative px-8 py-20 bg-white scroll-animate opacity-0 rounded-t-[4rem] -mt-16 z-10">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-black stagger-child opacity-0">
              Innovation digitale
              <br />
              et solutions
              <br />
              créatives
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed stagger-child opacity-0">
              Un outil essentiel pour les marques mondiales, agences digitales, startups 
              et professionnels créatifs.
            </p>
            
            <Button 
              onClick={() => scrollToSection('services')} 
              className="orange-bg text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-white orange-hover group stagger-child opacity-0 hover:scale-105 transition-all duration-300"
            >
              <Download className="h-5 w-5 mr-3" />
              COMMENCER AUJOURD'HUI
              <ArrowUpRight className="h-5 w-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 section-slide-up rounded-t-[4rem] -mt-16 z-20 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4 stagger-child opacity-0">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto stagger-child opacity-0">
              Nous fournissons des solutions digitales complètes pour les entreprises modernes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-black hover:border-gray-600 transition-colors bg-white stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-black">DÉVELOPPEMENT WEB</CardTitle>
                <CardDescription className="text-gray-600">
                  Sites web modernes et responsifs et applications web construites avec des technologies de pointe.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-black">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 orange-accent" />
                    <span>Applications React & Next.js</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 orange-accent" />
                    <span>Applications Web Progressives</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 orange-accent" />
                    <span>Solutions E-commerce</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black hover:border-gray-600 transition-colors bg-white stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-black">DESIGN & IMAGE DE MARQUE</CardTitle>
                <CardDescription className="text-gray-600">
                  Identité visuelle complète et design d'expérience utilisateur pour les produits digitaux.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-black">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 orange-accent" />
                    <span>Design UI/UX</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 orange-accent" />
                    <span>Identité de Marque</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 orange-accent" />
                    <span>Systèmes de Design</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black hover:border-gray-600 transition-colors bg-white stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-
