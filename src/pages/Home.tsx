import React from 'react';
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-6 right-6 z-50 bg-black border-white rounded-3xl shadow-2xl backdrop-blur-lg">
        <div className="flex items-center justify-between px-10 py-5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl transform hover:rotate-12 hover:scale-110 transition-all duration-300">
              <Globe className="h-5 w-5 text-black" />
            </div>
            <span className="text-2xl font-black text-white tracking-wider hover:text-[#e76f51] transition-colors duration-300 cursor-pointer">
              GoGoGo Studio
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 bg-white/10 rounded-full px-6 py-2 backdrop-blur-sm">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-[#e76f51] font-bold text-sm px-4 py-2 rounded-full transform hover:scale-105 transition-all duration-300 relative group hover:bg-white/20"
            >
              SERVICES
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#e76f51] group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-white hover:text-[#e76f51] font-bold text-sm px-4 py-2 rounded-full transform hover:scale-105 transition-all duration-300 relative group hover:bg-white/20"
            >
              BLOG
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#e76f51] group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-[#e76f51] font-bold text-sm px-4 py-2 rounded-full transform hover:scale-105 transition-all duration-300 relative group hover:bg-white/20"
            >
              CONTACT
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#e76f51] group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-[#e76f51] text-white rounded-full px-8 py-3 font-black hover:bg-white hover:text-[#e76f51] hover:scale-110 transition-all duration-300 shadow-xl border-2 border-[#e76f51] hover:shadow-[#e76f51]/50 text-sm transform hover:-translate-y-1"
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
          <div className="relative bg-black border-r border-white md:border-r-2 overflow-hidden">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div className="relative bg-black border-r border-white md:border-r-2 overflow-hidden">
            <video muted loop playsInline className="w-full h-full object-cover opacity-60">
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div className="relative bg-black overflow-hidden">
            <video muted loop playsInline className="w-full h-full object-cover opacity-60">
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
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
              className="bg-black text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-gray-800 group stagger-child opacity-0 hover:scale-105 transition-all duration-300"
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
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
                    <span>Applications React & Next.js</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
                    <span>Applications Web Progressives</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
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
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
                    <span>Design UI/UX</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
                    <span>Identité de Marque</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
                    <span>Systèmes de Design</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black hover:border-gray-600 transition-colors bg-white stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-black">SOLUTIONS IA</CardTitle>
                <CardDescription className="text-gray-600">
                  Automatisation intelligente et fonctionnalités alimentées par l'IA pour vos processus métier.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-black">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
                    <span>Chatbots & Assistants Virtuels</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
                    <span>Automatisation des Processus</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-black" />
                    <span>Analyse de Données</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-white section-slide-up rounded-t-[4rem] -mt-16 z-30 relative">
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
                  <Button className="p-2 h-auto text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all">
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
                  <Button className="p-2 h-auto text-cyan-500 hover:text-cyan-700 hover:bg-cyan-50 rounded-full transition-all">
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
                  <Button className="p-2 h-auto text-pink-500 hover:text-pink-700 hover:bg-pink-50 rounded-full transition-all">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 section-slide-up rounded-t-[4rem] -mt-16 z-40 relative">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4 stagger-child opacity-0">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto stagger-child opacity-0">
              Prêt à démarrer votre prochain projet ? Discutons de la façon dont nous pouvons donner vie à vos idées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-black bg-white stagger-child opacity-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Envoyez-nous un message</CardTitle>
                <CardDescription className="text-gray-600">
                  Nous vous répondrons dans les 24 heures.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Prénom" className="border-2 border-black text-black bg-white placeholder:text-gray-500" />
                  <Input placeholder="Nom" className="border-2 border-black text-black bg-white placeholder:text-gray-500" />
                </div>
                <Input placeholder="Adresse email" type="email" className="border-2 border-black text-black bg-white placeholder:text-gray-500" />
                <Input placeholder="Entreprise (optionnel)" className="border-2 border-black text-black bg-white placeholder:text-gray-500" />
                <Textarea placeholder="Parlez-nous de votre projet..." rows={4} className="border-2 border-black text-black bg-white placeholder:text-gray-500" />
                <Button className="bg-black text-white w-full rounded-full py-3 hover:bg-gray-800 transition-all duration-300">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le Message
                </Button>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center stagger-child opacity-0">
              <div className="text-center text-gray-600">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Bot className="h-16 w-16 text-blue-400" />
                </div>
                <p className="text-lg">Informations de contact à ajouter ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white rounded-t-[4rem] -mt-16 z-50 relative">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Globe className="h-3 w-3 text-black" />
            </div>
            <span className="text-lg font-bold">GoGoGo Studio</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 GoGoGo Studio. Innovation digitale et solutions créatives.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
