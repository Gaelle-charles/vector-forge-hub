import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import geometricTravel from '@/assets/geometric-travel.png';
import geometricElephant from '@/assets/geometric-elephant.png';
import geometricDashboard from '@/assets/geometric-dashboard.png';
import { 
  ArrowUpRight, Download, Globe, Smartphone, Video, Bot, Code, 
  CheckCircle, Mail, MapPin, Phone, Send, ExternalLink, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation au scroll avancée
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Animation différée pour les enfants avec animations variées
          const children = element.querySelectorAll('.stagger-child');
          const animations = ['animate-bounce-in', 'animate-elastic-in', 'animate-zoom-bounce', 'animate-slide-rotate'];
          children.forEach((child, index) => {
            setTimeout(() => {
              const randomAnimation = animations[index % animations.length];
              child.classList.add(randomAnimation);
            }, index * 150);
          });
          
          // Animation principale de l'élément
          element.classList.add('in-view');
          
          // Cessez d'observer l'élément une fois animé
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observer tous les éléments avec la classe scroll-animate
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(element => observer.observe(element));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-black border border-white rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Globe className="h-4 w-4 text-black" />
            </div>
            <span className="text-2xl font-black text-white tracking-wider">GoGoGo Studio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-neon-cyan font-bold text-sm transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg relative group"
            >
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
            </button>
            <Link 
              to="/blog"
              className="text-white hover:text-neon-pink font-bold text-sm transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg relative group"
            >
              BLOG
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-pink group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-neon-green font-bold text-sm transform hover:scale-110 transition-all duration-300 hover:drop-shadow-lg relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-white bg-white/10 rounded-full px-3 py-1 border border-white/20">
              <Globe className="h-3 w-3" />
              <span className="font-bold">FR</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black rounded-full px-6 py-2 font-black hover:bg-neon-cyan hover:text-black hover:scale-105 transition-all duration-300 shadow-lg text-sm"
            >
              CONTACT
            </Button>
          </div>
        </div>
      </nav>

      {/* Video Header Section */}
      <section className="pt-20 bg-black relative overflow-hidden">
        {/* Header Title */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-fade-in">
              Créativité Sans Limites
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium drop-shadow-lg animate-fade-in">
              Découvrez notre univers en mouvement
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 h-[70vh] border-white">
          {/* Video Section 1 */}
          <div className="relative bg-black border-r border-white md:border-r-2 overflow-hidden">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-60"
              onEnded={(e) => {
                // Passer à la vidéo suivante automatiquement
                const nextVideo = e.currentTarget.parentElement?.nextElementSibling?.querySelector('video') as HTMLVideoElement;
                if (nextVideo) nextVideo.play();
              }}
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          {/* Video Section 2 */}
          <div className="relative bg-black border-r border-white md:border-r-2 overflow-hidden">
            <video 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-60"
              onEnded={(e) => {
                const nextVideo = e.currentTarget.parentElement?.nextElementSibling?.querySelector('video') as HTMLVideoElement;
                if (nextVideo) nextVideo.play();
              }}
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          {/* Video Section 3 */}
          <div className="relative bg-black overflow-hidden">
            <video 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-60"
              onEnded={(e) => {
                // Revenir à la première vidéo
                const firstVideo = e.currentTarget.parentElement?.parentElement?.querySelector('video') as HTMLVideoElement;
                if (firstVideo) firstVideo.play();
              }}
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <main className="relative px-8 py-20 bg-background scroll-animate opacity-0 rounded-t-[3rem]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-foreground stagger-child opacity-0">
              Innovation digitale
              <br />
              et solutions
              <br />
              créatives
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed stagger-child opacity-0">
              Un outil essentiel pour les marques mondiales, agences digitales, startups 
              et professionnels créatifs.
            </p>
            
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-foreground text-background rounded-full px-8 py-4 text-lg font-medium hover:bg-foreground/90 group stagger-child opacity-0 hover-scale"
            >
              <Download className="h-5 w-5 mr-3" />
              COMMENCER AUJOURD'HUI
              <ArrowUpRight className="h-5 w-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary scroll-animate opacity-0 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4 stagger-child opacity-0">
              Nos Services
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto stagger-child opacity-0">
              Nous fournissons des solutions digitales complètes pour les entreprises modernes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-foreground transition-colors bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-black">DÉVELOPPEMENT WEB</CardTitle>
                <CardDescription className="text-black/70">
                  Sites web modernes et responsifs et applications web construites avec des technologies de pointe.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-black">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Applications React & Next.js</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Applications Web Progressives</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Solutions E-commerce</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-black">DESIGN & IMAGE DE MARQUE</CardTitle>
                <CardDescription className="text-black/70">
                  Identité visuelle complète et design d'expérience utilisateur pour les produits digitaux.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-black">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Design UI/UX</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Identité de Marque</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Systèmes de Design</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-black">SOLUTIONS IA</CardTitle>
                <CardDescription className="text-black/70">
                  Automatisation intelligente et fonctionnalités alimentées par l'IA pour vos processus métier.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-black">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Chatbots & Assistants Virtuels</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Automatisation des Processus</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-foreground" />
                    <span>Analyse de Données</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-background scroll-animate opacity-0 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4 stagger-child opacity-0">
              Derniers Articles
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto stagger-child opacity-0">
              Insights et mises à jour de notre équipe sur la technologie et l'innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-foreground transition-colors group bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-gray-400" />
                </div>
                <Badge className="w-fit mb-2 bg-neon-green text-black font-bold border-0">Développement</Badge>
                <CardTitle className="text-xl text-black group-hover:text-black/80">
                  L'Avenir du Développement Web
                </CardTitle>
                <CardDescription className="text-black/70">
                  Explorer les tendances émergentes et les technologies qui façonneront la prochaine génération d'applications web.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/60">12 Déc, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-black hover:text-black/80">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors group bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Bot className="h-12 w-12 text-gray-400" />
                </div>
                <Badge className="w-fit mb-2 bg-neon-cyan text-black font-bold border-0">IA</Badge>
                <CardTitle className="text-xl text-black group-hover:text-black/80">
                  L'IA dans les Entreprises Modernes
                </CardTitle>
                <CardDescription className="text-black/70">
                  Comment l'intelligence artificielle transforme les industries et crée de nouvelles opportunités de croissance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/60">10 Déc, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-black hover:text-black/80">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors group bg-white stagger-child opacity-0">
              <CardHeader>
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
                <Badge className="w-fit mb-2 bg-neon-pink text-black font-bold border-0">Design</Badge>
                <CardTitle className="text-xl text-black group-hover:text-black/80">
                  Systèmes de Design Évolutifs
                </CardTitle>
                <CardDescription className="text-black/70">
                  Construire des systèmes de design cohérents et maintenables pour les applications à grande échelle.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/60">8 Déc, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-black hover:text-black/80">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary scroll-animate opacity-0 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4 stagger-child opacity-0">
              Contactez-nous
            </h2>
            <p className="text-xl text-black/80 max-w-2xl mx-auto stagger-child opacity-0">
              Prêt à démarrer votre prochain projet ? Discutons de la façon dont nous pouvons donner vie à vos idées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-border bg-white stagger-child opacity-0">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Envoyez-nous un message</CardTitle>
                <CardDescription className="text-black/70">
                  Nous vous répondrons dans les 24 heures.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Prénom" className="border-border text-black bg-white placeholder:text-gray-500" />
                  <Input placeholder="Nom" className="border-border text-black bg-white placeholder:text-gray-500" />
                </div>
                <Input placeholder="Adresse email" type="email" className="border-border text-black bg-white placeholder:text-gray-500" />
                <Input placeholder="Entreprise (optionnel)" className="border-border text-black bg-white placeholder:text-gray-500" />
                <Textarea 
                  placeholder="Parlez-nous de votre projet..." 
                  rows={4} 
                  className="border-border text-black bg-white placeholder:text-gray-500"
                />
                <Button className="bg-foreground text-background w-full rounded-full py-3 hover:bg-foreground/90">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 stagger-child opacity-0">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Informations de Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-foreground/80">hello@gogogo-studio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <p className="text-foreground/80">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Localisation</p>
                      <p className="text-foreground/80">Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">Horaires de Bureau</h4>
                <div className="space-y-2 text-foreground/80">
                  <p>Lundi - Vendredi : 9h00 - 18h00</p>
                  <p>Samedi : 10h00 - 16h00</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
              <Globe className="h-3 w-3 text-foreground" />
            </div>
            <span className="text-lg font-bold">GoGoGo Studio</span>
          </div>
          <p className="text-background/80 text-sm">
            © 2024 GoGoGo Studio. Innovation digitale et solutions créatives.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;