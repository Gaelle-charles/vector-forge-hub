import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import FloralBackground from '@/components/FloralBackground';
import birdParadiseHero from '@/assets/bird-paradise-hero.jpg';
import tropicalArrangement from '@/assets/tropical-arrangement.jpg';
import { ArrowRight, Smartphone, Video, Bot, GraduationCap, Flower, Star, CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');

  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Apps Qui Époustouflent",
      description: "Des apps si intelligentes qu'elles lisent dans vos pensées ! On code avec l'IA comme copilote et la beauté naturelle comme inspiration 🌺",
      features: ["IA Conversationnelle", "Design Biomimétique", "Prédiction Magique", "UX Envoûtante"]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Créations Visuelles Épiques",
      description: "L'IA génère, vous rêvez ! Des visuels si beaux que même Mère Nature applaudit. Nos algorithmes ont étudié chez Picasso ET Darwin 🎭",
      features: ["IA Générative Pro", "Style Organique", "Rendu Photoréaliste", "Émotions Pures"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Agents IA de Folie",
      description: "Des robots virtuels si cool qu'ils pourraient avoir leur propre compte TikTok ! Ils automatisent tout avec classe et finesse florale 🌿",
      features: ["Conversations Naturelles", "Automation Zen", "Prédictions Surnaturelles", "Intégration Fluide"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Formations IA Addictives",
      description: "Devenez un magicien de l'IA ! Nos formations sont si fun que vous oublierez que vous apprenez. Promis, pas de cours barbants 😉",
      features: ["Workshops Interactifs", "Certification Cool", "Mentorat Personnalisé", "Résultats Garantis"]
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Clients épanouis" },
    { icon: <Trophy className="h-6 w-6" />, number: "150+", label: "Projets fleuris" },
    { icon: <Clock className="h-6 w-6" />, number: "24/7", label: "Support continu" },
    { icon: <Star className="h-6 w-6" />, number: "4.9/5", label: "Excellence reconnue" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloralBackground />
        
        {/* Hero Image */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block opacity-40">
          <img 
            src={birdParadiseHero} 
            alt="Bird of Paradise" 
            className="w-96 h-96 object-cover rounded-3xl floating-flora"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-bloom">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
              <span className="paradise-text">GoGoGo Studio</span>
              <span className="block text-foreground/90 text-4xl md:text-6xl mt-4">
                Créateurs d'expériences digitales              
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto font-medium">
              On transforme vos idées en réalité digitale !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="floral-button-primary text-lg px-8 py-4">
                Nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="floral-button-secondary text-lg px-8 py-4">
                <Flower className="mr-2 h-5 w-5" />
                Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0">
          <img 
            src={tropicalArrangement} 
            alt="Tropical arrangement" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500 petal-glow">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold tropical-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        <FloralBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="tropical-text">Services IA</span>
              <span className="block text-foreground/90 text-3xl md:text-4xl mt-2">Élégants & Naturels</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De l'idée à la réalisation, nous vous accompagnons dans votre transformation digitale 
              avec l'intelligence artificielle et l'esthétique de la nature
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={index % 2 === 0 ? "floral-card" : "floral-card-accent"}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl mr-4 ${index % 2 === 0 ? 'text-primary bg-primary/10' : 'text-accent bg-accent/10'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services">
                  <Button variant="outline" className="mt-8 w-full hover:scale-105 transition-transform duration-300 border-primary/30 hover:border-primary">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-section relative">
        <FloralBackground />
        <div className="absolute right-0 bottom-0 opacity-20 hidden lg:block">
          <img 
            src={birdParadiseHero} 
            alt="Floral decoration" 
            className="w-80 h-80 object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            <span className="paradise-text">Prêt à révolutionner votre business ?</span>
            <span className="block text-foreground/90 text-3xl md:text-4xl mt-2">Envoi nous un message !</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-10 leading-relaxed">
            Raconte-nous ton rêve fou et on le transforme en réalité digitale ! 
          </p>
          
          <Card className="floral-card max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="tropical-text text-2xl">Contact Express</CardTitle>
              <CardDescription className="text-muted-foreground">
                Recevez votre devis personnalisé en moins de 24h
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Input 
                placeholder="Votre email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-primary/20 focus:border-primary"
              />
              <Textarea 
                placeholder="Décrivez votre projet..." 
                rows={3} 
                className="border-primary/20 focus:border-primary"
              />
              <Button className="floral-button-primary w-full text-lg py-3">
                <Flower className="mr-2 h-5 w-5" />
                Faire fleurir mon projet
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
