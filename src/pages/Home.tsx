import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ArrowRight, Smartphone, Video, Bot, GraduationCap, Zap, Star, CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');

  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Applications Web & Mobile",
      description: "Développement d'apps innovantes avec IA intégrée pour une expérience utilisateur révolutionnaire.",
      features: ["React Native", "Progressive Web App", "Intelligence Artificielle", "UX/UI Moderne"]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Création Vidéo & Images IA",
      description: "Production de contenus visuels époustouflants grâce aux dernières technologies d'IA générative.",
      features: ["Vidéos automatisées", "Images haute qualité", "Animation 3D", "Contenu personnalisé"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Agents IA Personnalisés",
      description: "Développement d'assistants IA sur mesure pour automatiser vos processus métier.",
      features: ["Chatbots intelligents", "Automation workflow", "Analyse prédictive", "API Integration"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Formation IA",
      description: "Programmes de formation pour maîtriser les outils d'IA et transformer votre entreprise.",
      features: ["Ateliers pratiques", "Certification", "Support continu", "Cas d'usage métier"]
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Clients satisfaits" },
    { icon: <Trophy className="h-6 w-6" />, number: "150+", label: "Projets réalisés" },
    { icon: <Clock className="h-6 w-6" />, number: "24/7", label: "Support client" },
    { icon: <Star className="h-6 w-6" />, number: "4.9/5", label: "Note moyenne" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              L'IA au Service de Votre
              <span className="block text-deep-black">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-deep-black/80 mb-8 max-w-3xl mx-auto font-medium">
              Transformez vos idées en solutions intelligentes avec notre expertise en intelligence artificielle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="ai-button-primary text-lg">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="ai-button-secondary text-lg">
                Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-deep-black text-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Nos Services IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De l'idée à la réalisation, nous vous accompagnons dans votre transformation digitale avec l'IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={index % 2 === 0 ? "ai-card" : "ai-card-magenta"}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl mr-4 ${index % 2 === 0 ? 'text-primary bg-primary/10' : 'text-pure-white bg-pure-white/20'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-sm mb-6 opacity-90">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services">
                  <Button variant="outline" className="mt-6 w-full hover:scale-105 transition-transform">
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
      <section className="py-20 hero-section relative">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-black">
            Prêt à Révolutionner Votre Business ?
          </h2>
          <p className="text-xl text-deep-black/80 mb-8">
            Obtenez un devis personnalisé et découvrez comment l'IA peut transformer votre entreprise
          </p>
          
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-primary">Contact Express</CardTitle>
              <CardDescription>Recevez votre devis en moins de 24h</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                placeholder="Votre email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea placeholder="Décrivez votre projet..." rows={3} />
              <Button className="ai-button-primary w-full">
                <Zap className="mr-2 h-4 w-4" />
                Obtenir mon devis
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;