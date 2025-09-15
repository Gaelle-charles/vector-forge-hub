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
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 border border-black rounded-full shadow-2xl backdrop-blur-lg transition-all duration-500 hover:bg-black hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-1 hover:-translate-x-1/2 w-[90%] md:w-[70%] lg:w-[60%] max-w-5xl">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
          <div className="flex items-center space-x-2">
            <img src="https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/Group%209.svg" className="h-6 sm:h-8" alt="Logo GoGoGo Studio" />
          </div>
          
          <div className="hidden md:flex items-center space-x-1 bg-white/10 rounded-full px-4 py-1 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
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
              className="bg-[#e76f51] text-white rounded-full px-5 py-2 font-bold hover:bg-white hover:text-[#e76f51] hover:scale-110 transition-all duration-300 shadow-lg border border-[#e76f51] hover:shadow-[#e76f51]/50 text-xs transform hover:-translate-y-1 hover:rotate-2"
            >
              CONTACT
            </Button>
          </div>
        </div>
      </nav>

      {/* Video Header Section */}
      <section className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="text-center px-8 pt-24">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl opacity-80">
              L'IA pour vous servir
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium drop-shadow-lg opacity-60">
              Découvrez comment booster votre entreprise avec l'IA
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

      {/* Hero Content Section */}
      /*<main className="relative px-8 py-40 bg-white scroll-animate opacity-0 rounded-t-[4rem] -mt-16 z-10">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-black mb-4 stagger-child opacity-0">
              Innovation digitale
              <br />
              et solutions créatives
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed stagger-child opacity-0">
              Un outil essentiel pour les marques mondiales, agences digitales, startups 
              et professionnels créatifs.
            </p>
            
            <Button onClick={() => scrollToSection('contact')} className="bg-[#e76f51] text-white rounded-full py-3 hover:bg-white hover:text-[#e76f51] transition-all duration-300">
           
              COMMENCER AUJOURD'HUI
              <ArrowUpRight className="h-5 w-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>*/

      {/* Services Section */}
      <section id="services" className="py-35 bg-black section-slide-up rounded-t-[4rem] -mt-16 z-20 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 stagger-child opacity-0">
              Nos Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto stagger-child opacity-0">
              Nous fournissons des solutions digitales complètes pour les entreprises modernes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            {/* Réalisation d'apps web/mobile */}
            <div className="border-2 border-white hover:border-gray-600 transition-colors bg-black stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Réalisation d'apps web/mobile
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  On vous accompagne pour que votre projet soit une véritable success story. Une UX pensée par l'humain, optimisée par l'IA.
                </p>
              </div>
              <div className="absolute top-6 right-6 w-8 h-8 text-white/60 group-hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
          {/* Génération de vidéo/photo avec l'IA */}
            <div className="bg-[#e76f51] from-lime-300 to-lime-400 rounded-3xl p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Génération de vidéo/photo avec l'IA
                </h3>
                <p className="text-black/80 text-lg leading-relaxed mb-6">
                  Nos outils IA génèrent des visuels uniques et sur-mesure pour votre marque. Des photos de produits ultra-réalistes aux vidéos promotionnelles.
                </p>
              </div>
              <div className="absolute top-6 right-6 w-8 h-8 text-black/60 group-hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
            
            {/* Automatisation du process */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Automatisation du process
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Laissez l'IA gérer les tâches fastidieuses. De l'automatisation du service client à la gestion des données, on met en place des flux de travail optimisiés.
                </p>
              </div>
              <div className="absolute top-6 right-6 w-8 h-8 text-gray-400 group-hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
            
            {/* Réalisation d'agents IA */}
            <div className="bg-[#e76f51] from-purple-400 to-purple-500 rounded-3xl p-8 relative overflow-hidden stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Réalisation d'agents IA
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Nous concevons des agents IA sur mesure, capables de dialoguer, d'assister ou de prendre des décisions. Que ce soit un chatbot intelligent pour vos clients ou un assistant pour votre équipe interne.
                </p>
              </div>
              <div className="absolute top-6 right-6 w-8 h-8 text-white/60 group-hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-black hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-full h-52 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Code className="h-16 w-16 text-blue-400" />
                </div>
                <Badge className="w-fit mb-4 bg-green-100 text-green-700 border-0 shadow-sm">
                  Développement
                </Badge>
                <CardTitle className="text-2xl text-black group-hover:text-blue-600 transition-colors mb-3">
                  L'Avenir du Développement Web
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Explorer les tendances émergentes et les technologies qui façonneront la prochaine génération d'applications web.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">12 Déc, 2024</span>
                  <Button 
                    className="p-2 h-auto text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all"
                    onClick={() => window.location.href = '/blog'}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-full h-52 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Bot className="h-16 w-16 text-cyan-400" />
                </div>
                <Badge className="w-fit mb-4 bg-blue-100 text-blue-700 border-0 shadow-sm">
                  IA
                </Badge>
                <CardTitle className="text-2xl text-black group-hover:text-cyan-600 transition-colors mb-3">
                  L'IA dans les Entreprises Modernes
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Comment l'intelligence artificielle transforme les industries et crée de nouvelles opportunités de croissance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">10 Déc, 2024</span>
                  <Button 
                    className="p-2 h-auto text-cyan-500 hover:text-cyan-700 hover:bg-cyan-50 rounded-full transition-all"
                    onClick={() => window.location.href = '/blog'}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-full h-52 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Video className="h-16 w-16 text-pink-400" />
                </div>
                <Badge className="w-fit mb-4 bg-purple-100 text-purple-700 border-0 shadow-sm">
                  Design
                </Badge>
                <CardTitle className="text-2xl text-black group-hover:text-pink-600 transition-colors mb-3">
                  Systèmes de Design Évolutifs
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Construire des systèmes de design cohérents et maintenables pour les applications à grande échelle.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">8 Déc, 2024</span>
                  <Button 
                    className="p-2 h-auto text-pink-500 hover:text-pink-700 hover:bg-pink-50 rounded-full transition-all"
                    onClick={() => window.location.href = '/blog'}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     {/* Contact Section */}
<section id="contact" className="py-40 bg-black section-slide-up rounded-t-[4rem] -mt-16 z-40 relative">
  <div className="max-w-4xl mx-auto px-8">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4 stagger-child opacity-0">
        Contactez-nous
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto stagger-child opacity-0">
        Prêt à démarrer votre prochain projet ? Discutons de la façon dont nous pouvons donner vie à vos idées.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Formulaire de Contact */}
      <Card className="border-2 border-white bg-black stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 col-span-2">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Envoyez-nous un message</CardTitle>
          <CardDescription className="text-gray-400">
            Nous vous répondrons dans les 24 heures.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Prénom" className="border-2 border-white text-black bg-white placeholder:text-gray-500" />
            <Input placeholder="Nom" className="border-2 border-white text-black bg-white placeholder:text-gray-500" />
          </div>
          <Input placeholder="Adresse email" type="email" className="border-2 border-white text-black bg-white placeholder:text-gray-500" />
          <Input placeholder="Entreprise (optionnel)" className="border-2 border-white text-black bg-white placeholder:text-gray-500" />
          <Textarea placeholder="Parlez-nous de votre projet..." rows={4} className="border-2 border-white text-black bg-white placeholder:text-gray-500" />
          <Button className="bg-[#e76f51] text-white w-full rounded-full py-3 hover:bg-white hover:text-[#e76f51] transition-all duration-300">
            <Send className="h-4 w-4 mr-2" />
            Envoyer le Message
          </Button>
        </CardContent>
      </Card>

      {/* Prise de rendez-vous */}
      <Card className="border-2 border-white bg-black text-white stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
        <CardHeader>
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-black" />
          </div>
          <CardTitle className="text-2xl">Consulting 30min offert</CardTitle>
          <CardDescription className="text-gray-400">
            Discutons ensemble de vos besoins. C'est simple, rapide et sans engagement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300 mb-6">
            L'occasion de découvrir comment l'IA peut transformer votre entreprise et de poser toutes vos questions.
          </p>
          <a href="URL_DE_VOTRE_CALENDLY_OU_AUTRE_SERVICE" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#e76f51] text-white w-full rounded-full py-3 hover:bg-white hover:text-[#e76f51] transition-all duration-300">
              <CheckCircle className="h-4 w-4 mr-2" />
              Prendre un rendez-vous
            </Button>
          </a>
        </CardContent>
      </Card>
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
