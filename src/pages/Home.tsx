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
  CheckCircle, Mail, MapPin, Phone, Send, ExternalLink
} from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
              <Globe className="h-4 w-4 text-background" />
            </div>
            <span className="text-2xl font-bold text-foreground">GoGoGo Studio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-foreground/80 font-medium"
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-foreground hover:text-foreground/80 font-medium"
            >
              BLOG
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-foreground/80 font-medium"
            >
              CONTACT
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-foreground">
              <Globe className="h-4 w-4" />
              <span>FR</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-foreground text-background rounded-full px-6 py-2 hover:bg-foreground/90"
            >
              CONTACT
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative px-8 py-20 pt-32">
        {/* Geometric Illustrations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 opacity-40">
            <div className="w-24 h-24 border-2 border-foreground rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-foreground rounded-full"></div>
            <svg className="absolute top-8 left-32 w-16 h-8" viewBox="0 0 64 32">
              <path d="M8 16 L24 8 L40 12 L56 4" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
            </svg>
          </div>
          
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 opacity-30">
            <img src={geometricTravel} alt="" className="w-96 h-auto" />
          </div>
          
          <div className="absolute top-32 right-20 opacity-40">
            <img src={geometricElephant} alt="" className="w-32 h-32" />
          </div>
          
          <div className="absolute top-40 right-40 opacity-30">
            <img src={geometricDashboard} alt="" className="w-40 h-auto" />
          </div>
          
          <div className="absolute bottom-32 left-32 opacity-20">
            <div className="w-16 h-16 border-2 border-foreground transform rotate-45"></div>
          </div>
          
          <div className="absolute bottom-20 right-32 opacity-30">
            <svg className="w-20 h-20" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
              <circle cx="40" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-foreground">
              Innovation digitale
              <br />
              et solutions
              <br />
              créatives
            </h1>
            
            <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Un outil essentiel pour les marques mondiales, agences digitales, startups 
              et professionnels créatifs.
            </p>
            
            <Button 
              onClick={() => scrollToSection('services')}
              className="bg-foreground text-background rounded-full px-8 py-4 text-lg font-medium hover:bg-foreground/90 group"
            >
              <Download className="h-5 w-5 mr-3" />
              COMMENCER AUJOURD'HUI
              <ArrowUpRight className="h-5 w-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Nous fournissons des solutions digitales complètes pour les entreprises modernes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-foreground transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-black">DÉVELOPPEMENT WEB</CardTitle>
                <CardDescription className="text-black/80">
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

            <Card className="border-2 border-border hover:border-foreground transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-black">DESIGN & IMAGE DE MARQUE</CardTitle>
                <CardDescription className="text-black/80">
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

            <Card className="border-2 border-border hover:border-foreground transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-2xl text-black">SOLUTIONS IA</CardTitle>
                <CardDescription className="text-black/80">
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
      <section id="blog" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Derniers Articles
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Insights et mises à jour de notre équipe sur la technologie et l'innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-foreground transition-colors group">
              <CardHeader>
                <div className="w-full h-48 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-foreground/50" />
                </div>
                <Badge className="w-fit mb-2 bg-neon-green text-black font-bold border-0">Développement</Badge>
                <CardTitle className="text-xl text-black group-hover:text-black/80">
                  L'Avenir du Développement Web
                </CardTitle>
                <CardDescription className="text-black/80">
                  Explorer les tendances émergentes et les technologies qui façonneront la prochaine génération d'applications web.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/60">12 Déc, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-black">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors group">
              <CardHeader>
                <div className="w-full h-48 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Bot className="h-12 w-12 text-foreground/50" />
                </div>
                <Badge className="w-fit mb-2 bg-neon-cyan text-black font-bold border-0">IA</Badge>
                <CardTitle className="text-xl text-black group-hover:text-black/80">
                  L'IA dans les Entreprises Modernes
                </CardTitle>
                <CardDescription className="text-black/80">
                  Comment l'intelligence artificielle transforme les industries et crée de nouvelles opportunités de croissance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/60">10 Déc, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-black">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-foreground transition-colors group">
              <CardHeader>
                <div className="w-full h-48 bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-foreground/50" />
                </div>
                <Badge className="w-fit mb-2 bg-neon-pink text-black font-bold border-0">Design</Badge>
                <CardTitle className="text-xl text-black group-hover:text-black/80">
                  Systèmes de Design Évolutifs
                </CardTitle>
                <CardDescription className="text-black/80">
                  Construire des systèmes de design cohérents et maintenables pour les applications à grande échelle.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/60">8 Déc, 2024</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-black">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Prêt à démarrer votre prochain projet ? Discutons de la façon dont nous pouvons donner vie à vos idées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Envoyez-nous un message</CardTitle>
                <CardDescription className="text-black/80">
                  Nous vous répondrons dans les 24 heures.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Prénom" className="border-border text-black" />
                  <Input placeholder="Nom" className="border-border text-black" />
                </div>
                <Input placeholder="Adresse email" type="email" className="border-border text-black" />
                <Input placeholder="Entreprise (optionnel)" className="border-border text-black" />
                <Textarea 
                  placeholder="Parlez-nous de votre projet..." 
                  rows={4} 
                  className="border-border text-black"
                />
                <Button className="bg-foreground text-background w-full rounded-full py-3 hover:bg-foreground/90">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
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
    </div>
  );
};

export default Home;